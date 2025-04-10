import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobSearchAndFilterProps {
  searchTerm: string;
  jobType: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJobTypeChange: (value: string) => void;
}

const JobSearchAndFilter = ({
  searchTerm,
  jobType,
  onSearchChange,
  onJobTypeChange,
}: JobSearchAndFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-2xl mx-auto">
      <div className="flex-1">
        <Input
          placeholder="Tìm kiếm vị trí..."
          className="bg-[#1F2632] border-[#374153] text-white placeholder:text-gray-400"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
      <div className="w-full sm:w-48">
        <Select value={jobType} onValueChange={onJobTypeChange}>
          <SelectTrigger className="bg-[#1F2632] border-[#374153] text-white">
            <SelectValue placeholder="Loại công việc" />
          </SelectTrigger>
          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="full-time">Toàn thời gian</SelectItem>
            <SelectItem value="part-time">Bán thời gian</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default JobSearchAndFilter;
