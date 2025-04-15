export interface Comment{
  id:number;
  author:string;
  message:string;
  postedAt:string;
}
export interface Blogs {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  content: string;
  comments?:Comment[];
}
export const BlogsData: Blogs[] = [
  {
    id: 1,
    title: "5 cách bảo dưỡng xe máy hiệu quả",
    excerpt: "Bảo dưỡng xe đúng cách sẽ giúp xe vận hành tốt và bền bỉ...",
    imageUrl: "https://nikko.vn/wp-content/uploads/2024/08/Hinh-anh-xe-vision-dang-Ngay-14-08-2024.png",
    publishedAt: "2024-09-10",
    content: `
      Bảo dưỡng xe máy không chỉ giúp xe vận hành ổn định mà còn kéo dài tuổi thọ của xe. Dưới đây là 5 cách bảo dưỡng xe hiệu quả:

      1. **Thay nhớt định kỳ**  
      Nhớt động cơ giúp bôi trơn và làm mát. Nên thay sau mỗi 1000-1500 km.

      2. **Kiểm tra và thay lọc gió**  
      Lọc gió bẩn sẽ ảnh hưởng đến hiệu suất động cơ. Nên vệ sinh hoặc thay mới mỗi 3.000 km.

      3. **Bảo dưỡng xích, nhông, sên**  
      Làm sạch, tra dầu, và kiểm tra độ chùng của sên định kỳ để tránh hao mòn.

      4. **Kiểm tra lốp và phanh**  
      Đảm bảo áp suất lốp đúng chuẩn và phanh hoạt động tốt để đảm bảo an toàn.

      5. **Kiểm tra hệ thống điện**  
      Đèn, còi, xi-nhan,... nên được kiểm tra định kỳ để không gây nguy hiểm khi lưu thông.

      👉 Việc bảo dưỡng không cần quá phức tạp, chỉ cần bạn quan tâm một chút đến "người bạn đồng hành" là chiếc xe máy, nó sẽ luôn bền bỉ và phục vụ bạn tốt nhất!
    `,
  },
  {
    id: 2,
    title: "5 cách bảo dưỡng xe máy hiệu quả",
    excerpt: "Bảo dưỡng xe đúng cách sẽ giúp xe vận hành tốt và bền bỉ...",
    imageUrl: "https://shop2banh.vn/images/2023/07/20230715_34fd7c47147211eaeda6477c0fee8a1d_1689416514.jpg",
    publishedAt: "2024-09-10",
    content: `
      Bảo dưỡng xe máy không chỉ giúp xe vận hành ổn định mà còn kéo dài tuổi thọ của xe. Dưới đây là 5 cách bảo dưỡng xe hiệu quả:

      1. **Thay nhớt định kỳ**  
      Nhớt động cơ giúp bôi trơn và làm mát. Nên thay sau mỗi 1000-1500 km.

      2. **Kiểm tra và thay lọc gió**  
      Lọc gió bẩn sẽ ảnh hưởng đến hiệu suất động cơ. Nên vệ sinh hoặc thay mới mỗi 3.000 km.

      3. **Bảo dưỡng xích, nhông, sên**  
      Làm sạch, tra dầu, và kiểm tra độ chùng của sên định kỳ để tránh hao mòn.

      4. **Kiểm tra lốp và phanh**  
      Đảm bảo áp suất lốp đúng chuẩn và phanh hoạt động tốt để đảm bảo an toàn.

      5. **Kiểm tra hệ thống điện**  
      Đèn, còi, xi-nhan,... nên được kiểm tra định kỳ để không gây nguy hiểm khi lưu thông.

      👉 Việc bảo dưỡng không cần quá phức tạp, chỉ cần bạn quan tâm một chút đến "người bạn đồng hành" là chiếc xe máy, nó sẽ luôn bền bỉ và phục vụ bạn tốt nhất!
    `,
  },
  {
    id: 3,
    title: "5 cách bảo dưỡng xe máy hiệu quả",
    excerpt: "Bảo dưỡng xe đúng cách sẽ giúp xe vận hành tốt và bền bỉ...",
    imageUrl: "http://nguyenmotocare.com/upload/images/B%E1%BA%A3o%20d%C6%B0%E1%BB%A1ng%20xe%20m%C3%A1y/18%20b%C6%B0%E1%BB%9Bc%20%2B%20b%E1%BA%A3o%20d%C6%B0%E1%BB%A1ng%20xe%20m%C3%A1y/Tieu-chuan-bao-duong-xe-may-goi-18-buoc-2.jpg",
    publishedAt: "2024-09-10",
    content: `
      Bảo dưỡng xe máy không chỉ giúp xe vận hành ổn định mà còn kéo dài tuổi thọ của xe. Dưới đây là 5 cách bảo dưỡng xe hiệu quả:

      1. **Thay nhớt định kỳ**  
      Nhớt động cơ giúp bôi trơn và làm mát. Nên thay sau mỗi 1000-1500 km.

      2. **Kiểm tra và thay lọc gió**  
      Lọc gió bẩn sẽ ảnh hưởng đến hiệu suất động cơ. Nên vệ sinh hoặc thay mới mỗi 3.000 km.

      3. **Bảo dưỡng xích, nhông, sên**  
      Làm sạch, tra dầu, và kiểm tra độ chùng của sên định kỳ để tránh hao mòn.

      4. **Kiểm tra lốp và phanh**  
      Đảm bảo áp suất lốp đúng chuẩn và phanh hoạt động tốt để đảm bảo an toàn.

      5. **Kiểm tra hệ thống điện**  
      Đèn, còi, xi-nhan,... nên được kiểm tra định kỳ để không gây nguy hiểm khi lưu thông.

      👉 Việc bảo dưỡng không cần quá phức tạp, chỉ cần bạn quan tâm một chút đến "người bạn đồng hành" là chiếc xe máy, nó sẽ luôn bền bỉ và phục vụ bạn tốt nhất!
    `,
  },
  {
    id: 4,
    title: "5 cách bảo dưỡng xe máy hiệu quả",
    excerpt: "Bảo dưỡng xe đúng cách sẽ giúp xe vận hành tốt và bền bỉ...",
    imageUrl: "https://shop2banh.vn/images/2021/03/20210304_ec9c0cf7c9e037ce70ac9a6ba80a0b1a_1614822886.jpg",
    publishedAt: "2024-09-10",
    content: `
      Bảo dưỡng xe máy không chỉ giúp xe vận hành ổn định mà còn kéo dài tuổi thọ của xe. Dưới đây là 5 cách bảo dưỡng xe hiệu quả:

      1. **Thay nhớt định kỳ**  
      Nhớt động cơ giúp bôi trơn và làm mát. Nên thay sau mỗi 1000-1500 km.

      2. **Kiểm tra và thay lọc gió**  
      Lọc gió bẩn sẽ ảnh hưởng đến hiệu suất động cơ. Nên vệ sinh hoặc thay mới mỗi 3.000 km.

      3. **Bảo dưỡng xích, nhông, sên**  
      Làm sạch, tra dầu, và kiểm tra độ chùng của sên định kỳ để tránh hao mòn.

      4. **Kiểm tra lốp và phanh**  
      Đảm bảo áp suất lốp đúng chuẩn và phanh hoạt động tốt để đảm bảo an toàn.

      5. **Kiểm tra hệ thống điện**  
      Đèn, còi, xi-nhan,... nên được kiểm tra định kỳ để không gây nguy hiểm khi lưu thông.

      👉 Việc bảo dưỡng không cần quá phức tạp, chỉ cần bạn quan tâm một chút đến "người bạn đồng hành" là chiếc xe máy, nó sẽ luôn bền bỉ và phục vụ bạn tốt nhất!
    `,
  },
  {
    id: 5,
    title: "5 cách bảo dưỡng xe máy hiệu quả",
    excerpt: "Bảo dưỡng xe đúng cách sẽ giúp xe vận hành tốt và bền bỉ...",
    imageUrl: "https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/06/thay-dau-nhot-dinh-ky-xe-yamaha-300x225.jpg",
    publishedAt: "2024-09-10",
    content: `
      Bảo dưỡng xe máy không chỉ giúp xe vận hành ổn định mà còn kéo dài tuổi thọ của xe. Dưới đây là 5 cách bảo dưỡng xe hiệu quả:

      1. **Thay nhớt định kỳ**  
      Nhớt động cơ giúp bôi trơn và làm mát. Nên thay sau mỗi 1000-1500 km.

      2. **Kiểm tra và thay lọc gió**  
      Lọc gió bẩn sẽ ảnh hưởng đến hiệu suất động cơ. Nên vệ sinh hoặc thay mới mỗi 3.000 km.

      3. **Bảo dưỡng xích, nhông, sên**  
      Làm sạch, tra dầu, và kiểm tra độ chùng của sên định kỳ để tránh hao mòn.

      4. **Kiểm tra lốp và phanh**  
      Đảm bảo áp suất lốp đúng chuẩn và phanh hoạt động tốt để đảm bảo an toàn.

      5. **Kiểm tra hệ thống điện**  
      Đèn, còi, xi-nhan,... nên được kiểm tra định kỳ để không gây nguy hiểm khi lưu thông.

      👉 Việc bảo dưỡng không cần quá phức tạp, chỉ cần bạn quan tâm một chút đến "người bạn đồng hành" là chiếc xe máy, nó sẽ luôn bền bỉ và phục vụ bạn tốt nhất!
    `,
  },
  {
    id: 6,
    title: "5 cách bảo dưỡng xe máy hiệu quả",
    excerpt: "Bảo dưỡng xe đúng cách sẽ giúp xe vận hành tốt và bền bỉ...",
    imageUrl: "https://yamaha-motor.com.vn/wp/wp-content/uploads/2020/06/bao-duong0xe-maay-dinh-ky-tai-dai-ly-chinh-hang-300x200.jpg",
    publishedAt: "2024-09-10",
    content: `
      Bảo dưỡng xe máy không chỉ giúp xe vận hành ổn định mà còn kéo dài tuổi thọ của xe. Dưới đây là 5 cách bảo dưỡng xe hiệu quả:

      1. **Thay nhớt định kỳ**  
      Nhớt động cơ giúp bôi trơn và làm mát. Nên thay sau mỗi 1000-1500 km.

      2. **Kiểm tra và thay lọc gió**  
      Lọc gió bẩn sẽ ảnh hưởng đến hiệu suất động cơ. Nên vệ sinh hoặc thay mới mỗi 3.000 km.

      3. **Bảo dưỡng xích, nhông, sên**  
      Làm sạch, tra dầu, và kiểm tra độ chùng của sên định kỳ để tránh hao mòn.

      4. **Kiểm tra lốp và phanh**  
      Đảm bảo áp suất lốp đúng chuẩn và phanh hoạt động tốt để đảm bảo an toàn.

      5. **Kiểm tra hệ thống điện**  
      Đèn, còi, xi-nhan,... nên được kiểm tra định kỳ để không gây nguy hiểm khi lưu thông.

      👉 Việc bảo dưỡng không cần quá phức tạp, chỉ cần bạn quan tâm một chút đến "người bạn đồng hành" là chiếc xe máy, nó sẽ luôn bền bỉ và phục vụ bạn tốt nhất!
    `,
  },
];
