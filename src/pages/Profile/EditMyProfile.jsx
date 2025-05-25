// import React, { useState } from "react";
// import { Button, Form, Input } from "antd";
// import dashProfile from "../../assets/images/dashboard-profile.png";
// // import "react-phone-number-input/style.css";
// // import PhoneInput from "react-phone-number-input";
// import { FiEdit } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import PhoneCountryInput from "../../Components/PhoneCountryInput";
// import PageHeading from "../../Components/PageHeading";
// import { PiCameraPlus } from "react-icons/pi";
// import { FaAngleLeft } from "react-icons/fa6";

// const EditMyProfile = () => {
//   const [code, setCode] = useState();
//   const navigate = useNavigate();
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   const profileData = {
//     name: "Jane Kooper",
//     email: "enrique@gmail.com",
//     phone: "+880 150597212",
//     profile: dashProfile,
//   };
//   // console.log(code);

//   return (
//     <>
//       <div className="flex items-center gap-2 text-xl">
//         <FaAngleLeft />
//         <h1>Personal information</h1>
//       </div>
//       <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
//         <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
//           <h3 className="text-2xl text-black mb-4 pl-5 border-b-2 border-lightGray/40 pb-3">
//             Personal information
//           </h3>
//           <div className="w-full">
//             <Form
//               name="basic"
//               layout="vertical"
//               className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//               initialValues={{
//                 name: profileData.name,
//                 email: profileData.email,
//               }}
//             >
//               <div className="col-span-3 space-y-6 ">
//                 <div className="min-h-[300px] flex flex-col items-center justify-center p-8 border border-black bg-lightGray/15">
//                   <div className="my-2">
//                     <img
//                       src={dashProfile}
//                       alt=""
//                       className="h-28 w-28 rounded-full border-4 border-black"
//                     />
//                   </div>
//                   <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
//                   <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
//                 </div>
//               </div>
//               <div className="col-span-9 space-y-[14px] w-full">
//                 <Form.Item
//                   className="text-lg  font-medium text-black -mb-1"
//                   label="Name"
//                   name="name"
//                 >
//                   <Input
//                     readOnly
//                     size="large"
//                     className="h-[53px] rounded-lg"
//                   />
//                 </Form.Item>
//                 <Form.Item
//                   className="text-lg  font-medium text-black"
//                   label="Email"
//                   name="email"
//                 >
//                   <Input
//                     readOnly
//                     size="large"
//                     className="h-[53px] rounded-lg"
//                   />
//                 </Form.Item>
//                 <Form.Item
//                   className="text-lg text-[#222222] font-medium"
//                   label="Phone Number"
//                   name="phone"
//                 >
//                   <PhoneCountryInput />
//                 </Form.Item>
//                 <Form.Item className="flex justify-end pt-4">
//                   <Button
//                     // onClick={(e) => navigate(`edit`)}
//                     size="large"
//                     type="primary"
//                     className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold"
//                   >
//                     Save Changes
//                   </Button>
//                 </Form.Item>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditMyProfile;



import { useState, useRef } from "react"
import { ArrowLeft, User, Edit2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function PersonalInformationSimple() {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    name: "Shoron Ahmed",
  })
  const [profileImage, setProfileImage] = useState(null)
  const fileInputRef = useRef(null)

  const handleBack = () => {
    console.log("Back button clicked")
    // Add navigation logic here
    navigate(-1)

  }

  const handleSaveChanges = () => {
    console.log("Save changes clicked", userInfo)
    // Add save logic here
  }

  const handleInputChange = (field, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleProfileImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className=" rounded-lg bg-[#404040] p-6">
      <div className="">
        {/* Header */}
        <div className="flex items-center bg-[#5F5F5F] py-4 px-3 rounded-lg mb-8">
          <button onClick={handleBack} className="text-white hover:text-gray-300 transition-colors mr-4">
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
                    src={profileImage || "/placeholder.svg?height=128&width=128"}
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                  {/* Edit Icon Overlay */}
                  <button
                    onClick={handleProfileImageClick}
                    className="absolute bottom-2 right-2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
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
                <h2 className="text-white text-lg font-medium">Shoron</h2>
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
                />
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="flex-shrink-0">
              <button
                onClick={handleSaveChanges}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all transform hover:scale-105 font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
