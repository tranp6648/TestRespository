import React from "react";
import { Button } from "../ui/button.tsx";
import { Link } from "react-router-dom";
import { JobCardProps } from "../HomePage/JobCard.tsx";

const RelatedJobCard: React.FC<JobCardProps> = ({
  id,
  title,
  type,
  date,
  imageUrl,
  summary,
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
        <div className="flex justify-between items-center mb-2">
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${type === "full-time" ? "bg-[#22C55E] text-black" : "bg-[#3B82F6] text-white"}`}
          >
            {type === "full-time" ? "Toàn thời gian" : "Bán thời gian"}
          </span>
          <span className="text-gray-400 text-xs">Đăng: {date}</span>
        </div>
        <h3 className="text-sm font-bold text-white mb-1 truncate">{title}</h3>
        <p className="text-gray-300 text-xs mb-2 line-clamp-2">{summary}</p>
        <Link to={`/careers/${id}`}>
          <Button className="w-full bg-[#7A47E0] hover:bg-[#6A37D0] text-white text-xs py-1">
            Xem chi tiết
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RelatedJobCard;
