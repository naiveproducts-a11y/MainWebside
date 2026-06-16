import VideoHeroSection from '../components/video/VideoHeroSection';
import VideoArticlesSection from '../components/video/VideoArticlesSection';
import { motion } from 'framer-motion';

export default function Video() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <VideoHeroSection />
      <VideoArticlesSection />
    </motion.div>
  );
}
