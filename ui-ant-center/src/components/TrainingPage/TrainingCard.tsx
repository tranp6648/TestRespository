import { VideoItem } from "@/data/VideosData";
import { Progress } from "../ui/progress";
import { Link } from "react-router-dom";

interface Props {
    video: VideoItem;

}
const TrainingCard: React.FC<Props> = ({ video }) => {
    return (
        <Link to={`/training/${video.id}`}>
            <div
                className={`bg-[#252B39] rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer ${!video.isAccessible ? "opacity-50 pointer-events-none" : ""}`}
                onClick={() => video.isAccessible}
            >
                <img src={video.thumbnailUrl} alt={video.title} className="w-full h-40 object-cover" />
                <div className="p-4 text-white space-y-1">
                    <h3 className="font-semibold text-lg">{video.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{video.description}</p>
                    {video.isAccessible && (
                        <Progress value={video.watchedPercent} className="mt-2 h-2 bg-gray-600" />
                    )}
                    {!video.isAccessible && (
                        <p className="text-red-400 text-sm italic mt-2">Chưa được cấp quyền truy cập</p>
                    )}
                </div>
            </div>
        </Link>

    )
}
export default TrainingCard;