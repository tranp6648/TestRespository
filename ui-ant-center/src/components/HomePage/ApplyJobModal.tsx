import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const ApplyJobModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [activeTab, setActiveTab] = useState<"upload" | "fill">("upload");

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed z-50 inset-0 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50 " aria-hidden="true" />
            <Dialog.Panel className="bg-[#1E2633] rounded-xl shadow-lg scrollbar-thin scrollbar-thumb-[#4DFF4D] scrollbar-track-[#1E2633] p-4 w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-auto text-white relative z-50">


                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white">
                    <X size={20} />
                </button>


                <Dialog.Title className="text-base font-semibold mb-1 text-[#8fff66]">
                    Nộp hồ sơ ứng tuyển
                </Dialog.Title>
                <p className="text-sm text-gray-300 mb-3">Vui lòng chọn cách thức ứng tuyển vào vị trí tuyển dụng</p>


                <div className="flex space-x-2 mb-4">
                    <button
                        onClick={() => setActiveTab("upload")}
                        className={`w-full px-3 py-1.5 text-sm font-semibold rounded-md ${activeTab === "upload"
                            ? "bg-[#4DFF4D] text-black"
                            : "bg-gray-700 text-white"
                            }`}
                    >
                        Nộp CV
                    </button>
                    <button
                        onClick={() => setActiveTab("fill")}
                        className={`w-full px-3 py-1.5 text-sm rounded-md ${activeTab === "fill"
                            ? "bg-[#4DFF4D] text-black font-semibold"
                            : "bg-gray-700 text-white"
                            }`}
                    >
                        Điền CV trực tiếp
                    </button>
                </div>
                {activeTab === "upload" && (
                    <div>
                        <div className="bg-[#2B3242] border border-dashed border-gray-500 rounded-md p-3 text-center mb-4">
                            <div className="text-xl mb-1">📄</div>
                            <div className="font-medium mb-1 text-sm">Tải CV của bạn lên</div>
                            <div className="text-xs text-gray-400 mb-2">
                                Hỗ trợ định dạng PDF, DOC, DOCX (tối đa 5MB)
                            </div>
                            <button className="bg-[#4DFF4D] text-black px-3 py-1 rounded text-sm font-semibold">
                                Chọn file
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === "upload" && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            {[
                                { label: "Họ và tên", placeholder: "Nhập họ và tên của bạn" },
                                { label: "Email", placeholder: "example@email.com" },
                                { label: "Số điện thoại", placeholder: "Số điện thoại liên hệ" },
                                { label: "Vị trí ứng tuyển", placeholder: "Vị trí ứng tuyển" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <label className="text-sm mb-1">{item.label}</label>
                                    <input
                                        className="bg-[#2B3242] px-3 py-1.5 rounded text-white placeholder-gray-400 text-sm"
                                        placeholder={item.placeholder}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <label className="text-sm mb-1">Thời gian phỏng vấn mong muốn</label>
                            <select className="w-full bg-[#2B3242] px-3 py-1.5 rounded text-white text-sm">
                                <option>Chọn thời gian phỏng vấn</option>
                                <option>Sáng</option>
                                <option>Chiều</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="text-sm mb-1">Thư ngỏ</label>
                            <textarea
                                className="w-full bg-[#2B3242] px-3 py-2 rounded text-white placeholder-gray-400 text-sm"
                                rows={3}
                                placeholder="Thư ngỏ (câu hỏi hoặc yêu cầu đặc biệt...)"
                            />
                        </div>
                    </>
                )}

                {activeTab === "fill" && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                            {/* Họ và tên */}
                            <div className="flex flex-col">
                                <label className="text-sm text-white mb-1">Họ và tên *</label>
                                <input
                                    type="text"
                                    className="bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded placeholder-gray-400"
                                    placeholder="Nhập họ và tên của bạn"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className="text-sm text-white mb-1">Email *</label>
                                <input
                                    type="email"
                                    className="bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded placeholder-gray-400"
                                    placeholder="example@email.com"
                                />
                            </div>

                            {/* Số điện thoại */}
                            <div className="flex flex-col">
                                <label className="text-sm text-white mb-1">Số điện thoại *</label>
                                <input
                                    type="tel"
                                    className="bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded placeholder-gray-400"
                                    placeholder="Số điện thoại liên hệ"
                                />
                            </div>

                            {/* Năm sinh */}
                            <div className="flex flex-col">
                                <label className="text-sm text-white mb-1">Năm sinh *</label>
                                <input
                                    type="number"
                                    className="bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded placeholder-gray-400"
                                    placeholder="Nhập năm sinh của bạn"
                                />
                            </div>

                            {/* Nơi ở hiện tại */}
                            <div className="flex flex-col md:col-span-2">
                                <label className="text-sm text-white mb-1">Nơi ở hiện tại</label>
                                <input
                                    type="text"
                                    placeholder="Nhập địa chỉ hiện tại"
                                    className="bg-[#2B3242] px-3 py-1.5 rounded text-white placeholder-gray-400 text-sm"
                                />
                            </div>


                            {/* Vị trí ứng tuyển */}
                            <div className="flex flex-col">
                                <label className="text-sm text-white mb-1">Vị trí ứng tuyển *</label>
                                <select className="bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded">
                                    <option>Chọn vị trí</option>
                                    <option>Frontend Developer</option>
                                    <option>Backend Developer</option>
                                </select>
                            </div>

                            {/* Kinh nghiệm */}
                            <div className="flex flex-col">
                                <label className="text-sm text-white mb-1">Kinh nghiệm làm việc *</label>
                                <select className="bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded">
                                    <option>Chọn kinh nghiệm</option>
                                    <option>Dưới 1 năm</option>
                                    <option>1-3 năm</option>
                                    <option>Trên 3 năm</option>
                                </select>
                            </div>

                            {/* Trình độ học vấn */}
                            <div className="flex flex-col">
                                <label className="text-sm text-white mb-1">Trình độ học vấn *</label>
                                <select className="bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded">
                                    <option>Chọn trình độ</option>
                                    <option>Đại học</option>
                                    <option>Cao đẳng</option>
                                    <option>Trung cấp</option>
                                </select>
                            </div>

                            {/* Thời gian phỏng vấn */}
                            <div className="flex flex-col">
                                <label className="text-sm text-white mb-1">Thời gian phỏng vấn mong muốn</label>
                                <select className="bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded">
                                    <option>Chọn thời gian</option>
                                    <option>Buổi sáng</option>
                                    <option>Buổi chiều</option>
                                </select>
                            </div>
                        </div>

                        {/* Kỹ năng */}
                        <div className="mb-4">
                            <label className="text-sm text-white mb-1">Kỹ năng</label>
                            <p className="text-xs text-gray-400 mb-1">
                                Liệt kê các kỹ năng chuyên môn và kỹ năng mềm, cách nhau bằng dấu phẩy..
                            </p>
                            <textarea
                                rows={3}
                                className="w-full bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded placeholder-gray-400"
                                placeholder="VD: React, NodeJS, quản lý thời gian, làm việc nhóm..."
                            />
                        </div>

                        {/* Thư ngỏ */}
                        <div className="mb-6">
                            <label className="text-sm text-white mb-1">Thư ngỏ</label>
                            <p className="text-xs text-gray-400 mb-1 leading-5">
                                Bạn hãy đặt những câu hỏi, thắc mắc, hoặc những yêu cầu mong muốn khi ứng tuyển để bộ phận nhân sự có thể xem xét tạo điều kiện để bạn có thể yên tâm 
                                làm việc và cống hiến tại đây.
                            </p>
                            <textarea
                                rows={3}
                                className="w-full bg-[#2B3242] text-white text-sm px-3 py-1.5 rounded placeholder-gray-400"
                                placeholder="Câu hỏi hoặc điều bạn mong muốn khi ứng tuyển vào công ty..."
                            />
                        </div>
                    </>
                )}



                <button className="w-full bg-[#4DFF4D] text-black py-2 font-semibold rounded text-sm hover:bg-[#3de03d]">
                    Nộp hồ sơ
                </button>
            </Dialog.Panel>
        </Dialog>
    );
};

export default ApplyJobModal;
