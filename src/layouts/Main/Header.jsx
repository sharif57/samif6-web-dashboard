import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profileImage from "../../assets/images/dash-profile.png";
import { useUserProfileQuery } from "../../redux/features/userSlice";

const Header = () => {
  const loacatin = useLocation();
  const notificationRef = useRef(null);
  const [, setNotificationPopup] = useState(false);
  const { data } = useUserProfileQuery();
  console.log(data, "data");

   const IMAGE = import.meta.env.VITE_IMAGE_API;
   console.log(IMAGE);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setNotificationPopup(false);
  }, [loacatin.pathname]);

  return (
    <div className="w-full h-[88px] text-white flex justify-between items-center rounded-lg py-[16px] px-[32px] shadow-lg bg-[#534590]">
      <div className="text-start space-y-0.5">
        <p className="text-sm md:text-xl font-light">
          {`Welcome, ${data?.full_name || "User"}`}
        </p>
        <p className="text-sm md:text-xl">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-[41px]">

        <div className="flex items-center">
          <Link to={'/settings/profile'} >
            <img
              src={`${IMAGE}${data?.profile_pic}` || profileImage}
              alt=""
              className="rounded-full h-[42px] w-[42px]"
            />
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
