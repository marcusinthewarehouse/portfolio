import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import GalleryViewer from './GalleryViewer';

type ProjectStatus = 'Ongoing' | 'Leading' | 'Completed';



export default function ProjectsSection() {
  const [aceViewerOpen, setAceViewerOpen] = useState(false);
  const [autonomousViewerOpen, setAutonomousViewerOpen] = useState(false);

  const aceImages = [
    '/pictures/ACE/MainPhoto/CADofRobot.png',
    '/pictures/ACE/RestOfPhotos/outside_prototype_1.jpg',
    '/pictures/ACE/RestOfPhotos/insideElectronics_2.jpg',
    '/pictures/ACE/RestOfPhotos/finalRobot_3.jpg',
    '/pictures/ACE/RestOfPhotos/TeamPhoto_4.jpg',
    '/pictures/ACE/RestOfPhotos/entireAcePhoto_5.jpg'
  ];

  const autonomousImages = [
    '/pictures/AutonomousRobot/MainPhoto/main photo.png',
    '/pictures/AutonomousRobot/ExtraPhotos/RealRobot_1.png',
    '/pictures/AutonomousRobot/ExtraPhotos/CADUnderside_2.png',
    '/pictures/AutonomousRobot/ExtraPhotos/RealUnderside_3.png',
    '/pictures/AutonomousRobot/ExtraPhotos/RealRobotExtra_4.png'
  ];

  const projects = [
    {
      title: 'UAV Club @ UCI',
      role: 'Board - Project Manager',
      period: 'Mar 2025 - Present',
      status: 'Leading',
      description: 'Leading drone design education and hands-on workshops',
      achievements: [
        'Developed a structured curriculum and project timeline for club members, covering drone design, assembly, and flight fundamentals',
        'Led weekly CAD workshops using SolidWorks, focusing on drone and fixed-wing aircraft design, including custom part modeling',
        'Mentored member teams on building and troubleshooting Tiny Whoops, 5-inch racing drones, and foam or 3D printed fixed-wing planes of varying sizes'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Anteater Combat Robotics @ UCI',
      role: 'Team Lead',
      period: 'Sep 2024 - Feb 2025',
      status: 'Completed',
      description: 'Custom combat robot design and fabrication under 1 lb weight limit',
      achievements: [
        'Led the mechanical design of a custom robot, developing the chassis, gear assemblies, and weapon system from concept to fabrication without external references',
        'Employed SolidWorks for 3D modeling, optimizing movement, offense, and defense within the 1 lb weight limit',
        'Manufactured with 3D printing to achieve precise customization while maintaining a total weight under 1 lb',
        'Integrated and soldered key electrical components such as the battery, motor, ESC (electronic speed controller), switch, servo, and receiver'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Autonomous Robot Project',
      role: 'Software Lead',
      period: 'Jan 2025 - Mar 2025',
      status: 'Completed',
      description: 'C++ programmed autonomous navigation with sensor fusion',
      achievements: [
        'Developed and programmed an autonomous robot in C++ (Arduino) to navigate a course using a pneumatic propulsion system and servo-based steering',
        'Developed a sensor fusion system combining magnetometer and reed switch data for dead reckoning, enabling real-time heading correction and accurate trajectory adjustments'
      ],
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const statusColors: Record<ProjectStatus, string> = {
    'Ongoing': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Leading': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Completed': 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/85">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Engineering Projects
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/20"
            >
              {/* Special layout for ACE project */}
              {project.title === 'Anteater Combat Robotics @ UCI' ? (
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left side - Info (2/3) */}
                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-lg text-cyan-400 font-semibold mb-3">{project.role}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="flex items-center gap-1 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.period}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status as ProjectStatus]}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    
                    {/* Achievements */}
                    <div className="grid gap-4">
                      {project.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
                        >
                          <Award className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Photo Grid (1/3) */}
                  <div className="lg:w-1/3">
                    <div className="sticky top-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Photo Gallery</h4>
                      <button
                        onClick={() => setAceViewerOpen(true)}
                        className="group/gallery w-full"
                      >
                        <div className="bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
                          {/* Main photo - taller aspect ratio */}
                          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                            <img
                              src={aceImages[0]}
                              alt="ACE Robot Main"
                              className="w-full h-full object-cover group-hover/gallery:scale-110 transition-transform duration-300"
                            />
                          </div>
                          {/* Photo count */}
                          <div className="p-4 text-center">
                            <span className="text-cyan-400 font-medium text-sm">
                              +{aceImages.length - 1} more photos - Click to view all
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : project.title === 'Autonomous Robot Project' ? (
                // Autonomous Robot layout with photos
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left side - Info (2/3) */}
                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-lg text-cyan-400 font-semibold mb-3">{project.role}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="flex items-center gap-1 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.period}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status as ProjectStatus]}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    
                    {/* Achievements */}
                    <div className="grid gap-4">
                      {project.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
                        >
                          <Award className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Photo Grid (1/3) */}
                  <div className="lg:w-1/3">
                    <div className="sticky top-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Photo Gallery</h4>
                      <button
                        onClick={() => setAutonomousViewerOpen(true)}
                        className="group/gallery w-full"
                      >
                        <div className="bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
                          {/* Main photo - taller aspect ratio */}
                          <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
                            <img
                              src={autonomousImages[0]}
                              alt="Autonomous Robot Main"
                              className="w-full h-full object-cover group-hover/gallery:scale-110 transition-transform duration-300"
                            />
                          </div>
                          {/* Photo count */}
                          <div className="p-4 text-center">
                            <span className="text-cyan-400 font-medium text-sm">
                              +{autonomousImages.length - 1} more photos - Click to view all
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Default layout for other projects
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-lg text-cyan-400 font-semibold mb-3">{project.role}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="flex items-center gap-1 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.period}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status as ProjectStatus]}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                
                  <div className="lg:w-2/3">
                    <div className="grid gap-4">
                      {project.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30"
                        >
                          <Award className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ACE Gallery Viewer */}
        <GalleryViewer
          images={aceImages}
          isOpen={aceViewerOpen}
          onClose={() => setAceViewerOpen(false)}
        />

        {/* Autonomous Robot Gallery Viewer */}
        <GalleryViewer
          images={autonomousImages}
          isOpen={autonomousViewerOpen}
          onClose={() => setAutonomousViewerOpen(false)}
        />
      </div>
    </section>
  );
}
