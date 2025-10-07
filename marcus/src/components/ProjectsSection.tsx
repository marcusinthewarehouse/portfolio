
import { motion } from 'framer-motion';
import { Plane, Zap, Bot, Calendar, Award } from 'lucide-react';

type ProjectStatus = 'Ongoing' | 'Leading' | 'Completed';



export default function ProjectsSection() {
  const projects = [
    {
      title: 'UAV Club @ UCI',
      role: 'Board - Project Manager',
      period: 'Mar 2025 - Present',
      icon: Plane,
      status: 'Leading',
      description: 'Leading drone design education and hands-on workshops',
      achievements: [
        'Developed a structured curriculum and project timeline for club members, covering drone design, assembly, and flight fundamentals',
        'Led weekly CAD workshops using SolidWorks, focusing on drone and fixed-wing aircraft design, including custom part modeling',
        'Mentored member teams on building and troubleshooting Tiny Whoops, 5-inch racing drones, and foam or 3D printed fixed-wing planes of varying sizes'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Anteater Combat Robotics @ UCI',
      role: 'Team Lead',
      period: 'Sep 2024 - Feb 2025',
      icon: Zap,
      status: 'Completed',
      description: 'Custom combat robot design and fabrication under 1 lb weight limit',
      achievements: [
        'Led the mechanical design of a custom robot, developing the chassis, gear assemblies, and weapon system from concept to fabrication without external references',
        'Employed SolidWorks for 3D modeling, optimizing movement, offense, and defense within the 1 lb weight limit',
        'Manufactured with 3D printing to achieve precise customization while maintaining a total weight under 1 lb',
        'Integrated and soldered key electrical components such as the battery, motor, ESC (electronic speed controller), switch, servo, and receiver'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Autonomous Robot Project @UCI',
      role: 'Software Lead',
      period: 'Jan 2025 - Mar 2025',
      icon: Bot,
      status: 'Completed',
      description: 'C++ programmed autonomous navigation with sensor fusion',
      achievements: [
        'Developed and programmed an autonomous robot in C++ (Arduino) to navigate a course using a pneumatic propulsion system and servo-based steering',
        'Developed a sensor fusion system combining magnetometer and reed switch data for dead reckoning, enabling real-time heading correction and accurate trajectory adjustments'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const statusColors: Record<ProjectStatus, string> = {
    'Ongoing': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Leading': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Completed': 'bg-slate-500/20 text-slate-400 border-slate-500/30'
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900">
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
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
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
                        <Award className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
