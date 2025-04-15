import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Youtube, MessageCircle } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  return (
    <footer
      className={cn(
        "relative z-10 text-white py-12 px-4 md:px-8 lg:px-12 bg-[#17212E]/80",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Giới thiệu ANT CENTER
            </h3>
            <p className="text-sm text-gray-300">
              Trung tâm bảo dưỡng & chăm sóc xe mô tô chuyên nghiệp. Chúng tôi
              cam kết mang đến dịch vụ chất lượng cao với đội ngũ kỹ thuật viên
              giàu kinh nghiệm.
            </p>
          </div>

          {/* Column 2: Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Địa chỉ</h3>
            <p className="text-sm text-gray-300">
              313B Tổ 8, Ấp Mới 1, Tân Xuân, Hóc Môn, TP.HCM
            </p>
          </div>

          {/* Column 3: Hotline */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hotline</h3>
            <p className="text-sm text-gray-300">0971.717.479 / 0855.933.033</p>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#00E8F8] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-[#00E8F8] hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="#"
                className="text-[#00E8F8] hover:text-white transition-colors"
                aria-label="Zalo"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ANT CENTER. Tất cả các quyền được
            bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
