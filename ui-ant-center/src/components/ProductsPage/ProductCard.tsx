import React from "react";
import {Link} from "react-router-dom";
import {Product} from "@/data/productsData";
import {Button} from "@/components/ui/button.tsx";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    // Format price with comma separators and đ symbol
    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    };

    return (
        <div
            className="bg-[#252B39] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-48 overflow-hidden">
                <img
                    src={product.imageUrls[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 h-14">
                    {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
          <span className="text-[#FFB800] font-bold text-xl">
            {formatPrice(product.price)}
          </span>
                    <Link
                        to={`/products/${product.id}`}>
                        <Button className="w-full bg-[#7A47E0] hover:bg-[#6A37D0] text-white mt-4">
                            Xem chi tiết
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
