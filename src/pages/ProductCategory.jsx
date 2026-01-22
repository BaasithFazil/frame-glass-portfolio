import { useParams } from "react-router-dom";
import { productCategories } from "../data/products";
import { useState } from "react";
import Lightbox from "../components/Lightbox";
import PageTransition from "../components/PageTransition";

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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.images.map((img, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setActiveImage(img)}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
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
