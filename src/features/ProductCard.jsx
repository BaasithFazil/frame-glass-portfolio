import { Heart } from "lucide-react";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        {/* Status badge */}
        {product.status && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white">
            {product.status === "out-of-stock"
              ? "Out of Stock"
              : product.status}
          </span>
        )}

        {/* Wishlist */}
        <button
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow hover:scale-105 transition"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Wishlisted:", product.id);
          }}
        >
          <Heart className="h-4 w-4 text-gray-700" />
        </button>

        {/* Product image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
      <h3 className="text-[13px] font-medium text-gray-800 leading-snug">

          {product.title}
        </h3>
        <p className="text-lg font-bold text-gray-900">
         Rs {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
