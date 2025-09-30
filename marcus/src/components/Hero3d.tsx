import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  mountNode.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xf59e0b, 1.2);
    directionalLight.position.set(0, 5, 10);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff7043, 0.8);
    pointLight.position.set(-5, 0, 5);
    scene.add(pointLight);

  const createGear = (radius: number, thickness: number, teeth: number) => {
      const group = new THREE.Group();
      
      const cylinderGeometry = new THREE.CylinderGeometry(radius, radius, thickness, 32);
      const cylinderMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x2d3748,
        shininess: 80,
        specular: 0xf59e0b
      });
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.rotation.x = Math.PI / 2;
      group.add(cylinder);
      
      const toothWidth = (Math.PI * 2 * radius) / teeth / 2.5;
      const toothHeight = radius * 0.25;
      
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        const toothGeometry = new THREE.BoxGeometry(toothWidth, thickness, toothHeight);
        const tooth = new THREE.Mesh(toothGeometry, cylinderMaterial);
        
        const toothRadius = radius + toothHeight / 2;
        tooth.position.x = Math.cos(angle) * toothRadius;
        tooth.position.y = Math.sin(angle) * toothRadius;
        tooth.rotation.z = angle;
        
        group.add(tooth);
      }
      
      const holeGeometry = new THREE.CylinderGeometry(radius * 0.3, radius * 0.3, thickness + 0.1, 32);
      const holeMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x1a1a1a,
        shininess: 50
      });
      const hole = new THREE.Mesh(holeGeometry, holeMaterial);
      hole.rotation.x = Math.PI / 2;
      group.add(hole);
      
      return group;
    };

    const gears = new THREE.Group();

    const gear1 = createGear(2.2, 0.5, 18);
    gear1.position.set(0, 0, 0);
    gear1.userData = { speed: 0.015, radius: 2.2, teeth: 18 };
    gears.add(gear1);

    const gear2 = createGear(1.5, 0.4, 12);
    gear2.position.set(3.7, 0, 0);
    gear2.userData = { speed: -(18/12) * 0.015, radius: 1.5, teeth: 12 };
    gears.add(gear2);

    const gear3 = createGear(1.3, 0.4, 11);
    gear3.position.set(-3.5, 0, 0);
    gear3.userData = { speed: -(18/11) * 0.015, radius: 1.3, teeth: 11 };
    gears.add(gear3);

    const gear4 = createGear(1, 0.35, 8);
    gear4.position.set(3.7, 2.5, 0);
    gear4.userData = { speed: (12/8) * (18/12) * 0.015, radius: 1, teeth: 8 };
    gears.add(gear4);

    const gear5 = createGear(0.9, 0.35, 7);
    gear5.position.set(-3.5, -2.2, 0);
    gear5.userData = { speed: -(11/7) * (18/11) * 0.015, radius: 0.9, teeth: 7 };
    gears.add(gear5);

    scene.add(gears);

    camera.position.z = 10;
    camera.position.y = 0;
    camera.lookAt(0, 0, 0);

    let animationId: number | null = null;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      gear1.rotation.z += gear1.userData.speed;
      gear2.rotation.z += gear2.userData.speed;
      gear3.rotation.z += gear3.userData.speed;
      gear4.rotation.z += gear4.userData.speed;
      gear5.rotation.z += gear5.userData.speed;
      
      gears.position.y = Math.sin(Date.now() * 0.0005) * 0.2;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      gears.rotation.y = mouseX * 0.15;
      gears.rotation.x = mouseY * 0.1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountNode && renderer.domElement && mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/20 pointer-events-none" />
    </div>
  );
}