
import { useState } from "react"
import {  Lock, Eye, EyeOff } from "lucide-react"

export default function VerifyPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  })



  const validatePassword = (password) => {
    if (password.length < 8 || password.length > 10) {
      return "Password must be 8-10 characters long"
    }
    return ""
  }

  const validateConfirmPassword = (password, confirmPassword) => {
    if (confirmPassword && password !== confirmPassword) {
      return "Passwords do not match"
    }
    return ""
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Real-time validation
    if (field === "password") {
      const passwordError = validatePassword(value)
      const confirmError = validateConfirmPassword(value, formData.confirmPassword)
      setErrors((prev) => ({
        ...prev,
        password: passwordError,
        confirmPassword: confirmError,
      }))
    }

    if (field === "confirmPassword") {
      const confirmError = validateConfirmPassword(formData.password, value)
      setErrors((prev) => ({
        ...prev,
        confirmPassword: confirmError,
      }))
    }
  }

  const handleConfirm = () => {
    const passwordError = validatePassword(formData.password)
    const confirmError = validateConfirmPassword(formData.password, formData.confirmPassword)

    setErrors({
      password: passwordError,
      confirmPassword: confirmError,
    })

    if (!passwordError && !confirmError && formData.password && formData.confirmPassword) {
      console.log("Password confirmed:", formData.password)
      // Add password confirmation logic here
    }
  }

  const isFormValid = () => {
    return (
      formData.password &&
      formData.confirmPassword &&
      !errors.password &&
      !errors.confirmPassword &&
      formData.password === formData.confirmPassword &&
      formData.password.length >= 8 &&
      formData.password.length <= 10
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/auth.png')",
          }}
      >
 
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Verify Email Form */}
          <div className="bg-[#090909] rounded-2xl p-8 border border-gray-800">
            {/* Header */}
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-white text-[36px] font-semibold">Reset Password</h1>
            </div>

            {/* Password Requirements */}
            <div className="mb-8">
              <p className="text-gray-300 text-sm text-center">Your Password Must Be 8-10 Character Long.</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Enter Password Field */}
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Enter Password"
                    className="w-full bg-gray-800/80 text-white pl-12 pr-12 py-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-xs mt-2">{errors.password}</p>}
              </div>

              {/* Re-Type Password Field */}
              <div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="Re-Type Password"
                    className="w-full bg-gray-800/80 text-white pl-12 pr-12 py-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-400 text-xs mt-2">{errors.confirmPassword}</p>}
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                disabled={!isFormValid()}
                className={`w-full font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg ${
                  isFormValid()
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
