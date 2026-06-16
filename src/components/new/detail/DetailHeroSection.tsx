import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Clock, CalendarDays, BookOpen, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DetailHeroProps {
  category: string;
  categoryColor: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: number;
  wordCount: number;
  tags: string[];
}

export default function DetailHeroSection({
  category,
  categoryColor,
  title,
  subtitle,
  date,
  readingTime,
  wordCount,
  tags,
}: DetailHeroProps) {
  const { t, i18n } = useTranslation();

  const formattedDate = new Date(date).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="relative pt-32 pb-12 bg-white overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-50/70 via-fuchsia-50/30 to-transparent rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50/40 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        <div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
              Naive Innova · Knowledge Hub
            </span>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6"
          >
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-black uppercase tracking-widest ${categoryColor}`}>
              <Tag size={10} />
              {category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5"
          >
            <Typography
              variant="h1"
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              {title}
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mb-8"
          >
            <Typography
              variant="body1"
              className="text-xl text-slate-400 leading-relaxed font-medium"
            >
              {subtitle}
            </Typography>
          </motion.div>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-wrap items-center gap-5 mb-8 pb-8 border-b border-slate-100"
          >
            <div className="flex items-center gap-1.5 text-slate-400">
              <CalendarDays size={14} className="text-cyan-500" />
              <span className="text-sm font-semibold">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock size={14} className="text-fuchsia-500" />
              <span className="text-sm font-semibold">{t('newsDetail.readingTime', { count: readingTime })}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <BookOpen size={14} className="text-blue-500" />
              <span className="text-sm font-semibold">{t('newsDetail.wordCount', { count: wordCount.toLocaleString() })}</span>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-wrap gap-2"
          >
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-[12px] font-bold text-slate-500 hover:bg-cyan-50 hover:border-cyan-200 hover:text-cyan-700 transition-all duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </motion.div>

        </div>
      </Container>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
    </section>
  );
}
