// import  { useState } from "react";
// import { Button, Form, Input } from "antd";
// import dashProfile from "../../assets/images/dashboard-profile.png";
// import { Outlet, useNavigate } from "react-router-dom";
// import PhoneCountryInput from "../../Components/PhoneCountryInput";
// import PasswordChangeModalForm from "../../Components/User/PasswordChangeModalForm";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaRegEdit } from "react-icons/fa";

// const MyProfile = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const profileData = {
//     name: "Jane Kooper",
//     email: "enrique@gmail.com",
//     phone: "+880 1550597212",
//     profile: dashProfile,
//   };
//   // console.log(code);
//   return (
//     <>
//       <div className="flex items-center gap-2 text-xl text-white">
//         <FaAngleLeft />
//         <h1>Personal information</h1>
//       </div>
//       <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-[#404040]">
//         <h3 className="text-2xl text-black mb-4 pl-5 border-b-2 border-lightGray/40 pb-3 text-white">
//           Personal information
//         </h3>
//         <div>
//           <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">

//             <div className="w-full">

//               <div className="py-4 px-8 flex justify-end items-center">
//                 {/* <h6 className="text-2xl text-white">Personal Information</h6> */}
//                 <Button
//                   onClick={(e) => navigate(`edit`)}
//                   size="large"
//                   type="default"
//                   className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold"
//                 >
//                   <FaRegEdit />
//                   Edit Profile
//                 </Button>
//               </div>

//               <Form
//                 name="basic"
//                 layout="vertical"
//                 className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
//                 autoComplete="off"
//                 initialValues={{
//                   name: profileData.name,
//                   email: profileData.email,
//                 }}
//               >
//                 <div className="col-span-3 space-y-6 ">
//                   <div className="min-h-[300px] flex flex-col items-center justify-center p-8 border border-black bg-lightGray/15">
//                     <div className="my-2">
//                       <img
//                         src={dashProfile}
//                         alt=""
//                         className="h-28 w-28 rounded-full border-4 border-black"
//                       />
//                     </div>
//                     <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
//                     <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
//                   </div>

//                 </div>
//                 <div className="col-span-9 space-y-[14px] w-full">
//                   <Form.Item
//                     className="text-lg  font-medium text-black -mb-1"
//                     label="Name"
//                     name="name"
//                   >
//                     <Input
//                       readOnly
//                       size="large"
//                       className="h-[53px] rounded-lg"
//                     />
//                   </Form.Item>
//                   <Form.Item
//                     className="text-lg  font-medium text-black"
//                     label="Email"
//                     name="email"
//                   >
//                     <Input
//                       readOnly
//                       size="large"
//                       className="h-[53px] rounded-lg"
//                     />
//                   </Form.Item>

//                   <Form.Item
//                     className="text-lg text-[#222222] font-medium"
//                     label="Phone Number"
//                     name="phone"
//                   >
//                     <PhoneCountryInput />
//                   </Form.Item>
//                 </div>
//               </Form>
//             </div>
//             <PasswordChangeModalForm
//               isModalOpen={isModalOpen}
//               setIsModalOpen={setIsModalOpen}

//             />
//           </div>
//         </div>
//         <div className="p-[24px] pt-0.5">
//           <Outlet />
//         </div>
//       </div>

//     </>
//   );
// };

// export default MyProfile;

import dashProfile from "../../assets/images/dashboard-profile.png";

import { useState } from "react";
import { ArrowLeft, User, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyProfile() {
  const [userInfo, setUserInfo] = useState({
    name: "Sharon Ahmed",
    email: "Example@Gmail.Com",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleBack = () => {
    console.log("Back button clicked");
    // Add navigation logic here
  };



  const handleInputChange = (field, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
                  src={dashProfile}
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-white text-lg font-medium">Sharon</h2>
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
                  value={userInfo.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  disabled={!isEditing}
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
                  value={userInfo.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!isEditing}
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
