import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { productHowToOrderSteps } from '../../config/product';
import { contactButtons } from '../../config/services';

export default function HowToOrderSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <Container maxWidth="lg">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
              <span className="text-sm font-bold text-slate-500 tracking-[0.2em] uppercase">{t('productPage.howToOrder.badge')}</span>
            </div>

            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              {t('productPage.howToOrder.title')}
            </Typography>

            <Typography variant="body1" className="text-lg md:text-xl text-slate-600 text-center leading-relaxed max-w-2xl mx-auto font-medium">
              {t('productPage.howToOrder.subtitle')}
            </Typography>
          </motion.div>
        </div>

        {/* Steps Journey */}
        <div className="relative mb-24">
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-px bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {productHowToOrderSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle with Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-lg group-hover:border-cyan-500 group-hover:bg-cyan-50 transition-all duration-300">
                    <item.icon className="w-10 h-10 text-slate-400 group-hover:text-cyan-600 transition-colors duration-300" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-black ring-4 ring-slate-50">
                    0{index + 1}
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 shadow-sm group-hover:text-cyan-600 group-hover:border-cyan-100 transition-colors duration-300">
                  {item.durationValue} {t(item.durationKey)}
                </div>

                <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                  {t(item.titleKey)}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Media Buttons: Compact image grid - Replaced CTA with this */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {contactButtons.map((btn) => (
            <motion.a
              key={btn.id}
              href={btn.href}
              target={btn.target}
              rel={btn.target === '_blank' ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -5 }}
              className={`group relative rounded-2xl md:rounded-[24px] overflow-hidden cursor-pointer transition-all duration-300 ${btn.gridClass}`}
            >
              <img
                src={btn.img}
                alt={btn.alt}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}

