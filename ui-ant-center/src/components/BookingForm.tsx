import React from "react";
import { useForm } from "react-hook-form";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
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
