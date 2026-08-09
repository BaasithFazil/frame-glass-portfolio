import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Lightbox from "../components/ui/Lightbox";
import ProductCard from "../features/ProductCard";
import PageTransition from "../components/layout/PageTransition";
import { getProductCategories } from "../lib/productService";

export default function ProductCategory() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const fetchCategory = async () => {
    setLoading(true);
    const categories = await getProductCategories();
    const found = categories.find((c) => c.id === id);
    setCategory(found);
    setLoading(false);
  };

  if (loading) {
    return (
      <PageTransition>
        <section className="px-6 py-24 bg-white">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-gray-600">Loading category...</p>
          </div>
        </section>
      </PageTransition>
    );
  }

  if (!category) {
    return (
      <PageTransition>
        <section className="px-6 py-24 bg-white">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-gray-600 mb-4">Category not found</p>
            <button
              onClick={() => navigate("/products")}
              className="text-blue-600 hover:text-blue-800"
            >
              Back to Products
            </button>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            ← Back to Products
          </button>

          <h1 className="font-heading text-4xl mb-10">{category.title}</h1>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() =>
                  setActiveImage({
                    src: product.image,
                    alt: product.title,
                    label: product.title,
                  })
                }
              />
            ))}
          </div>
        </div>

        {activeImage && (
          <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
        )}
      </section>
    </PageTransition>
  );
}
