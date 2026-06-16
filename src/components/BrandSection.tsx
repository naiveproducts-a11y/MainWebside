import { useState, useEffect, useRef } from 'react';
import { Typography, Container } from '@mui/material';
import { motion, useInView, animate } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { stats } from '../config/brand';
import logoData from '../assets/partner/logo-section.json';

const partnerLogoModules = import.meta.glob<{ default: string }>('../assets/partner/*.{png,jpg,jpeg,svg}', { eager: true });

const imageModules = import.meta.glob<{ default: string }>('../assets/brand/*.png', { eager: true });
const brandImages = Object.values(imageModules).map((mod) => mod.default);

// Helper to get partner logo URL from filename in JSON
const getPartnerLogoUrl = (filename: string) => {
  // Try exact match first
  const exactPath = `../assets/partner/${filename}`;
  if (partnerLogoModules[exactPath]) {
    return partnerLogoModules[exactPath].default;
  }

  // Try fuzzy match for potential encoding issues (especially with Thai characters)
  const basename = filename.split('.')[0];
  const entries = Object.entries(partnerLogoModules);
  const match = entries.find(([path]) => path.includes(basename));

  return match ? match[1].default : '';
};

// --- Animated Counter Component ---
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      {/* Large Part (Number + Plus) */}
      <span className="flex items-baseline">
        {count}
        {suffix.includes('+') && (
          <span className="">{'+'}</span>
        )}
      </span>

      {/* Slightly larger small text (Years/Units) */}
      {suffix.replace('+', '').trim() && (
        <span className="text-3xl md:text-4xl font-semibold text-slate-400 ml-2 translate-y-[-2px]">
          {suffix.replace('+', '').trim()}
        </span>
      )}
    </span>
  );
};

export default function BrandSection() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.firstElementChild instanceof HTMLElement
        ? scrollRef.current.firstElementChild.offsetWidth
        : 300;
      const gap = 16; // gap-4 is 16px
      const scrollAmount = (itemWidth + gap) * 4; // Scroll 4 items
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white overflow-hidden" id="brand-section">

      {/* 1. Behind The Brand */}
      <div className="py-24 bg-slate-50/50">
        <Container maxWidth="lg">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.2em] mb-4 block">
                {t('brand.behindTitle')}
              </Typography>
              <Typography variant="h2" className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight whitespace-pre-line leading-tight">
                {t('product.footerTitle')}
              </Typography>

              <Typography
                align="center"
                variant="h5"
                className="text-center text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto italic whitespace-pre-line leading-relaxed px-4 md:px-0 break-words"
              >
                &ldquo;{t('product.footerDesc')}&rdquo;
              </Typography>

              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto mt-8 rounded-full" />
            </motion.div>
          </div>

          {/* Scrollable Slider Wrapper - With side navigation */}
          <div className="relative group/slider mt-8">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-[40%] -translate-y-1/2 z-20 h-[70%] w-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-r-3xl text-white items-center justify-center transition-all duration-500 shadow-md opacity-0 group-hover/slider:opacity-100"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-[40%] -translate-y-1/2 z-20 h-[70%] w-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-l-3xl text-white items-center justify-center transition-all duration-500 shadow-md opacity-0 group-hover/slider:opacity-100"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 pb-12 snap-x snap-mandatory no-scrollbar mask-fade-edges"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {brandImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 4) * 0.1, duration: 0.8 }}
                  className="flex-shrink-0 w-[85vw] md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] aspect-[3/2] rounded-sm overflow-hidden group cursor-pointer snap-start relative bg-slate-100"
                >
                  <img
                    src={img}
                    alt={`Infrastructure ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Statistics Section */}
      <div className="py-24 relative overflow-hidden">
        <Container maxWidth="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Typography variant="h2" className="text-6xl md:text-8xl font-semibold text-slate-900 mb-6 tracking-tighter">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffixKey ? t(stat.suffixKey) : (stat.suffix || "")}
                  />
                </Typography>
                <Typography variant="body2" className="text-slate-500 font-bold uppercase tracking-widest text-sm md:text-base">
                  {t(stat.labelKey)}
                </Typography>
              </motion.div>
            ))}
          </div>

          {/* Standards Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center mb-16 opacity-95 hover:opacity-100 transition-all duration-700">
            {logoData.rows[0].logos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="flex items-center justify-center p-6 bg-white/60 rounded-3xl md:h-32 w-full shadow-sm hover:shadow-md transition-all duration-500"
              >
                <img
                  src={getPartnerLogoUrl(logo.file)}
                  alt={logo.alt}
                  style={{ height: (logo.displaySize || 60) * 1.6, width: 'auto' }}
                  className="max-w-full h-auto object-contain transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Spinoff Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-12 border-t border-slate-100 max-w-3xl mx-auto"
          >
            <Typography variant="body1" className="text-slate-600 font-medium leading-relaxed italic">
              {t('brand.spinoffDesc')}
            </Typography>
          </motion.div>
        </Container>
      </div>

      {/* 3. Partners Section */}
      <div className="py-32 bg-slate-50/30">
        <Container maxWidth="lg">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.2em] mb-4 block">
                {t('partnerSection.eyebrow')}
              </Typography>
              <Typography variant="h4" className="text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                {t('partnerSection.title')}
              </Typography>
              <Typography variant="body1" className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
                {t('partnerSection.subtitle')}
              </Typography>
            </motion.div>
          </div>

          <div className="space-y-24">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-center justify-items-center">
                {logoData.rows[1].logos.map((logo, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="group relative w-full h-32 flex flex-col items-center justify-center p-4 bg-white rounded-[20px] shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden border border-slate-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 group-hover:to-cyan-50/30 transition-all duration-500" />
                    <img
                      src={getPartnerLogoUrl(logo.file)}
                      alt={logo.alt}
                      style={{ maxHeight: (logo.displaySize || 60) * 0.8 }}
                      className="relative z-10 max-w-[80%] object-contain transition-all duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
