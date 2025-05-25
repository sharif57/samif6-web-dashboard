// import React from 'react'

// export default function VerifyEmail() {
//   return (
//     <div>VerifyEmail</div>
//   )
// }

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  
  const handleOtpChange = (index, value) => {
    // Only allow single digit
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = [...otp];

    for (let i = 0; i < pastedData.length && i < 6; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }

    setOtp(newOtp);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = () => {
    const otpCode = otp.join("");
    console.log("Verify clicked", otpCode);

    if (otpCode.length === 6) {
      // Add verification logic here
      console.log("OTP is complete:", otpCode);
      navigate('/auth/reset-password')
    } else {
      console.log("Please enter complete OTP");
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/auth.png')",
        }}
      >
        {/* Concert venue background with blue/teal lighting and crowd */}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Verify Email Form */}
          <div className="bg-[#090909] backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-white text-[36px] font-semibold">
                Verify Email
              </h1>
            </div>

            {/* OTP Input Fields */}
            <div className="mb-8">
              <div className="flex justify-center gap-3 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-12 bg-white text-black text-center text-xl font-semibold rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerify}
                disabled={!isOtpComplete}
                className={`w-full font-semibold py-4 rounded-full transition-all transform hover:scale-[1.02] shadow-lg ${
                  isOtpComplete
                    ? "bg-[#534590] hover:from-purple-700 hover:to-purple-800 text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
              >
                Verify
              </button>
            </div>

            {/* Description Text */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Please enter the OTP we have sent you in your email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
