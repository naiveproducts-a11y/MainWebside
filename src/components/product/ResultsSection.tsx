import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FlaskConical, ClipboardCheck, Timer } from 'lucide-react';

import type { Product } from '../../types/product';

const icons = [FlaskConical, ClipboardCheck, Timer];

export default function ResultsSection({ product }: { product: Product }) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  if (!product.testResults || product.testResults.length === 0) return null;

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 mb-8 shadow-sm">
               <span className="text-sm font-bold text-cyan-400 tracking-[0.2em] uppercase">{t('productPage.labResults.badge')}</span>
            </div>
            
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              {t('productPage.labResults.title')}
            </Typography>

            <Typography variant="body1" className="text-lg md:text-xl text-slate-400 leading-relaxed">
              {t('productPage.labResults.subtitle')}
            </Typography>
          </motion.div>
        </div>

        {/* Results List */}
        <div className={`grid grid-cols-1 ${
          product.testResults?.length === 2 ? 'lg:grid-cols-2' : 
          'lg:grid-cols-3'
        } gap-8 justify-center`}>
          {product.testResults.map((item, index: number) => {
            const IconComponent = icons[index % icons.length] || FlaskConical;
            const lab = isEn ? (item.labEn || item.lab) : item.lab;
            const test = isEn ? (item.testEn || item.test) : item.test;
            const result = isEn ? (item.resultEn || item.result) : item.result;

            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                <IconComponent className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
              </div>

              <div className="text-cyan-400 font-bold tracking-[0.1em] text-sm uppercase mb-3">{lab}</div>
              <div className="text-white text-base font-semibold mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/5">{test}</div>
              
              <div className="text-slate-300 leading-relaxed text-lg font-medium">
                {result}
              </div>
            </motion.div>
          )})}
        </div>
      </Container>
    </section>
  );
}

