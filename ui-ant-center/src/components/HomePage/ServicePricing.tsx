import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const ServicePricing = () => {
  const [selectedPackage, setSelectedPackage] = useState("bao-duong");
  const [brand, setBrand] = useState("Honda");
  const [model, setModel] = useState("SH");
  const [year, setyear] = useState("2021");
  const servicePrice = 748000;

  return (
    <div className="text-white py-12 px-4 flex items-center justify-center">
      <div className="bg-[#1D2736] p-8 rounded-2xl max-w-4xl w-full shadow-lg">
        <h2 className="text-[#00FF66] text-2xl font-bold mb-6">Tra cứu dịch vụ</h2>


        <div className="flex flex-wrap gap-4 mb-6 justify-between">
          <div className="min-w-[200px] flex-1">
            <Select onValueChange={setSelectedPackage}>
              <SelectTrigger>
                <SelectValue placeholder="Gói bảo dưỡng/sửa chữa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bao-duong">Bảo dưỡng tổng hợp</SelectItem>
                <SelectItem value="sua-chua">Sửa chữa nhanh</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-[160px] flex-1">
            <Select onValueChange={setBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Hãng xe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="Yamaha">Yamaha</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-[160px] flex-1">
            <Select onValueChange={setModel}>
              <SelectTrigger>
                <SelectValue placeholder="Tên xe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SH">SH</SelectItem>
                <SelectItem value="Vision">Vision</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="min-w-[120px] flex-1">
            <Select onValueChange={setyear}>
              <SelectTrigger>
                <SelectValue placeholder="Đời xe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Box giá dịch vụ */}
        <div className="bg-[#192734] p-6 rounded-lg border border-[#2C3E50] text-center mb-4 shadow-md">
          <p className="text-gray-300 text-sm">Giá dịch vụ:</p>
          <p className="text-yellow-400 text-3xl font-bold">
            {servicePrice.toLocaleString()}đ
          </p>
          <p className="text-sm mt-1 text-gray-400">
            Giá chưa bao gồm phụ tùng thay thế hoặc sửa chữa phát sinh
          </p>
        </div>


        <Button className="w-full h-12 bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] hover:opacity-90 px-4 py-3 flex flex-col items-center justify-center text-white text-sm rounded-lg space-y-1">
          <span className="text-base font-semibold">Đặt lịch</span>
          <span className="text-xs text-gray-200">
            👉 Nhận <span className="text-[#00FF66] font-semibold">ưu đãi đặc biệt</span> từ cửa hàng
          </span>
        </Button>



      </div>
    </div>
  );
};

export default ServicePricing;
