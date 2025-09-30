import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Users } from 'lucide-react';

export default function SkillsSection() {
  const hardSkills = [
    'SOLIDWORKS',
    'AutoCAD', 
    'MATLAB',
    'FEA',
    'Structural design',
    'HVAC design',
    '3D printing',
    'Woodwork',
    'Basic electronics & microcontrollers (e.g., Arduino programming)',
    'Robotics systems integration'
  ];

  const softSkills = [
    'Team leading',
    'Project management',
    'Communication',
    'Creativity',
    'Critical thinking',
    'Adaptability',
    'Problem solving',
    'Time management',
    'Collaboration / teamwork',
    'Leadership'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900">
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
            className="p-8 bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl flex items-center justify-center">
                <Wrench className="w-7 h-7 text-white" />
              </div>
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
                  className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-amber-400/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
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
            className="p-8 bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
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
                  className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-orange-400/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
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