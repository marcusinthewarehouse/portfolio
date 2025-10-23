import { /* React not required with new JSX transform */ } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

type ExperienceType = 'Internship' | 'Contract' | 'Part-time';

type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  type: ExperienceType;
  achievements: string[];
};

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: 'Mechanical Engineering Intern',
      company: 'Engineous Group',
      period: 'Jun 2025 - Sep 2025',
      location: 'Remote',
      type: 'Internship',
      achievements: [
        'Calculated heating and cooling loads for a restaurant using EnergyPro, factoring in square footage of floors, windows, and doors',
        'Designed HVAC system by selecting units and sizing ducts to ensure proper CFM, airflow, efficiency, coverage, and performance',
        'Used AutoCAD to create the duct design and became familiar with HVAC building codes and standards throughout the project'
      ]
    },
    {
      title: 'Empanage Engineer',
      company: 'FLAM (Flying Leathernecks Aviation Museum)',
      period: 'Apr 2025 - Present',
      location: 'Remote',
      type: 'Part-time',
      achievements: [
        'Collaborating with engineers and museum staff to restore a WWI-era aircraft, including structural and mechanical components such as wings, fuselage, tail assembly, and engine system',
        'Assisting in reverse-engineering and 3D printing replica parts to match original specifications and materials as closely as possible',
        'Supporting the design and analysis of a ceiling suspension system to safely display the aircraft overhead, accounting for load distribution and safety requirements',
        'Gaining hands-on experience in historical materials research, structural integrity assessment, and aircraft restoration techniques'
      ]
    },
    {
      title: 'Lead Structural Designer',
      company: 'Freelance Engineering Project',
      period: 'Jun 2025 - Aug 2025',
      location: 'Freelance',
      type: 'Contract',
      achievements: [
        'Designed six custom freestanding bleacher-style structures, each rated for 5,000 lbs live load with a minimum factor of safety of 4.5',
        'Created a modular, relocatable treehouse-style viewing platform built around palm trees, and engineered a 6-foot-tall deck structure with an integrated serving area for dual-level use',
        'Performed FEA simulations in SolidWorks (stress, strain, displacement) to validate structural performance and safety margins',
        'Collected detailed on-site measurements and collaborated closely with the contractor and architect to ensure technical accuracy and meet client requirements'
      ]
    },
    {
      title: 'Tutor',
      company: 'Berktree Learning Center',
      period: 'Jan 2024 - May 2025',
      location: 'Irvine, CA',
      type: 'Part-time',
      achievements: [
        'Specializing in math tutoring, covering subjects from Algebra to Calculus and Linear Algebra',
        'Conducted weekly sessions to help students achieve their academic goals by addressing their most challenging subjects',
        'Mentored students academically and personally, building strong relationships for better engagement'
      ]
    }
  ];

  const typeColors: Record<ExperienceType, string> = {
    Internship: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Contract: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    'Part-time': 'bg-sky-500/20 text-sky-400 border-sky-500/30'
  };

  return (
    <section id="experience" className="py-20 bg-gray-900/85">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-slate-800/20"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/40">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-lg text-cyan-400 font-semibold mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${typeColors[exp.type]}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
