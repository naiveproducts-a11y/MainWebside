import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  schemaMarkup?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  schemaMarkup,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    const formattedTitle = title.includes('Naive Innova') ? title : `${title} | Naive Innova`;
    document.title = formattedTitle;

    // 2. Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // 4. Canonical Link
    const domain = 'https://www.naviepetcare.com';
    const canonicalUrl = canonicalPath ? `${domain}${canonicalPath}` : `${domain}${location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 5. Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', formattedTitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    if (ogImage) {
      const ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg) ogImg.setAttribute('content', ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`);
    }

    // 6. JSON-LD Schema Markup
    // Remove previous schema scripts
    const existingSchemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemaScripts.forEach(script => script.remove());

    if (schemaMarkup) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaMarkup);
      document.head.appendChild(script);
    }

    // 7. Lang attribute
    document.documentElement.lang = 'th';
  }, [title, description, keywords, canonicalPath, ogImage, schemaMarkup, location.pathname]);

  return null;
}
