import React from "react";
import {Button} from "./ui/button";
import {cn} from "@/lib/utils";
import {Link} from "react-router-dom";

interface ServiceCardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
}

const ServiceCard = ({
                         title = "Service Title",
                         description = "Detailed description of the service offered by ANT CENTER.",
                         imageUrl = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
                     }: ServiceCardProps) => {
    return (
        <div className="flex flex-col bg-[#252B39] rounded-lg overflow-hidden h-full">
            <div className="h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm flex-grow">{description}</p>
                <Button
                    variant="ghost"
                    className="text-[#00E8F8] hover:text-[#00E8F8] hover:bg-[#17212E] mt-4 self-start px-0"
                >
                    Chi tiết
                </Button>
            </div>
        </div>
    );
};

const ServicesSection = () => {
    const services = [
        {
            title: "Sửa chữa động cơ",
            description:
                "Dịch vụ sửa chữa, bảo dưỡng động cơ chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm.",
            imageUrl:
                "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
        },
        {
            title: "Hệ thống điện",
            description:
                "Kiểm tra, sửa chữa và nâng cấp hệ thống điện xe máy với thiết bị hiện đại, đảm bảo an toàn.",
            imageUrl:
                "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
        },
        {
            title: "Sơn & Dọn xe",
            description:
                "Dịch vụ sơn xe chuyên nghiệp, phục hồi xe cũ trở nên như mới với màu sắc tùy chọn theo ý khách hàng.",
            imageUrl:
                "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=800&q=80",
        },
        {
            title: "Chuyên viên chẩn đoán",
            description:
                "Đội ngũ chuyên viên chẩn đoán lỗi xe chính xác, nhanh chóng với công nghệ hiện đại nhất.",
            imageUrl:
                "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
        },
        {
            title: "Thợ sơn xe",
            description:
                "Đội ngũ thợ sơn tay nghề cao, tỉ mỉ trong từng chi tiết, đảm bảo chất lượng hoàn thiện tốt nhất.",
            imageUrl:
                "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=800&q=80",
        },
        {
            title: "Quản lý dịch vụ",
            description:
                "Dịch vụ quản lý bảo dưỡng định kỳ, nhắc lịch và tư vấn chăm sóc xe toàn diện cho khách hàng.",
            imageUrl:
                "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&q=80",
        },
    ];

    return (
        <section className="w-full py-16 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00E8F8] mb-12">
                    Dịch vụ nổi bật
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link to={`/services`}>
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

export default ServicesSection;
