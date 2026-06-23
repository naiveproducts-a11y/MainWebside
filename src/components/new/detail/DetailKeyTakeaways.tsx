import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Lightbulb, ExternalLink, Facebook, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DetailKeyTakeawaysProps {
  keyTakeaways?: string[];
  sourceUrl?: string;
}

export default function DetailKeyTakeaways({ keyTakeaways, sourceUrl }: DetailKeyTakeawaysProps) {
  const { i18n } = useTranslation();
  // Use article-specific takeaways if provided, otherwise fall back to defaults
  const items = keyTakeaways && keyTakeaways.length > 0 ? keyTakeaways : undefined;

  if (!items) return null;

  return (
    <section className="py-14 bg-slate-50">
      <Container maxWidth="lg">
        <div>

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Lightbulb size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5">
                Summary
              </p>
              <h2 className="text-xl font-black text-slate-900 tracking-tight leading-none">
                Key Takeaways
              </h2>
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-sm"
          >
            {/* Top gradient strip */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400" />

            <div className="p-7 space-y-4">
              {items.map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.07 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Text */}
                  <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* News Source Premium Slate Block */}
          {sourceUrl && (() => {
            const cleanUrl = sourceUrl.trim();
            const isFacebook = cleanUrl.toLowerCase().includes('facebook.com');
            const displayLabel = isFacebook 
              ? 'Facebook: Naive Innova' 
              : (() => {
                  try {
                    return new URL(cleanUrl).hostname.replace('www.', '');
                  } catch (e) {
                    return cleanUrl;
                  }
                })();

            return (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 flex justify-start"
              >
                <a
                  href={cleanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3.5 px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-slate-600 hover:text-slate-800 transition-all duration-300 shadow-sm group no-underline"
                >
                  {/* Dynamic Icon */}
                  {isFacebook ? (
                    <Facebook size={18} className="text-[#1877F2] flex-shrink-0" />
                  ) : (
                    <Globe size={18} className="text-cyan-500 flex-shrink-0" />
                  )}

                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span className="text-slate-400">
                      {i18n.language === 'en' ? 'News Source:' : 'ที่มาของข่าว:'}
                    </span>
                    <span className="text-slate-700 group-hover:text-cyan-600 transition-colors underline decoration-dotted decoration-slate-300 group-hover:decoration-cyan-400">
                      {displayLabel}
                    </span>
                  </div>

                  <ExternalLink size={14} className="text-slate-400 group-hover:text-slate-600 transition-colors opacity-70" />
                </a>
              </motion.div>
            );
          })()}

        </div>
      </Container>
    </section>
  );
}
