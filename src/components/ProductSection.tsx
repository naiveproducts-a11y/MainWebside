import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { services, contactButtons } from '../config/services';


export default function ProductSection() {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-24 bg-white" id="product-section">
        <Container maxWidth="lg">
          {/* Title Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.2em] mb-4 block">
                {t('product.badge')}
              </Typography>
              <Typography variant="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                {t('product.title')}
              </Typography>
              <Typography variant="h5" className="text-slate-500 font-medium text-lg md:text-xl">
                {t('product.subtitle')}
              </Typography>
            </motion.div>
          </div>

          {/* 1. Services: Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 px-4 lg:px-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-[20px] md:rounded-[40px] overflow-hidden shadow-lg aspect-square cursor-pointer bg-slate-50"
              >
                <img
                  src={service.img}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* 2. Media Buttons: Compact image grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </>
  );
}
