import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, TrendingUp, Tag } from 'lucide-react';
import { newsArticles } from '../../config/newsArticles';
import { useTranslation } from 'react-i18next';

const MotionLink = motion(Link);

// Categories — นับจาก data จริง
const categoryCount: Record<string, number> = {};
newsArticles.forEach((a) => {
  categoryCount[a.category] = (categoryCount[a.category] ?? 0) + 1;
});
const categories = Object.entries(categoryCount).map(([label, count]) => ({ label, count }));

const PAGE_SIZE = 9;

interface ARTICLESSectionProps {
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ARTICLESSection({ activeCategory, setActiveCategory }: ARTICLESSectionProps) {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  // Popular sidebar — ใช้ 4 บทความแรกจาก data จริง
  const popular = newsArticles.slice(0, 4).map((a, i) => ({
    num: String(i + 1).padStart(2, '0'),
    title: a.title,
    date: new Date(a.date).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'th-TH', { month: 'short', year: 'numeric' }),
    slug: a.slug,
  }));

  const filteredArticles = activeCategory
    ? newsArticles.filter((a) => a.category === activeCategory)
    : newsArticles;

  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);

  const start = (currentPage - 1) * PAGE_SIZE;
  const visibleArticles = filteredArticles.slice(start, start + PAGE_SIZE);

  const goTo = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCategory = (category: string) => {
    setActiveCategory(prev => prev === category ? null : category);
    setCurrentPage(1); // Reset to page 1 on filter change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-slate-50">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">

          {/* ── Left: Article Grid ── */}
          <div>
            {/* Section label */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-500 to-fuchsia-500" />
                <Typography variant="h5" className="font-black text-slate-900 text-lg tracking-tight">
                  {activeCategory ? `${t('articlesSection.categoryLabel')} ${activeCategory}` : t('articlesSection.allArticles')}
                </Typography>
              </div>
              <span className="text-xs font-bold text-slate-400">{filteredArticles.length} {t('articlesSection.articlesCount')}</span>
            </div>

            {/* 3-column card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {visibleArticles.map((article, idx) => (
                <MotionLink
                  key={article.id}
                  to={`/news/activities-new/${article.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % PAGE_SIZE) * 0.05 }}
                  className="group flex flex-col bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline"
                >
                  {/* Thumbnail — รูปจริงจากโฟลเดอร์ date */}
                  <div className="relative aspect-[16/9] bg-slate-50 overflow-hidden border-b-2 border-slate-100">
                    {article.images[0] ? (
                      <img
                        src={article.images[0]}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                        <span className="text-slate-200 text-4xl font-black">N</span>
                      </div>
                    )}
                    {/* Category overlay */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-lg border text-[10px] font-black uppercase tracking-widest backdrop-blur-sm bg-white/80 ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5 gap-3">
                    {/* Title */}
                    <Typography variant="h6" className="text-sm font-black text-slate-900 leading-snug group-hover:text-cyan-700 transition-colors duration-200 line-clamp-2">
                      {article.title}
                    </Typography>

                    {/* Lead / Desc */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
                      {article.lead}
                    </p>

                    {/* Tags + meta */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                      <div className="flex gap-1.5 flex-wrap">
                        {(article.tags ?? []).slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 shrink-0 ml-2">
                        <Calendar size={10} />
                        <span className="text-[10px] font-medium">
                          {new Date(article.date).toLocaleDateString(i18n.language === 'en' ? 'en-US' : 'th-TH', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </MotionLink>
              ))}
            </div>

            {/* Numbered Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 mt-10">
                {/* Prev */}
                <button
                  onClick={() => goTo(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-cyan-300 hover:text-cyan-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <ChevronLeft size={15} />
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isCurrent = page === currentPage;
                  // Show first, last, current ±1, and ellipsis
                  const show =
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1;
                  if (!show) {
                    // Show ellipsis only at the gap boundaries
                    if (page === 2 && currentPage > 3) {
                      return (
                        <span key={page} className="text-slate-300 text-sm font-bold px-1">
                          …
                        </span>
                      );
                    }
                    if (page === totalPages - 1 && currentPage < totalPages - 2) {
                      return (
                        <span key={page} className="text-slate-300 text-sm font-bold px-1">
                          …
                        </span>
                      );
                    }
                    return null;
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => goTo(page)}
                      className={`w-9 h-9 flex items-center justify-center rounded-xl text-sm font-black transition-all duration-200 ${
                        isCurrent
                          ? 'bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25 scale-110'
                          : 'border border-slate-200 text-slate-500 hover:border-cyan-300 hover:text-cyan-600 hover:scale-105'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next */}
                <button
                  onClick={() => goTo(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-cyan-300 hover:text-cyan-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            )}
          </div>

          {/* ── Right: Sidebar ── */}
          <aside className="flex flex-col gap-6 sticky top-24">

            {/* Popular posts */}
            <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2.5 px-5 py-4 border-b-2 border-slate-100">
                <TrendingUp size={15} className="text-cyan-600" />
                <span className="text-sm font-black text-slate-800">{t('articlesSection.latestArticles')}</span>
              </div>
              <div className="divide-y divide-slate-50">
                {popular.map((p, idx) => (
                  <Link
                    key={idx}
                    to={`/news/activities-new/${p.slug}`}
                    className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50 transition-colors duration-150 group no-underline"
                  >
                    <span className="text-xl font-black text-slate-100 shrink-0 leading-none group-hover:text-cyan-200 transition-colors">
                      {p.num}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-700 leading-snug group-hover:text-cyan-700 transition-colors mb-1">
                        {p.title}
                      </p>
                      <span className="text-[10px] text-slate-400 font-medium">{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2.5 px-5 py-4 border-b-2 border-slate-100">
                <Tag size={14} className="text-fuchsia-500" />
                <span className="text-sm font-black text-slate-800">{t('articlesSection.categories')}</span>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {categories.map((cat, idx) => {
                  const isActive = activeCategory === cat.label;
                  return (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCategory(cat.label);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-2 border rounded-xl transition-all duration-200 group ${
                        isActive
                          ? 'bg-cyan-50 border-cyan-300 text-cyan-700 shadow-sm'
                          : 'bg-slate-50 border-slate-100 hover:bg-cyan-50 hover:border-cyan-200'
                      }`}
                    >
                      <span className={`text-xs font-bold transition-colors ${
                        isActive ? 'text-cyan-700' : 'text-slate-600 group-hover:text-cyan-700'
                      }`}>
                        {cat.label}
                      </span>
                      <span className={`text-[10px] font-black transition-colors ${
                        isActive ? 'text-cyan-500' : 'text-slate-300 group-hover:text-cyan-400'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </aside>
        </div>
      </Container>
    </section>
  );
}
