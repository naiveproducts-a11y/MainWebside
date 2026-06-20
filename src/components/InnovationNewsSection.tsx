import { Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Calendar, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { innovationVideos } from '../config/news';
import { newsArticles } from '../config/newsArticles';
import news1 from '../assets/behind-1.png';

const MotionLink = motion(Link);

export default function InnovationNewsSection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="innovation-news">
      {/* Decorative background elements (AboutSection style) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl" />

      <Container maxWidth="lg" className="relative z-10">

        {/* === PART 1: INSIGHTS & INNOVATION (Videos) === */}
        <div className="mb-32">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.2em] mb-4 block">
                {t('news.innovationBadge')}
              </Typography>
              <Typography variant="h2" className="text-3xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
                {t('news.innovationTitle')}
              </Typography>
              <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto mt-8 rounded-full" />
            </motion.div>
          </div>

          {/* Videos Grid (4 cols) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {innovationVideos.map((video, index) => (
              <motion.a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[9/16] rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700 bg-slate-900"
              >
                {/* Fallback/Base Thumbnail Image */}
                <img
                  src={video.thumbnail}
                  alt={`Shorts ${video.id}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-0"
                />

                {/* Background Video with Poster */}
                {video.videoSrc && (
                  <video
                    src={video.videoSrc}
                    poster={video.thumbnail}
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
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button
                href="https://www.youtube.com/@NaiveInnova-OEM%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87Nano/videos" // Replace with actual channel link
                target="_blank"
                variant="outlined"
                size="large"
                className="rounded-full px-10 py-4 border-slate-200 text-slate-700 font-bold hover:bg-white hover:border-cyan-400 hover:text-cyan-600 shadow-sm hover:shadow-md transition-all group"
                endIcon={<ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              >
                {t('news.viewYouTube')}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* === PART 2: NEWS & LATEST ACTIVITIES (Cards) === */}
        <div>
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="overline" className="text-fuchsia-600 font-bold tracking-[0.2em] mb-4 block">
                {t('news.newsBadge')}
              </Typography>
              <Typography variant="h2" className="text-3xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
                {t('news.newsTitle')}
              </Typography>
              <div className="w-24 h-1.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mx-auto mt-8 rounded-full" />
            </motion.div>
          </div>

          {/* News Cards Grid (4 cols Minimalist) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {newsArticles.slice(0, 4).map((article, index) => {
              const textDynamicColorClass = article.categoryColor?.split(' ')[0] || 'text-slate-600';
              return (
                <MotionLink
                  key={article.id}
                  to={`/news/activities-new/${article.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group flex flex-col h-full bg-white rounded-[24px] overflow-hidden border border-slate-100/60 hover:border-slate-200 hover:shadow-xl transition-all duration-500 cursor-pointer no-underline"
                >
                  {/* Minimalist Image Header */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                    <img
                      src={article.images[0] || news1}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />

                    {/* Subtle Category Tag */}
                    <div className="absolute top-3 left-3">
                      <Typography variant="caption" className={`px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-full font-black tracking-widest text-[8px] shadow-sm ${textDynamicColorClass}`}>
                        {article.category}
                      </Typography>
                    </div>
                  </div>

                  {/* Minimalist Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <Typography
                      variant="h6"
                      className="text-[17px] font-bold text-slate-800 mb-3 tracking-tight leading-snug group-hover:text-cyan-600 transition-colors duration-300 min-h-[3.5rem] line-clamp-2"
                    >
                      {article.title}
                    </Typography>

                    <Typography variant="body2" className="text-slate-500 text-[14px] leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem]">
                      {article.lead}
                    </Typography>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-cyan-600 transition-colors">
                        <Typography variant="button" className="font-bold text-[10px] tracking-widest uppercase">
                          {t('news.readMore')}
                        </Typography>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <div className="flex items-center gap-1 text-slate-300">
                        <Calendar size={12} />
                        <Typography className="text-[10px] font-medium">
                          {new Date(article.date).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'th-TH', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </MotionLink>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Button
                component={Link}
                to="/news/activities-new"
                variant="outlined"
                size="large"
                className="rounded-full px-10 py-4 border-slate-200 text-slate-700 font-bold hover:bg-white hover:border-fuchsia-400 hover:text-fuchsia-600 shadow-sm hover:shadow-md transition-all group"
                endIcon={<ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              >
                {t('news.viewArticles')}
              </Button>
            </motion.div>
          </div>
        </div>

      </Container>
    </section>
  );
}
