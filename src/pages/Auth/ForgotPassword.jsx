// import React from 'react'

// export default function ForgotPassword() {
//   return (
//     <div>ForgotPassword</div>
//   )
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

 

  const handleSignIn = () => {
    console.log("Sign in clicked", formData);
    // Add sign in logic here
    navigate("/auth/verify-email");
  };


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
        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-teal-900/70 to-blue-800/80"></div> */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Sign In Form */}
          <div className="bg-[#090909] backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
           
              <h1 className="text-white text-[36px] font-semibold">Forget Password</h1>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full bg-[#404040] rounded-full text-white px-4 py-4 pr-12  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>

            

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <button
                  onClick={handleSignIn}
                  className="w-full bg-[#534590] rounded-full hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4  transition-all transform hover:scale-[1.02] shadow-lg"
                >
                 Send OTP
                </button>
              </div>

              {/* Sign In Button */}

              {/* Sign Up Link */}
              {/* <div className="text-center">
                <span className="text-gray-400 text-sm">Dont have an Account? </span>
                <button
                  onClick={handleSignUp}
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                >
                  Sign Up
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
