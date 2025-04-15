import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { Button } from "../components/ui/button";
import RelatedServiceCard from "../components/ServiceDetailPage/RelatedServiceCard.tsx";
import { servicesData } from "../data/servicesData.ts"; // Import từ file data


const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const serviceId = parseInt(id || "1");
  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];

  const relatedServices = servicesData
      .filter((s) => s.id !== serviceId)
      .slice(0, 5);

  return (
      <ThemeProvider>
        <div className="min-h-screen text-white relative">
          <div
              className="fixed inset-0 z-0"
              style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1621600411688-4be93c2c1208?w=1400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
          ></div>
          <div className="fixed inset-0 bg-gradient-to-b from-[#101722]/80 to-[#101722]/90 z-0"></div>
          <div className="relative z-10">
            <Header />
            <main className="py-12 px-4 md:px-8 lg:px-12">
              <div className="container mx-auto">
                {/* Back button */}
                <div className="mb-8">
                  <Link to="/services">
                    <Button
                        variant="outline"
                        className="bg-[#252B39] border-none text-white hover:bg-[#374153] flex items-center gap-2"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Quay lại danh sách dịch vụ
                    </Button>
                  </Link>
                </div>

                {/* Service title and banner */}
                <div className="mb-10 text-center">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00E8F8] mb-4">
                    Dịch Vụ Sửa Chữa Xe Ô Tô Chuyên Nghiệp Tại Hóc Môn TPHCM
                  </h1>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    {service.description.split("</div>")[0].replace(/<[^>]+>/g, "").trim()}
                  </p>
                </div>

                {/* Service details */}
                <div className="mb-12">
                  <div className="bg-[#252B39] rounded-lg p-8 shadow-lg">
                    <div
                        className="service-description text-gray-300"
                        dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                  </div>
                </div>

                {/* Related Services */}
                <div className="mt-16">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-[#00E8F8]">
                      Dịch Vụ Khác
                    </h2>
                    <Link to="/services">
                      <Button className="bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] hover:opacity-90 text-white px-4 py-2">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {relatedServices.map((relatedService) => (
                        <RelatedServiceCard
                            key={relatedService.id}
                            id={relatedService.id}
                            title={relatedService.title}
                            description={relatedService.description.split("</div>")[0].replace(/<[^>]+>/g, "").trim()}
                            imageUrl={relatedService.imageUrl}
                        />
                    ))}
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
  );
};

export default ServiceDetailPage;