import { useAllUserQuery, useDashboardQuery } from "../../../redux/features/userSlice";
import User from "../Shop/User";

const DashboardHome = () => {
  const {data} = useAllUserQuery();
  const {data:earn} =useDashboardQuery();
  console.log(earn?.total_earning,'earn')
  return (
    <div className="space-y-[24px]">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-10 lg:gap-x-10  gap-y-10 ">
        <div className=" flex items-center justify-center gap-6 rounded-lg bg-[#404040]  ">
          <div className="bg-[#534590] p-6 rounded-2xl">
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.587821"
                d="M30.0004 8.88867C32.7615 8.88889 35.0001 11.2765 35.0004 14.2217C35.0004 17.1671 32.7616 19.5554 30.0004 19.5557C27.2389 19.5557 25.0004 17.1672 25.0004 14.2217C25.0006 11.2764 27.2391 8.88867 30.0004 8.88867ZM15.0004 0C18.6821 0.000187898 21.6664 3.18409 21.6664 7.11133C21.6663 11.0385 18.682 14.2225 15.0004 14.2227C11.3185 14.2227 8.33348 11.0386 8.33337 7.11133C8.33337 3.18397 11.3185 0 15.0004 0Z"
                fill="white"
              />
              <path
                d="M14.9727 17.7778C22.9523 17.778 29.5077 21.8547 29.9962 30.5776C30.0156 30.9251 29.9963 32.0005 28.7442 32.0005H1.21298C0.795072 32.0005 -0.0338072 31.0389 0.00106676 30.5767C0.647078 22.0919 7.1037 17.7778 14.9727 17.7778ZM29.336 21.3364C35.013 21.403 39.6482 24.4628 39.9972 30.9331C40.0112 31.1937 39.9971 32.0005 39.0929 32.0005H32.6661C32.6661 27.9996 31.4271 24.3072 29.336 21.3364Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-center">
            <h3 className="text-[20px] text-[#FFFFFF]">{"Total users"}</h3>
            <h3 className=" text-white font-medium text-[48px]">{data?.total_users}</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[24px]  py-[20px] rounded-lg space-y-3 bg-[#404040] w-96 md:w-full">
          {/* <div className="bg-[#534590] p-6 rounded-2xl"> */}
          {/* <img src="/users.png" alt="" /> */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="80" height="80" rx="16" fill="#534590" />
            <path
              d="M26 54H56C57.1046 54 58 54.8954 58 56C58 57.1046 57.1046 58 56 58H24C22.8954 58 22 57.1046 22 56V24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24V54Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M33.459 45.3677C32.7036 46.1735 31.4379 46.2144 30.6321 45.4589C29.8262 44.7035 29.7854 43.4378 30.5409 42.632L38.0409 34.632C38.7715 33.8526 39.9856 33.785 40.7982 34.4785L46.7177 39.5297L54.4302 29.7605C55.1146 28.8936 56.3723 28.7456 57.2392 29.4301C58.1062 30.1145 58.2542 31.3722 57.5697 32.2391L48.5697 43.6391C47.8667 44.5296 46.5647 44.6576 45.7017 43.9212L39.6536 38.7602L33.459 45.3677Z"
              fill="white"
            />
          </svg>

          {/* </div> */}
          <div className="text-center">
            <h3 className="text-[20px] text-[#FFFFFF]">{"Total Earnings"}</h3>
            <h3 className=" text-white font-medium text-[48px]">${earn?.total_earning}</h3>
          </div>
        </div>
      </div>

      <User />
    </div>
  );
};

export default DashboardHome;
