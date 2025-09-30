import { /* React not required with new JSX transform */ } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, MapPin } from 'lucide-react';
import Hero3D from './Hero3d';

export default function HeroSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Marcushooshmand@gmail.com',
      href: 'mailto:Marcushooshmand@gmail.com',
      color: 'text-amber-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(949) 680-6695',
      href: 'tel:(949)680-6695',
      color: 'text-orange-400'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      value: 'Marcushooshmand.com',
      href: 'http://Marcushooshmand.com',
      color: 'text-amber-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Orange County, CA',
      href: undefined,
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Hero3D />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Marcus Hooshmand
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                className="group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={info.href}
                  target={info.href && typeof info.href === 'string' && info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href && typeof info.href === 'string' && info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 h-full"
                >
                  <div className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-slate-400 text-xs font-medium">{info.label}</p>
                    <p className="text-white text-sm font-semibold truncate">{info.value}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
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
    </section>
  );
}