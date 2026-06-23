import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';
import nawinAvatar from '../../../assets/new/nawin-avatar.jpg';
import { useTranslation } from 'react-i18next';

export default function DetailProfile() {
  const { t, i18n } = useTranslation();
  return (
    <section className="py-14 bg-white">
      <Container maxWidth="lg">
        <div>

          {/* Divider accent */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-100" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
                {t('newsDetail.by')}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-100" />
          </div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-3xl overflow-hidden p-8 flex flex-col sm:flex-row items-center sm:items-start gap-7"
          >
            {/* Background orb */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-50/80 to-fuchsia-50/40 rounded-full blur-3xl pointer-events-none" />

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex-shrink-0"
            >
              {/* Decorative ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 opacity-40 blur-sm" />
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={nawinAvatar}
                  alt="Sgt. Nawin Worawek"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left relative z-10 w-full">
              {/* Name */}
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1">
                Sgt. Nawin Worawek
              </h3>

              {/* Bio */}
              <p className="text-sm text-slate-500 font-medium leading-snug mb-1">
                {t('newsDetail.authorSubtitle')}
              </p>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 mt-2 mb-5 px-3 py-1.5 bg-white border border-slate-100 rounded-xl shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500" />
                <span className="text-[12px] font-bold text-slate-500">
                  {t('newsDetail.authorTitle')}
                </span>
              </div>

              {/* Call to Actions Container */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-1 w-full">
                {/* LinkedIn Follow Button */}
                <motion.a
                  href="https://www.linkedin.com/in/nawin-worawek-39a169277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#0A66C2] hover:bg-[#0077B5] text-white font-bold text-sm transition-colors duration-200 shadow-lg shadow-blue-500/10 no-underline"
                >
                  <Linkedin size={16} />
                  {i18n.language === 'en' ? 'Follow LinkedIn' : 'ติดตาม LinkedIn'}
                  <ExternalLink size={12} className="opacity-70" />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
