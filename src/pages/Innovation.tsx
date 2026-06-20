import HeroSection from '../components/innovation/HeroSection';
import CORETECHSection from '../components/innovation/CORETECHSection';
import ECOGUARDSection from '../components/innovation/ECOGUARDSection';
import NANOTECHSection from '../components/innovation/NANOTECHSection';
import HERBALCOMPLEXSection from '../components/innovation/HERBALCOMPLEXSection';
import INGREDIENTLIBRARYSection from '../components/innovation/INGREDIENTLIBRARYSection';
import PROOFSection from '../components/innovation/PROOFSection';
import CTASection from '../components/innovation/CTASection';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

export default function Innovation() {
  const innovationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "เทคโนโลยีและนวัตกรรมการผลิตผลิตภัณฑ์สัตว์เลี้ยง - Naive Innova",
    "description": "นวัตกรรมและเทคโนโลยี R&D เบื้องหลังผลิตภัณฑ์สัตว์เลี้ยงของ นาอีฟ อินโนว่า ประกอบด้วย Nano-Encapsulation, EcoGuard Plus และสมุนไพรพฤกษศาสตร์ล้านนา (Botanical Complex)"
  };

  return (
    <div className="bg-white">
      <SEO 
        title="นวัตกรรมนาโนและคลังสารสกัดธรรมชาติระดับพรีเมียม (R&D)"
        description="ศึกษาเทคโนโลยีแกนหลัก 3 ประการของ นาอีฟ อินโนว่า: ระบบนำส่งสารนาโน (Nano-Encapsulation), สารฆ่าเชื้อธรรมชาติเกรดอาหาร (EcoGuard Plus™) และสารสกัดสมุนไพรท้องถิ่นล้านนา เพื่อผิวหนังสัตว์เลี้ยงที่แข็งแรงที่สุด"
        keywords="นวัตกรรมสัตว์เลี้ยง, นาโนเทคโนโลยีสัตว์เลี้ยง, EcoGuard Plus, คลังสารสกัดธรรมชาติสัตว์เลี้ยง, วิจัยผลิตภัณฑ์สัตว์เลี้ยง, R&D แชมพูสุนัข"
        schemaMarkup={innovationSchema}
      />
      <HeroSection />
      <CORETECHSection />
      <ECOGUARDSection />
      <NANOTECHSection />
      <HERBALCOMPLEXSection />
      <INGREDIENTLIBRARYSection />
      <PROOFSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
