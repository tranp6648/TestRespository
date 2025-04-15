import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { productsData } from "@/data/productsData";
import {
  ArrowLeft,
  MinusCircle,
  PlusCircle,
  Facebook,
  Youtube,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productsData.find((product) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Get related products (same category)
  const relatedProducts = product
      ? productsData
          .filter((p) => p.category === product.category && p.id !== product.id)
          .slice(0, 4)
      : [];

  // Format price with comma separators and đ symbol
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  };

  if (!product) {
    return (
        <div className="min-h-screen bg-[#101722] text-white">
          <Header />
          <div className="container mx-auto py-20 px-4 text-center">
            <h1 className="text-3xl font-bold text-[#00E8F8] mb-4">
              Không tìm thấy sản phẩm
            </h1>
            <p className="text-xl mb-8">
              Sản phẩm bạn đang tìm kiếm không tồn tại.
            </p>
            <Link
                to="/products"
                className="bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Quay lại danh sách sản phẩm
            </Link>
          </div>
          <Footer />
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-[#101722] text-white">
        <Header />

        <div className="container mx-auto py-8 px-4">
          {/* Back button */}
          <Link
              to="/products"
              className="inline-flex items-center text-[#00E8F8] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Quay lại danh sách sản phẩm
          </Link>

          {/* Product banner */}
          <div className="bg-[#1F2632] rounded-lg overflow-hidden shadow-xl mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Product image gallery */}
              <div className="flex flex-col space-y-4">
                <div className="rounded-lg overflow-hidden bg-[#252B39] h-80">
                  <img
                      src={product.imageUrls[selectedImageIndex]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                  />
                </div>

                {/* Thumbnails */}
                {product.imageUrls.length > 1 && (
                    <div className="flex flex-col space-y-4 mt-4">
                      <div className="flex items-center justify-between">
                        <button
                            onClick={() =>
                                setSelectedImageIndex((prev) =>
                                    prev > 0 ? prev - 1 : product.imageUrls.length - 1
                                )
                            }
                            className="bg-[#252B39] p-2 rounded-full hover:bg-[#1F2632] transition-colors"
                        >
                          <ChevronLeft className="h-5 w-5 text-[#00E8F8]" />
                        </button>

                        <div className="text-sm text-gray-400">
                          {selectedImageIndex + 1} / {product.imageUrls.length}
                        </div>

                        <button
                            onClick={() =>
                                setSelectedImageIndex((prev) =>
                                    prev < product.imageUrls.length - 1 ? prev + 1 : 0
                                )
                            }
                            className="bg-[#252B39] p-2 rounded-full hover:bg-[#1F2632] transition-colors"
                        >
                          <ChevronRight className="h-5 w-5 text-[#00E8F8]" />
                        </button>
                      </div>

                      {/* Thumbnails với hiệu ứng trượt */}
                      <div className="grid grid-cols-4 gap-2">
                        {(() => {
                          const totalThumbnails = product.imageUrls.length;
                          const maxVisibleThumbnails = 4; // Số lượng ảnh phụ hiển thị cùng lúc
                          // Tính chỉ số bắt đầu dựa trên selectedImageIndex
                          let startIndex = Math.max(
                              0,
                              Math.min(
                                  selectedImageIndex - Math.floor(maxVisibleThumbnails / 2),
                                  totalThumbnails - maxVisibleThumbnails
                              )
                          );

                          // Lấy danh sách ảnh phụ để hiển thị
                          const visibleThumbnails = product.imageUrls.slice(
                              startIndex,
                              startIndex + maxVisibleThumbnails
                          );

                          return visibleThumbnails.map((img, index) => {
                            const actualIndex = startIndex + index; // Chỉ số thực của ảnh trong mảng gốc
                            return (
                                <div
                                    key={actualIndex}
                                    onClick={() => setSelectedImageIndex(actualIndex)}
                                    className={`w-full h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                                        selectedImageIndex === actualIndex
                                            ? "border-[#00E8F8] scale-105"
                                            : "border-transparent opacity-70"
                                    }`}
                                >
                                  <img
                                      src={img}
                                      alt={`${product.name} - ${actualIndex + 1}`}
                                      className="w-full h-full object-cover"
                                  />
                                </div>
                            );
                          });
                        })()}
                      </div>
                    </div>
                )}


              </div>

              {/* Product info */}
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-[#00E8F8] mb-4">
                  {product.name}
                </h1>
                <div className="mb-6 flex flex-col space-y-4">
                  <div className="flex items-center">
                  <span className="text-[#FFB800] text-3xl font-bold mr-3">
                    {formatPrice(product.price)}
                  </span>
                  </div>

                  {/* General Info moved under price */}
                  {product.generalInfo && (
                      <div className="bg-[#252B39] rounded-lg p-4">
                        <div
                            className="text-white leading-relaxed text-sm"
                            dangerouslySetInnerHTML={{ __html: product.generalInfo }}
                        />
                      </div>
                  )}
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center bg-[#252B39] rounded-md p-2 w-fit">
                    <button
                        onClick={decreaseQuantity}
                        className="text-[#00E8F8] hover:text-white transition-colors p-1"
                    >
                      <MinusCircle className="h-6 w-6" />
                    </button>
                    <span className="mx-4 text-white font-medium text-lg min-w-10 text-center">
                    {quantity}
                  </span>
                    <button
                        onClick={increaseQuantity}
                        className="text-[#00E8F8] hover:text-white transition-colors p-1"
                    >
                      <PlusCircle className="h-6 w-6" />
                    </button>
                  </div>
                  <button className="bg-[#FF3B30] hover:bg-[#E6352C] text-white font-medium py-3 px-8 rounded-md transition-colors w-full sm:w-auto">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Product description section */}
            <div className="lg:col-span-3">
              {/* Product description */}
              <div className="bg-[#252B39] rounded-lg p-6">
                <h2 className="text-2xl font-bold text-[#00E8F8] mb-4">
                  Mô tả sản phẩm
                </h2>
                <div className="text-white leading-relaxed">
                  <div
                      className="mb-4"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
                <div className="flex items-center space-x-4 mt-6 border-t border-gray-700 pt-6">
                  <a
                      href="#"
                      className="text-[#00E8F8] hover:text-white transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                      href="#"
                      className="text-[#00E8F8] hover:text-white transition-colors"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold text-[#00E8F8] mb-6">
                  Sản phẩm liên quan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                      <div
                          key={relatedProduct.id}
                          className="bg-[#252B39] rounded-lg overflow-hidden shadow-lg"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                              src={relatedProduct.imageUrls[0]}
                              alt={relatedProduct.name}
                              className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-white font-semibold text-lg mb-2">
                            {relatedProduct.name}
                          </h3>
                          <div className="flex justify-between items-center mt-2">
                      <span className="text-[#FFB800] font-bold text-xl">
                        {formatPrice(relatedProduct.price)}
                      </span>
                            <Link
                                to={`/products/${relatedProduct.id}`}
                                className="bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white px-3 py-1 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                              Chi tiết
                            </Link>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link
                      to="/products"
                      className="bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white px-6 py-3 rounded-md font-medium inline-block hover:opacity-90 transition-opacity"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
          )}
        </div>

        {/* Booking Form */}
        <BookingForm />

        <Footer />
      </div>
  );
};

export default ProductDetailPage;
