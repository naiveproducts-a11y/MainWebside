import HeroSection from '../components/brand/HeroSection';
import StepSection from '../components/brand/StepSection';
import BrandSection from '../components/BrandSection';
import DifferenceSection from '../components/brand/DifferenceSection';
import SMESection from '../components/brand/SMESection';
import ContactSection from '../components/ContactSection';
import SubContactSection from '../components/brand/SubContactSection';

export default function Brand() {
  return (
    <div className="bg-white">
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
