import { Link } from "react-router-dom";
import { productCategories } from "../data/products";
import PageTransition from "../components/PageTransition";

export default function Products() {
  return (
    <PageTransition>
      <section className="px-6 py-24 bg-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-5xl mb-12">
            Our Products
          </h1>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products/${cat.id}`}
                className="group overflow-hidden rounded-lg border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cat.cover}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-medium">
                    {cat.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
