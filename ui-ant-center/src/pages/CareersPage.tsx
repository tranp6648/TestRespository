import React, {useState} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerCarousel from "@/components/BannerCarousel";
import JobSearchAndFilter from "@/components/CareersPage/JobSearchAndFilter";
import {ThemeProvider} from "@/components/ThemeProvider";
import Pagination from "@/components/Pagination";
import JobCard from "@/components/HomePage/JobCard.tsx";
import {jobsData} from "@/data/jobsData.ts";

const CareersPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [jobType, setJobType] = useState("all");

    // Filter jobs based on search term and job type
    const filteredJobs = jobsData.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = jobType === "all" || job.type === jobType;
        return matchesSearch && matchesType;
    });

    // Pagination logic
    const jobsPerPage = 6;
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleJobTypeChange = (value: string) => {
        setJobType(value);
        setCurrentPage(1);
    };

    return (
        <ThemeProvider>
            <div className="min-h-screen text-white relative">
                {/* Background layers */}
                <div
                    className="fixed inset-0 z-0"
                    style={{
                        backgroundImage: "url('/background.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="fixed inset-0 bg-gradient-to-b from-[#101722]/70 to-[#101722]/80 z-0"/>

                {/* Main content */}
                <div className="relative z-10">
                    <Header/>
                    <main>
                        <BannerCarousel/>

                        {/* Careers Section */}
                        <section className="py-16 px-4 md:px-8 lg:px-12">
                            <div className="container mx-auto">
                                <h2 className="text-4xl font-bold text-center text-[#00E8F8] mb-12">
                                    Cơ hội việc làm
                                </h2>

                                {/* Search and Filter */}
                                <JobSearchAndFilter
                                    searchTerm={searchTerm}
                                    jobType={jobType}
                                    onSearchChange={handleSearchChange}
                                    onJobTypeChange={handleJobTypeChange}
                                />

                                {/* Job Listings */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                                    {currentJobs.length > 0 ? (
                                        currentJobs.map((job) => (
                                            <JobCard
                                                key={job.id}
                                                id={job.id}
                                                title={job.title}
                                                type={job.type}
                                                date={job.date}
                                                imageUrl={job.imageUrl}
                                                summary={job.summary}
                                            />
                                        ))
                                    ) : (
                                        <div className="col-span-3 text-center py-10">
                                            <p className="text-gray-300 text-lg">
                                                Không tìm thấy vị trí phù hợp. Vui lòng thử lại với từ khóa khác.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Pagination */}
                                {filteredJobs.length > 0 && (
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                        maxVisiblePages={5}
                                    />
                                )}
                            </div>
                        </section>
                    </main>
                    <Footer/>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default CareersPage;