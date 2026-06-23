import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageSquare, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/site';

export default function FloatingContactButton() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Line link from site config
  const lineUrl = siteConfig.links.line;
  // Phone number from services/config
  const phoneNumber = '052-102-588';

  const tooltipText = i18n.language === 'en' 
    ? 'Get free product samples!' 
    : 'รับผลิตภัณฑ์ทดลองฟรีเฉพาะคุณ';

  return (
    <div className="fixed bottom-6 right-16 md:right-24 z-[999] flex flex-col items-center justify-end select-none">
      {/* Expanding Buttons Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-center gap-3.5 mb-3.5">
            {/* Line Sub-Button (Green chat icon from Lucide) */}
            <motion.a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ type: 'spring', damping: 15, delay: 0.05 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // after:-inset-3 creates a 12px invisible touch target extension around the button to maximize hitbox.
              className="w-12 h-12 rounded-full bg-[#06C755] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative cursor-pointer after:absolute after:-inset-3 after:content-[''] after:cursor-pointer group"
              title="Line"
            >
              <MessageSquare className="w-5 h-5 flex-shrink-0 pointer-events-none" />
              <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-black px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                Line
              </span>
            </motion.a>

            {/* Phone Call Sub-Button */}
            <motion.a
              href={`tel:${phoneNumber}`}
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ type: 'spring', damping: 15, delay: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // after:-inset-3 creates a 12px invisible touch target extension around the button to maximize hitbox.
              className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative cursor-pointer after:absolute after:-inset-3 after:content-[''] after:cursor-pointer group"
              title="Phone Call"
            >
              <Phone className="w-5 h-5 flex-shrink-0 pointer-events-none" />
              <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-black px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                Phone Call
              </span>
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Speech bubble / Tooltip Box */}
      <AnimatePresence>
        {!isOpen && (
          <div className="absolute bottom-16 mb-2 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none z-10 w-[300px]">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: [0, -6, 0],
                scale: 1 
              }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-[11px] font-black px-3.5 py-2 rounded-2xl shadow-xl border border-white/10 whitespace-nowrap flex items-center gap-1.5 select-none pointer-events-none relative"
            >
              {tooltipText}
              {/* Tooltip Arrow pointing down */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-r border-b border-white/10" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main floating action button (FAB) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={!isOpen ? {
          y: [0, -4, 0],
          scale: [1, 1.02, 1]
        } : {}}
        transition={{
          repeat: !isOpen ? Infinity : 0,
          duration: 3,
          ease: "easeInOut"
        }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 via-emerald-400 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(6,199,85,0.3)] focus:outline-none cursor-pointer after:absolute after:-inset-2 after:content-['']"
      >
        {/* Glow pulsing ring behind the button */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping pointer-events-none scale-105" />
        )}

        {/* Action Icon - strictly centered and rotating */}
        <div className="flex items-center justify-center w-full h-full pointer-events-none">
          <motion.div
            key={isOpen ? 'close' : 'chat'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center pointer-events-none"
          >
            {isOpen ? (
              <X className="w-6 h-6 flex-shrink-0" />
            ) : (
              <MessageCircle className="w-6 h-6 flex-shrink-0" />
            )}
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
}
