import { useState } from 'react';
import HeroSection from '../components/new/HeroSection';
import ARTICLESSection from '../components/new/ARTICLESSection';
import SEO from '../components/SEO';

export default function New() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "บทความและข่าวสาร - Naive Innova",
    "description": "คลังบทความ ข่าวสารความรู้ และเบื้องหลังงานวิจัยนวัตกรรมด้านสุขภาพสัตว์เลี้ยงและการสร้างแบรนด์"
  };

  return (
    <>
      <SEO 
        title="บทความข่าวสารและเบื้องหลังงานวิจัยสุขภาพสัตว์เลี้ยง"
        description="ติดตามบทความ ความรู้ด้านการสร้างแบรนด์สุขภาพสัตว์เลี้ยง งานวิจัยนาโนเทคโนโลยี คลังสมุนไพรพฤกษศาสตร์ และข่าวสารความเคลื่อนไหวล่าสุดของ นาอีฟ อินโนว่า"
        keywords="บทความสัตว์เลี้ยง, ข่าวสาร Naive Innova, วิจัยสุขภาพสัตว์เลี้ยง, ความรู้สร้างแบรนด์แชมพู, สปินออฟมหาวิทยาลัย"
        schemaMarkup={newsSchema}
      />
      <HeroSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ARTICLESSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </>
  );
}
