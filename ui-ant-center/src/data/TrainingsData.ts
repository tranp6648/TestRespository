export interface TrainingItem {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    isAccessible: boolean;
    watchedPercent: number;
}
export const TrainingList: TrainingItem[] = [
    {
        id: 1,
        title: "Hướng dẫn thay nhớt xe tay ga",
        description: "Video hướng dẫn chi tiết cách thay nhớt xe tay ga đúng chuẩn.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/XLNbiLgvA9g/hqdefault.jpg",
        isAccessible: true,
        watchedPercent: 60
    },
    {
        id: 2,
        title: "Kiểm tra hệ thống phanh xe",
        description: "Quy trình kiểm tra và bảo trì hệ thống phanh.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/J---aiyznGQ/hqdefault.jpg",
        isAccessible: false,
        watchedPercent: 0
    },
    {
        id: 3,
        title: "Kiểm tra hệ thống phanh xe",
        description: "Quy trình kiểm tra và bảo trì hệ thống phanh.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        thumbnailUrl: "https://i.ytimg.com/vi/J---aiyznGQ/hqdefault.jpg",
        isAccessible: true,
        watchedPercent: 0
    }
]