import { useNavigate } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { catalogCategories } from '../config/catalog';
import { contactButtons } from '../config/services';

export default function ProductCatalogSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCategoryClick = (index: number) => {
    switch (index) {
      case 0:
        navigate('/cleaning/bio-shampoo');
        break;
      case 1:
        navigate('/spray/coat-antibac-spray');
        break;
      case 2:
        navigate('/skin/skin-repair-gel');
        break;
      case 3: {
        const element = document.getElementById('contact-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      }
    }
  };

  const handleItemClick = (catIndex: number, itemId: string) => {
    let base = '';
    switch (catIndex) {
      case 0: base = 'cleaning'; break;
      case 1: base = 'spray'; break;
      case 2: base = 'skin'; break;
    }
    navigate(`/${base}/${itemId}`);
  };

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden w-full">
      <div className="w-full px-0">
        <Container maxWidth="lg">
          <div className="mb-24 relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.3em] mb-4 block text-center">
                {t('catalog.badge')}
              </Typography>
              <Typography variant="h2" className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight text-center">
                {t('catalog.title')}
              </Typography>
              <Typography variant="body1" className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
                {t('catalog.subtitle')}
              </Typography>
            </motion.div>
          </div>
        </Container>

        <Container maxWidth="lg" className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {catalogCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.8 }}
                onClick={() => handleCategoryClick(catIndex)}
                className="group relative cursor-pointer rounded-[16px] md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700"
              >
                {/* Full Bleed Image */}
                <img
                  src={category.img}
                  alt={t(category.titleKey)}
                  className="w-full h-full object-cover aspect-square md:aspect-auto transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </Container>

        <Container maxWidth="lg" className="mb-16">
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <Typography variant="overline" className="text-cyan-600 font-bold tracking-[0.3em] mb-4 block uppercase text-center">
                Product Catalog
              </Typography>
              <Typography variant="h3" className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight max-w-3xl mx-auto leading-snug text-center">
                {t('catalog.sectionTitle')}
              </Typography>
            </motion.div>
          </div>
        </Container>



        {/* Categories & Products */}
        <div className="space-y-0">
          {catalogCategories.map((category, catIndex) => (
            <div key={catIndex}>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0">
                {category.items.map((item, itemIndex) => (
                  <motion.a
                    key={itemIndex}
                    href={(() => {
                      let base = '';
                      switch (catIndex) {
                        case 0: base = 'cleaning'; break;
                        case 1: base = 'spray'; break;
                        case 2: base = 'skin'; break;
                      }
                      return `/${base}/${item.id}`;
                    })()}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1, duration: 0.6 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(catIndex, item.id);
                    }}
                    className="group relative cursor-pointer rounded-none overflow-hidden hover:z-10 transition-all duration-700 aspect-[4/5] bg-white block"
                  >
                    {/* Full Bleed Image */}
                    <img
                      src={item.img}
                      alt={t(item.nameKey)}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                      <Typography className="font-black text-white drop-shadow-2xl text-[22px] uppercase tracking-[0.1em] leading-tight">
                        {t(item.nameKey)}
                      </Typography>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Container maxWidth="lg" className="mt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactButtons.map((btn) => (
              <motion.a
                key={btn.id}
                href={btn.href}
                target={btn.target}
                rel={btn.target === '_blank' ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -5 }}
                className={`group relative rounded-2xl md:rounded-[24px] overflow-hidden cursor-pointer transition-all duration-300 ${btn.gridClass}`}
              >
                <img
                  src={btn.img}
                  alt={btn.alt}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </motion.a>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
