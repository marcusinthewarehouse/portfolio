import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = [
    { id: 'home', label: 'Marcus Hooshmand' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'skills'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-start items-center space-x-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === section.id
                  ? 'text-amber-400'
                  : 'text-slate-300 hover:text-white'
              } ${section.id === 'home' ? 'text-lg font-bold' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}