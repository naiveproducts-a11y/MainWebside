import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Droplets, ShieldCheck, HeartPulse, Leaf, CheckCircle } from 'lucide-react';

import type { Product } from '../../types/product';

const icons = [Droplets, ShieldCheck, HeartPulse, Leaf];

export default function ProductSection({ product }: { product: Product }) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container maxWidth="lg">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-8 shadow-sm">
               <span className="text-sm font-black text-cyan-700 tracking-widest uppercase">{t('productPage.whyProduct.badge')}</span>
            </div>
            
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              {isEn ? `Why ${product.nameEn || product.name} is different?` : `ทำไม ${product.name} ถึงต่างจากที่อื่นในตลาด`}
            </Typography>

            <Typography variant="body1" className="text-lg md:text-xl text-slate-600 text-center leading-relaxed max-w-2xl mx-auto font-medium">
              {t('productPage.whyProduct.subtitle')}
            </Typography>
          </motion.div>
        </div>

        {/* 4 Columns with Lines (Bordered Box with Dividers) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`grid grid-cols-1 ${
            product.benefits?.length === 3 ? 'lg:grid-cols-3' : 
            product.benefits?.length === 2 ? 'lg:grid-cols-2' : 
            'lg:grid-cols-4'
          } relative bg-white border border-slate-100 rounded-[2rem] shadow-xl shadow-slate-200/50 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 overflow-hidden`}
        >
          {product.benefits && product.benefits.map((item, index: number) => {
            const IconComponent = icons[index % icons.length] || CheckCircle;
            const title = isEn ? (item.titleEn || item.title) : item.title;
            const desc = isEn ? (item.descEn || item.desc) : item.desc;

            return (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }} // hover:bg-slate-50 effect
              className="flex flex-col items-center text-center p-10 lg:px-8 lg:py-16 group transition-colors duration-500"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-cyan-50 to-white shadow-sm border border-cyan-100/50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <IconComponent className="w-10 h-10 text-cyan-600" strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-wide leading-snug">
                {title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-500 leading-relaxed text-base font-medium">
                {desc}
              </p>
            </motion.div>
          )})}
        </motion.div>

      </Container>
    </section>
  );
}