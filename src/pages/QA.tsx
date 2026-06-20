import HeroSection from '../components/QA/HeroSection';
import FAQSection from '../components/QA/FAQSection';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function QA() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ขั้นต่ำการผลิต (MOQ) ของโรงงานคือเท่าไร?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "เริ่มต้นเพียง 100 ชิ้นต่อสูตร ทำให้ผู้เริ่มต้นธุรกิจสามารถทดสอบตลาดได้ง่ายและจำกัดงบประมาณเริ่มต้น"
        }
      },
      {
        "@type": "Question",
        "name": "ใช้เวลานานแค่ไหนในการผลิตสินค้า?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ระยะเวลาการผลิตเฉลี่ยอยู่ที่ 15-20 วันทำการหลังจากยืนยันดีไซน์บรรจุภัณฑ์และสูตรทดสอบเป็นที่เรียบร้อย"
        }
      },
      {
        "@type": "Question",
        "name": "มีบริการจดทะเบียน อย. ให้ด้วยหรือไม่?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ใช่ครับ เรามีบริการจดทะเบียน อย. และขอหนังสือรับรองเพื่อการจำหน่ายและการส่งออกอย่างถูกต้องครบวงจร (One-Stop Service)"
        }
      }
    ]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <SEO 
        title="คำถามที่พบบ่อย (FAQ) เกี่ยวกับการผลิตแชมพูและสินค้าสัตว์เลี้ยง"
        description="ตอบคำถามทุกข้อสงสัยเกี่ยวกับการรับผลิตสินค้าสัตว์เลี้ยง OEM/ODM: ขั้นต่ำการผลิต (MOQ), ระยะเวลาดำเนินการ, การขึ้นทะเบียน อย., งบประมาณ และการพัฒนาสูตรร่วมกับ R&D"
        keywords="คำถามที่พบบ่อย, คำถามผลิตแชมพูสุนัข, ขั้นต่ำผลิตสินค้าสัตว์เลี้ยง, จดทะเบียนแชมพูสัตว์เลี้ยง, FAQ Naive Innova"
        schemaMarkup={faqSchema}
      />
      <HeroSection />
      <FAQSection />
      
      {/* Contact Section at bottom for consistency */}
      <ContactSection />
    </motion.div>
  );
}
