import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { Button } from "../components/ui/button";
import RelatedJobCard from "../components/JobDetailPage/RelatedJobCard.tsx";
import { jobsData } from "../data/jobsData"; // Import từ file data


const JobDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const jobId = parseInt(id || "1");
  const job = jobsData.find((j) => j.id === jobId) || jobsData[0];
  const relatedJobs = jobsData.filter((j) => j.id !== jobId).slice(0, 5);

  return (
      <ThemeProvider>
        <div className="min-h-screen text-white relative">
          <div
              className="fixed inset-0 z-0"
              style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1400&q=80')",
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
                {/* Nút quay lại */}
                <div className="mb-8">
                  <Link to="/careers">
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
                      Quay lại danh sách việc làm
                    </Button>
                  </Link>
                </div>

                {/* Tiêu đề công việc */}
                <div className="mb-10 text-center">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00E8F8] mb-4">
                    TUYỂN DỤNG {job.title.toUpperCase()}
                  </h1>
                </div>

                {/* Chi tiết công việc */}
                <div className="mb-12">
                  <div className="bg-[#252B39] rounded-lg p-8 shadow-lg">
                    {/* Loại công việc và ngày đăng */}
                    <div className="flex justify-between items-center mb-6">
                    <span
                        className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                            job.type === "full-time"
                                ? "bg-[#22C55E] text-black"
                                : "bg-[#3B82F6] text-white"
                        }`}
                    >
                      {job.type === "full-time" ? "Toàn thời gian" : "Bán thời gian"}
                    </span>
                      <span className="text-gray-400">Đăng ngày: {job.date}</span>
                    </div>

                    {/* Render toàn bộ description */}
                    <div
                        className="job-description text-gray-300"
                        dangerouslySetInnerHTML={{ __html: job.description }}
                    />

                    {/* Nút ứng tuyển */}
                    {/*<div className="text-center pt-4">*/}
                    {/*  <Button className="bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] hover:opacity-90 text-white px-8 py-6 text-lg font-bold">*/}
                    {/*    Ứng tuyển ngay*/}
                    {/*  </Button>*/}
                    {/*</div>*/}
                  </div>
                </div>

                {/* Công việc liên quan */}
                <div className="mt-16">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-[#00E8F8]">
                      Vị trí tuyển dụng khác
                    </h2>
                    <Link to="/careers">
                      <Button className="bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] hover:opacity-90 text-white px-4 py-2">
                        Xem thêm
                      </Button>
                    </Link>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {relatedJobs.map((relatedJob) => (
                        <RelatedJobCard
                            key={relatedJob.id}
                            id={relatedJob.id}
                            title={relatedJob.title}
                            type={relatedJob.type}
                            date={relatedJob.date}
                            imageUrl={relatedJob.imageUrl}
                            summary={relatedJob.summary}
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

export default JobDetailPage;