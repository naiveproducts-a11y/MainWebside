import { useState } from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '../../config/faq';

export default function FAQSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration for more depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_70%)] pointer-events-none" />
      <Container maxWidth="lg" className="relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-100 mb-8 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Knowledge Base</span>
            </div>

            {/* Large Premium Title */}
            <Typography
              variant="h2"
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-10"
            >
              FREQ<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">UENTLY</span>
              <br />
              ASKED QUESTIONS
            </Typography>

            {/* Bottom border indicator */}
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Accordion
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                elevation={0}
                disableGutters
                className={`mb-4 border border-slate-100 rounded-[2rem] overflow-hidden before:hidden transition-all duration-500 ${expanded === faq.id ? 'border-cyan-200 shadow-xl shadow-cyan-500/5' : 'hover:border-slate-200'
                  }`}
              >
                <AccordionSummary
                  expandIcon={
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${expanded === faq.id ? 'bg-cyan-500 text-white' : 'bg-slate-50 text-slate-400'
                      }`}>
                      {expanded === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  }
                  className="px-6 md:px-8 py-3 md:py-4"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Leading ? Icon */}
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                      <HelpCircle size={20} />
                    </div>
                    <Typography
                      className={`font-bold transition-colors duration-300 ${expanded === faq.id ? 'text-cyan-600' : 'text-slate-700'
                        }`}
                    >
                      {t(faq.questionKey)}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className="px-6 md:px-8 pb-8 md:pb-10 pt-0">
                  <div className="pl-14 md:pl-16">
                    <div className="w-full h-px bg-slate-100 mb-6" />
                    <Typography
                      className="text-slate-500 font-medium leading-relaxed whitespace-pre-line"
                      variant="body1"
                    >
                      {t(faq.answerKey)}
                    </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
