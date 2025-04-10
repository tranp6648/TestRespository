import React from "react";
import { Button } from "../ui/button.tsx";
import { Link } from "react-router-dom";

export interface JobCardProps {
  id: number;
  title: string;
  type: "full-time" | "part-time";
  date: string;
  imageUrl: string;
  summary: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  type,
  date,
  imageUrl,
  summary,
}) => {
  return (
    <div className="bg-[#252B39] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${type === "full-time" ? "bg-[#22C55E] text-black" : "bg-[#3B82F6] text-white"}`}
          >
            {type === "full-time" ? "Toàn thời gian" : "Bán thời gian"}
          </span>
          <span className="text-gray-400 text-sm">Đăng ngày: {date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{summary}</p>
        <Link to={`/careers/${id}`}>
          <Button className="w-full bg-[#7A47E0] hover:bg-[#6A37D0] text-white">
            Xem chi tiết
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
