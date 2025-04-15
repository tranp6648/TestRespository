import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { accentColors } from "@/lib/colors";

interface HeaderProps {
  logo?: string;
  menuItems?: Array<{ label: string; href: string }>;
}

const Header = ({
  logo = "ANT CENTER",
  menuItems = [
    { label: "Dịch vụ", href: "/services" },
    { label: "Sản phẩm", href: "/products" },
    { label: "Bài viết", href: "/blog" },
    { label: "Training", href: "/training" },
    { label: "Tuyển dụng", href: "/careers" },
  ],
}: HeaderProps) => {
  const location = useLocation();
  return (
    <header className="w-full bg-[#17212E] h-20 flex items-center justify-between px-6 md:px-12 lg:px-20 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-[#17212E] font-bold text-xl">A</span>
        </div>
        <span className="text-[#00E8F8] font-bold text-xl hidden sm:block">
          {logo}
        </span>
      </Link>

      {/* Navigation Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className={cn(
                  "transition-colors",
                  location.pathname === item.href ||
                    (item.href !== "/" &&
                      location.pathname.startsWith(item.href))
                    ? `text-[${accentColors.blue}]`
                    : "text-white hover:text-[#00E8F8]",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Booking Button */}
      <Button className="bg-[#7A47E0] hover:bg-[#6A37D0] text-white rounded-md">
        Đặt lịch ngay
      </Button>

      {/* Mobile Menu Button - Only visible on small screens */}
      <button className="md:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
