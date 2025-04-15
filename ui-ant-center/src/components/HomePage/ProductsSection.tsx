import React from "react";
import { Button } from "../ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import {Link} from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description?: string;
  onClick?: () => void;
}

const ProductCard = ({
  image = "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=500&q=80",
  title = "Product Title",
  price = 350000,
  description = "High-quality product for your motorcycle",
  onClick = () => {},
}: ProductCardProps) => {
  return (
    <div
      className="bg-[#252B39] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 flex flex-col h-full"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden bg-[#17212E]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#FFB800] font-bold text-xl">
            {new Intl.NumberFormat("vi-VN").format(price)}đ
          </span>
          <Button
            variant="outline"
            size="sm"
            className="border-[#00E8F8] text-[#00E8F8] hover:bg-[#00E8F8]/10"
          >
            Chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ProductsSectionProps {
  title?: string;
  products?: ProductCardProps[];
  onSeeMoreClick?: () => void;
}

const ProductsSection = ({
  title = "Sản phẩm",
  products = [
    {
      image:
        "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=500&q=80",
      title: "Dầu động cơ cao cấp",
      price: 350000,
      description: "Dầu nhớt chất lượng cao cho động cơ xe máy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605005128454-eca2c2c5eb3d?w=500&q=80",
      title: "Bộ phanh đĩa",
      price: 850000,
      description: "Bộ phanh đĩa chất lượng cao, độ bền cao",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=500&q=80",
      title: "Bộ nhông sên đĩa",
      price: 750000,
      description: "Bộ nhông sên đĩa chính hãng, bền bỉ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605004064686-2142b852ded8?w=500&q=80",
      title: "Lốp xe cao cấp",
      price: 1200000,
      description: "Lốp xe mô tô chất lượng cao, bám đường tốt",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607274134639-a338c278f0c4?w=500&q=80",
      title: "Ắc quy chính hãng",
      price: 900000,
      description: "Ắc quy xe máy chính hãng, tuổi thọ cao",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=500&q=80",
      title: "Bugi cao cấp",
      price: 250000,
      description: "Bugi xe máy cao cấp, tăng hiệu suất động cơ",
    },
  ],}: ProductsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00E8F8] mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to={`/products`}>
            <Button
                className={cn(
                    "bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white hover:opacity-90 transition-opacity",
                    "border-none font-medium px-8",
                )}
            >
              Xem thêm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
