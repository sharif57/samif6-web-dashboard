// import { useParams } from "react-router-dom";
// import { useEditSubscriptionMutation, useSingleSubscriptionQuery } from "../../../redux/features/subscriptionSlice";


// export default function EditSubscription() {
//     const {id} = useParams();
//     console.log(id, 'id')
//     const {data} = useSingleSubscriptionQuery(id);
//     console.log(data,'single subscription');

//     const [editSubscription] =useEditSubscriptionMutation();



//   return (
//     <div>
      
//     </div>
//   )
// }
import { useNavigate, useParams } from "react-router-dom";
import { useEditSubscriptionMutation, useSingleSubscriptionQuery } from "../../../redux/features/subscriptionSlice";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function EditSubscription() {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleSubscriptionQuery(id);
  const [editSubscription, { isLoading: isUpdating }] = useEditSubscriptionMutation();
  const router = useNavigate()

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    monthly_price: "",
    yearly_price: "",
    yearly_discount_percent: "",
    free_monthly_tickets: "",
    ticket_discount_percent: "",
    is_popular: false,
    features: [],
  });

  // Initialize form with fetched data
  useEffect(() => {
    if (data?.data) {
      setFormData({
        name: data.data.name,
        title: data.data.title,
        monthly_price: data.data.monthly_price,
        yearly_price: data.data.yearly_price,
        yearly_discount_percent: data.data.yearly_discount_percent,
        free_monthly_tickets: data.data.free_monthly_tickets,
        ticket_discount_percent: data.data.ticket_discount_percent,
        is_popular: data.data.is_popular,
        features: data.data.features.join("\n"),
      });
    }
  }, [data]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...formData,
        features: formData.features.split("\n").filter((feature) => feature.trim() !== ""),
        monthly_price: parseFloat(formData.monthly_price),
        yearly_price: parseFloat(formData.yearly_price),
        yearly_discount_percent: parseFloat(formData.yearly_discount_percent),
        free_monthly_tickets: parseInt(formData.free_monthly_tickets),
        ticket_discount_percent: parseFloat(formData.ticket_discount_percent),
      };

  const res =    await editSubscription({ id, body: updatedData }).unwrap();
  console.log(res)
      toast.success("Subscription updated successfully!");
      router(-1);
    } catch (err) {
      toast.error("Failed to update subscription: " + err.message);
    }
  };

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading subscription</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Subscription Plan</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Plan Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Prices */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Price ($)</label>
            <input
              type="number"
              step="0.01"
              name="monthly_price"
              value={formData.monthly_price}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Yearly Price ($)</label>
            <input
              type="number"
              step="0.01"
              name="yearly_price"
              value={formData.yearly_price}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Discounts and Tickets */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Yearly Discount (%)</label>
            <input
              type="number"
              step="0.01"
              name="yearly_discount_percent"
              value={formData.yearly_discount_percent}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ticket Discount (%)</label>
            <input
              type="number"
              step="0.01"
              name="ticket_discount_percent"
              value={formData.ticket_discount_percent}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Free Monthly Tickets */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Free Monthly Tickets</label>
          <input
            type="number"
            name="free_monthly_tickets"
            value={formData.free_monthly_tickets}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Is Popular */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="is_popular"
            checked={formData.is_popular}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-900">Mark as Popular Plan</label>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Features (one per line)</label>
          <textarea
            name="features"
            value={formData.features}
            onChange={handleChange}
            rows="5"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter each feature on a new line"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isUpdating}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isUpdating ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isUpdating ? "Updating..." : "Update Subscription"}
          </button>
        </div>
      </form>
    </div>
  );
}