import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import productsData from '../../i18n/products/products-all.json';
import type { Product } from '../../types/product';

const productImages = import.meta.glob<{ default: string }>('../../assets/eachproduct/*.{jpeg,jpg,png,svg}', { eager: true });

export default function RelatedSection({ product }: { product: Product }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const isEn = i18n.language === 'en';

  const relatedProducts = productsData.products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.firstElementChild instanceof HTMLElement
        ? scrollRef.current.firstElementChild.offsetWidth
        : 350;
      const gap = 32; // Gap-8
      const scrollAmount = (itemWidth + gap) * 4;
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container maxWidth="lg" className="relative z-10">

        {/* Header section - Centered for consistency */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-6 shadow-sm">
              <span className="text-sm font-bold text-cyan-600 tracking-[0.2em] uppercase">{t('productPage.related.badge')}</span>
            </div>

            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              {t('productPage.related.title')}
            </Typography>

            <Typography variant="body1" className="text-lg md:text-xl text-slate-500 font-medium">
              {t('productPage.related.subtitle')}
            </Typography>
          </motion.div>
        </div>

        {/* Scrollable Slider Wrapper - With side navigation */}
        <div className="relative group/slider">
          {relatedProducts.length > 3 && (
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
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar -mx-4 px-4 mask-fade-edges"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {relatedProducts.map((item, index) => {
              // Get product image
              const imageName = item.image;
              const entries = Object.entries(productImages);
              const match = entries.find(([path]) => path.endsWith(imageName));
              const image = match ? match[1].default : "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop";

              const category = isEn ? item.categoryEn : item.categoryTh;
              const title = isEn ? item.nameEn : item.name;

              // Helper for route base mapping
              const getBaseRoute = (categoryStr: string) => {
                if (categoryStr === 'Cleaning & Grooming') return '/cleaning';
                if (categoryStr === 'Spray & Care') return '/spray';
                if (categoryStr === 'Skin & Powder') return '/skin';
                return '/rd';
              };
              const productUrl = `${getBaseRoute(item.category)}/${item.id}`;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] md:w-[350px] group cursor-pointer snap-start"
                  onClick={() => {
                    navigate(productUrl);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative aspect-[1/1] rounded-[2.5rem] overflow-hidden mb-8 border border-slate-100 bg-slate-50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="px-4">
                    <div className="text-sm font-bold text-cyan-500 uppercase tracking-widest mb-3">{category}</div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-cyan-600 transition-colors">
                      {title}
                    </h4>
                    <div className="text-slate-400 font-bold text-sm">
                      {t('productPage.related.startAt')} {item.price} {t('productPage.related.unit')} · {t('productPage.related.moqLabel', { moq: isEn ? (item.moqEn || item.moq) : item.moq })}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </Container>
    </section>
  );
}

