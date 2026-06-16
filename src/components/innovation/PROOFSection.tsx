import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function PROOFSection() {
  const { t } = useTranslation();

  const statBar = [
    { value: '50+', label: t('proofSection.stat1Label'), sub: t('proofSection.stat1Sub') },
    { value: '100+', label: t('proofSection.stat2Label'), sub: t('proofSection.stat2Sub') },
    { value: '3', label: t('proofSection.stat3Label'), sub: t('proofSection.stat3Sub') },
    { value: '≤0.097%', label: t('proofSection.stat4Label'), sub: t('proofSection.stat4Sub') },
    { value: '24+', label: t('proofSection.stat5Label'), sub: t('proofSection.stat5Sub') },
  ];

  const labRows = [
    {
      lab: t('proofSection.labKu'),
      method: 'Broth Microdilution',
      methodSub: 'CLSI M07-A11',
      target: 'MRSP, MSSP,\nP. aeruginosa, E. coli',
      result: t('proofSection.resultK1'),
    },
    {
      lab: t('proofSection.labKu'),
      method: 'Anti-Yeast',
      methodSub: 'CLSI M27-A3',
      target: 'Malassezia pachydermatis',
      result: t('proofSection.resultK2'),
    },
    {
      lab: t('proofSection.labPartner'),
      method: t('proofSection.methodP1'),
      methodSub: '',
      target: 'Skin infection (Canine)',
      result: t('proofSection.resultP1'),
    },
    {
      lab: t('proofSection.labPartner'),
      method: t('proofSection.methodP2'),
      methodSub: '',
      target: 'Fungal skin (Canine/Feline)',
      result: t('proofSection.resultP2'),
    },
    {
      lab: t('proofSection.labPartner'),
      method: t('proofSection.methodP3'),
      methodSub: '',
      target: 'Ocular safety (Feline)',
      result: t('proofSection.resultP3'),
    },
    {
      lab: t('proofSection.labInhouse'),
      method: 'Stability Test',
      methodSub: '',
      target: 'All formulas',
      result: t('proofSection.resultI1'),
    },
  ];

  const partners = [
    { name: t('proofSection.partnerKu'), tags: 'Challenge Testing · Microbiology' },
    { name: t('proofSection.partnerVet'), tags: 'Clinical Testing · Animal Safety' },
    { name: t('proofSection.partnerNanotec'), tags: 'Technology Partner · Nano R&D' },
    { name: t('proofSection.partnerInhouse'), tags: 'Stability · Quality Control' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-50/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-5">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Scientific Proof</span>
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            {t('proofSection.claimPrefix')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
              {t('proofSection.claimGradient')}
            </span>
          </Typography>
          <p className="text-slate-400 text-sm font-medium max-w-2xl leading-relaxed">
            {t('proofSection.claimSubtitle')}
          </p>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-slate-100 border-2 border-slate-100 rounded-2xl overflow-hidden mb-10 bg-white"
        >
          {statBar.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 py-6 hover:bg-cyan-50/40 transition-colors duration-200 cursor-default group">
              <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors duration-200 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] font-black text-slate-700">{stat.label}</div>
              <div className="text-[10px] text-slate-400 font-medium">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Lab test table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border-2 border-slate-100 overflow-hidden mb-10"
        >
          {/* Table header */}
          <div className="grid grid-cols-4 bg-slate-900 px-6 py-3">
            {[
              t('proofSection.tableHeaderLab'),
              t('proofSection.tableHeaderMethod'),
              t('proofSection.tableHeaderTarget'),
              t('proofSection.tableHeaderResult')
            ].map((h, i) => (
              <div key={i} className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                {h}
              </div>
            ))}
          </div>

          {/* Table rows */}
          <div className="divide-y divide-slate-50">
            {labRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 px-6 py-4 hover:bg-slate-50 transition-colors duration-150 group"
              >
                <div className="text-sm font-black text-slate-800 pr-4">{row.lab}</div>
                <div className="pr-4">
                  <div className="text-sm font-bold text-slate-700">{row.method}</div>
                  {row.methodSub && (
                    <div className="text-[11px] text-slate-400 font-medium">{row.methodSub}</div>
                  )}
                </div>
                <div className="text-sm text-slate-500 font-medium pr-4 whitespace-pre-line">
                  {row.target}
                </div>
                <div className="pr-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-black text-cyan-600 uppercase tracking-wider mb-0.5">PASS</div>
                      <div className="text-xs text-slate-500 font-medium">{row.result}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lab Partners */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 mb-5">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600">Lab Partners</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-100 rounded-2xl px-5 py-5 text-center hover:border-cyan-200 hover:shadow-md transition-all duration-200"
              >
                <div className="font-black text-slate-900 text-sm mb-2">{p.name}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-relaxed">
                  {p.tags}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
