import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CareersPage from "./pages/CareersPage";
import JobDetailPage from "./pages/JobDetailPage";
import ServicesPage from "./pages/ServicesPage";
import Blog from './pages/BlogPage';
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import routes from "tempo-routes";
import TrainingPage from "./pages/TrainingPage";
import TrainingDetailPage from "./pages/TrainingDetailPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Forgot" element={<ForgotPasswordPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/training/:id" element={<TrainingDetailPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<JobDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
