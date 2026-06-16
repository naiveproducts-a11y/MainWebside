import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MessageSquare, FlaskConical, TestTube, Palette, Factory, Truck, Clock, DollarSign } from 'lucide-react';
import { contactButtons } from '../../config/services';

const steps = [
  {
    num: '01',
    badgeKey: 'brandingPage.stepsDetail.step1.badge',
    icon: MessageSquare,
    color: 'from-cyan-500 to-cyan-600',
    lightBg: 'bg-cyan-50',
    lightText: 'text-cyan-600',
    lightBorder: 'border-cyan-100',
    titleKey: 'brandingPage.stepsDetail.step1.title',
    subtitleKey: 'brandingPage.stepsDetail.step1.subtitle',
    itemsKeys: [
      'brandingPage.stepsDetail.step1.item1',
      'brandingPage.stepsDetail.step1.item2',
      'brandingPage.stepsDetail.step1.item3',
    ],
    meta: [
      { icon: Clock, labelKey: 'brandingPage.stepsDetail.step1.meta1Label', valueKey: 'brandingPage.stepsDetail.step1.meta1Value' },
      { icon: DollarSign, labelKey: 'brandingPage.stepsDetail.step1.meta2Label', valueKey: 'brandingPage.stepsDetail.step1.meta2Value' },
    ],
  },
  {
    num: '02',
    badgeKey: 'brandingPage.stepsDetail.step2.badge',
    icon: FlaskConical,
    color: 'from-fuchsia-500 to-fuchsia-600',
    lightBg: 'bg-fuchsia-50',
    lightText: 'text-fuchsia-600',
    lightBorder: 'border-fuchsia-100',
    titleKey: 'brandingPage.stepsDetail.step2.title',
    subtitleKey: 'brandingPage.stepsDetail.step2.subtitle',
    itemsKeys: [
      'brandingPage.stepsDetail.step2.item1',
      'brandingPage.stepsDetail.step2.item2',
      'brandingPage.stepsDetail.step2.item3',
    ],
    meta: [
      { icon: Clock, labelKey: 'brandingPage.stepsDetail.step2.meta1Label', valueKey: 'brandingPage.stepsDetail.step2.meta1Value' },
      { icon: FlaskConical, labelKey: 'brandingPage.stepsDetail.step2.meta2Label', valueKey: 'brandingPage.stepsDetail.step2.meta2Value' },
    ],
  },
  {
    num: '03',
    badgeKey: 'brandingPage.stepsDetail.step3.badge',
    icon: TestTube,
    color: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-600',
    lightBorder: 'border-blue-100',
    titleKey: 'brandingPage.stepsDetail.step3.title',
    subtitleKey: 'brandingPage.stepsDetail.step3.subtitle',
    itemsKeys: [
      'brandingPage.stepsDetail.step3.item1',
      'brandingPage.stepsDetail.step3.item2',
      'brandingPage.stepsDetail.step3.item3',
    ],
    meta: [
      { icon: Clock, labelKey: 'brandingPage.stepsDetail.step3.meta1Label', valueKey: 'brandingPage.stepsDetail.step3.meta1Value' },
      { icon: DollarSign, labelKey: 'brandingPage.stepsDetail.step3.meta2Label', valueKey: 'brandingPage.stepsDetail.step3.meta2Value' },
    ],
  },
  {
    num: '04',
    badgeKey: 'brandingPage.stepsDetail.step4.badge',
    icon: Palette,
    color: 'from-orange-500 to-orange-600',
    lightBg: 'bg-orange-50',
    lightText: 'text-orange-600',
    lightBorder: 'border-orange-100',
    titleKey: 'brandingPage.stepsDetail.step4.title',
    subtitleKey: 'brandingPage.stepsDetail.step4.subtitle',
    itemsKeys: [
      'brandingPage.stepsDetail.step4.item1',
      'brandingPage.stepsDetail.step4.item2',
      'brandingPage.stepsDetail.step4.item3',
    ],
    meta: [
      { icon: Clock, labelKey: 'brandingPage.stepsDetail.step4.meta1Label', valueKey: 'brandingPage.stepsDetail.step4.meta1Value' },
      { icon: Clock, labelKey: 'brandingPage.stepsDetail.step4.meta2Label', valueKey: 'brandingPage.stepsDetail.step4.meta2Value' },
    ],
  },
  {
    num: '05',
    badgeKey: 'brandingPage.stepsDetail.step5.badge',
    icon: Factory,
    color: 'from-emerald-500 to-emerald-600',
    lightBg: 'bg-emerald-50',
    lightText: 'text-emerald-600',
    lightBorder: 'border-emerald-100',
    titleKey: 'brandingPage.stepsDetail.step5.title',
    subtitleKey: 'brandingPage.stepsDetail.step5.subtitle',
    itemsKeys: [
      'brandingPage.stepsDetail.step5.item1',
      'brandingPage.stepsDetail.step5.item2',
      'brandingPage.stepsDetail.step5.item3',
    ],
    meta: [
      { icon: Clock, labelKey: 'brandingPage.stepsDetail.step5.meta1Label', valueKey: 'brandingPage.stepsDetail.step5.meta1Value' },
      { icon: Factory, labelKey: 'brandingPage.stepsDetail.step5.meta2Label', valueKey: 'brandingPage.stepsDetail.step5.meta2Value' },
    ],
  },
  {
    num: '06',
    badgeKey: 'brandingPage.stepsDetail.step6.badge',
    icon: Truck,
    color: 'from-violet-500 to-violet-600',
    lightBg: 'bg-violet-50',
    lightText: 'text-violet-600',
    lightBorder: 'border-violet-100',
    titleKey: 'brandingPage.stepsDetail.step6.title',
    subtitleKey: 'brandingPage.stepsDetail.step6.subtitle',
    itemsKeys: [
      'brandingPage.stepsDetail.step6.item1',
      'brandingPage.stepsDetail.step6.item2',
      'brandingPage.stepsDetail.step6.item3',
    ],
    meta: [
      { icon: Clock, labelKey: 'brandingPage.stepsDetail.step6.meta1Label', valueKey: 'brandingPage.stepsDetail.step6.meta1Value' },
      { icon: Truck, labelKey: 'brandingPage.stepsDetail.step6.meta2Label', valueKey: 'brandingPage.stepsDetail.step6.meta2Value' },
    ],
  },
];

export default function DifferenceSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Deep Dive</span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {t('brandingPage.stepsDetailSubtitle')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
                {t('brandingPage.stepsDetailTitle')}
              </span>
            </Typography>
          </motion.div>
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group"
            >
              <div className="h-full bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                {/* Card top gradient strip */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${step.color}`} />

                <div className="p-8 flex flex-col flex-1">
                  {/* Step number + badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[44px] font-black text-slate-100 leading-none select-none">
                      {step.num}
                    </span>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${step.lightBg} ${step.lightText} border ${step.lightBorder}`}>
                      {t(step.badgeKey)}
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                      <step.icon size={22} strokeWidth={1.75} />
                    </div>
                    <Typography variant="h5" className="text-xl font-black text-slate-900 leading-snug tracking-tight">
                      {t(step.titleKey)}
                    </Typography>
                  </div>

                  {/* Subtitle */}
                  <Typography variant="body2" className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {t(step.subtitleKey)}
                  </Typography>

                  {/* Content items */}
                  <ul className="space-y-2 mb-6">
                    {step.itemsKeys.map((itemKey, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br ${step.color}`} />
                        <span>{t(itemKey)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meta badges */}
                  <div className={`border-t ${step.lightBorder} pt-5 flex flex-wrap gap-3 mt-auto`}>
                    {step.meta.map((m, i) => (
                      <div key={i} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${step.lightBg} border ${step.lightBorder}`}>
                        <m.icon size={13} className={step.lightText} />
                        <span className="text-[11px] font-bold text-slate-500">{t(m.labelKey)}:</span>
                        <span className={`text-[11px] font-black ${step.lightText}`}>{t(m.valueKey)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
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
      </div>
    </section>
  );
}
