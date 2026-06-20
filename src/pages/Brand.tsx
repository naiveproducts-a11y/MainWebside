import HeroSection from '../components/brand/HeroSection';
import StepSection from '../components/brand/StepSection';
import BrandSection from '../components/BrandSection';
import DifferenceSection from '../components/brand/DifferenceSection';
import SMESection from '../components/brand/SMESection';
import ContactSection from '../components/ContactSection';
import SubContactSection from '../components/brand/SubContactSection';
import SEO from '../components/SEO';

export default function Brand() {
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "รับผลิตและสร้างแบรนด์ผลิตภัณฑ์ดูแลสัตว์เลี้ยง (Pet Care OEM/ODM)",
    "provider": {
      "@type": "Organization",
      "name": "Naive Innova Co., Ltd."
    },
    "description": "บริการรับผลิตแชมพูสัตว์เลี้ยง สเปรย์บำรุงขน และเจลรักษาโรคผิวหนังสัตว์เลี้ยงแบบครบวงจร (One-Stop Service) เริ่มต้นขั้นต่ำน้อย (MOQ 100 ชิ้น)",
    "areaServed": "TH"
  };

  return (
    <div className="bg-white">
      <SEO 
        title="ขั้นตอนการสร้างแบรนด์และโรงงานผลิตครีมแชมพูสัตว์เลี้ยง OEM/ODM"
        description="เริ่มสร้างแบรนด์ผลิตภัณฑ์สัตว์เลี้ยงของคุณเองได้ง่ายๆ ด้วย 6 ขั้นตอนการผลิตกับ นาอีฟ อินโนว่า ขั้นต่ำน้อยเพียง 100 ชิ้น บริการออกแบบแพ็คเกจจิ้ง ขึ้นทะเบียน อย. และทดสอบประสิทธิภาพครบวงจร"
        keywords="สร้างแบรนด์สัตว์เลี้ยง, โรงงานผลิตแชมพูสัตว์เลี้ยง, รับผลิตแชมพูสุนัขขั้นต่ำน้อย, OEM ผลิตภัณฑ์สัตว์เลี้ยง, ขั้นตอนสร้างแบรนด์แชมพู"
        schemaMarkup={brandSchema}
      />
      <HeroSection />
      <StepSection />
      <DifferenceSection />
      <BrandSection />
      <SMESection />
      <ContactSection />
      <SubContactSection />
    </div>
  );
}
