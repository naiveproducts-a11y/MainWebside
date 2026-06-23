import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronLeft, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { homeCertificates } from '../../config/homeCertifications';

// Load all certification files dynamically
const certFiles = import.meta.glob<{ default: string }>('../../assets/cetification/*.{pdf,jpg,png,jpeg}', { eager: true });

export default function CertifiedSection() {
  const { t, i18n } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Transform glob files into displayable items
  const certifications = Object.entries(certFiles)
    .filter(([path]) => !path.includes('_preview.')) // Filter out standalone preview images
    .map(([path, module]) => {
      const fileName = path.split('/').pop() || '';
      const isPdf = fileName.toLowerCase().endsWith('.pdf');
      const url = module.default;

      // Resolve the preview image for PDF files dynamically
      let previewUrl = url;
      if (isPdf) {
        const previewPath = path.replace(/\.pdf$/i, '_preview.jpg');
        if (certFiles[previewPath]) {
          previewUrl = certFiles[previewPath].default;
        }
      }

      // Find config match
      const match = homeCertificates.find(c => c.fileName === fileName);

      // Clean up filename for display or use config title
      const displayName = match
        ? (i18n.language === 'en' ? match.titleEn : match.titleTh)
        : fileName
            .replace(/\.[^/.]+$/, "") // Remove last extension
            .replace(/\.pdf$/, "")     // Remove second extension if it exists (e.g. .pdf.pdf)
            .trim();

      // Determine if it is an award
      let isAward = false;
      if (match) {
        isAward = match.category === 'award';
      } else {
        isAward = (
          fileName.includes('รางวัล') ||
          fileName.includes('Award') ||
          fileName.includes('Alumni') ||
          fileName.includes('แสตมป์')
        );
      }

      return {
        path,
        url,
        previewUrl,
        fileName,
        displayName,
        isPdf,
        isAward
      };
    })
    // Filter to display only standard / lab report documents, excluding awards
    .filter(item => !item.isAward);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.firstElementChild instanceof HTMLElement
        ? scrollRef.current.firstElementChild.offsetWidth
        : 320;
      const gap = 32; // Gap-8
      const scrollAmount = (itemWidth + gap) * 2; // Scroll 2 items
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (certifications.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <Container maxWidth="lg">

        {/* Header section - Centered for consistency */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6 shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700 tracking-[0.2em] uppercase">{t('productPage.certified.badge')}</span>
              </div>
            </div>

            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              {t('productPage.certified.title')}
            </Typography>
          </motion.div>
        </div>

        {/* Scrollable Slider Wrapper - With side navigation */}
        <div className="relative group/slider">
          {certifications.length > 3 && (
            <>
              {/* Left Arrow - Hidden on mobile */}
              <button
                onClick={() => scroll('left')}
                className="hidden md:flex absolute -left-6 lg:-left-12 top-[40%] -translate-y-1/2 z-20 p-4 rounded-full bg-white border border-slate-100 text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Arrow - Hidden on mobile */}
              <button
                onClick={() => scroll('right')}
                className="hidden md:flex absolute -right-6 lg:-right-12 top-[40%] -translate-y-1/2 z-20 p-4 rounded-full bg-white border border-slate-100 text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 pb-12 snap-x snap-mandatory no-scrollbar -mx-4 px-4 mask-fade-edges"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[220px] sm:w-[270px] md:w-[320px] group cursor-pointer snap-start"
              >
                <div className="relative aspect-[4/5] rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[2.5rem] overflow-hidden mb-6 border border-slate-200 bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

                  {/* File Preview Area */}
                  <div className="w-full h-full p-4 sm:p-5 md:p-6 flex flex-col">
                    <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-100 overflow-hidden relative group-hover:bg-slate-100 transition-colors">
                      {item.isPdf && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider shadow-sm z-10 select-none">
                          PDF
                        </div>
                      )}
                      <img
                        src={item.previewUrl}
                        alt={item.displayName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-4">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-slate-900 hover:scale-110 transition-transform"
                          title="View Online"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                        <a
                          href={item.url}
                          download={item.fileName}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                          title="Download"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </div>
                    </div>

                    {/* File Info */}
                    <div className="mt-4 sm:mt-5 md:mt-6 px-1 md:px-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500" />
                        <span className="text-[8px] sm:text-[10px] font-black text-emerald-600 uppercase tracking-wider">
                          {i18n.language === 'en' ? 'Standard / Certificate' : 'Standard / ใบรับรอง'}
                        </span>
                      </div>
                      <Typography variant="subtitle1" className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                        {item.displayName}
                      </Typography>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
