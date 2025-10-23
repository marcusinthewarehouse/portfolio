import { motion } from 'framer-motion';

export default function SkillsSection() {
  const hardSkills = [
    'SolidWorks',
    'AutoCAD',
    'MATLAB',
    'FEA',
    'ANSYS',
    'Revit',
    'HVAC',
    'Structural design',
    'Basic circuits',
    '3D Printing',
    'Soldering',
    'Manufacturing',
    'Woodwork',
    'Machining',
    'Welding',
    'JavaScript'
  ];

  const softSkills = [
    'Leadership',
    'Project management',
    'Communication',
    'Engineering creativity',
    'Critical thinking',
    'Adaptability',
    'Problem solving',
    'Time management'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/85">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            <div className="grid gap-3">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Professional Skills</h3>
            </div>
            <div className="grid gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-200">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
