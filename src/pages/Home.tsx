import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';
import ProductCatalogSection from '../components/ProductCatalogSection';
import BrandSection from '../components/BrandSection';
import InnovationNewsSection from '../components/InnovationNewsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <BrandSection />
      <ProductCatalogSection />
      <InnovationNewsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
