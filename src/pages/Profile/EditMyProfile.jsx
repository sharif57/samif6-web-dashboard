import { useState, useRef, useEffect } from "react";
import { ArrowLeft, User, Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUpdateProfileMutation, useUserProfileQuery } from "../../redux/features/userSlice";
import toast from "react-hot-toast";

export default function PersonalInformationSimple() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useUserProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const fileInputRef = useRef(null);
  const IMAGE = import.meta.env.VITE_IMAGE_API;

  // Initialize state with fetched data
  const [userInfo, setUserInfo] = useState({
    name: "",
  });
  const [profileImage, setProfileImage] = useState(null); // Store the file object
  const [previewImage, setPreviewImage] = useState(null); // For image preview

  // Update state when data is fetched
  useEffect(() => {
    if (data?.full_name) {
      setUserInfo({ name: data.full_name });
      setPreviewImage(data.profile_pic ? `${IMAGE}${data.profile_pic}` : null);
    }
  }, [data, IMAGE]);

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Trigger file input click
  const handleProfileImageClick = () => {
    fileInputRef.current?.click();
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileImage(file); 
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append("full_name", userInfo.name);
      if (profileImage) {
        formData.append("profile_pic", profileImage); 
      }

      const res = await updateProfile(formData).unwrap();
      toast.success("Profile updated successfully!");
      navigate(-1)
      console.log("Update response:", res);
    } catch (err) {
      toast.error("Failed to update profile: " + (err?.data?.errors?.profile_pic?.[0] || err.message));
      console.error("Update error:", err);
    }
  };

  // Loading and error states
  if (isLoading) return <div className="text-center py-10 text-white">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading profile</div>;

  return (
    <div className="rounded-lg bg-[#404040] p-6">
      <div>
        {/* Header */}
        <div className="flex items-center bg-[#5F5F5F] py-4 px-3 rounded-lg mb-8">
          <button
            onClick={handleBack}
            className="text-white hover:text-gray-300 transition-colors mr-4"
            disabled={isUpdating}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-white text-lg font-medium">Personal Information</h1>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <div className="flex items-center gap-8">
            {/* Left Side - Profile Picture and Name */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-700 mb-4 relative">
                  <img
                    src={previewImage || "/placeholder.svg?height=128&width=128"}
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                  {/* Edit Icon Overlay */}
                  <button
                    onClick={handleProfileImageClick}
                    className="absolute bottom-2 right-2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                    disabled={isUpdating}
                  >
                    <Edit2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <div className="text-center">
                <h2 className="text-white text-lg font-medium">{userInfo.name || "User"}</h2>
              </div>
            </div>

            {/* Right Side - Form Field */}
            <div className="flex-1">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full bg-gray-700 text-white pl-12 pr-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Enter your name"
                  disabled={isUpdating}
                />
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="flex-shrink-0">
              <button
                onClick={handleSaveChanges}
                disabled={isUpdating}
                className={`bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all transform hover:scale-105 font-medium ${
                  isUpdating ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}