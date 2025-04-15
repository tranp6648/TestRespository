import BannerCarousel from "@/components/BannerCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react"
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin=(e:React.FormEvent)=>{
        e.preventDefault();
        const defaultEmail="admin@gmail.com";
        const defaultPassword="123456";
        if(!email && !password){
            alert("Vui lòng nhập đầy đủ email và mật khẩu.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            alert("Email không hợp lệ.");
            return;
        }
        if(email === defaultEmail && password === defaultPassword){
            alert("🎉 Đăng nhập thành công!");
        }else{
            alert("❌ Email hoặc mật khẩu không đúng.");
        }
    }
    return (
        <div className="min-h-screen bg-[#101722] text-white">
            <Header />
            <BannerCarousel />
            <section className="container mx-auto py-12 px-4 ">
                <h1 className="text-4xl font-bold text-center text-[#00E8F8] mb-8">
                    Đăng nhập
                </h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <Input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-[#252B39] text-white border-[#374153]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                className="bg-[#252B39] text-white border-[#374153] pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div
                                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 text-right">
                        <Link to="/Forgot" className="text-sm text-[#00E8F8] hover:underline">
                            Quên mật khẩu?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] hover:opacity-90"
                    >
                        Đăng nhập
                    </Button>
                </form>
                {/* <div className="text-center text-sm text-gray-400 mt-4">
                    Chưa có tài khoản? <span className="text-[#00E8F8] cursor-pointer hover:underline">Đăng ký</span>
                </div> */}
            </section>
            <Footer/>
        </div>
    )
}
export default LoginPage;