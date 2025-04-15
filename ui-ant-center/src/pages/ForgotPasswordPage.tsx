import BannerCarousel from "@/components/BannerCarousel";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useRef, useState } from "react"

const ForgotPasswordPage: React.FC = () => {
    const inputLength = 4;
    const [email, setEmail] = useState("");
    const [step, setStep] = useState<"email" | "otp">("email");
    const [otpValues, setOtpValues] = useState(["", "", "", ""]);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const handleSendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return alert("Vui lòng nhập Email.");
        console.log("Gửi mã OTP tới", email);
        setStep("otp");
    }
    const handleOTPChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otpValues];
        newOtp[index] = value;
        setOtpValues(newOtp);
        if (value && index < inputLength-1) {
            inputsRef.current[index + 1]?.focus();
        }
        
    }
    const handleOtpkeydown=(e:React.KeyboardEvent<HTMLInputElement>,index:number)=>{
        if (e.key === "Backspace" && !otpValues[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
          }
    }
    return (
        <div className="min-h-screen bg-[#101722] text-white">
            <Header />
            <BannerCarousel />
            <section className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-center text-[#00E8F8] mb-8">
                    {step === "email" ? "Quên mật khẩu" : "Nhập mã OTP"}
                </h1>
                {step === "email" ? (
                    <form onSubmit={handleSendEmail} className="space-y-4">
                        <div >
                            <label className="block text-sm text-gray-300 mb-1">Email</label>
                            <Input
                                type="email"
                                placeholder="you@example.com"
                                className="bg-[#252B39] text-white border-[#374153]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] hover:opacity-90"
                        >
                            Quên mật khẩu
                        </Button>
                    </form>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm text-gray-300 mb-2 text-center">Nhập mã OTP đã gửi về Email</label>
                            <div className="flex justify-center gap-3">
                                {otpValues.map((value, index) => (
                                    <Input
                                        key={index}
                                        ref={(el) => (inputsRef.current[index] = el)}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={value}
                                        onChange={(e) =>handleOTPChange(index,e.target.value)}
                                        onKeyDown={(e)=>handleOtpkeydown(e,index)}
                                        className="w-12 h-12 text-center text-xl bg-[#252B39] text-white border-[#374153]"
                                    />
                                ))}
                            </div>
                        </div>
                        <Button 
                        onClick={()=>alert("Xác minh mã OTP: "+otpValues.join(""))}
                        className="w-full bg-gradient-to-r from-[#00E8F8] to-[#7A47E0] hover:opacity-90"
                        >
                            Xác minh
                        </Button>
                    </div>
                )}
            </section>
        </div>
    )
}
export default ForgotPasswordPage;