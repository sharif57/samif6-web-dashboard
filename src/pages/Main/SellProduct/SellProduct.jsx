// export default function SellProduct() {
//   return (
//     <div>SellProduct</div>
//   )
// }

import { useState } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample product data
const products = Array.from({ length: 72 }, (_, index) => ({
  id: index + 1,
  name: "Lorem Jersey",
  description: "Global Football Vault",
  price: "$12,000",
  image: "/product.png",
}));

const PRODUCTS_PER_PAGE = 12;

export default function ProductCatalog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPaginationNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Show all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      if (currentPage > 4) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 3) {
        pages.push("...");
      }

      // Show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="">
        {/* Header with Add New Product Button */}
        <div className="flex justify-end mb-8">
          <Link to={"/sell-product/add-product"}>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" />
              Add New product
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img src={product.image} alt="" />

              {/* Product Info */}
              <div className="p-4 bg-[#404040] text-white">
                <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                <p className="text-gray-400 text-xs mb-2">
                  {product.description}
                </p>
                <p className="font-bold text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          {/* Back Button */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === 1
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {renderPaginationNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && goToPage(page)}
                disabled={page === "..."}
                className={`w-10 h-10 rounded-lg transition-colors ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : page === "..."
                    ? "text-gray-400 cursor-default"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPage === totalPages
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Page Info */}
        <div className="text-center text-gray-400 text-sm mt-4">
          Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of{" "}
          {products.length} products
        </div>
      </div>
    </div>
  );
}
