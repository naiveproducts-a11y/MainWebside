import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';
import ProductCatalogSection from '../components/ProductCatalogSection';
import BrandSection from '../components/BrandSection';
import InnovationNewsSection from '../components/InnovationNewsSection';
import HomeCertifiedSection from '../components/home/HomeCertifiedSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Naive Innova Co., Ltd.",
    "alternateName": "นาอีฟ อินโนว่า",
    "url": "https://www.naviepetcare.com",
    "logo": "https://www.naviepetcare.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/teerapong.yata.77"
    ],
    "description": "ผู้เชี่ยวชาญการผลิตผลิตภัณฑ์ดูแลสัตว์เลี้ยง (Pet Care OEM/ODM) ด้วยนวัตกรรมนาโนและสารสกัดธรรมชาติ เพื่อแบรนด์ของคุณ"
  };

  return (
    <>
      <SEO 
        title="รับผลิตแชมพูสัตว์เลี้ยงและผลิตภัณฑ์ Pet Care OEM/ODM ระดับพรีเมียม"
        description="นาอีฟ อินโนว่า (Naive Innova) ผู้เชี่ยวชาญการผลิตผลิตภัณฑ์ดูแลสัตว์เลี้ยง (Pet Care OEM/ODM) ระดับพรีเมียมด้วยนาโนเทคโนโลยีและสารสกัดธรรมชาติจากเชียงราย มอบสูตรพิเศษเพื่อสร้างแบรนด์ของคุณเองแบบ One-Stop Service"
        keywords="ผลิตแชมพูสัตว์เลี้ยง, รับผลิตแชมพูสุนัข, รับผลิตแชมพูแมว, Pet Care OEM, Naive Innova, โรงงานผลิตแชมพูสัตว์เลี้ยง, สร้างแบรนด์แชมพูสัตว์เลี้ยง"
        schemaMarkup={homeSchema}
      />
      <HeroSection />
      <AboutSection />
      <HomeCertifiedSection />
      <ProductSection />
      <BrandSection />
      <ProductCatalogSection />
      <InnovationNewsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
