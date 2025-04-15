import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface ProductSearchProps {
  onSearch: (searchTerm: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-2xl mx-auto mb-8 relative"
    >
      <div className="relative">
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#252B39] text-white border-[#374153] pl-10 py-6 rounded-md placeholder:text-gray-400"
        />
        <Button
          type="submit"
          className="absolute right-1 top-1 bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white hover:opacity-90"
        >
          Tìm kiếm
        </Button>
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
      </div>
    </form>
  );
};

export default ProductSearch;
