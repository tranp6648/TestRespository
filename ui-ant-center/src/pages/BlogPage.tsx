import BannerCarousel from "@/components/BannerCarousel";
import BlogCard from "@/components/BlogsPage/BlogCard";
import BlogSearch from "@/components/BlogsPage/BlogSearch";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import { Blogs, BlogsData } from "@/data/BlogsData";
import React, { useEffect, useState } from "react";

const BlogPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [FilteredBlogs, setFilteredBlogs] = useState<Blogs[]>([]);
    const BlogsPerPage = 6;

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
    // Filter Blogs
    useEffect(() => {
        const results = BlogsData.filter(
            (blog) =>
                blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setFilteredBlogs(results);
        setCurrentPage(1);// Reset to first page when search changes
    }, [searchTerm]);
    // Calculate pagination
    const totalPages = Math.ceil(FilteredBlogs.length / BlogsPerPage);
    const indexOfLastBlog = currentPage * BlogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - BlogsPerPage;
    const currentBlogs = FilteredBlogs.slice(
        indexOfFirstBlog,
        indexOfLastBlog,
    );
    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    // Handle search
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };
    return (
        <div className="min-h-screen bg-[#101722] text-white">
            <Header />
            <BannerCarousel slides={bannerSlides} />
            <section className="container mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold text-center text-[#00E8F8] mb-8">
                    Tin tức
                </h1>
                <BlogSearch onSearch={handleSearch} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {currentBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog}></BlogCard>
                    ))}
                </div>
                {currentBlogs.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-xl text-gray-400">
                            Không tìm thấy Tin tức phù hợp với tìm kiếm của bạn.
                        </p>
                    </div>
                )}
                {FilteredBlogs.length >= BlogsPerPage && (
                    <div className="mt-8 flex justify-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            maxVisiblePages={5}
                        />
                    </div>
                )}
                 <BookingForm />
            </section>
            <Footer />
        </div>
    )
}
export default BlogPage;