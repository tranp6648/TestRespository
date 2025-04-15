import React, { useState } from "react"
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


interface TrainingSearchProps {
    onSearch: (searchTerm: string, accessibleFilter: boolean | null) => void
}
const TrainingSearch: React.FC<TrainingSearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [accessibleFilter, setAccessibleFilter] = useState<boolean | null>(null);
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm, null);
    }
    const handleFilterSubmit=(e: React.FormEvent)=>{
        e.preventDefault();
        onSearch("",accessibleFilter);
    }
    const handleSelectChange = (val: string) => {
        if (val === "true") setAccessibleFilter(true);
        else if (val === "false") setAccessibleFilter(false);
        else setAccessibleFilter(null);
    }
    return (
        <div className="w-full max-w-5xl mx-auto mb-8 flex flex-col md:flex-row gap-4">

      
        <form onSubmit={handleSearchSubmit} className="flex-1 relative">
          <Input
            type="text"
            placeholder="Tìm kiếm video"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#252B39] text-white border-[#374153] pl-10 py-6 rounded-md placeholder:text-gray-400"
          />
          <Button
            type="submit"
            className="absolute right-1 top-1 bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white hover:opacity-90 px-4 py-2 text-sm"
          >
            Tìm kiếm
          </Button>
          <Search className="absolute left-3 top-5 h-5 w-5 text-gray-400" />
        </form>
  
        <form onSubmit={handleFilterSubmit} className="flex flex-row items-center gap-2 flex-wrap">
          <label className="text-white text-sm whitespace-nowrap">Lọc theo quyền:</label>
          <Select defaultValue="all" onValueChange={(val) => {
            if (val === "true") setAccessibleFilter(true);
            else if (val === "false") setAccessibleFilter(false);
            else setAccessibleFilter(null);
          }}>
            <SelectTrigger className="bg-[#252B39] text-white border-[#374153] w-[160px]">
              <SelectValue placeholder="Chọn quyền" />
            </SelectTrigger>
            <SelectContent className="bg-[#252B39] text-white z-50">
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="true">Đã mở quyền</SelectItem>
              <SelectItem value="false">Chưa mở quyền</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            className="bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white px-4 py-2 text-sm"
          >
            Lọc
          </Button>
        </form>
      </div>
    )
}
export default TrainingSearch;