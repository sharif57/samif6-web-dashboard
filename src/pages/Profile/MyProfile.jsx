import dashProfile from "../../assets/images/dashboard-profile.png";

import { ArrowLeft, User, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserProfileQuery } from "../../redux/features/userSlice";

export default function MyProfile() {


  const handleBack = () => {
    console.log("Back button clicked");
    // Add navigation logic here
  };
  const { data } = useUserProfileQuery();
  console.log("User Profile Data:", data);

  const IMAGE = import.meta.env.VITE_IMAGE_API;

  

  return (
    <div className="bg-[#404040] rounded-lg  p-6">
      <div className="">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={handleBack}
            className="text-white hover:text-gray-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-white text-lg font-medium">
            Personal Information
          </h1>
        </div>

        {/* Main Content */}
        <div className=" rounded-2xl p-8">
          <div className="flex items-start gap-8">
            {/* Left Side - Profile Picture and Name */}
            <div className="flex-shrink-0 bg-[#5F5F5F] p-8 rounded-lg">
              <div className="w-32 h-32 rounded-2xl overflow-hidden  mb-4">
                <img
                  src={`${IMAGE}${data?.profile_pic || dashProfile}`}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-white text-lg font-medium">{data?.full_name}</h2>
              </div>
            </div>

            {/* Right Side - Form Fields */}
            <div className="flex-1 space-y-4">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  readOnly
                  defaultValue={data?.full_name || ""}
                  className="w-full bg-[#5F5F5F] text-white pl-12 pr-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all disabled:cursor-default"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  readOnly
                  defaultValue={data?.email || ""}
                  className="w-full bg-[#5F5F5F] text-white pl-12 pr-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all disabled:cursor-default"
                />
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="flex justify-end mt-8">
            <Link to="/settings/profile/edit">
              <button
                // onClick={handleEditProfile}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all transform hover:scale-105"
              >
                {/* <Edit className="w-4 h-4" />
              {isEditing ? "Save Profile" : "Edit Profile"} */}
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
