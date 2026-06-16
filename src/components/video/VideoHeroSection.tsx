import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-16 bg-white overflow-hidden">
      {/* Dynamic background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-fuchsia-50/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-50/50 rounded-full blur-[80px] translate-x-1/4 -translate-y-1/3 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-200/50">
              <Play size={16} className="text-white fill-current translate-x-0.5" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
              {t('videoHero.badge')}
            </span>
          </motion.div>

          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-8"
          >
            <Typography
              variant="h1"
              className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.06] tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600">
                {t('videoHero.titlePrefix')}
              </span>
              <br />
              <span className="text-slate-900">{t('videoHero.titleSuffix')}</span>
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mb-12 max-w-2xl"
          >
            <Typography
              variant="body1"
              className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium"
            >
              {t('videoHero.subtitle')}
            </Typography>
          </motion.div>

          {/* Secondary Title for Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 py-8 border-t border-slate-100"
          >
             <div className="w-1.5 h-8 bg-fuchsia-500 rounded-full" />
             <Typography variant="h3" className="text-2xl font-black text-slate-900 uppercase tracking-tight">
               {t('videoHero.recentUploads')}
             </Typography>
          </motion.div>
        </div>
      </Container>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
    </section>
  );
}
