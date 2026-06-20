import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { brandingSteps } from '../../config/branding_page';

export default function StepSection() {
  const { t } = useTranslation();

  return (
    <section id="brand-steps" className="py-24 bg-slate-50 relative overflow-hidden">
      <Container maxWidth="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
              <span className="text-sm font-bold text-slate-500 tracking-[0.2em] uppercase">
                {t('brandingPage.stepsTitle')}
              </span>
            </div>

            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              {t('brandingPage.stepSectionTitle')}
            </Typography>

            <Typography variant="body1" className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              {t('brandingPage.stepSectionSubtitle')}
            </Typography>
          </motion.div>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-px bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
            {brandingSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-lg group-hover:border-cyan-500 group-hover:bg-cyan-50 transition-all duration-300 ${step.colorClass}`}>
                    <step.icon className="w-9 h-9 group-hover:text-cyan-600 transition-colors duration-300" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-black ring-4 ring-slate-50">
                    0{idx + 1}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base font-black text-slate-900 mb-3 tracking-tight leading-snug">
                  {t(step.titleKey)}
                </h4>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium px-2">
                  {t(step.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bonus Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative inline-flex items-center gap-6 bg-white border-2 border-dashed border-cyan-200 rounded-3xl px-10 py-7 shadow-lg hover:shadow-xl hover:border-cyan-400 transition-all duration-300 group">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Gift icon */}
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 shrink-0">
              <span className="text-2xl">🎁</span>
            </div>
            {/* Text */}
            <div className="relative z-10">
              <div className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-1">{t('brandingPage.bonusFree')}</div>
              <div className="text-xl font-black text-slate-900 leading-tight">{t('brandingPage.bonusDetail')}</div>
              <div className="text-sm text-slate-500 font-medium mt-1">{t('brandingPage.bonusSub')}</div>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
