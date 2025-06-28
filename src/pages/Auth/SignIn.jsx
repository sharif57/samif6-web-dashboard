import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/authSlice.js"; // Adjust the import path as necessary

export default function SignIn() {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBack = () => {
    console.log("Back button clicked");
    // Add navigation logic here
  };

  const handleSignIn = async () => {
    try {
      console.log("Sign in clicked", formData);
      const response = await login(formData);
      console.log("Login response:", response);
    } catch (error) {
      console.error("Login error:", error);
    }
    // Add sign in logic here
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // Add forgot password logic here
    navigate("/auth/forgot-password");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/auth.png')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Sign In Form */}
          <div className="bg-[#090909] backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
              <button
                onClick={handleBack}
                className="text-white hover:text-gray-300 transition-colors mr-4"
              >
                {/* <ArrowLeft className="w-5 h-5" /> */}
              </button>
              <h1 className="text-white text-[36px] font-semibold">Sign In</h1>
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

              {/* Password Field */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Your Password"
                  className="w-full bg-[#404040] rounded-full text-white px-4 py-4 pr-12  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute  right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      handleInputChange("rememberMe", e.target.checked)
                    }
                    className="w-4 h-4  text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-3 text-gray-300 text-sm"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  onClick={handleForgotPassword}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <button
                  onClick={handleSignIn}
                  className="w-full bg-[#534590] rounded-full hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4  transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Sign In
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
