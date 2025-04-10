import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerCarousel from "@/components/BannerCarousel";
import BookingForm from "@/components/BookingForm";
import Pagination from "@/components/Pagination";
import ProductSearch from "@/components/ProductsPage/ProductSearch";
import ProductCard from "@/components/ProductsPage/ProductCard";
import { productsData, Product } from "@/data/productsData";

const ProductsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const productsPerPage = 6;

  // Banner slides for motorcycle products
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

  // Filter products based on search term
  useEffect(() => {
    const results = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredProducts(results);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-[#101722] text-white">
      <Header />

      {/* Banner */}
      <BannerCarousel slides={bannerSlides} />

      {/* Products Section */}
      <section className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-[#00E8F8] mb-8">
          Sản phẩm
        </h1>

        {/* Search Bar */}
        <ProductSearch onSearch={handleSearch} />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Show message if no products found */}
        {currentProducts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-xl text-gray-400">
              Không tìm thấy sản phẩm phù hợp với tìm kiếm của bạn.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > productsPerPage && (
          <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              maxVisiblePages={5}
            />
          </div>
        )}

      </section>

      {/* Booking Form */}
      <BookingForm />

      <Footer />
    </div>
  );
};

export default ProductsPage;
