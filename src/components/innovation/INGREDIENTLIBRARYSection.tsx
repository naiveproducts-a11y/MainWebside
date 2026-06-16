import { useTranslation } from 'react-i18next';
import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Leaf, Droplets, ShieldCheck, Pencil, Check, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Leaf,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    dotColor: 'bg-emerald-400',
    titleKey: 'innovationDetails.ingredientLibrary.categories.cat1Title',
    items: [
      { name: 'Chamomilla Extract', descKey: 'innovationDetails.ingredientLibrary.categories.items.chamomileDesc' },
      { name: 'Centella Asiatica', descKey: 'innovationDetails.ingredientLibrary.categories.items.centellaDesc' },
      { name: 'Turmeric Extract', descKey: 'innovationDetails.ingredientLibrary.categories.items.turmericDesc' },
      { name: 'Mangosteen Extract', descKey: 'innovationDetails.ingredientLibrary.categories.items.mangosteenDesc' },
      { name: 'Coffee Cherry', descKey: 'innovationDetails.ingredientLibrary.categories.items.coffeeCherryDesc' },
      { name: 'Houttuynia Cordata', descKey: 'innovationDetails.ingredientLibrary.categories.items.houttuyniaDesc' },
      { name: 'Chamomile Distillate', descKey: 'innovationDetails.ingredientLibrary.categories.items.chamomileDistillateDesc' },
      { nameKey: 'innovationDetails.ingredientLibrary.categories.cat1Item8Name', descKey: 'innovationDetails.ingredientLibrary.categories.cat1Item8Desc', extra: true },
    ],
  },
  {
    icon: Droplets,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-100',
    dotColor: 'bg-cyan-400',
    titleKey: 'innovationDetails.ingredientLibrary.categories.cat2Title',
    items: [
      { name: 'Lavender Oil', descKey: 'innovationDetails.ingredientLibrary.categories.items.lavenderDesc' },
      { name: 'Tea Tree Oil (Nano)', descKey: 'innovationDetails.ingredientLibrary.categories.items.teaTreeDesc' },
      { name: 'Jojoba Oil', descKey: 'innovationDetails.ingredientLibrary.categories.items.jojobaDesc' },
      { name: 'Rosehip Oil', descKey: 'innovationDetails.ingredientLibrary.categories.items.rosehipDesc' },
      { name: 'Milk Oil', descKey: 'innovationDetails.ingredientLibrary.categories.items.milkDesc' },
      { name: 'Hyaluronic Acid (Nano)', descKey: 'innovationDetails.ingredientLibrary.categories.items.hyaluronicDesc' },
      { name: 'Nano Silk Protein', descKey: 'innovationDetails.ingredientLibrary.categories.items.silkProteinDesc' },
      { nameKey: 'innovationDetails.ingredientLibrary.categories.cat2Item8Name', descKey: 'innovationDetails.ingredientLibrary.categories.cat2Item8Desc', extra: true },
    ],
  },
  {
    icon: ShieldCheck,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    dotColor: 'bg-blue-400',
    titleKey: 'innovationDetails.ingredientLibrary.categories.cat3Title',
    items: [
      { name: 'EcoGuard Plus™', descKey: 'innovationDetails.ingredientLibrary.categories.items.ecoguardDesc' },
      { name: 'Nano Encapsulation Shell', descKey: 'innovationDetails.ingredientLibrary.categories.items.nanoShellDesc' },
      { name: 'SNEDDS System', descKey: 'innovationDetails.ingredientLibrary.categories.items.sneddsDesc' },
      { name: 'Water-Repellent Nano Coat', descKey: 'innovationDetails.ingredientLibrary.categories.items.waterRepellentDesc' },
      { name: 'Bio-adhesive Agent', descKey: 'innovationDetails.ingredientLibrary.categories.items.bioAdhesiveDesc' },
      { name: 'Natural Cleansing Base', descKey: 'innovationDetails.ingredientLibrary.categories.items.naturalCleansingDesc' },
      { name: 'Food-Grade Carrier', descKey: 'innovationDetails.ingredientLibrary.categories.items.foodGradeCarrierDesc' },
      { nameKey: 'innovationDetails.ingredientLibrary.categories.cat3Item8Name', descKey: 'innovationDetails.ingredientLibrary.categories.cat3Item8Desc', extra: true },
    ],
  },
];

const ctaChecks = [
  'innovationDetails.ingredientLibrary.checks.check1',
  'innovationDetails.ingredientLibrary.checks.check2',
  'innovationDetails.ingredientLibrary.checks.check3',
  'innovationDetails.ingredientLibrary.checks.check4',
];

export default function INGREDIENTLIBRARYSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-5 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Ingredient Library</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            {t('innovationDetails.ingredientLibrary.title')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
              {t('innovationDetails.ingredientLibrary.titleSpan')}
            </span>
          </Typography>
          <p className="text-slate-400 text-sm font-medium max-w-2xl leading-relaxed">
            {t('innovationDetails.ingredientLibrary.desc')}
          </p>
        </motion.div>

        {/* 2×2 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* 3 category cards */}
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <div className="h-full bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-slate-200 hover:shadow-md transition-all duration-300">
                {/* Card header */}
                <div className={`flex items-center gap-3 px-6 py-4 border-b-2 border-slate-100 ${cat.bgColor}`}>
                  <cat.icon size={18} className={cat.color} strokeWidth={2} />
                  <span className={`text-sm font-black ${cat.color}`}>{t(cat.titleKey)}</span>
                </div>

                {/* Items list */}
                <div className="divide-y divide-slate-50">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`flex items-start gap-3 px-6 py-3 hover:bg-slate-50 transition-colors duration-150 ${item.extra ? 'opacity-60' : ''}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${cat.dotColor} shrink-0 mt-2`} />
                      <div className="flex flex-1 gap-3 min-w-0">
                        <span className={`text-sm font-black text-slate-800 shrink-0 ${item.extra ? 'italic' : ''}`}>
                          {item.nameKey ? t(item.nameKey) : item.name}
                        </span>
                        <span className="text-xs text-slate-400 font-medium truncate self-center">
                          {t(item.descKey)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA card — dark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <div className="h-full rounded-2xl bg-slate-900 overflow-hidden relative flex flex-col">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-fuchsia-900/20 pointer-events-none" />

              <div className="relative z-10 p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-6">
                  <Pencil size={16} className="text-cyan-400" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                    {t('innovationDetails.ingredientLibrary.customHeader')}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-8 font-medium">
                  {t('innovationDetails.ingredientLibrary.customDesc')}
                </p>

                {/* Checklist */}
                <ul className="space-y-3 mb-10 flex-1">
                  {ctaChecks.map((itemKey, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check size={14} className="text-cyan-400 shrink-0" />
                      {t(itemKey)}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <Button
                    variant="contained"
                    fullWidth
                    className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 text-white font-black normal-case py-3 rounded-xl text-sm shadow-lg"
                    endIcon={<ArrowRight size={16} />}
                  >
                    {t('innovationDetails.ingredientLibrary.customFormulaBtn')}
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    className="border border-white/20 text-white hover:bg-white/10 font-bold normal-case py-3 rounded-xl text-sm"
                  >
                    {t('innovationDetails.ingredientLibrary.consultBtn')}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
