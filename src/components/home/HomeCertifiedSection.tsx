import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, FileText, X, Download, ZoomIn } from 'lucide-react';
import { homeCertificates } from '../../config/homeCertifications';
import type { HomeCertificate } from '../../config/homeCertifications';

export default function HomeCertifiedSection() {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'all' | 'award' | 'standard' | 'research'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [selectedCert, setSelectedCert] = useState<HomeCertificate | null>(null);

  const isEn = i18n.language === 'en';

  // Filter certificates
  const filteredCerts = homeCertificates.filter((cert) => {
    if (activeTab === 'all') return true;
    return cert.category === activeTab;
  });

  const hasMore = filteredCerts.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'award':
        return isEn ? 'Award / Success' : 'รางวัลความสำเร็จ';
      case 'standard':
        return isEn ? 'Standard Certification' : 'การรับรองมาตรฐาน';
      case 'research':
        return isEn ? 'Research & Lab Test' : 'ผลทดสอบและงานวิจัย';
      default:
        return '';
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 border border-slate-300/30 mb-6 shadow-sm">
              <Award className="w-4 h-4 text-cyan-600" />
              <span className="text-xs font-black text-slate-700 tracking-[0.2em] uppercase">
                {isEn ? 'CERTIFICATION & AWARDS' : 'เกียรติบัตรและมาตรฐานการรับรอง'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              {isEn ? 'Our Credentials & Awards' : 'หอเกียรติยศและใบรับรองคุณภาพ'}
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              {isEn
                ? 'Naive Innova operates under global manufacturing standards, research backed by top veterinary universities, and national innovator awards.'
                : 'นาอีฟ อินโนว่า มุ่งเน้นสร้างสรรค์นวัตกรรมผ่านการรับรองมาตรฐานการผลิตระดับสากล ผลทดสอบทางห้องแล็บจากมหาวิทยาลัยชั้นนำ และรางวัลการันตีในระดับชาติ'}
            </p>
          </motion.div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-12">
          {[
            { id: 'all', label: isEn ? 'All' : 'ทั้งหมด', icon: Award },
            { id: 'award', label: isEn ? 'Awards' : 'รางวัลเกียรติยศ', icon: Trophy },
            { id: 'standard', label: isEn ? 'Standards' : 'ใบรับรองมาตรฐาน', icon: Award },
            { id: 'research', label: isEn ? 'Lab Tests' : 'ผลทดสอบทางแล็บ', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setVisibleCount(8); // Reset count on tab change
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? 'bg-slate-950 text-white border-slate-950 shadow-md shadow-slate-900/10'
                    : 'bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Certificate Wall Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.slice(0, visibleCount).map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer"
              >
                {/* Framed Certificate Container */}
                <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col h-full">
                  
                  {/* Photo Frame */}
                  <div className="relative aspect-[3/4] bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden flex items-center justify-center p-3 group-hover:bg-slate-100/50 transition-colors">
                    <img
                      src={`/certification/${cert.fileName}`}
                      alt={isEn ? cert.titleEn : cert.titleTh}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Lightbox Trigger Icon overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-white/90 backdrop-blur rounded-full text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="mt-5 flex flex-col flex-grow px-1">
                    <span className="text-[9px] font-black text-cyan-600 uppercase tracking-widest mb-1.5">
                      {getCategoryLabel(cert.category)}
                    </span>
                    <h3 className="text-xs font-bold text-slate-800 line-clamp-2 leading-relaxed">
                      {isEn ? cert.titleEn : cert.titleTh}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-8 py-4 bg-white border border-slate-200 text-slate-800 font-black text-xs tracking-widest uppercase rounded-full hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300 shadow-sm"
            >
              {isEn ? 'Load More' : 'โหลดเพิ่มเพิ่มเติม'}
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-4xl w-full max-h-[90vh] rounded-[2.5rem] p-6 md:p-8 flex flex-col shadow-2xl relative border border-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-950 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="flex-grow flex flex-col md:flex-row gap-8 overflow-hidden mt-6">
                
                {/* Left: Framed Large Image */}
                <div className="flex-grow bg-slate-50 border border-slate-200/50 rounded-2xl p-4 flex items-center justify-center overflow-hidden max-h-[50vh] md:max-h-full md:w-3/5">
                  <img
                    src={`/certification/${selectedCert.fileName}`}
                    alt={isEn ? selectedCert.titleEn : selectedCert.titleTh}
                    className="max-w-full max-h-full object-contain rounded shadow-lg"
                  />
                </div>

                {/* Right: Info Area */}
                <div className="flex flex-col justify-between md:w-2/5 md:py-4">
                  <div>
                    <span className="text-[10px] font-black text-cyan-600 uppercase tracking-widest mb-3 inline-block">
                      {getCategoryLabel(selectedCert.category)}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 leading-snug mb-6">
                      {isEn ? selectedCert.titleEn : selectedCert.titleTh}
                    </h3>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 mt-6">
                    <a
                      href={`/certification/${selectedCert.fileName}`}
                      download={selectedCert.fileName}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-slate-950 text-white hover:bg-cyan-600 font-black text-xs tracking-widest uppercase rounded-xl transition-all"
                    >
                      <Download className="w-4 h-4" />
                      {isEn ? 'Download Image' : 'ดาวน์โหลดรูปภาพ'}
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="py-4 bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold text-xs tracking-widest uppercase rounded-xl transition-all"
                    >
                      {isEn ? 'Close' : 'ปิดหน้าต่าง'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
