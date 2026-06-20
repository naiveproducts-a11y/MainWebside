import VideoHeroSection from '../components/video/VideoHeroSection';
import VideoArticlesSection from '../components/video/VideoArticlesSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Video() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "คลังวิดีโอนวัตกรรมและข้อมูลผลิตภัณฑ์สัตว์เลี้ยง - Naive Innova",
    "description": "ร่วมเจาะลึกกระบวนการทำงาน การทดสอบในห้องปฏิบัติการวิจัย R&D และเทคโนโลยีการผลิตผลิตภัณฑ์สัตว์เลี้ยงผ่านวิดีโอ"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <SEO 
        title="วิดีโอสาธิตการใช้งานและนวัตกรรมผลิตภัณฑ์ดูแลสัตว์เลี้ยง"
        description="ชมวิดีโอการสกัดสารธรรมชาติ การวิจัยทางวิทยาศาสตร์ และกระบวนการผลิตแชมพูครีมบำรุงสัตว์เลี้ยงระดับพรีเมียมจาก นาอีฟ อินโนว่า"
        keywords="วิดีโอสัตว์เลี้ยง, วิจัยแชมพูสุนัข, นวัตกรรมสเปรย์แมว, รีวิวผลิตภัณฑ์สัตว์เลี้ยง, โรงงานผลิตแชมพู"
        schemaMarkup={videoSchema}
      />
      <VideoHeroSection />
      <VideoArticlesSection />
    </motion.div>
  );
}
