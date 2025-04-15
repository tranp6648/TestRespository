import React from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import L from "leaflet";


import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface BookingFormData {
  name: string;
  phone: string;
  bikeType: string;
  bikeYear: string;
  licensePlate: string;
  service: string;
  maintenancePackage: string;
  date: string;
  time: string;
  notes: string;
  address?: string;
}
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
const BookingForm = () => {
  const form = useForm<BookingFormData>({
    defaultValues: {
      name: "",
      phone: "",
      bikeType: "",
      bikeYear: "",
      licensePlate: "",
      service: "",
      maintenancePackage: "",
      date: "",
      time: "",
      notes: "",
    },
  });

  const onSubmit = (data: BookingFormData) => {
    console.log("Form submitted:", data);
    // Here would be the API call to submit the booking
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 relative z-10">
      <h2 className="text-3xl font-bold text-center text-[#FFB800] mb-8">
        Đặt lịch bảo dưỡng xe
      </h2>

      <div className="bg-[#1F2632] rounded-lg p-6 shadow-lg">
        <Tabs defaultValue="store" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#1F2632]">
            <TabsTrigger
              value="store"
              className="data-[state=active]:bg-[#FFB800] data-[state=active]:text-black text-white bg-[#374153]"
            >
              Đặt lịch tại cửa hàng
            </TabsTrigger>
            <TabsTrigger
              value="home"
              className="data-[state=active]:bg-[#FFB800] data-[state=active]:text-black text-white bg-[#374153]"
            >
              Tiếp nhận xe tận nơi
            </TabsTrigger>
          </TabsList>

          <TabsContent value="store" className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Họ tên</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập họ tên của bạn"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Số điện thoại
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập số điện thoại"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="bikeType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Loại xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn loại xe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="honda">Honda</SelectItem>
                            <SelectItem value="yamaha">Yamaha</SelectItem>
                            <SelectItem value="suzuki">Suzuki</SelectItem>
                            <SelectItem value="kawasaki">Kawasaki</SelectItem>
                            <SelectItem value="ducati">Ducati</SelectItem>
                            <SelectItem value="bmw">BMW</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bikeYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Đời xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn đời xe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="older">Trước 2020</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="licensePlate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Biển số xe</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập biển số xe"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Gói bảo dưỡng/Dịch vụ
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn dịch vụ" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="engine">
                              Sửa chữa động cơ
                            </SelectItem>
                            <SelectItem value="electrical">
                              Hệ thống điện
                            </SelectItem>
                            <SelectItem value="paint">Sơn & Dọn xe</SelectItem>
                            <SelectItem value="diagnosis">
                              Chẩn đoán kỹ thuật
                            </SelectItem>
                            <SelectItem value="maintenance">
                              Bảo dưỡng định kỳ
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Ngày đặt lịch
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="bg-[#17212E] text-white border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Giờ đặt lịch
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn thời gian" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="morning">
                              Buổi sáng (8:00 - 12:00)
                            </SelectItem>
                            <SelectItem value="afternoon">
                              Buổi chiều (13:00 - 17:00)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Ghi chú</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Nhập thông tin thêm về tình trạng xe hoặc yêu cầu đặc biệt"
                          className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153] min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[#FFB800] hover:bg-[#E6A700] text-black font-medium py-3 px-8 rounded-md"
                >
                  Xác nhận đặt lịch
                </Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="home" className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Họ tên</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập họ tên của bạn"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Số điện thoại
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập số điện thoại"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Địa chỉ đón xe
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập địa chỉ đón xe"
                          className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="bikeType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Loại xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn loại xe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="honda">Honda</SelectItem>
                            <SelectItem value="yamaha">Yamaha</SelectItem>
                            <SelectItem value="suzuki">Suzuki</SelectItem>
                            <SelectItem value="kawasaki">Kawasaki</SelectItem>
                            <SelectItem value="ducati">Ducati</SelectItem>
                            <SelectItem value="bmw">BMW</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bikeYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Đời xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn đời xe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="older">Trước 2020</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="licensePlate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Biển số xe</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập biển số xe"
                            className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Gói bảo dưỡng/Dịch vụ
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn dịch vụ" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="engine">
                              Sửa chữa động cơ
                            </SelectItem>
                            <SelectItem value="electrical">
                              Hệ thống điện
                            </SelectItem>
                            <SelectItem value="paint">Sơn & Dọn xe</SelectItem>
                            <SelectItem value="diagnosis">
                              Chẩn đoán kỹ thuật
                            </SelectItem>
                            <SelectItem value="maintenance">
                              Bảo dưỡng định kỳ
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">
                          Ngày đón xe
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="bg-[#17212E] text-white border-[#374153]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Giờ đón xe</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-[#17212E] text-white border-[#374153]">
                              <SelectValue placeholder="Chọn thời gian" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#17212E] text-white border-[#374153]">
                            <SelectItem value="morning">
                              Buổi sáng (8:00 - 12:00)
                            </SelectItem>
                            <SelectItem value="afternoon">
                              Buổi chiều (13:00 - 17:00)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Ghi chú</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Nhập thông tin thêm về tình trạng xe hoặc yêu cầu đặc biệt"
                          className="bg-[#17212E] text-white placeholder:text-gray-400 border-[#374153] min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-700">
                  <iframe
                    title="Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.706163296001!2d106.71923087590294!3d10.756481889396117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1e0b13a7fd%3A0x6c8f94e1b0179ae4!2zMTIgTmd1eeG7hW4gVGjhu4sgVGjhuq1wLCBUw6JuIFBow7osIFF14bqtbiA3LCBUaMOhaSBO4buZaCBIw6AgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1713099876975!5m2!1svi!2s"
                  ></iframe>
                </div>
                <div className="space-y-4 bg-[#0F172A] text-white p-4 rounded-xl border border-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Cửa hàng gần nhất: <span className="text-red-500">ANT CENTER - Quận 7</span>
                    </h3>
                    <p className="text-sm mt-1 text-gray-400">
                      12 Nguyễn Thị Thập, Tân Phú, Quận 7, TP HCM
                    </p>
                    <p className="text-sm mt-1">
                      Khoảng cách: <span className="font-medium text-red-500">7.88 km</span> (khoảng 21 phút theo đường đi thực tế)
                    </p>
                    <p className="text-sm mt-1 font-medium font-sans">
                      Chi phí giao nhận xe dự kiến:
                      <br />- Trong giờ làm việc (8:00-17:30):{" "}
                      <span className="font-medium text-yellow-400">236.436đ/chiều</span>
                      <br />- Ngoài giờ:{" "}
                      <span className="font-medium text-yellow-400">354.654đ/chiều</span>
                    </p>
                    <p className="text-sm mt-1 text-gray-400">
                      *Áp dụng cho hai chiều (đón và giao xe)
                    </p>
                  </div>
                  <div>

                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-sm">
                    <div className="space-y-1">
                      <p>
                        <strong>Khoảng cách bán kính:</strong> 7.88 km
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="text-base font-semibold mb-2 text-white">
                  Danh sách cửa hàng
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "ANT CENTER - Hóc Môn",
                      address: "313E Tô Ký, Ấp Mới 1, Tân Xuân, Hóc Môn, TP HCM",
                      distance: "15.58 km",
                    },
                    {
                      name: "ANT CENTER - Quận 7",
                      address: "12 Nguyễn Thị Thập, Tân Phú, Quận 7, TP HCM",
                      distance: "5.25 km",
                    },
                    {
                      name: "ANT CENTER - Thủ Đức",
                      address: "345 Võ Văn Ngân, Linh Chiểu, Thủ Đức, TP HCM",
                      distance: "15.51 km",
                    },
                  ].map((store, i) => (
                    <div
                      key={i}
                      className="bg-[#1E293B] p-4 rounded-lg border border-gray-600"
                    >
                      <h5 className="font-semibold text-white mb-1">{store.name}</h5>
                      <p className="text-sm text-gray-400 mb-3">{store.address}</p>
                      <p className="text-sm mb-3">
                        <i className="fa-solid fa-location-dot mr-1 text-red-400"></i> {store.distance} (đường chim)
                      </p>
                      <div className="flex gap-2 justify-between">
                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                          Chọn cửa hàng
                        </button>
                        <button className=" border bg-gray-500 text-white border-gray-500 px-3 py-1 rounded text-sm hover:bg-gray-700">
                          <i className="fa-solid fa-eye mr-1"></i> Xem
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 bg-[#0F172A] text-white p-4 rounded-xl border border-gray-700">
                  <div>
                    <h4 className="text-lg font-semibold text-white text-center">
                      Chi phí nhận xe dự kiến
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-1  mt-4 text-sm">
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Khoảng cách bán kính:</p>
                        <p className="font-semibold">7.88 km</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Phí giao nhận (trong giờ):</p>
                        <p className="font-semibold text-yellow-400">236.436đ/chiều</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Phí giao nhận (ngoài giờ):</p>
                        <p className="font-semibold text-yellow-400">236.436đ/chiều</p>
                      </div>
                      <div className="w-full border mt-4 border-solid border-gray-600">

                      </div>
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Tổng chi phí cả 2 chiều (trong giờ):</p>
                        <p className="font-semibold text-yellow-400">472.872đ/chiều</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 text-sm">
                        <p className="font-medium">Tổng chi phí cả 2 chiều (ngoài giờ):</p>
                        <p className="font-semibold text-yellow-400">709.308đ</p>
                      </div>

                    </div>
                    <div className="text-white text-sm space-y-1">
                      <h4 className="text-lg font-semibold text-yellow-400 text-center">
                        Thông tin về chi phí giao nhận xe
                      </h4>
                      <p>• Miễn phí giao nhận trong phạm vi bán kính 3km.</p>
                      <p>
                        • Phí giao nhận: 30.000đ/km (cho khoảng cách lớn hơn 3km) trong giờ làm việc.
                      </p>
                      <p>
                        • Phí ngoài giờ: 45.000đ/km (sau 17:30 hoặc ngoài khung giờ làm việc).
                      </p>
                      <p>• Áp dụng cho cả hai chiều (giao và nhận xe).</p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-white mb-1">Ghi chú</label>
                  <textarea
                    className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập thông tin thêm về tình trạng xe hoặc yêu cầu đặc biệt"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[#FFB800] hover:bg-[#E6A700] text-black font-medium py-3 px-8 rounded-md"
                >
                  Xác nhận đặt lịch đón xe
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BookingForm;
