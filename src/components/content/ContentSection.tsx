import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, Send, Facebook, Youtube } from 'lucide-react';

const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function ContentSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <Container maxWidth="lg" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {/* Eyebrow */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-600">
              {t('contentPage.getInTouch')}
            </span>
          </div>

          <Typography variant="h2" className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t('contentPage.titlePrefix')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500">
              {t('contentPage.titleSpan')}
            </span>
          </Typography>
          <Typography variant="body1" className="text-slate-500 font-medium">
            {t('contentPage.subtitle')}
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white border-2 border-slate-100 rounded-[32px] p-8 md:p-10 shadow-xl shadow-slate-200/50"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-slate-800 uppercase tracking-widest pl-1">
                    {t('contentPage.labelName')} <span className="text-fuchsia-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-slate-800 uppercase tracking-widest pl-1">
                    {t('contentPage.labelEmail')} <span className="text-fuchsia-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest pl-1">
                  {t('contentPage.labelSubject')} <span className="text-fuchsia-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-800 appearance-none focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors cursor-pointer">
                    <option value="" disabled selected>{t('contentPage.selectSubject')}</option>
                    <option value="oem">{t('contentPage.optOem')}</option>
                    <option value="formulation">{t('contentPage.optRd')}</option>
                    <option value="factory">{t('contentPage.optFactory')}</option>
                    <option value="other">{t('contentPage.optOther')}</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-800 uppercase tracking-widest pl-1">
                  {t('contentPage.labelDetail')} <span className="text-fuchsia-500">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder={t('contentPage.placeholderDetail')}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-cyan-400 focus:bg-white transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full lg:w-auto self-start bg-slate-900 hover:bg-cyan-600 text-white font-bold text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group"
              >
                {t('contentPage.btnSend')}
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-[10px] text-slate-400 font-medium mt-1">
                {t('contentPage.confidentialNote')}
              </p>
            </form>
          </motion.div>

          {/* ── Right: Contact Info (Sidebar) ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Box 1: LINE */}
            <a href="https://line.me/R/ti/p/@naivepetcare" target="_blank" rel="noopener noreferrer" className="group block bg-white border-2 border-slate-100 rounded-2xl p-6 hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                    LINE OFFICIAL
                  </div>
                  <div className="text-xl font-black text-slate-900 group-hover:text-cyan-600 transition-colors">
                    @naivepetcare
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {t('contentPage.lineResponse')}
                  </div>
                </div>
              </div>
            </a>

            {/* Box 2: Phone */}
            <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 flex items-start gap-5 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <Phone size={20} fill="currentColor" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                  {t('contentPage.labelPhone')}
                </div>
                <div className="text-lg font-black text-slate-900 leading-tight">
                  087-714-9262
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  094-888-1184 · 052-102-588
                </div>
                <div className="mt-3 inline-block px-3 py-1 bg-slate-50 rounded text-[10px] text-slate-500 font-bold uppercase tracking-wider border border-slate-100">
                  {t('contentPage.workingHours')}
                </div>
              </div>
            </div>

            {/* Box 3: Email */}
            <a href="mailto:info@naiveinnova.net" className="group block bg-white border-2 border-slate-100 rounded-2xl p-6 flex items-start gap-5 hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={20} fill="currentColor" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                  {t('contentPage.labelEmail')}
                </div>
                <div className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  info@naiveinnova.com
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1.5">
                  {t('contentPage.emailResponse')}
                </div>
              </div>
            </a>

            {/* Box 4: Social Media Shortcuts */}
            <div className="grid grid-cols-3 gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-blue-500 group transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-2">
                  <Facebook size={18} fill="currentColor" className="stroke-none" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">Facebook</span>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-black group transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 group-hover:text-black transition-colors mb-2">
                  <TikTokIcon size={18} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover:text-black transition-colors">TikTok</span>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-red-500 group transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors mb-2">
                  <Youtube size={18} fill="currentColor" className="stroke-none" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover:text-red-500 transition-colors">YouTube</span>
              </a>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
