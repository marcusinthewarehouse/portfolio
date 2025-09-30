// React import not required with the new JSX transform
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
        </motion.div>

        {/* Main Education - UCI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="group relative p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl border border-amber-400/30 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-9 h-9 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-3">University of California, Irvine</h3>
                <p className="text-2xl text-amber-400 font-semibold mb-3">B.S. in Mechanical Engineering</p>
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">Sep 2024 - Jun 2026</span>
                  <span className="ml-auto px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    Current
                  </span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Focusing on advanced mechanical systems, robotics, and engineering design with hands-on project experience.
            </p>
          </div>
        </motion.div>

        {/* Secondary Education */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Irvine Valley College</h4>
                <p className="text-amber-400 font-medium mb-2">Associates in Mathematics, Physics, and Natural Sciences</p>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Aug 2021 - May 2024</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">SolidWorks Certification</h4>
                <p className="text-amber-400 font-medium mb-2">Certified SolidWorks CAD Design Associate</p>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">July 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}