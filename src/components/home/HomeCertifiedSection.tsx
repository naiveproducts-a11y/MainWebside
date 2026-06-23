import { useState } from 'react';
import { Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, Eye, X, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { homeCertificates } from '../../config/homeCertifications';

// Load all files from the certification folder
const certFiles = import.meta.glob<{ default: string }>('../../assets/cetification/*.{pdf,jpg,png,jpeg}', { eager: true });

export default function HomeCertifiedSection() {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'awards' | 'standards'>('awards');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  // Process files
  const items = Object.entries(certFiles).map(([path, module]) => {
    const fileName = path.split('/').pop() || '';
    const url = module.default;
    const isPdf = fileName.toLowerCase().endsWith('.pdf');

    // Find custom certificate configuration
    const match = homeCertificates.find(c => c.fileName === fileName);

    // Use name from configuration, otherwise fallback to cleaned filename
    let displayName = match 
      ? (i18n.language === 'en' ? match.titleEn : match.titleTh)
      : fileName
        .replace(/\.[^/.]+$/, "") // Remove extension
        .replace(/_/g, " ")       // Replace underscores with spaces
        .replace(/รางวัล-มาตรฐาน-Naive/g, "Naive Certificate") // Friendlier placeholder
        .replace(/รางวัล/g, "Award")
        .trim();

    // Determine category based on config, otherwise determine based on filename
    let category: 'awards' | 'standards' = 'standards';
    if (match) {
      category = match.category === 'award' ? 'awards' : 'standards';
    } else if (
      fileName.includes('รางวัล') || 
      fileName.includes('Award') || 
      fileName.includes('Alumni') || 
      fileName.includes('แสตมป์')
    ) {
      category = 'awards';
    }

    return {
      url,
      fileName,
      displayName,
      isPdf,
      category
    };
  });

  // Filter items
  const filteredItems = items.filter(item => {
    return item.category === activeTab;
  });

  // Dynamically repeat items so there are enough for the marquee to scroll seamlessly on wide viewports
  const marqueeItems = [...filteredItems];
  while (marqueeItems.length > 0 && marqueeItems.length < 12) {
    marqueeItems.push(...filteredItems);
  }

  // Tabs translation or labels
  const tabLabels = {
    awards: i18n.language === 'en' ? 'Awards & Honors' : 'เกียรติบัตร & รางวัล',
    standards: i18n.language === 'en' ? 'Standards & Lab Reports' : 'มาตรฐาน & ผลทดสอบแล็บ'
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-slate-900 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-cyan-900 blur-3xl" />
      </div>

      <Container maxWidth="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 mb-4">
              <Award className="w-4 h-4 text-slate-800" />
              <span className="text-[10px] font-black text-slate-800 tracking-[0.2em] uppercase">
                {i18n.language === 'en' ? 'TRUSTED CREDENTIALS' : 'รางวัลและมาตรฐานที่รองรับ'}
              </span>
            </div>
            <Typography variant="h2" className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {i18n.language === 'en' ? 'Certifications & Awards' : 'ใบรับรองและรางวัลเกียรติยศ'}
            </Typography>
            <Typography variant="body1" className="text-slate-500 font-medium max-w-2xl mx-auto text-sm md:text-base">
              {i18n.language === 'en' 
                ? 'We guarantee our quality through national awards, laboratory testing certifications, and international standards.' 
                : 'รับประกันคุณภาพผลิตภัณฑ์สัตว์เลี้ยงของคุณด้วยรางวัลระดับประเทศ ใบรับรองผลทดสอบจากห้องแล็บมหาวิทยาลัย และมาตรฐานความปลอดภัยสากล'}
            </Typography>
          </motion.div>
        </div>

        {/* Minimal Tab Filters */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 border-b border-slate-100 pb-4">
          {(['awards', 'standards'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={`relative px-4 py-2 text-xs md:text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${
                activeTab === tab ? 'text-slate-950' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tabLabels[tab]}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTabUnderline" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" 
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Infinite Horizontal Loop Slider */}
        <div className="relative w-full overflow-hidden py-4 -mx-4 px-4">
          {/* Gradient Masks on Left and Right for Premium Fade Effect */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              gap: 1rem;
            }
            @media (min-width: 768px) {
              .animate-marquee {
                gap: 2rem;
              }
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />
          
          <div 
            className="animate-marquee"
            style={{ 
              animation: `marquee ${Math.max(marqueeItems.length * 6, 25)}s linear infinite`
            }}
          >
            {/* Duplicate list twice for perfect seamless wrapping */}
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={`${item.fileName}-${index}`}
                className="w-[200px] sm:w-[250px] md:w-[320px] flex-shrink-0 cursor-pointer group snap-start"
                onClick={() => {
                  if (!item.isPdf) {
                    setSelectedImage(item.url);
                    setSelectedTitle(item.displayName);
                  } else {
                    window.open(item.url, '_blank');
                  }
                }}
              >
                {/* Framed Certificate Container */}
                <div className="relative aspect-[3/4] h-full bg-white rounded-2xl p-3 md:p-4 border border-slate-200 shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] group-hover:border-slate-300 flex flex-col justify-between">
                  
                  {/* Outer Frame Border (Simulating realistic wood/metal framing mat) */}
                  <div className="flex-grow bg-slate-50 border border-slate-100 rounded-lg overflow-hidden flex items-center justify-center relative p-1.5 md:p-2 group-hover:bg-slate-100/50 transition-colors">
                    {item.isPdf ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 border border-slate-100/50 rounded-lg p-6 text-center select-none">
                        <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                          <FileText className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-1">
                          PDF Report
                        </span>
                        <span className="text-[9px] font-bold text-slate-400">
                          {i18n.language === 'en' ? 'Click to View' : 'คลิกเพื่อเปิดดูผลทดสอบ'}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.displayName}
                        loading="lazy"
                        className="w-full h-full object-contain filter group-hover:brightness-95 transition-all duration-300"
                      />
                    )}

                    {/* Action Overlay */}
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="w-4 h-4" />
                      </div>
                      {item.category !== 'awards' && (
                        <a
                          href={item.url}
                          download={item.fileName}
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-slate-800"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Info text */}
                  <div className="mt-3 md:mt-4 pt-0.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.category === 'awards' ? 'bg-amber-400' : 'bg-cyan-400'}`} />
                      <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        {item.category === 'awards' ? 'Award / เกียรติบัตร' : 'Standard / ใบรับรอง'}
                      </span>
                    </div>
                    <Typography variant="subtitle2" className="text-[10px] md:text-xs font-black text-slate-800 line-clamp-2 leading-tight">
                      {item.displayName}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Lightbox Zoom Dialog Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt={selectedTitle} 
                className="w-auto h-auto max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/15"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
