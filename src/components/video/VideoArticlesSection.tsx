import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, ArrowRight, Youtube, Smartphone } from 'lucide-react';
import { youtubeShorts } from '../../config/videos';
import { useTranslation } from 'react-i18next';

interface ShortItem {
  id: string;
  url: string;
  thumbnail: string;
  videoSrc: string;
  titleKey: string;
  views: string;
  date: string;
}

// ── YouTube Videos ──


// ── Shorts ──
const shorts: ShortItem[] = youtubeShorts.map(s => ({
  ...s,
  views: '24K+', // Placeholder views since we don't have them in config
  date: '2024'
}));

const VISIBLE_DEFAULT = 4;



function ShortCard({ short, idx }: { short: ShortItem; idx: number }) {
  return (
    <motion.a
      key={short.id}
      href={short.url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative aspect-[9/16] rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-slate-900"
    >
      {/* Fallback/Base Thumbnail Image */}
      <img
        src={short.thumbnail}
        alt={`Shorts ${short.id}`}
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-0"
      />

      {/* Background Video with Poster */}
      {short.videoSrc && (
        <video
          src={short.videoSrc}
          poster={short.thumbnail}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-0 group-hover:opacity-100"
        />
      )}

      {/* Play Overlay */}
      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-cyan-600 transition-all duration-500 scale-90 group-hover:scale-100">
          <Play size={24} fill="currentColor" />
        </div>
      </div>

      {/* Vertical Text Accent */}
      <div className="absolute bottom-6 left-6">
        <Typography variant="caption" className="text-white/70 font-bold uppercase tracking-[0.3em] text-[10px] hidden group-hover:block transition-all animate-pulse">
          WATCH ON SHORTS
        </Typography>
      </div>
    </motion.a>
  );
}

export default function VideoArticlesSection() {
  const { t } = useTranslation();
  const [showAllShorts, setShowAllShorts] = useState(false);

  const visibleShorts = showAllShorts ? shorts : shorts.slice(0, VISIBLE_DEFAULT);

  return (
    <div className="bg-slate-50">

      {/* ── YouTube Section ── */}
      <section className="py-20">
        <Container maxWidth="lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-200">
                <Youtube size={20} className="text-white" />
              </div>
              <div>
                <Typography variant="h5" className="font-black text-slate-900 text-xl tracking-tight leading-none mb-0.5">
                  {t('videoSection.recommendedTitle')}
                </Typography>
                <p className="text-xs text-slate-400 font-medium">{t('videoSection.recommendedSub')}</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@NaiveInnova-OEM%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87Nano/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors duration-200"
            >
              {t('videoSection.viewAllYoutube')} <ArrowRight size={13} />
            </a>
          </div>

          {/* Featured Full Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-video rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-black mb-12 border-8 border-white"
          >
            <iframe
              src="https://www.youtube.com/embed/ULwSPd5B27I?rel=0&modestbranding=1"
              title="Naive Innova"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </Container>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-auto max-w-5xl" />

      {/* ── Shorts Section ── */}
      <section className="py-20">
        <Container maxWidth="lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center shadow-lg shadow-fuchsia-200">
                <Smartphone size={18} className="text-white" />
              </div>
              <div>
                <Typography variant="h5" className="font-black text-slate-900 text-xl tracking-tight leading-none mb-0.5">
                  {t('videoSection.shortsTitle')}
                </Typography>
                <p className="text-xs text-slate-400 font-medium">{t('videoSection.shortsCount', { count: shorts.length })}</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-fuchsia-600 transition-colors duration-200"
            >
              {t('videoSection.watchShorts')} <ArrowRight size={13} />
            </a>
          </div>

          {/* 2×3 Grid — portrait cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {visibleShorts.map((s, idx) => (
              <ShortCard key={s.id} short={s} idx={idx} />
            ))}
          </div>

          {/* Load more */}
          {shorts.length > VISIBLE_DEFAULT && (
            <div className="flex justify-center">
              <Button
                variant="outlined"
                onClick={() => setShowAllShorts(!showAllShorts)}
                className="border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold normal-case text-sm px-8 py-3 rounded-xl"
                endIcon={<ArrowRight size={15} />}
              >
                {showAllShorts ? t('videoSection.showLess') : t('videoSection.seeMore', { count: shorts.length - VISIBLE_DEFAULT })}
              </Button>
            </div>
          )}
        </Container>
      </section>

    </div>
  );
}
