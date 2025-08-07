

import { Link } from "react-router-dom";
import { useAllSubscriptionQuery, useDeleteSubscriptionMutation } from "../../../redux/features/subscriptionSlice";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function Subscription() {
  const { data, isLoading, error, refetch } = useAllSubscriptionQuery();
   const [deleteSubscription] =useDeleteSubscriptionMutation();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  if (error || !data?.success) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading subscriptions: {error?.message || "Failed to fetch plans"}
      </div>
    );
  }

  const handleDelete = async (id) => {
     const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  });

  if (result.isConfirmed) {
    try {
      const res = await deleteSubscription(id).unwrap();
      console.log(res)
      toast.success(res?.message ||"Subscription deleted successfully!");
      refetch();
      window.location.reload();
      

      Swal.fire({
        title: "Deleted!",
        text: "Your subscription has been deleted.",
        icon: "success"
      });

    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error?.data?.message || "Failed to delete ticket");
    }
  }
  }

  return (
    <div className="min-h-screen p-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Subscription Plans */}
        {data?.data?.map((item) => (
          <div
            key={item.id}
            className={`bg-[#404040] rounded-3xl h-[600px] p-6 flex flex-col ${
              item.is_popular ? "border-2 border-[#534590]" : ""
            }`}
          >
            <h3 className="text-[25px] font-semibold text-white">{item.title}</h3>
            <div className="flex justify-between gap-4 items-center mb-4 mt-4">
              <div className="px-4 py-1 rounded-md">
                <span className="text-white font-extrabold text-[36px]">
                  ${item.monthly_price}
                </span>
              </div>
              <div>
                <p className="text-[16px] w-[200px] text-[#B5B5B5]">
                  per editor/month <br />
                  billed monthly
                </p>
              </div>
            </div>

            {item.yearly_discount_percent && (
              <p className="text-[#B5B5B5] text-[14px]">
                Save {item.yearly_discount_percent}% with yearly billing: $
                {item.yearly_price}/year
              </p>
            )}

            <hr className="my-6" />
            <ul className="space-y-3 mb-6 flex-grow">
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-5 h-5 rounded-full flex items-center justify-start mr-3">
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
                  <span className="text-[16px] text-[#E8E8E8]">{feature}</span>
                </li>
              ))}
            </ul>

        <div className="flex items-center justify-between gap-2">
              <button
              onClick={() => handleDelete(item.id)}
              className={`w-full py-3 text-white rounded-2xl mt-4 transition-colors bg-[#2a2a2a] `}
            >
              Delete Plan
            </button>
                <Link
              to={`/subscription/edit-item/${item.id}`}
              className={`w-full py-3 text-white text-center rounded-2xl mt-4 transition-colors bg-[#2a2a2a] `}
            >
              Edit Plan
            </Link>
        </div>
          </div>
        ))}

        {/* Add New Subscription Link */}
        <div className="mt-4">
          <Link
            to="/subscription/add-item"
            className="flex items-center px-6 py-3 bg-[#404040] w-[250px] text-white rounded-full transition-colors hover:bg-[#534590]"
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