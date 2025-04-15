import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { BlogsData } from "@/data/BlogsData";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const BlogDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const blog = BlogsData.find((b) => b.id.toString() === id);
    const [newComment, setNewComment] = useState({
        author: "",
        message: ""
    });
    const relatedBlog = blog
    ? BlogsData
        .filter((p) => p.excerpt === blog.excerpt && p.id !== blog.id)
        .slice(0, 3)
    : [];
    const [comments, setComments] = useState(blog.comments || []);
    const handleSearch = () => {
        console.log(newComment.message)
        if (!newComment.author || !newComment.message) return;
        const maxId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) : 0;
        const newCmt = {
            id: maxId + 1,
            author: newComment.author,
            message: newComment.message,
            postedAt: new Date().toISOString()
        };
        setComments([newCmt, ...comments]);

        setNewComment({ author: "", message: "" });
    }


    return (
        <div className="bg-[#101722] text-white min-h-screen">
            <Header />
            <div className="container mx-auto px-4 py-10 max-w-4xl">
            <Link
                    to="/blog"
                    className="inline-flex items-center text-[#00E8F8] hover:text-white mt-6 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Quay lại danh sách tin tức
                </Link>

                <h1 className="text-4xl font-bold text-[#00E8F8] mb-4">{blog.title}</h1>
                <p className="text-sm text-gray-400 mb-4">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-[500px] object-cover rounded-lg mb-6" />
                <div className="text-base text-gray-200 leading-relaxed mb-8">
                    {blog.content || blog.excerpt}
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Viết Bình luận</h2>
                    <input type="text"
                        placeholder="Tên của bạn"
                        value={newComment.author}
                        onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                        className="w-full px-4 py-2 rounded bg-[#2F3646] text-white placeholder:text-gray-400 mb-3"
                    />
                    <textarea
                        value={newComment.message}
                        onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
                        className="w-full p-3 rounded-sm bg-[#252B39] border border-gray-600 text-white resize-none"
                        rows={4}
                        placeholder="Viết bình luận hoặc câu hỏi...."

                    />
                    <button type="button" onClick={handleSearch} className="mt-3 px-6 py-2 bg-[#252B39] hover:bg-[#6A37D0] rounded text-white">
                        Gửi bình luận
                    </button>
                </div>
                <div className="mt-10">
                    <h3 className="text-xl font-semibold text-white mb-4">Bình luận</h3>
                    {comments.length > 0 ? (
                        <div className="space-y-4">
                            {comments.map((cmt) => (
                                <div key={cmt.id} className="bg-[#2F3646] p-4 rounded-lg">
                                    <p className="text-sm text-gray-300 font-medium">{cmt.author}</p>
                                    <p className="text-sm text-gray-400 italic mb-2">
                                        {new Date(cmt.postedAt).toLocaleString()}
                                    </p>
                                    <p className="text-gray-200">{cmt.message}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 italic">Chưa có bình luận nào.</p>
                    )}
                </div>
                {relatedBlog.length > 0 && (
                            <div className="mt-13 mb-12">
                                <h2 className="text-2xl font-bold text-[#00E8F8] mb-6">
                                    Tin tức liên quan
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {relatedBlog.map((relatedBlog) => (
                                      <div className="bg-[#252B39] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                                      <div className="h-48 overflow-hidden">
                                          <img
                                          src={relatedBlog.imageUrl}
                                          alt={relatedBlog.title}
                                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                          />
                                      </div>
                                      <div className="p-4">
                                          <p className="text-sm text-gray-400 mb-1">{new Date(relatedBlog.publishedAt).toLocaleDateString()}</p>
                                          <h3 className="text-white font-semibold text-xl mb-2 line-clamp-2 h-[56px]">
                                              {blog.title}
                                          </h3>
                                          <p className='text-gray-300 text-sm  mb-2 max-w-[500px]'>
                                              {relatedBlog.excerpt}
                                          </p>
                                        
                                          <Link to={`/blog/${blog.id}`}>
                                          <Button className="mt-4 bg-[#7A47E0] hover:bg-[#6A37D0] text-white w-full">
                                              Đọc thêm
                                          </Button>
                                          </Link>
                                      </div>
                                  </div>

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
                         <BookingForm />

            </div>
            <Footer/>
        </div>
    )
}
export default BlogDetailPage;