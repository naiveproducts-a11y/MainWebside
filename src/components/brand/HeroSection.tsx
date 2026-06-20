import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Sparkles, FlaskConical, Package } from 'lucide-react';

export default function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    { title: t('brandingPage.statTimeTitle'), desc: t('brandingPage.statTimeDesc') },
    { title: t('brandingPage.statMoqTitle'), desc: t('brandingPage.statMoqDesc') },
    { title: t('brandingPage.statFreeTitle'), desc: t('brandingPage.statFreeDesc') },
  ];

  const pills = [
    { icon: FlaskConical, label: t('brandingPage.pills.nano') },
    { icon: Package, label: t('brandingPage.pills.moq') },
    { icon: Sparkles, label: 'FDA + EFSA Certified' },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-white overflow-hidden">

      {/* ─── Large editorial background number ─── */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden select-none">
        <span className="text-[22rem] font-black text-slate-50 leading-none tracking-tighter pr-8 translate-y-8">
          OEM
        </span>
      </div>

      {/* ─── Subtle gradient orbs ─── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-cyan-50/60 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-50/40 rounded-full blur-[120px] pointer-events-none" />

      {/* ─── Main content ─── */}
      <Container maxWidth="lg" className="relative z-10 flex flex-col justify-center flex-1 pt-32 pb-0">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em]">
              {t('brandingPage.heroBadge')}
            </span>
          </div>
        </motion.div>

        {/* Title — large editorial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 max-w-4xl"
        >
          <Typography
            variant="h1"
            className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.08] tracking-tight"
          >
            {t('brandingPage.heroTitle').split(' ').slice(0, 3).join(' ')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500">
              {t('brandingPage.heroTitle').split(' ').slice(3).join(' ')}
            </span>
          </Typography>
        </motion.div>

        {/* Subtitle + Buttons — side by side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col lg:flex-row lg:items-end gap-10 mb-20"
        >
          <Typography
            variant="body1"
            className="text-lg text-slate-500 leading-relaxed max-w-lg font-medium"
          >
            {t('brandingPage.heroSubtitle')}
          </Typography>

          <div className="flex flex-col sm:flex-row gap-3 lg:ml-auto lg:shrink-0">
            <Button
              variant="contained"
              size="large"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold normal-case text-base shadow-xl shadow-slate-200/80 transition-all hover:scale-105 active:scale-95"
              endIcon={<ArrowRight size={18} />}
              onClick={() => {
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('brandingPage.heroBtnStart')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              className="border border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-2xl font-bold normal-case text-base transition-all hover:border-slate-300"
              onClick={() => {
                document.getElementById('brand-steps')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('brandingPage.heroBtnSteps')}
            </Button>
          </div>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 mb-0"
        >
          {pills.map((pill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl"
            >
              <pill.icon size={15} className="text-cyan-600 shrink-0" />
              <span className="text-[13px] font-bold text-slate-600">{pill.label}</span>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* ─── Stats bar — pinned to bottom ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 border-t border-slate-100 mt-16"
      >
        <Container maxWidth="lg">
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                className="group flex flex-col items-center text-center py-8 px-4 hover:bg-slate-50/80 transition-colors duration-300 cursor-default"
              >
                <Typography
                  variant="h3"
                  className="text-2xl md:text-3xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-cyan-600 transition-colors duration-300"
                >
                  {stat.title}
                </Typography>
                <Typography variant="caption" className="text-slate-400 font-bold uppercase tracking-[0.15em] text-[10px]">
                  {stat.desc}
                </Typography>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.div>

    </section>
  );
}
