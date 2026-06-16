import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import nanotechEncap from '../../assets/innovation/nanotech-encap.png';

const specs = [
  { labelKey: 'innovationDetails.nanotech.specs.sizeLabel', value: '84', unit: 'nm', subKey: 'innovationDetails.nanotech.specs.sizeSub' },
  { labelKey: 'innovationDetails.nanotech.specs.absorbLabel', value: '↑ 3–5', unit: '×', subKey: 'innovationDetails.nanotech.specs.absorbSub' },
  { labelKey: 'innovationDetails.nanotech.specs.stabilityLabel', value: '24', unitKey: 'innovationDetails.nanotech.specs.stabilityUnit', subKey: 'innovationDetails.nanotech.specs.stabilitySub' },
  { label: 'PARTICLE CONCENTRATION', value: '1.8E', unit: '+13', subKey: 'innovationDetails.nanotech.specs.concentrationSub' },
];

const benefits = [
  {
    num: '01',
    titleKey: 'innovationDetails.nanotech.benefits.b1Title',
    descKey: 'innovationDetails.nanotech.benefits.b1Desc',
  },
  {
    num: '02',
    titleKey: 'innovationDetails.nanotech.benefits.b2Title',
    descKey: 'innovationDetails.nanotech.benefits.b2Desc',
  },
  {
    num: '03',
    titleKey: 'innovationDetails.nanotech.benefits.b3Title',
    descKey: 'innovationDetails.nanotech.benefits.b3Desc',
  },
  {
    num: '04',
    titleKey: 'innovationDetails.nanotech.benefits.b4Title',
    descKey: 'innovationDetails.nanotech.benefits.b4Desc',
  },
];

export default function NANOTECHSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Technology 02</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            {t('innovationDetails.nanotech.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-500">
              {t('innovationDetails.nanotech.subtitle')}
            </span>
          </Typography>
          <p className="text-slate-400 text-sm font-medium max-w-2xl leading-relaxed">
            {t('innovationDetails.nanotech.desc')}
          </p>
        </motion.div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 bg-white aspect-[3/2] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <img 
                src={nanotechEncap} 
                alt="Nano Encapsulation Comparison - Standard vs Nano" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-sm">
                  <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">LAB RECORD: System Comparison</span>
                </div>
              </div>
            </div>

            {/* SNEDDS box */}
            <div className="rounded-2xl border-2 border-blue-100 bg-white px-6 py-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                <span className="font-black text-slate-900">{t('innovationDetails.nanotech.sneddsTitle')}</span>
                {' '}{t('innovationDetails.nanotech.sneddsText')}
              </p>
            </div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* 2×2 Specs grid */}
            <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border-2 border-slate-200">
              {specs.map((spec, idx) => (
                <div key={idx} className="bg-white px-5 py-5 hover:bg-blue-50/30 transition-colors duration-200">
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                    {spec.labelKey ? t(spec.labelKey) : spec.label}
                  </div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    {spec.value}
                    <span className="text-base font-bold text-blue-600 ml-1">
                      {spec.unitKey ? t(spec.unitKey) : spec.unit}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                    {t(spec.subKey)}
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Benefits */}
            <div className="rounded-2xl border-2 border-slate-200 overflow-hidden bg-white">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-fuchsia-500 px-6 py-3">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                  {t('innovationDetails.nanotech.benefitsHeader')}
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex gap-4 px-6 py-4 hover:bg-slate-50 transition-colors duration-200">
                    <span className="text-[11px] font-black text-slate-300 shrink-0 mt-0.5 w-5">{item.num}</span>
                    <div>
                      <div className="font-black text-slate-900 text-sm mb-1">{t(item.titleKey)}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{t(item.descKey)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
