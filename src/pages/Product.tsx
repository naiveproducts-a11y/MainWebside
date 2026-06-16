// Original imports removed to fix duplication
import { useParams, Navigate } from 'react-router-dom';
import HeroSection from '../components/product/HeroSection';
import ProductSection from '../components/product/ProductSection';
import TechnologySection from '../components/product/TechnologySection';
import KeySection from '../components/product/KeySection';
import ResultsSection from '../components/product/ResultsSection';
import PricingSection from '../components/product/PricingSection';
import HowToOrderSection from '../components/product/HowToOrderSection';
import RelatedSection from '../components/product/RelatedSection';
import CertifiedSection from '../components/product/CertifiedSection';
import FAQSection from '../components/product/FAQSection';
import ContactSection from '../components/ContactSection';
import productsData from '../i18n/products/products-all.json';
import type { Product as ProductType } from '../types/product';

export default function Product() {
  const { productId } = useParams();
  
  const product = productsData.products.find(p => p.id === productId) as ProductType | undefined;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <HeroSection product={product} />
      <ProductSection product={product} />
      <TechnologySection />
      <KeySection product={product} />
      <ResultsSection product={product} />
      <PricingSection product={product} />
      <HowToOrderSection />
      <RelatedSection product={product} />
      <CertifiedSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
