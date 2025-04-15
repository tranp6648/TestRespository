import React, { useState } from "react";
import { Button } from "../ui/button.tsx";
import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import ApplyJobModal from "./ApplyJobModal.tsx";
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
  const[isModalOpen,setModalOpen]=useState(false);
  return (
    <div className="bg-[#252B39] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">

      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>


      <div className="p-6">

        <div className="flex justify-between items-center mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${type === "full-time"
                ? "bg-[#22C55E] text-black"
                : "bg-[#3B82F6] text-white"
              }`}
          >
            {type === "full-time" ? "Toàn thời gian" : "Bán thời gian"}
          </span>
          <span className="text-gray-400 text-sm">📅 {date}</span>
        </div>


        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

        <p className="text-gray-300 text-sm mb-5 leading-relaxed">{summary}</p>


        <div className="flex justify-between items-center gap-2">
          <Link to={`/careers/${id}`} className="flex-1">
            <Button className="w-full bg-gradient-to-r from-[#7A47E0] to-[#A678F0] text-white font-medium hover:opacity-90">
              Xem chi tiết
            </Button>
          </Link>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="border border-[#7A47E0] hover:bg-[#7A47E0] hover:text-white"
                  aria-label="Apply"
                  onClick={()=>setModalOpen(true)}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content
                className="bg-[#7A47E0] text-white text-xs rounded-md px-3 py-1 shadow-md"
                side="top"
                sideOffset={8}
              >
                Apply Job
                <Tooltip.Arrow className="fill-[#7A47E0]" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </div>
      <ApplyJobModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default JobCard;
