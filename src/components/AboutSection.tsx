import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import about1 from '../assets/about/about1.webp';
import about2 from '../assets/about/about2.webp';
import about3 from '../assets/about/about3.webp';
import about4 from '../assets/about/about4.webp';

export default function AboutSection() {
  const { t } = useTranslation();

  const aboutImages = [
    { img: about1, key: "tech1" },
    { img: about2, key: "tech2" },
    { img: about3, key: "tech3" },
    { img: about4, key: "tech4" }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements (Text focused) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/20 rounded-full blur-3xl" />

      <Container maxWidth="lg" className="relative z-10">
        {/* 1. Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.2em] mb-4 block">
              {t('about.badge')}
            </Typography>
            <Typography variant="h2" className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              {t('about.title')}
            </Typography>
            <Typography variant="h5" className="text-xl md:text-2xl text-slate-500 font-medium">
              {t('about.tagline')}
            </Typography>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 mx-auto mt-8 rounded-full" />
          </motion.div>
        </div>

        {/* 2. Main Narrative Section (Balanced 50/50 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <Typography variant="h4" className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-cyan-500 pl-6">
                The Lab-to-Market Spin-off
              </Typography>
              <Typography variant="body1" className="text-base text-slate-600 leading-relaxed indent-8">
                {t('about.context')}
              </Typography>
            </div>

            <div>
              <Typography variant="h4" className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-fuchsia-500 pl-6">
                {t('about.technologyTitle')}
              </Typography>
              <Typography variant="body1" className="text-base text-slate-600 leading-relaxed indent-8">
                {t('about.technologyDesc')}
              </Typography>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Tech Grid (Full Image Cards) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {aboutImages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white rounded-[40px] overflow-hidden aspect-square group cursor-pointer"
              >
                {/* Full-Bleed Background Image */}
                <img
                  src={item.img}
                  alt={t(`about.${item.key}`)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />


              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Purpose / Closing Section */}
        <div className="text-center max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" className="italic font-light text-slate-500 mb-6 leading-snug">
              &ldquo;{t('about.closing')}&rdquo;
            </Typography>
            <Typography variant="overline" className="text-slate-400 font-bold tracking-widest text-sm">
              NAIVE INNOVA - THE FUTURE OF PET CARE
            </Typography>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
