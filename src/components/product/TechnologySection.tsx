import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { productTechnologies } from '../../config/product';

export default function TechnologySection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background decorations - Light theme friendly */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-fuchsia-100/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid - Softened for light theme */}
      <div className="absolute inset-0 bg-[linear-gradient(theme(colors.slate.200)_1px,transparent_1px),linear-gradient(90deg,theme(colors.slate.200)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <Container maxWidth="lg" className="relative z-10">
        {/* Header section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
               <span className="text-sm font-bold text-cyan-600 tracking-[0.3em] uppercase">{t('productPage.tech.badge')}</span>
            </div>
            
            <Typography variant="h2" className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              {t('productPage.tech.title')}
            </Typography>

            <Typography variant="body1" className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              {t('productPage.tech.subtitle')}
            </Typography>
          </motion.div>
        </div>

        {/* 2 Tech Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {productTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
              className="group relative rounded-[2.5rem] bg-white border border-slate-100 p-10 lg:p-12 overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.1)] transition-shadow duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${tech.colorType === 'cyan' ? 'from-cyan-50/50' : 'from-fuchsia-50/50'} to-transparent`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                  <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm">{t(tech.badgeKey)}</div>
                  <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br shadow-sm border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${tech.colorType === 'cyan' ? 'from-cyan-50 to-white border-cyan-100/50' : 'from-fuchsia-50 to-white border-fuchsia-100/50'}`}>
                    <tech.icon className={`w-8 h-8 ${tech.colorType === 'cyan' ? 'text-cyan-600' : 'text-fuchsia-600'}`} />
                  </div>
                </div>

                <Typography variant="h3" className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  {t(tech.titleKey)}
                </Typography>

                <p className="text-slate-600 leading-relaxed text-lg mb-12 flex-grow">
                  {t(tech.descKey)}
                </p>

                {/* Data Point */}
                <div className={`mt-auto px-6 py-5 rounded-2xl border flex items-center justify-between transition-colors duration-500 ${tech.colorType === 'cyan' ? 'bg-cyan-50/50 border-cyan-100/50' : 'bg-fuchsia-50/50 border-fuchsia-100/50'}`}>
                  <span className="text-slate-500 text-sm font-semibold tracking-wide">{t(tech.labelKey)}</span>
                  <span className={`font-extrabold text-base lg:text-lg ${tech.colorType === 'cyan' ? 'text-cyan-700' : 'text-fuchsia-700'}`}>{t(tech.valueKey)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

