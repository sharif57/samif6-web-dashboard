
// export default function AddProduct() {
//   return (
//     <div>AddProduct</div>
//   )
// }



import { useState, useRef } from "react"
import { ImagePlus } from "lucide-react"

export default function ProductForm() {
  const [formData, setFormData] = useState({
    productName: "Lorem Jersey",
    productType: "Global Football Vault",
    productPrice: "$12,000",
  })
  const [selectedImage, setSelectedImage] = useState(null)
  const fileInputRef = useRef(null)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result )
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleUpdate = () => {
    console.log("Updating product:", formData)
    // Add your update logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="flex gap-8 items-start">
          {/* Left side - Image Upload */}
          <div className="flex-shrink-0">
            <div
              onClick={handleImageClick}
              className="w-64 h-80 bg-gray-700 rounded-lg border-2 border-dashed border-gray-600 hover:border-gray-500 cursor-pointer transition-colors flex flex-col items-center justify-center group"
            >
              {selectedImage ? (
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Product preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <>
                  <ImagePlus className="w-8 h-8 text-gray-400 group-hover:text-gray-300 mb-3" />
                  <span className="text-gray-400 group-hover:text-gray-300 text-sm font-medium">Add Image</span>
                </>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </div>

          {/* Right side - Form Fields */}
          <div className="flex-1 space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-white text-sm font-medium mb-3">Product Name</label>
              <input
                type="text"
                value={formData.productName}
                onChange={(e) => handleInputChange("productName", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-gray-500 focus:outline-none transition-colors"
                placeholder="Enter product name"
              />
            </div>

            {/* Product Type */}
            <div>
              <label className="block text-white text-sm font-medium mb-3">Product Type</label>
              <input
                type="text"
                value={formData.productType}
                onChange={(e) => handleInputChange("productType", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-gray-500 focus:outline-none transition-colors"
                placeholder="Enter product type"
              />
            </div>

            {/* Product Price */}
            <div>
              <label className="block text-white text-sm font-medium mb-3">Product Price</label>
              <input
                type="text"
                value={formData.productPrice}
                onChange={(e) => handleInputChange("productPrice", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-gray-500 focus:outline-none transition-colors"
                placeholder="Enter product price"
              />
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleUpdate}
            className="bg-[#534590] text-white font-semibold px-12 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}
