import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50/50 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
            <HelpCircle size={14} className="text-cyan-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-cyan-600">
              {t('qaHero.badge')}
            </span>
          </div>

          {/* Large Editorial Title */}
          <Typography
            variant="h1"
            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10"
          >
            Q<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">&amp;</span>A
          </Typography>

          {/* Minimal Subtitle */}
          <div className="max-w-2xl border-l-4 border-slate-100 pl-8 ml-2">
            <Typography variant="body1" className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed italic">
              {t('qaHero.subtitle')}
            </Typography>
          </div>
        </motion.div>
      </Container>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
    </section>
  );
}
