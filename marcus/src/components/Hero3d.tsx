import { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Configuration constants
const GEAR_SCALE = 1.65;                  // bigger scene

// polar placement with exact pitch distance + backlash
function placeMeshed(
  parent: any, rpParent: number,
  child: any,  rpChild: number,
  angleRad: number, moduleForBacklash: number
) {
  const backlash = 0.03 * moduleForBacklash;      // ~3% of module
  const d = rpParent + rpChild + backlash;        // enforce mesh clearance
  child.position.set(
    parent.position.x + d * Math.cos(angleRad),
    parent.position.y + d * Math.sin(angleRad),
    0
  );
}

export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) {
      return;
    }

    // Create scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = false;
    mountNode.appendChild(renderer.domElement);

    // Add lights for metallic materials
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0x06b6d4, 2.5);
    directionalLight1.position.set(5, 5, 10);
    directionalLight1.castShadow = false;
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0x22d3ee, 1.5);
    directionalLight2.position.set(-5, 3, 8);
    directionalLight2.castShadow = false;
    scene.add(directionalLight2);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 2);
    pointLight1.position.set(0, 0, 5);
    pointLight1.castShadow = false;
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x0891b2, 1.5);
    pointLight2.position.set(-8, -8, 3);
    pointLight2.castShadow = false;
    scene.add(pointLight2);

    // Flat straight-tooth gear with robust arcs and backlash so gears never overlap
    const createFlatGear = (pitchRadius: number, thickness: number, teeth: number) => {
      const m = (2 * pitchRadius) / teeth;           // module from rp and z
      const addendum  = 0.90 * m;                    // shorter tips → no interference
      const dedendum  = 1.10 * m;                    // modest root clearance
      const rp = pitchRadius;
      const ro = rp + addendum;                      // tip radius
      const rf = Math.max(0.001, rp - dedendum);     // root radius

      const phi = (2 * Math.PI) / teeth;             // circular pitch angle
      const toothThickAtPitch = 0.40 * phi;          // thinner tooth
      const backlashLinear = 0.02 * m;               // linear backlash
      const backlashAngle  = (backlashLinear / rp);  // convert to radians on pitch circle
      const halfTooth = 0.5 * toothThickAtPitch - 0.5 * backlashAngle;

      const chamfer = 0.10 * m;

      const shape = new THREE.Shape();
      // start at first tooth root-right point
      const a0 = +halfTooth;
      shape.moveTo(rf * Math.cos(a0), rf * Math.sin(a0));

      for (let t = 0; t < teeth; t++) {
        const base = t * phi;
        const aL = base - halfTooth;     // left flank at pitch
        const aR = base + halfTooth;     // right flank at pitch

        // CCW root arc from current aR to next aL
        let start = aR;
        let end   = aL;
        if (end <= start) end += 2 * Math.PI;
        shape.absarc(0, 0, rf, start, end, false);

        // left flank up
        const tipLch = new THREE.Vector2(
          (ro - chamfer) * Math.cos(aL),
          (ro - chamfer) * Math.sin(aL)
        );
        shape.lineTo(tipLch.x, tipLch.y);

        // small flat tip between chamfers using a short arc on radius (ro - chamfer)
        let tipStart = aL;
        let tipEnd   = aR;
        if (tipEnd <= tipStart) tipEnd += 2 * Math.PI;
        shape.absarc(0, 0, ro - chamfer, tipStart, tipEnd, false);

        // right flank down
        const rootR = new THREE.Vector2(rf * Math.cos(aR), rf * Math.sin(aR));
        shape.lineTo(rootR.x, rootR.y);
      }
      shape.closePath();

      const geom = new THREE.ExtrudeGeometry(shape, {
        depth: thickness,
        bevelEnabled: false,
        curveSegments: 48
      });
      geom.translate(0, 0, -thickness / 2);

      const mat = new THREE.MeshStandardMaterial({
        color: 0x9fb3cc,
        metalness: 0.65,
        roughness: 0.5,
        side: THREE.DoubleSide
      });

      const gear = new THREE.Mesh(geom, mat);

      // Hub + bore (flush; no raised features)
      const hubR = rp * 0.30;
      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(hubR, hubR, thickness, 64),
        new THREE.MeshStandardMaterial({ color: 0x8ea0bb, metalness: 0.6, roughness: 0.55, side: THREE.DoubleSide })
      );
      hub.rotation.x = Math.PI / 2;

      const bore = new THREE.Mesh(
        new THREE.CylinderGeometry(rp * 0.18, rp * 0.18, thickness + 0.3, 48),
        new THREE.MeshStandardMaterial({ color: 0x0f141c, metalness: 0.2, roughness: 0.85, side: THREE.DoubleSide })
      );
      bore.rotation.x = Math.PI / 2;

      const group = new THREE.Group();
      group.add(gear, hub, bore);
      return group;
    };

    // radii scaled up to fill page
    const r1 = 3.5 * GEAR_SCALE;
    const r2 = 2.4 * GEAR_SCALE;
    const r3 = 2.0 * GEAR_SCALE;
    const r4 = 1.6 * GEAR_SCALE;
    const r5 = 1.4 * GEAR_SCALE;

    const g1 = createFlatGear(r1, 0.70 * GEAR_SCALE, 18);
    const g2 = createFlatGear(r2, 0.58 * GEAR_SCALE, 12);
    const g3 = createFlatGear(r3, 0.58 * GEAR_SCALE, 11);
    const g4 = createFlatGear(r4, 0.50 * GEAR_SCALE, 8);
    const g5 = createFlatGear(r5, 0.50 * GEAR_SCALE, 7);

    scene.add(g1, g2, g3, g4, g5);

    // center root gear at origin
    g1.position.set(0, 0, 0);

    // use root module for backlash conversion
    const mRoot = (2 * r1) / 18;

    // mesh children around g1 at fixed angles
    placeMeshed(g1, r1, g2, r2, -0.35 * Math.PI, mRoot); // right-upper
    placeMeshed(g1, r1, g3, r3,  0.90 * Math.PI, mRoot); // left
    placeMeshed(g2, r2, g4, r4,  0.60 * Math.PI, mRoot); // small on g2
    placeMeshed(g3, r3, g5, r5, -0.70 * Math.PI, mRoot); // small on g3

    // Keep counter-rotation and enforce opposite directions
    g1.userData = { speed: 0.003 };
    g2.userData = { speed: -g1.userData.speed * (18 / 12) };
    g3.userData = { speed: -g1.userData.speed * (18 / 11) };
    g4.userData = { speed: -g2.userData.speed * (12 / 8) };
    g5.userData = { speed: -g3.userData.speed * (11 / 7) };

    camera.position.z = 14;

    // Disable all shadows
    scene.traverse((o: any) => { 
      if (o && "castShadow" in o) o.castShadow = false; 
    });

    // Track scroll
    let scrollY = window.scrollY;
    
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    let animationId: number | null = null;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      g1.rotation.z = scrollY * g1.userData.speed;
      g2.rotation.z = scrollY * g2.userData.speed;
      g3.rotation.z = scrollY * g3.userData.speed;
      g4.rotation.z = scrollY * g4.userData.speed;
      g5.rotation.z = scrollY * g5.userData.speed;
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (mountNode && renderer.domElement && mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 overflow-hidden" 
      style={{ zIndex: 1, pointerEvents: 'none' }}
    >
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}
