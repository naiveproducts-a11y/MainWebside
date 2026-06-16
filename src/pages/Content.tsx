import HeroSection from '../components/content/HeroSection.tsx';
import ContentSection from '../components/content/ContentSection.tsx';
import MapSection from '../components/content/MapSection.tsx';
import { motion } from 'framer-motion';

export default function ContentPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <HeroSection />
      <ContentSection />
      <MapSection />
    </motion.div>
  );
}
