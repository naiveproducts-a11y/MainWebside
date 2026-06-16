import { useState } from 'react';
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../config/faq';

export default function FAQSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container maxWidth="lg">
        {/* Section 1: FAQ Accordions */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.2em] mb-4 block">
                {t('faq.badge')}
              </Typography>
              <Typography variant="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                {t('faq.title')}
              </Typography>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto rounded-full" />
            </motion.div>
          </div>

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
                  className={`mb-4 border border-slate-100 rounded-[20px] overflow-hidden before:hidden transition-all duration-300 ${expanded === faq.id ? 'border-cyan-200 shadow-xl shadow-cyan-500/5' : 'hover:border-slate-200'
                    }`}
                >
                  <AccordionSummary
                    expandIcon={
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${expanded === faq.id ? 'bg-cyan-500 text-white rotate-0' : 'bg-slate-50 text-slate-400 rotate-180'
                        }`}>
                        {expanded === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    }
                    className="px-6 md:px-8 py-2 md:py-4"
                  >
                    <Typography
                      className={`font-bold transition-colors duration-300 ${expanded === faq.id ? 'text-cyan-600' : 'text-slate-800'
                        }`}
                    >
                      {t(faq.questionKey)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                    <Typography
                      className="text-slate-600 leading-relaxed whitespace-pre-line"
                      variant="body1"
                    >
                      {t(faq.answerKey)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}