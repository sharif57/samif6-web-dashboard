import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react"; // Added ArrowLeft import
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/authSlice.js"; // Adjust path as needed
import toast from "react-hot-toast";

export default function SignIn() {
  const [login] = useLoginMutation();
  const [loading, setLoading] = useState(false);
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
    navigate(-1); // Navigate to the previous page
  };

  const handleSignIn = async () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true); // Set loading state to true
    try {
      const response = await login(formData).unwrap();
      toast.success(response?.message);
      localStorage.setItem("accessToken", response?.access_token);
     navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
      toast.error(
        error?.data?.detail ||
          error?.message ||
          "Login failed. Please try again."
      );
      console.error("Login error:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
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
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={handleBack}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-white text-[36px] font-semibold">Sign In</h1>
              <div className="w-5" /> {/* Spacer for alignment */}
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
                  className="w-full bg-[#404040] rounded-full text-white px-4 py-4 pr-12 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                  required
                  aria-label="Email address"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Your Password"
                  className="w-full bg-[#404040] rounded-full text-white px-4 py-4 pr-12 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                  required
                  aria-label="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Forgot Password Link and Remember Me Checkbox */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      handleInputChange("rememberMe", e.target.checked)
                    }
                    className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
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

              {/* Sign In Button */}
              <div>
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  className={`w-full bg-[#534590] rounded-full hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 transition-all transform hover:scale-[1.02] shadow-lg ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  aria-label="Sign in"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}