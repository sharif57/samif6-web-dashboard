
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateSubscriptionMutation } from "../../../redux/features/subscriptionSlice";

export default function AddItem() {
  const [createSubscription, { isLoading }] = useCreateSubscriptionMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    monthly_price: "",
    yearly_price: "",
    yearly_discount_percent: "",
    free_monthly_tickets: "",
    ticket_discount_percent: "",
    features: "",
  });

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormError(null); // Clear error on input change
  };

  const handleCreate = async () => {
    try {
      // Validate numeric fields
      const monthlyPrice = parseFloat(formData.monthly_price);
      const yearlyPrice = parseFloat(formData.yearly_price);
      const yearlyDiscount = parseFloat(formData.yearly_discount_percent);
      const freeTickets = parseInt(formData.free_monthly_tickets, 10);
      const ticketDiscount = parseFloat(formData.ticket_discount_percent);

      if (
        isNaN(monthlyPrice) ||
        isNaN(yearlyPrice) ||
        isNaN(yearlyDiscount) ||
        isNaN(freeTickets) ||
        isNaN(ticketDiscount)
      ) {
        setFormError("Please enter valid numeric values for prices, discounts, and tickets.");
        return;
      }

      // Convert features string to array (split by newlines or commas)
      const featuresArray = formData.features
        .split(/[\n,]+/)
        .map((feature) => feature.trim())
        .filter((feature) => feature !== "");

      if (featuresArray.length === 0) {
        setFormError("Please provide at least one feature.");
        return;
      }

      const subscriptionData = {
        name: formData.name,
        title: formData.title,
        monthly_price: monthlyPrice.toString(),
        yearly_price: yearlyPrice,
        yearly_discount_percent: yearlyDiscount.toString(),
        free_monthly_tickets: freeTickets,
        ticket_discount_percent: ticketDiscount.toString(),
        features: featuresArray,
      };

      const response = await createSubscription(subscriptionData).unwrap();
      console.log(response);
      setFormSuccess("Subscription created successfully!");
      setTimeout(() => navigate("/subscription"), 1500); // Redirect after 1.5s
    } catch (err) {
      setFormError(err?.data?.message || "Failed to create subscription. Please try again.");
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.title.trim() !== "" &&
      formData.monthly_price.trim() !== "" &&
      formData.yearly_price.trim() !== "" &&
      formData.yearly_discount_percent.trim() !== "" &&
      formData.free_monthly_tickets.trim() !== "" &&
      formData.ticket_discount_percent.trim() !== "" &&
      formData.features.trim() !== ""
    );
  };

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6">
        <div className="bg-[#404040] p-4 rounded-lg shadow-sm flex items-center">
          <Link to="/subscription" className="mr-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <h1 className="text-lg font-medium text-white">Add Subscription</h1>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        {formError && (
          <div className="mb-4 p-4 bg-red-500/10 text-red-500 rounded-lg">
            {formError}
          </div>
        )}
        {formSuccess && (
          <div className="mb-4 p-4 bg-green-500/10 text-green-500 rounded-lg">
            {formSuccess}
          </div>
        )}
        <div className="space-y-6">
          {/* Top Row - Name and Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
            {/* name seleted use  */}
            <div>
              <select
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full h-14 bg-[#404040] text-white rounded-full px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              >
                <option value="entry">Entry</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Package Title (e.g., VIP Membership)"
                className="w-full h-14 bg-[#404040] text-white rounded-full px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
          </div>

          {/* Middle Row - Prices and Discounts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                value={formData.monthly_price}
                onChange={(e) => handleInputChange("monthly_price", e.target.value)}
                placeholder="Monthly Price (e.g., 51.99)"
                className="w-full h-14 bg-[#404040] text-white rounded-full px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                value={formData.yearly_price}
                onChange={(e) => handleInputChange("yearly_price", e.target.value)}
                placeholder="Yearly Price (e.g., 592.686)"
                className="w-full h-14 bg-[#404040] text-white rounded-full px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                value={formData.yearly_discount_percent}
                onChange={(e) => handleInputChange("yearly_discount_percent", e.target.value)}
                placeholder="Yearly Discount Percent (e.g., 5.00)"
                className="w-full h-14 bg-[#404040] text-white rounded-full px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                value={formData.free_monthly_tickets}
                onChange={(e) => handleInputChange("free_monthly_tickets", e.target.value)}
                placeholder="Free Monthly Tickets (e.g., 10)"
                className="w-full h-14 bg-[#404040] text-white rounded-full px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                value={formData.ticket_discount_percent}
                onChange={(e) => handleInputChange("ticket_discount_percent", e.target.value)}
                placeholder="Ticket Discount Percent (e.g., 40.00)"
                className="w-full h-14 bg-[#404040] text-white rounded-full px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <textarea
              value={formData.features}
              onChange={(e) => handleInputChange("features", e.target.value)}
              placeholder="Add Features (one per line or comma-separated)"
              rows={5}
              className="w-full bg-[#404040] text-white rounded-3xl px-6 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
            />
          </div>

          {/* Create Button */}
          <div className="flex justify-center pt-6">
            <button
              onClick={handleCreate}
              disabled={!isFormValid() || isLoading}
              className={`px-12 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                isFormValid() && !isLoading
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg"
                  : "bg-[#534590] text-gray-400 cursor-not-allowed"
              }`}
            >
              {isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}