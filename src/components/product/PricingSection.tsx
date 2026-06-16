import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Product } from '../../types/product';

export default function PricingSection({ product }: { product: Product }) {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const isModeB = product.pricingMode === 'B';
  const headerKeys = isModeB
    ? ['header500', 'header1000', 'header2000']
    : ['header100', 'header500', 'header1000'];

  const dataKeys = isModeB
    ? ['q500', 'q1000', 'q2000']
    : ['q100', 'q500', 'q1000'];

  if (!product.pricing || product.pricing.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container maxWidth="lg">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-8 shadow-sm">
              <span className="text-sm font-bold text-cyan-700 tracking-[0.2em] uppercase">{t('productPage.pricing.badge')}</span>
            </div>

            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              {t('productPage.pricing.title')}
            </Typography>

            <Typography variant="body1" className="text-lg text-slate-500 font-medium">
              {t('productPage.pricing.subtitle')}
            </Typography>
          </motion.div>
        </div>

        {/* Pricing Table Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Decorative background for the table */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-50 to-fuchsia-50 opacity-50 rounded-[3rem] blur-2xl -z-10" />

          <TableContainer
            component={Paper}
            elevation={0}
            className="border border-slate-100 rounded-[2.5rem] shadow-[0_10px_40px_rgb(0,0,0,0.03)] overflow-hidden"
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow className="bg-slate-50">
                  <TableCell className="py-8 px-10 border-slate-100">
                    <span className="text-slate-900 font-black text-lg uppercase tracking-wider">{t('productPage.pricing.headerSize')}</span>
                  </TableCell>
                  {headerKeys.map((key) => (
                    <TableCell key={key} align="center" className="py-8 px-10 border-slate-100">
                      <span className="text-slate-900 font-black text-lg uppercase tracking-wider">{t(`productPage.pricing.${key}`)}</span>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {product.pricing.map((row, index: number) => (
                  <TableRow
                    key={index}
                    className="hover:bg-slate-50/50 transition-colors duration-300"
                  >
                    <TableCell className="py-8 px-10 border-slate-100">
                      <span className="text-slate-700 font-bold text-lg">{row.size}</span>
                    </TableCell>
                    {dataKeys.map((key, kIdx) => (
                      <TableCell key={key} align="center" className="py-8 px-10 border-slate-100">
                        <span className={`font-black text-xl ${!isModeB && kIdx === 0 ? 'text-cyan-600' : 'text-slate-800'
                          }`}>
                          {row[key]}
                        </span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>

        {/* Footnotes */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="text-sm font-bold text-slate-500">
              {isEn ? 'MOQ starts at: ' : 'ขั้นต่ำเริ่มต้น: '}
              {isEn ? (product.moqEn || product.moq) : product.moq}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
            <span className="text-sm font-bold text-slate-500">
              {isEn ? 'Lead Time: ' : 'ระยะเวลาผลิต: '}
              {isEn ? (product.leadTimeEn || product.leadTime) : product.leadTime}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-bold text-slate-500">{t('productPage.pricing.vatFooter')}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

