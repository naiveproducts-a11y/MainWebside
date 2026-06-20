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
import SEO from '../components/SEO';

export default function Product() {
  const { productId } = useParams();
  
  const product = productsData.products.find(p => p.id === productId) as ProductType | undefined;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.nameEn ? `${product.name} (${product.nameEn})` : product.name,
    "description": product.pitch,
    "image": `https://www.naviepetcare.com/logo.png`, // can be customized
    "brand": {
      "@type": "Brand",
      "name": "Naive Innova"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "THB",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEO 
        title={`${product.name} (${product.nameEn || ''}) - รับผลิตเวชสำอางดูแลสัตว์เลี้ยง`}
        description={`${product.name} - ${product.pitch} ต้นทุนเริ่มต้นราคาประหยัด ขั้นต่ำน้อย (MOQ 100 ชิ้น) พร้อมให้บริการจดทะเบียนครบวงจร`}
        keywords={`${product.name}, ${product.nameEn || ''}, ผลิต${product.name}, OEM ${product.name}, ผลิตภัณฑ์สัตว์เลี้ยง, ${product.categoryTh}`}
        schemaMarkup={productSchema}
      />
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
