import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TrainingList } from "@/data/TrainingsData";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const TrainingDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const training = TrainingList.find((b) => b.id.toString() === id);
    const relatedTraining = training
        ? TrainingList
            .filter((p) => p.isAccessible === true && p.id !== training.id)
            .slice(0, 4)
        : [];

    return (
        <div className="bg-[#101722] text-white min-h-screen">
            <Header />


            <div className="container mx-auto py-8 px-4">
                <Link
                    to="/training"
                    className="inline-flex items-center text-[#00E8F8] hover:text-white mt-6 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Quay lại danh sách training
                </Link>


                <h1 className="text-3xl font-bold text-center text-[#00E8F8] mb-4">{training.title}</h1>
                <p className="text-gray-400 text-center mb-4">{training.description}</p>
                {training.isAccessible ? (
                    <div className="space-y-4">
                        <div className="w-full h-0 relative pb-[56.25%]">
                            <video
                                controls
                                className="w-full h-[700px] rounded-lg shadow-lg"
                                src={training.videoUrl}
                            >
                                Trình duyệt của bạn không hỗ trợ phát video.
                            </video>
                        </div>
                        {relatedTraining.length > 0 && (
                            <div className="mt-13 mb-12">
                                <h2 className="text-2xl font-bold text-[#00E8F8] mb-6">
                                    Training liên quan
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {relatedTraining.map((relatedTraining) => (
                                        <Link to={`/training/${relatedTraining.id}`}>
                                            <div
                                                className={`bg-[#252B39] rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer ${!relatedTraining.isAccessible ? "opacity-50 pointer-events-none" : ""}`}

                                            >
                                                <img src={relatedTraining.thumbnailUrl} alt={relatedTraining.title} className="w-full h-40 object-cover" />
                                                <div className="p-4 text-white space-y-1">
                                                    <h3 className="font-semibold text-lg">{relatedTraining.title}</h3>
                                                    <p className="text-sm text-gray-300 line-clamp-2">{relatedTraining.description}</p>
                                                    <Progress value={relatedTraining.watchedPercent} className="mt-2 h-2 bg-gray-600" />
                                                </div>
                                            </div>
                                        </Link>

                                    ))}
                                </div>
                                <div className="text-center mt-8">
                                    <Link
                                        to="/training"
                                        className="bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] text-white px-6 py-3 rounded-md font-medium inline-block hover:opacity-90 transition-opacity"
                                    >
                                        Xem thêm
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                ) : (
                    <div className="text-center mt-10 space-y-4">
                        <p className="text-red-400 text-lg">Bạn chưa được cấp quyền để xem video này.</p>
                        <Button className="bg-[#7A47E0] hover:opacity-90 text-white px-6 py-2">
                            Liên hệ Admin
                        </Button>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}
export default TrainingDetailPage;