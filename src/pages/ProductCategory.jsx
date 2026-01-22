import { useParams } from "react-router-dom";
import { productCategories } from "../data/products";
import { useState } from "react";
import Lightbox from "../components/ui/Lightbox";
import ProductCard from "../features/ProductCard";
import PageTransition from "../components/layout/PageTransition";

export default function ProductCategory() {
  const { id } = useParams();
  const category = productCategories.find(c => c.id === id);
  const [activeImage, setActiveImage] = useState(null);

  if (!category) return <p>Category not found</p>;

  return (
    <PageTransition>
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl mb-10">
            {category.title}
          </h1>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setActiveImage(product.image)}
              />
            ))}
          </div>
        </div>

        {activeImage && (
          <Lightbox
            image={activeImage}
            onClose={() => setActiveImage(null)}
          />
        )}
      </section>
    </PageTransition>
  );
}
