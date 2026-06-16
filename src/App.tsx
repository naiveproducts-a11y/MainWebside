import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import Brand from './pages/Brand';
import Innovation from './pages/Innovation';
import New from './pages/New';
import NewDetail from './pages/NewDetail';
import Video from './pages/Video';
import QA from './pages/QA';
import ContentPage from './pages/Content';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cleaning/:productId" element={<Product />} />
          <Route path="/spray/:productId" element={<Product />} />
          <Route path="/skin/:productId" element={<Product />} />
          <Route path="/rd/:productId" element={<Product />} />
          <Route path="/branding/steps" element={<Brand />} />
          <Route path="/branding/innovation" element={<Innovation />} />
          <Route path="/news/activities-new" element={<New />} />
          <Route path="/news/activities-new/:articleId" element={<NewDetail />} />
          <Route path="/news/videos" element={<Video />} />
          <Route path="/contact/faq" element={<QA />} />
          <Route path="/content" element={<ContentPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
