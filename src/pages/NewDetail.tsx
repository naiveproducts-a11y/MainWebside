import { useParams, Navigate } from 'react-router-dom';
import { getArticleBySlug } from '../config/newsArticles';
import DetailHeroSection from '../components/new/detail/DetailHeroSection';
import DetailContent from '../components/new/detail/DetailContent';
import DetailKeyTakeaways from '../components/new/detail/DetailKeyTakeaways';
import DetailProfile from '../components/new/detail/DetailProfile';

export default function NewDetail() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = getArticleBySlug(articleId ?? '');

  // ถ้า slug ไม่ตรง → redirect กลับหน้า list
  if (!article) {
    return <Navigate to="/news/activities-new" replace />;
  }

  return (
    <>
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
      <DetailKeyTakeaways keyTakeaways={article.keyTakeaways} />
      <DetailProfile sourceUrl={article.sourceUrl} />
    </>
  );
}
