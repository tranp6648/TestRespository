import React from "react";
import Header from "@/components/Header";
import BannerCarousel from "@/components/BannerCarousel";
import ServicesSection from "@/components/ServicesSection";
import BookingForm from "@/components/BookingForm";
import ProductsSection from "@/components/HomePage/ProductsSection.tsx";
import NewsSection from "@/components/HomePage/NewsSection.tsx";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ServicePricing from "@/components/HomePage/ServicePricing";

const HomePage = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-white relative">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="fixed inset-0 bg-gradient-to-b from-[#101722]/70 to-[#101722]/80 z-0"></div>
        <div className="relative z-10">
          <Header />
          <main>
            <BannerCarousel />
            <ServicesSection />
            <ServicePricing/>
            <BookingForm />
            <ProductsSection />
            <NewsSection />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
