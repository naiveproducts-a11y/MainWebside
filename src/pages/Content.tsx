import HeroSection from '../components/content/HeroSection.tsx';
import ContentSection from '../components/content/ContentSection.tsx';
import MapSection from '../components/content/MapSection.tsx';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function ContentPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Naive Innova Co., Ltd.",
    "image": "https://www.naviepetcare.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "เชียงราย",
      "addressLocality": "Mueang Chiang Rai",
      "addressRegion": "Chiang Rai",
      "postalCode": "57000",
      "addressCountry": "TH"
    },
    "telephone": "+66-80-000-0000",
    "url": "https://www.naviepetcare.com/content"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <SEO 
        title="ติดต่อเราและแผนที่โรงงานผลิตสินค้าดูแลสัตว์เลี้ยง นาอีฟ อินโนว่า"
        description="ช่องทางการติดต่อสอบถามเพื่อสร้างแบรนด์สัตว์เลี้ยงของคุณ แผนที่ที่ตั้งโรงงานวิจัยและผลิตเชียงราย ช่องทาง LINE, เบอร์โทรศัพท์ และแบบฟอร์มขอใบเสนอราคา"
        keywords="ติดต่อ Naive Innova, แผนที่โรงงานผลิตแชมพู, ที่ตั้งโรงงานเชียงราย, เบอร์โทร Naive Innova, LINE Official"
        schemaMarkup={contactSchema}
      />
      <HeroSection />
      <ContentSection />
      <MapSection />
    </motion.div>
  );
}
