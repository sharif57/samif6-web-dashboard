import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../redux/features/authAPI";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [forgotPasswordMutation] = useForgotPasswordMutation();
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSignIn = async () => {
    const res = await forgotPasswordMutation(formData).unwrap();

    console.log({ res });

    navigate("/auth/verify-email");
  };

  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/auth.png')",
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 min-h-screen flex items-center justify-center p-6'>
        <div className='w-full max-w-md'>
          {/* Sign In Form */}
          <div className='bg-[#090909] backdrop-blur-sm rounded-2xl p-8 border border-gray-800'>
            {/* Header */}
            <div className='flex items-center justify-center mb-8'>
              <h1 className='text-white text-[36px] font-semibold'>
                Forget Password
              </h1>
            </div>

            {/* Form Fields */}
            <div className='space-y-6'>
              {/* Email Field */}
              <div>
                <input
                  type='email'
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder='Enter Your Email'
                  className='w-full bg-[#404040] rounded-full text-white px-4 py-4 pr-12  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400'
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className='flex items-center'>
                <button
                  onClick={handleSignIn}
                  className='w-full bg-[#534590] rounded-full hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4  transition-all transform hover:scale-[1.02] shadow-lg'
                >
                  Send OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
