import React from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input.tsx";

interface ServiceSearchProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({
  onSearch = () => {},
  placeholder = "Tìm kiếm dịch vụ...",
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className={`relative w-full max-w-3xl mx-auto ${className}`}>
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleSearch}
          className="w-full h-12 pl-12 pr-4 bg-[#252B39] border-[#374153] text-white placeholder:text-gray-400 rounded-md focus:border-[#00E8F8] focus:ring-1 focus:ring-[#00E8F8]"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </div>
  );
};

export default ServiceSearch;
