import React from "react";
import { Button } from "../ui/button.tsx";
import { Link } from "react-router-dom";

interface RelatedServiceCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const RelatedServiceCard: React.FC<RelatedServiceCardProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-[#252B39] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="h-32 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-bold text-[#00E8F8] mb-1 truncate">
          {title}
        </h3>
        <p className="text-gray-300 text-xs mb-2 line-clamp-2">{description}</p>
        <Link to={`/services/${id}`}>
          <Button className="w-full bg-[#7A47E0] hover:bg-[#6A37D0] text-white text-xs py-1">
            Xem chi tiết
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RelatedServiceCard;
