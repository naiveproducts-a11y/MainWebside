import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Phone, Check } from 'lucide-react';
import { journeyPoints } from '../config/faq';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact-section">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
        >
      {/* Decorative faint pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-100/30 to-transparent pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-6">
          <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.2em] mb-6 block">
            {t('journey.badge')}
          </Typography>
          <Typography 
            variant="h2" 
            className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-8 leading-[1.15] tracking-tight"
          >
            {t('journey.title')}
          </Typography>
          <Typography variant="body1" className="text-slate-500 text-lg mb-10 leading-relaxed max-w-2xl">
            {t('journey.subtitle')}
          </Typography>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 lg:gap-6">
            <motion.a
              href="https://lin.ee/tao11ce"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#00B900] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-lg shadow-[#00B900]/20 transition-all font-bold"
            >
              <MessageCircle size={20} fill="currentColor" />
              {t('journey.line')}
            </motion.a>
            <motion.a
              href="tel:0948881184"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-sm hover:border-cyan-300 transition-all font-bold"
            >
              <Phone size={20} className="text-cyan-600" />
              {t('journey.phone')}
            </motion.a>
          </div>
        </div>

        {/* Right Column: Key Points Cards */}
        <div className="lg:col-span-6 space-y-4">
          {journeyPoints.map((point) => (
            <motion.div
              key={point.id}
              whileHover={{ x: 10 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 group transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                <Check size={24} strokeWidth={3} />
              </div>
              <div>
                <Typography variant="h6" className="font-black text-slate-800 text-lg leading-tight mb-1 group-hover:text-cyan-600 transition-colors">
                  {t(point.titleKey)}
                </Typography>
                <Typography variant="body2" className="text-slate-500 font-medium tracking-wide">
                  {t(point.descKey)}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Branding Bar */}
      <div className="mt-24 pt-12 border-t border-slate-200/60 text-center">
        <Typography variant="overline" className="text-slate-400 font-bold tracking-[0.4em] text-[10px] md:text-xs">
          NAIVE INNOVA <span className="mx-4 opacity-50">•</span> DEEP-TECH PET CARE PLATFORM <span className="mx-4 opacity-50">•</span> LINE @NAIVEPETCARE
        </Typography>
      </div>
        </motion.div>
      </Container>
    </section>
  );
}
