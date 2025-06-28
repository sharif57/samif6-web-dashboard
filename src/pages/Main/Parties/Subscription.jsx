import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <div className=" min-h-screen">
      <div className="w-full  grid grid-cols-1 md:grid-cols-4  gap-8">
        {/* Starter Plan */}
        <div className="bg-[#404040] rounded-3xl h-[600px] p-6  flex flex-col ">
          <h3 className="text-[25px] font-semibold text-white">
            Entry Membership
          </h3>
          <div className="flex justify-between  gap-4 items-center mb-4 mt-4">
            <div className=" px- py-1 rounded-md">
              <span className="text-white font-extrabold text-[36px]">
                $19.99
              </span>
            </div>
            <div>
              <p className="text-[16px] w-[200px] text-[#B5B5B5]">
                per editor/month <br />
                billed monthly
              </p>
            </div>
          </div>

          <hr className="mt-6  pb-10" />
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                Subscription Access to The Football AI{" "}
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                1 FREE monthly accumulating ticket into all Major Giveaways
              </span>
            </li>
          </ul>

          <button className="w-full py-3 bg-[#534590] text-white rounded-2xl mt-4 transition-colors">
            Choose Plan
          </button>
        </div>
        <div className="bg-[#404040] rounded-3xl h-[600px] p-6  flex flex-col ">
          <h3 className="text-[25px] font-semibold text-white">
            Premium Membership
          </h3>
          <div className="flex justify-between  gap-4 items-center mb-4 mt-4">
            <div className=" px- py-1 rounded-md">
              <span className="text-white font-extrabold text-[36px]">
               $39.99
              </span>
            </div>
            <div>
              <p className="text-[16px] w-[200px] text-[#B5B5B5]">
               per editor/month <br />
                billed monthly
              </p>
            </div>
          </div>

          <hr className="mt-6  pb-10" />
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                Subscription Access to The Football AI{" "}
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                4 FREE Monthly Accumulating Tickets For All Major Giveaways
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                2 Automatic Tickets for Minor Giveaways
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                15% off Major Giveaway tickets
              </span>
            </li>
          </ul>

          <button className="w-full py-3 bg-[#534590] text-white rounded-2xl mt-4 transition-colors">
            Choose Plan
          </button>
        </div>
        <div className="bg-[#404040] rounded-3xl h-[600px] p-6  flex flex-col ">
          <h3 className="text-[25px] font-semibold text-white">
           VIP Membership
          </h3>
          <div className="flex justify-between  gap-4 items-center mb-4 mt-4">
            <div className=" px- py-1 rounded-md">
              <span className="text-white font-extrabold text-[36px]">
               $89.99
              </span>
            </div>
            <div>
              <p className="text-[16px] w-[200px] text-[#B5B5B5]">
                per editor/month <br />
                billed monthly
              </p>
            </div>
          </div>

          <hr className="mt-6  pb-10" />
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                Subscription Access to The Football AI{" "}
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                10 FREE Monthly Accumulating Tickets For All Major Giveaways
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                3 Automatic Tickets for Minor Giveaways
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full  flex items-center justify-start mr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#534590" />
                  <g clipPath="url(#clip0_720_530)">
                    <path
                      d="M12.4169 5.99811L7.49846 11.9003L4.7601 9.08366L5.71609 8.15422L7.42218 9.90905L11.3926 5.14453L12.4169 5.99811Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_720_530">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4.57144 4.57129)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] text-[#E8E8E8]">
                40% off Major Giveaway tickets
              </span>
            </li>
          </ul>

          <button className="w-full py-3 bg-[#534590] text-white rounded-2xl mt-4 transition-colors">
            Choose Plan
          </button>
        </div>
        <div className="mt-">
        <Link
          to="/add-item"
          className="flex items-center px-6 py-3 bg-[#404040] w-[250px] text-white rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add New Subscription
        </Link>
      </div>
      </div>

      
    </div>
  );
}

