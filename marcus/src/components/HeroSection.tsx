import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText, Linkedin } from 'lucide-react';
import PDFViewer from './PDFViewer';

export default function HeroSection() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const contactInfo = [
    {
      icon: FileText,
      label: 'Resume',
      value: 'View Resume',
      onClick: () => setIsViewerOpen(true),
      color: 'text-cyan-400'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Marcushooshmand@gmail.com',
      href: 'mailto:Marcushooshmand@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(949) 680-6695',
      href: 'tel:(949)680-6695',
      color: 'text-cyan-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/marcus-hooshmand/',
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gray-900/85">
      
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4">
                Marcus Hooshmand
              </h1>
              <p className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-2">
                University of California, Irvine
              </p>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                Mechanical Engineering
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {info.onClick ? (
                    <button
                      onClick={info.onClick}
                      className="w-full flex items-center gap-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 h-full"
                    >
                      <div className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <p className="text-slate-400 text-xs font-medium">{info.label}</p>
                        <p className="text-white text-sm font-semibold truncate">{info.value}</p>
                      </div>
                    </button>
                  ) : (
                    <a
                      href={info.href}
                      target={info.href?.startsWith('http') ? '_blank' : undefined}
                      rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 h-full"
                    >
                      <div className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <p className="text-slate-400 text-xs font-medium">{info.label}</p>
                        <p className="text-white text-sm font-semibold truncate">{info.value}</p>
                      </div>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - About Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 lg:max-w-md"
          >
            <div className="p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Mechanical Engineering student at UC Irvine with hands-on experience in CAD design, robotics, and engineering projects. Passionate about applying engineering principles to solve real-world challenges through innovative design and teamwork.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>

      {isViewerOpen && (
        <PDFViewer
          pdfUrl="/resume/Marcus_Hooshmand_Resume.pdf"
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </section>
  );
}
