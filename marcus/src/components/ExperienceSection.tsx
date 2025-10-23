import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import GalleryViewer from './GalleryViewer';

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
  const [flamViewerOpen, setFlamViewerOpen] = useState(false);
  const [pikeViewerOpen, setPikeViewerOpen] = useState(false);

  const flamImages = [
    '/pictures/FLAM/mainPhoto.jpg', // Main photo - leaning over
    '/pictures/FLAM/IMG_0545.png',
    '/pictures/FLAM/IMG_2204.jpg',
    '/pictures/FLAM/IMG_2208.jpg',
    '/pictures/FLAM/IMG_2209.jpg',
    '/pictures/FLAM/IMG_2C14702F-9CE6-447D-AF00-7F0027ECCCA2.jpg',
    '/pictures/FLAM/IMG_7150.jpg',
    '/pictures/FLAM/IMG_7488.jpg',
    '/pictures/FLAM/IMG_7493.jpg',
    '/pictures/FLAM/IMG_7495.jpg',
    '/pictures/FLAM/IMG_9774.jpg',
    '/pictures/FLAM/IMG_F2305037-7206-4AD0-8FFF-BB5E00853029.jpg'
  ];

  const pikeImages = [
    '/pictures/PikeBleacher/FULL_ASSEMBLY.png',
    '/pictures/PikeBleacher/tree/Screenshot 2025-07-22 173417.png',
    '/pictures/PikeBleacher/tree/Screenshot 2025-07-22 173429.png',
    '/pictures/PikeBleacher/tree/Screenshot 2025-07-22 173435.png',
    '/pictures/PikeBleacher/bar/Screenshot 2025-07-22 175611.png',
    '/pictures/PikeBleacher/bar/Screenshot 2025-07-22 175616.png',
    '/pictures/PikeBleacher/bar/Screenshot 2025-07-22 175619.png',
    '/pictures/PikeBleacher/bar/Screenshot 2025-07-22 175846.png'
  ];

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
      title: 'Airframe Engineer',
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
              {/* FLAM with photo gallery */}
              {exp.company === 'FLAM (Flying Leathernecks Aviation Museum)' ? (
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left side - Info (2/3) */}
                  <div className="lg:w-2/3">
                    <div className="mb-4">
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

                  {/* Right side - Photo Grid (1/3) */}
                  <div className="lg:w-1/3">
                    <div className="sticky top-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Photo Gallery</h4>
                      <button
                        onClick={() => setFlamViewerOpen(true)}
                        className="group/gallery w-full"
                      >
                        <div className="bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
                          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                            <img
                              src={flamImages[0]}
                              alt="FLAM Main"
                              className="w-full h-full object-cover group-hover/gallery:scale-110 transition-transform duration-300"
                              style={{ objectPosition: 'center center' }}
                            />
                          </div>
                          <div className="p-4 text-center">
                            <span className="text-cyan-400 font-medium text-sm">
                              +{flamImages.length - 1} more photos - Click to view all
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : exp.company === 'Freelance Engineering Project' ? (
                // Pike Bleacher with photo gallery
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left side - Info (2/3) */}
                  <div className="lg:w-2/3">
                    <div className="mb-4">
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

                  {/* Right side - Photo Grid (1/3) */}
                  <div className="lg:w-1/3">
                    <div className="sticky top-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Photo Gallery</h4>
                      <button
                        onClick={() => setPikeViewerOpen(true)}
                        className="group/gallery w-full"
                      >
                        <div className="bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
                          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                            <img
                              src={pikeImages[0]}
                              alt="Pike Bleacher Main"
                              className="w-full h-full object-cover group-hover/gallery:scale-110 transition-transform duration-300"
                              style={{ objectPosition: '30% center' }}
                            />
                          </div>
                          <div className="p-4 text-center">
                            <span className="text-cyan-400 font-medium text-sm">
                              +{pikeImages.length - 1} more photos - Click to view all
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Default layout for other experiences
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <div className="mb-4">
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
              )}
            </motion.div>
          ))}
        </div>

        {/* FLAM Gallery Viewer */}
        <GalleryViewer
          images={flamImages}
          isOpen={flamViewerOpen}
          onClose={() => setFlamViewerOpen(false)}
        />

        {/* Pike Bleacher Gallery Viewer */}
        <GalleryViewer
          images={pikeImages}
          isOpen={pikeViewerOpen}
          onClose={() => setPikeViewerOpen(false)}
        />
      </div>
    </section>
  );
}
