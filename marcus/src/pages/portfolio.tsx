import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import Hero3D from '../components/Hero3d';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Scroll-controlled 3D background gears */}
      <Hero3D />
      
      {/* Content with higher z-index */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navigation />
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </div>
  );
}