import React from "react";
import { cn } from "@/lib/utils.ts";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id?: number;
  title: string;
  summary: string;  // Đổi từ description thành summary
  imageUrl: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
                                                   id = 1,
                                                   title = "Dịch vụ",
                                                   summary = "Mô tả ngắn gọn về dịch vụ này",  // Đổi từ description thành summary
                                                   imageUrl = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
                                                   className,
                                                 }) => {
  return (
      <div
          className={cn(
              "bg-[#252B39] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105",
              className,
          )}
      >
        <div className="h-48 overflow-hidden">
          <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-[#00E8F8] mb-2">{title}</h3>
          <p className="text-white text-sm">{summary}</p>  {/* Thay description thành summary */}
          <Link to={`/services/${id}`}>
            <Button className="w-full bg-[#7A47E0] hover:bg-[#6A37D0] text-white mt-4">
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
  );
};

export default ServiceCard;
