import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerCarousel from "@/components/BannerCarousel";
import ServiceSearch from "@/components/ServicesPage/ServiceSearch.tsx";
import ServiceCard from "@/components/ServicesPage/ServiceCard.tsx";
import Pagination from "@/components/Pagination";
import BookingForm from "@/components/BookingForm";

// Import servicesData từ file
import { servicesData } from "@/data/servicesData.ts";

const ServicesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(servicesData.length / 6); // Tổng số trang, giả sử 6 dịch vụ mỗi trang

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  const handleSearch = (query: string) => {
    console.log("Tìm kiếm:", query);
    // Triển khai chức năng tìm kiếm tại đây
  };

  // Tính toán phân trang
  const servicesPerPage = 6;
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = servicesData.slice(indexOfFirstService, indexOfLastService);

  return (
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

          {/* Banner Carousel */}
          <BannerCarousel />

          {/* Services Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#00E8F8] mb-8">
                Dịch Vụ
              </h2>

              {/* Service Search */}
              <div className="mb-12">
                <ServiceSearch onSearch={handleSearch} />
              </div>

              {/* Featured Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentServices.map((service) => (
                    <ServiceCard
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        summary={service.summary}
                        imageUrl={service.imageUrl}
                    />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  className="mb-12"
              />
            </div>
          </section>

          {/* Booking Form */}
          <BookingForm />

          {/* Footer */}
          <Footer />
        </div>
      </div>
  );
};

export default ServicesPage;
