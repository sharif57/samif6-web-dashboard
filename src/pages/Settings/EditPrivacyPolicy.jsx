import { Button } from "antd";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { usePrivacyGetQuery, useUpdatePrivacyMutation } from "../../redux/features/privacySlice";
import toast from "react-hot-toast";

// Import and register custom font sizes
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["14px", "16px", "18px"];
Quill.register(Size, true);

const modules = {
  toolbar: {
    container: [
      [{ size: ["14px", "16px", "18px"] }],
      [{ color: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      ["image", "link"],
      [{ list: "bullet" }],
    ],
    handlers: {
      align: function (value) {
        this.quill.format("align", value);
      },
    },
  },
};

const formats = ["size", "color", "align", "bold", "italic", "underline", "link", "image", "list"];

const EditPrivacyPolicy = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = usePrivacyGetQuery();
  const [updatePrivacy, { isLoading: isUpdating }] = useUpdatePrivacyMutation();
  const [content, setContent] = useState("");

  // Initialize content with fetched data
  useEffect(() => {
    if (data?.description) {
      setContent(data.description);
    }
  }, [data]);

  // Handle back navigation
  const handleBack = () => {
    navigate(-1);
  };

  // Handle privacy policy update
  const handleUpdatePrivacy = async () => {
    try {
      const privacyData = { description: content };
      await updatePrivacy(privacyData).unwrap();
      toast.success("Privacy policy updated successfully!");
      navigate(-1);
    } catch (err) {
      toast.error("Failed to update privacy policy: " + (err?.data?.message || err.message));
      console.error("Update error:", err);
    }
  };

  // Loading and error states
  if (isLoading) return <div className="text-center py-10 text-white">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading privacy policy</div>;

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xl text-white mb-8">
        <button
          onClick={handleBack}
          className="text-white hover:text-gray-300 transition-colors"
          disabled={isUpdating}
        >
          <FaAngleLeft />
        </button>
        <h1>Privacy & Policy</h1>
      </div>
      <div className="rounded-lg py-4 shadow-lg bg-[#404040]">
        <div className="space-y-[24px] min-h-[83vh]  rounded-2xl p-8">
          <h3 className="text-2xl text-white mb-4 border-b-2 border-lightGray/40 pb-3">
            Privacy & Policy Edit
          </h3>
          <div className="w-full">
            <div className="h-full rounded-md">
              <ReactQuill
                placeholder="Enter your updated privacy policy..."
                theme="snow"
                value={content}
                onChange={(value) => setContent(value)}
                modules={modules}
                formats={formats}
                className="custom-quill-editor bg-white text-black"
              />
            </div>
          </div>
          <div className="flex justify-end pt-8">
            <Button
              onClick={handleUpdatePrivacy}
              size="large"
              type="primary"
              disabled={isUpdating}
              className={`px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold w-1/4 ${
                isUpdating ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPrivacyPolicy;