import BannerCarousel from "@/components/BannerCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import TrainingCard from "@/components/TrainingPage/TrainingCard";
import TrainingSearch from "@/components/TrainingPage/TrainingSearch";
import { TrainingItem, TrainingList } from "@/data/TrainingsData";
import { useEffect, useState } from "react";

const TrainingPage: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [FilteredTraining, setFilteredTraining] = useState<TrainingItem[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [accessible, setAccessible] = useState<boolean | null>(null);
    const TrainingsPerPage = 6;
    const bannerSlides = [
        {
            id: 1,
            imageUrl:
                "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1400&q=80",
            alt: "High-performance motorcycle parts",
        },
        {
            id: 2,
            imageUrl:
                "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1400&q=80",
            alt: "Premium motorcycle accessories",
        },
        {
            id: 3,
            imageUrl:
                "https://images.unsplash.com/photo-1525160354320-d8e92641c563?w=1400&q=80",
            alt: "Quality motorcycle maintenance products",
        },
    ];
    useEffect(() => {
        let results =TrainingList.filter((v) =>
            v.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (accessible != null) {
            results = results.filter((v) => v.isAccessible === accessible);
        }
        setFilteredTraining(results);
        setCurrentPage(1);// Reset to first page when search changes
    }, [searchTerm, accessible])
    const handleFilter = (searchTerm: string, accessible: boolean | null) => {
        setSearchTerm(searchTerm);
        setAccessible(accessible);
    }
    // Calculate pagination
    const totalPages = Math.ceil(FilteredTraining.length / TrainingsPerPage);
    const indexOfLastTraining = currentPage * TrainingsPerPage;
    const indexOfFirstTraining = indexOfLastTraining - TrainingsPerPage;
    const currentTraining = FilteredTraining.slice(
        indexOfFirstTraining,
        indexOfLastTraining
    );
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className="min-h-screen bg-[#101722] text-white">
            <Header />
            <BannerCarousel slides={bannerSlides} />
            <section className="container mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-center text-[#00E8F8] mb-8">
                    Training
                </h1>
                <TrainingSearch onSearch={handleFilter} />
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {currentTraining.map((video) => (
                        <TrainingCard key={video.id} video={video} />
                    ))}
                </div>
                {currentTraining.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-xl text-gray-400">
                            Không tìm thấy Training phù hợp với tìm kiếm của bạn.
                        </p>
                    </div>
                )}
                {FilteredTraining.length >= TrainingsPerPage && (
                    <div className="mt-8 flex justify-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            maxVisiblePages={5}
                        />
                    </div>
                )}
                <Footer />
            </section>
        </div>
    )
}
export default TrainingPage;