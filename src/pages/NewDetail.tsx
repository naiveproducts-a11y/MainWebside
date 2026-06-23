import { useParams, Navigate } from 'react-router-dom';
import { getArticleBySlug } from '../config/newsArticles';
import DetailHeroSection from '../components/new/detail/DetailHeroSection';
import DetailContent from '../components/new/detail/DetailContent';
import DetailKeyTakeaways from '../components/new/detail/DetailKeyTakeaways';
import DetailProfile from '../components/new/detail/DetailProfile';
import SEO from '../components/SEO';

export default function NewDetail() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = getArticleBySlug(articleId ?? '');

  // ถ้า slug ไม่ตรง → redirect กลับหน้า list
  if (!article) {
    return <Navigate to="/news/activities-new" replace />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.lead,
    "image": article.images[0] || `https://www.naviepetcare.com/logo.png`,
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": "Teerapong Yata"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Naive Innova",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.naviepetcare.com/logo.png"
      }
    }
  };

  return (
    <>
      <SEO 
        title={article.title}
        description={article.lead}
        keywords={article.tags.join(', ')}
        ogImage={article.images[0]}
        schemaMarkup={articleSchema}
      />
      <DetailHeroSection
        category={article.category}
        categoryColor={article.categoryColor}
        title={article.title}
        subtitle={article.subtitle}
        date={article.date}
        readingTime={article.readingTime}
        wordCount={article.wordCount ?? 0}
        tags={article.tags}
      />
      <DetailContent
        lead={article.lead}
        images={article.images}
        title={article.title}
        body={article.body}
      />
      <DetailKeyTakeaways keyTakeaways={article.keyTakeaways} sourceUrl={article.sourceUrl} />
      <DetailProfile />
    </>
  );
}
