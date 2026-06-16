import HeroSection from '../components/QA/HeroSection';
import FAQSection from '../components/QA/FAQSection';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

export default function QA() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      <HeroSection />
      <FAQSection />
      
      {/* Contact Section at bottom for consistency */}
      <ContactSection />
    </motion.div>
  );
}
