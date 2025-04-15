import {Blogs} from "@/data/BlogsData"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
interface BlogCarProps{
    blog:Blogs;
}
const BlogCard: React.FC<BlogCarProps> = ({ blog }) => {
    const [showFull,setShowFull]=useState(false);
    const isLong=blog.excerpt.length>150;
    return(
        <div className="bg-[#252B39] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
            <div className="h-48 overflow-hidden">
                <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-400 mb-1">{new Date(blog.publishedAt).toLocaleDateString()}</p>
                <h3 className="text-white font-semibold text-xl mb-2 line-clamp-2 h-[56px]">
                    {blog.title}
                </h3>
                <p className={`text-gray-300 text-sm ${showFull ? "" : "line-clamp-3"} mb-2 max-w-[500px]`}>
                    {blog.excerpt}
                </p>
                {isLong && (
                    <button onClick={()=>setShowFull((prev)=>!prev)} className="text-sm text-[#00E8F8] hover:underline mb-2">
                        {showFull ? "Ẩn bớt" : "xem thêm"}
                    </button>
                )}
                <Link to={`/blog/${blog.id}`}>
                <Button className="mt-4 bg-[#7A47E0] hover:bg-[#6A37D0] text-white w-full">
                    Đọc thêm
                </Button>
                </Link>
            </div>
        </div>
    )    
}
export default BlogCard;