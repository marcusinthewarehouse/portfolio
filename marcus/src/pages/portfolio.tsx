import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}