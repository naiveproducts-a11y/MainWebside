import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  const tags = [
    t('newsHero.tag1'),
    t('newsHero.tag2'),
    t('newsHero.tag3'),
    t('newsHero.tag4'),
    t('newsHero.tag5')
  ];

  return (
    <section className="relative pt-32 pb-16 bg-white overflow-hidden">

      {/* Gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-50/60 to-transparent rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
              Naive Innova · Knowledge Hub
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500">
                {t('newsHero.title')}
              </span>
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mb-12 max-w-xl"
          >
            <Typography
              variant="body1"
              className="text-lg text-slate-400 leading-relaxed font-medium"
            >
              {t('newsHero.subtitle')}
            </Typography>
          </motion.div>

          {/* Topic pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap gap-2"
          >
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-[12px] font-bold text-slate-500 hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-700 transition-all duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
