// React import not required with the new JSX transform
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import ImageViewer from './ImageViewer';

export default function EducationSection() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  return (
    <section id="education" className="py-20 bg-gray-800/85">
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
          <div className="group relative p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-3">University of California, Irvine</h3>
              <p className="text-2xl text-cyan-400 font-semibold mb-3">B.S. in Mechanical Engineering</p>
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">Sep 2024 - Dec 2026</span>
                <span className="ml-auto px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                  Current
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Relevant Coursework:</h4>
              <p className="text-slate-300 leading-relaxed">
                Circuits, Thermodynamics, Fluid Dynamics A&B, Materials Science, Theory of Machines, Mechanics of Structures, Applied Thermodynamics, Heat and Mass Transfer, Fluid Thermal Lab, Dynamics of Aerospace Vehicles
              </p>
            </div>
          </div>
        </motion.div>

        {/* Secondary Education */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            <div className="mb-4">
              <h4 className="text-lg font-bold text-white mb-1">Irvine Valley College</h4>
              <p className="text-cyan-400 font-medium mb-2">Associates in Mathematics, Physics, and Natural Sciences</p>
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Aug 2021 - May 2024</span>
              </div>
              <p className="text-slate-300 text-sm">
                <span className="text-cyan-400 font-medium">Coursework:</span> Statics, Dynamics, MATLAB, SolidWorks CAD
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-1">Dassault Systèmes</h4>
                <p className="text-cyan-400 font-medium mb-2">Certified SolidWorks CAD Design Associate</p>
                <div className="flex items-center gap-2 text-slate-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">July 2024</span>
                </div>
                {/* Certificate Thumbnail */}
                <button
                  onClick={() => setIsCertificateOpen(true)}
                  className="group/cert relative overflow-hidden rounded-lg border-2 border-slate-600 hover:border-cyan-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-400/30"
                >
                  <img
                    src="/pictures/SolidworksCertificate/solidworks_certificate.png"
                    alt="SolidWorks Certificate"
                    className="w-full h-32 object-cover group-hover/cert:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
                      Click to view
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certificate Viewer */}
        <ImageViewer
          images={['/pictures/SolidworksCertificate/solidworks_certificate.png']}
          isOpen={isCertificateOpen}
          onClose={() => setIsCertificateOpen(false)}
        />
      </div>
    </section>
  );
}
