import React from "react";
import { Button } from "../ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import { ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  url: string;
}

interface NewsSectionProps {
  title?: string;
  articles?: NewsArticle[];
  onViewMore?: () => void;
}

const NewsSection = ({
  title = "Tin tức & Cập nhật",
  articles = [
    {
      id: "1",
      title: "Hướng dẫn bảo dưỡng xe máy",
      date: "15/03/2025",
      description:
        "Những bí quyết giúp bảo dưỡng xe máy đúng cách, kéo dài tuổi thọ và đảm bảo an toàn khi sử dụng.",
      imageUrl:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
      url: "/news/huong-dan-bao-duong-xe-may",
    },
    {
      id: "2",
      title: "Xu hướng xe máy 2025",
      date: "14/03/2025",
      description:
        "Khám phá những xu hướng mới nhất trong thế giới xe máy năm 2025, từ công nghệ đến thiết kế.",
      imageUrl:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
      url: "/news/xu-huong-xe-may-2025",
    },
    {
      id: "3",
      title: "An toàn khi lái xe",
      date: "13/03/2025",
      description:
        "Những nguyên tắc cơ bản và lời khuyên hữu ích giúp bạn lái xe an toàn trong mọi điều kiện thời tiết.",
      imageUrl:
        "https://images.unsplash.com/photo-1525160354320-d8e92641c563?w=800&q=80",
      url: "/news/an-toan-khi-lai-xe",
    },
    {
      id: "4",
      title: "Xu hướng độ xe 2025",
      date: "12/03/2025",
      description:
        "Tổng hợp những xu hướng độ xe nổi bật nhất trong năm 2025, từ phong cách đến hiệu suất.",
      imageUrl:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
      url: "/news/xu-huong-do-xe-2025",
    },
    {
      id: "5",
      title: "Bảo dưỡng xanh",
      date: "11/03/2025",
      description:
        "Phương pháp bảo dưỡng xe thân thiện với môi trường, giảm thiểu tác động đến hệ sinh thái.",
      imageUrl:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
      url: "/news/bao-duong-xanh",
    },
    {
      id: "6",
      title: "Chăm sóc xe mùa mưa",
      date: "10/03/2025",
      description:
        "Những lưu ý quan trọng và cách chăm sóc xe máy trong mùa mưa để tránh hư hỏng và kéo dài tuổi thọ.",
      imageUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&q=80",
      url: "/news/cham-soc-xe-mua-mua",
    },
  ],}: NewsSectionProps) => {
  return (
    <section className="w-full py-16 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00E8F8] mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#252B39] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-[#D0B3FF] text-sm mb-3">{article.date}</p>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {article.description}
                </p>
                <a
                  href={article.url}
                  className="inline-flex items-center text-[#00E8F8] hover:text-white transition-colors duration-200"
                >
                  Đọc thêm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to={`/news`}>
            <Button
                className={cn(
                    "bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white hover:opacity-90 transition-opacity",
                    "border-none font-medium px-8",
                )}
            >
              Xem thêm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
