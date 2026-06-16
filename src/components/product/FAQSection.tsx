import React, { useState } from 'react';
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { productFaqs } from '../../config/product';

export default function FAQSection() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container maxWidth="lg">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-8 shadow-sm">
               <span className="text-sm font-bold text-cyan-700 tracking-[0.2em] uppercase">{t('productPage.faq.badge')}</span>
            </div>
            
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight uppercase">
              {t('productPage.faq.title')}
            </Typography>

            <Typography variant="body1" className="text-lg md:text-xl text-slate-500 font-medium">
              {t('productPage.faq.subtitle')}
            </Typography>
          </motion.div>
        </div>

        {/* Accordion Component */}
        <div className="max-w-4xl mx-auto">
          {productFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <Accordion
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                elevation={0}
                className={`
                  before:hidden bg-white border transition-all duration-300 rounded-[20px] overflow-hidden
                  ${expanded === faq.id ? 'border-cyan-200 shadow-xl shadow-cyan-500/10' : 'border-slate-100 shadow-sm'}
                `}
                sx={{
                  '&:before': { display: 'none' },
                  borderRadius: '20px !important',
                  mb: 2
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                      ${expanded === faq.id ? 'bg-cyan-500 rotate-180' : 'bg-slate-50'}
                    `}>
                      {expanded === faq.id ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  }
                  className="px-6 py-4 md:px-10"
                >
                  <div className="flex items-center gap-6">
                     <div className={`
                       hidden md:flex w-12 h-12 rounded-2xl items-center justify-center flex-shrink-0 transition-colors duration-500
                       ${expanded === faq.id ? 'bg-cyan-50' : 'bg-slate-50'}
                     `}>
                        <HelpCircle className={`w-6 h-6 ${expanded === faq.id ? 'text-cyan-600' : 'text-slate-400'}`} />
                     </div>
                     <Typography className={`text-lg md:text-xl font-black tracking-tight transition-colors duration-300 ${expanded === faq.id ? 'text-cyan-600' : 'text-slate-900'}`}>
                       {t(faq.questionKey)}
                     </Typography>
                  </div>
                </AccordionSummary>
                
                <AccordionDetails className="px-6 pb-10 md:px-10 md:pb-12 pt-0">
                  <div className="md:pl-18">
                    <Typography className="text-slate-500 text-lg md:text-xl leading-relaxed whitespace-pre-line font-medium">
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

