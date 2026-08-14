import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import GoogleReviewsWidget from "../components/sections/GoogleReviewsEmbed";
import Hero from "../components/sections/Hero";
import PageTransition from "../components/layout/PageTransition";
import { getAllProducts } from "../lib/productService";
import { productCategories } from "../data/products";

function Home() {
  const [products, setProducts] = useState(() =>
    productCategories.flatMap((category) => category.products).slice(0, 4)
  );

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      const liveProducts = await getAllProducts();
      if (isMounted) {
        setProducts(liveProducts.length ? liveProducts.slice(0, 4) : productCategories.flatMap((category) => category.products).slice(0, 4));
      }
    }

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <PageTransition>
        <SEO
          title="Frame & Glass Workshop | Custom Framing & Glass Solutions"
          description="Professional custom framing and glass work for artwork, mirrors, certificates, and interiors in Sri Lanka."
          image="/images/og-image.jpg"
          url="https://your-domain.com/"
        />

        <Hero />

        <section className="bg-white px-6 py-20 md:py-28">
          <div className="mx-auto max-w-screen-2xl">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-500">Made for your home</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">Featured Products</h2>
              </div>
              <Link to="/products" className="border border-zinc-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-zinc-950 transition hover:bg-zinc-950 hover:text-white">View all products</Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <Link key={product.id} to="/products" className="group block">
                  <div className="aspect-square overflow-hidden bg-zinc-100">
                    <img src={product.image} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-zinc-950">{product.title}</h3>
                    {product.price && <p className="shrink-0 text-sm font-semibold text-zinc-600">Rs. {Number(product.price).toLocaleString()}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <GoogleReviewsWidget />

        {/* Services Section */}
        <section className="bg-gray-50 px-6 py-24 border-b border-gray-100">
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              We provide high-quality framing and glass services tailored to
              your needs, using durable materials and expert craftsmanship.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Picture Framing
                </h3>
                <p className="mt-2 text-gray-600">
                  Custom frames for photos, paintings, certificates, and
                  artwork.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Mirror & Glass Framing
                </h3>
                <p className="mt-2 text-gray-600">
                  Precision framing and finishing for mirrors and glass panels.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Glass Cutting & Replacement
                </h3>
                <p className="mt-2 text-gray-600">
                  Accurate glass cutting and replacement for homes and offices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 px-6 py-24 border-b border-gray-100">
          <div className="mx-auto max-w-screen-2xl">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Have a project in mind? Reach out to us for custom framing and
              glass solutions.
            </p>

            <div className="mt-8 space-y-2 text-gray-700">
              <p>
                <strong>Phone:</strong> +94 77 228 7228
              </p>
              <p>
                <strong>WhatsApp:</strong> +94 77 228 7228
              </p>
              <p>
                <strong>Location:</strong> Colombo, Sri Lanka
              </p>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

export default Home;
