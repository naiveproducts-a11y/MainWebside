import { useState } from 'react';
import { Typography, Container, Modal, Box, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleDollarSign, Package, Clock, Box as BoxIcon, Tag, Maximize2, Download, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Product } from '../../types/product';

const productImages = import.meta.glob<{ default: string }>('../../assets/eachproduct/*.{jpeg,jpg,png,svg}', { eager: true });

export default function HeroSection({ product }: { product: Product }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Helper to get product image URL
  const getProductImage = () => {
    const imageName = product.image;
    const entries = Object.entries(productImages);

    // Look for image matching the filename from JSON
    const match = entries.find(([path]) => path.endsWith(imageName));

    if (match) {
      return match[1].default;
    }

    // Fallback to Unsplash if not found
    return "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop";
  };

  const handleDownload = async () => {
    try {
      const imgUrl = getProductImage();
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${product.id || 'product'}-full.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const isEn = currentLang === 'en';
  const category = isEn ? product.categoryEn : product.categoryTh;
  const title = isEn ? product.nameEn : product.name;
  const desc = isEn ? product.pitchEn : product.pitch;

  // Custom hero features based on product
  const heroFeatures = [
    {
      icon: CircleDollarSign,
      title: isEn ? 'Estimated Cost' : 'ต้นทุนโดยประมาณ',
      value: `${product.price} ${isEn ? (product.unitEn || product.unit) : product.unit}`,
      colorClass: 'from-blue-100 to-cyan-50 text-blue-600'
    },
    {
      icon: Package,
      title: isEn ? 'Minimum Order (MOQ)' : 'ขั้นต่ำการผลิต (MOQ)',
      value: isEn ? (product.moqEn || product.moq) : product.moq,
      colorClass: 'from-emerald-100 to-teal-50 text-emerald-600'
    },
    {
      icon: Clock,
      title: isEn ? 'Lead Time' : 'ระยะเวลาผลิต',
      value: isEn ? (product.leadTimeEn || product.leadTime) : product.leadTime,
      colorClass: 'from-orange-100 to-amber-50 text-orange-600'
    },
    {
      icon: BoxIcon,
      title: isEn ? 'Packaging Types' : 'รูปแบบบรรจุภัณฑ์',
      value: isEn ? 'All Types Package' : 'ทุกรูปแบบบรรจุภัณฑ์',
      colorClass: 'from-fuchsia-100 to-purple-50 text-fuchsia-600'
    }
  ];

  return (
    <section className="relative pt-18 pb-18 lg:pt-18 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-b from-cyan-50 to-fuchsia-50/30 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Category */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-6 self-start">
              <Tag className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-bold text-cyan-700 tracking-widest uppercase">{category}</span>
            </div>

            {/* Title */}
            <div className="mb-5">
              <Typography variant="h1" className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                {title}
              </Typography>
            </div>

            {/* Description */}
            <div className="mb-5">
              <Typography variant="body1" className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                {desc}
              </Typography>
            </div>

            {/* 2x2 Grid Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {heroFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-4 p-5 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 shadow-inner ${feature.colorClass}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">{feature.title}</div>
                    <div className="text-sm text-slate-500 font-medium leading-snug">{feature.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end relative"
          >
            {/* Decorative background blocks */}
            <div className="absolute inset-0 bg-cyan-100 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-sm" />
            <div className="absolute inset-0 bg-fuchsia-100 rounded-3xl transform -rotate-2 scale-105 opacity-50 blur-sm" />

            <div className="relative w-full aspect-square md:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 z-10 group cursor-pointer p-8">
              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <IconButton
                  onClick={() => setIsPreviewOpen(true)}
                  className="bg-white/80 backdrop-blur-md hover:bg-white text-slate-800 shadow-lg"
                >
                  <Maximize2 className="w-5 h-5" />
                </IconButton>
                <IconButton
                  onClick={handleDownload}
                  className="bg-white/80 backdrop-blur-md hover:bg-white text-slate-800 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                </IconButton>
              </div>

              {/* Mockup image */}
              <img
                src={getProductImage()}
                alt={title}
                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                onClick={() => setIsPreviewOpen(true)}
              />

              {/* Glassmorphic overlay for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
                <div className="inline-block px-4 py-1.5 backdrop-blur-md bg-white/20 border border-white/30 rounded-full">
                  <span className="text-white font-semibold tracking-widest text-sm uppercase drop-shadow-md text-nowrap">{title}</span>
                </div>
              </div>
            </div>

            {/* Premium Preview Modal */}
            <Modal
              open={isPreviewOpen}
              onClose={() => setIsPreviewOpen(false)}
              disableScrollLock
              className="flex items-center justify-center p-4"
            >
              <Box className="relative max-w-5xl w-full outline-none focus:outline-none">
                <AnimatePresence>
                  {isPreviewOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="relative bg-white rounded-3xl shadow-2xl border border-white/20"
                    >
                      {/* Close Button - Outside overflow container to prevent clipping */}
                      <div className="absolute top-4 right-4 z-[60]">
                        <IconButton
                          onClick={() => setIsPreviewOpen(false)}
                          className="bg-black/20 hover:bg-black/40 text-white backdrop-blur-md p-2 transition-all duration-300 hover:scale-110"
                        >
                          <X className="w-6 h-6" />
                        </IconButton>
                      </div>

                      {/* Content Container with overflow hidden */}
                      <div className="aspect-square md:aspect-video w-full rounded-3xl overflow-hidden relative">
                        <img
                          src={getProductImage()}
                          alt={title}
                          className="w-full h-full object-contain bg-slate-50"
                        />

                        {/* Info Overlay - Now inside the overflow-hidden container */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent z-10">
                          <Typography variant="h6" className="text-white font-bold mb-1">{title}</Typography>
                          <Typography variant="body2" className="text-white/80">{category}</Typography>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Modal>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

