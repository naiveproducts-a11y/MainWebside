import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import type { ContentBlock } from '../../../config/newsArticles';

interface DetailContentProps {
  lead: string;
  images: string[];
  title: string;
  body: ContentBlock[];
}

export default function DetailContent({ lead, images, title, body }: DetailContentProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const isOpen = lightboxIdx !== null;

  const openAt = (idx: number) => setLightboxIdx(idx);
  const close = () => setLightboxIdx(null);

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIdx((i) => (i === null ? 0 : (i + 1) % images.length));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <section className="py-14 bg-white">
      <Container maxWidth="lg">
        <div>

          {/* Lead paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 pl-5 border-l-4"
            style={{ borderImage: 'linear-gradient(to bottom, #06b6d4, #d946ef) 1' }}
          >
            <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
              {lead}
            </p>
          </motion.div>

          {/* Photo gallery */}
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`mb-12 grid gap-4 ${
                images.length === 1
                  ? 'grid-cols-1'
                  : images.length === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-2 md:grid-cols-3'
              }`}
            >
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => openAt(i)}
                  className={`relative group overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-slate-50 cursor-zoom-in ${
                    images.length === 1 ? 'aspect-video' : 'aspect-square'
                  }`}
                >
                  <img
                    src={src}
                    alt={`${title} — ภาพที่ ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <ZoomIn size={18} className="text-slate-700" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Body blocks */}
          <div className="space-y-8">
            {body.map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {block.type === 'paragraph' && (
                  <p className="text-[17px] text-slate-600 leading-[1.85]">{block.text}</p>
                )}
                {block.type === 'heading' && (
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-12 mb-2">
                    {block.text}
                  </h2>
                )}
                {block.type === 'quote' && (
                  <div className="my-10 relative">
                    <div className="absolute -left-2 top-0 w-1 h-full rounded-full bg-gradient-to-b from-cyan-400 to-fuchsia-400" />
                    <div className="pl-8 pr-6 py-6 bg-gradient-to-br from-cyan-50/60 to-fuchsia-50/40 rounded-2xl border border-slate-100">
                      <Quote size={20} className="text-cyan-400 mb-3" />
                      <p className="text-lg text-slate-700 font-semibold leading-relaxed italic">
                        {block.text}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </Container>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {isOpen && lightboxIdx !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[1300] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Image container — stop propagation so clicking image doesn't close */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <img
                src={images[lightboxIdx]}
                alt={`${title} — ภาพที่ ${lightboxIdx + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                  <span className="text-white text-sm font-bold">
                    {lightboxIdx + 1} / {images.length}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 text-white"
            >
              <X size={20} />
            </button>

            {/* Prev / Next — only if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 text-white"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        i === lightboxIdx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
