import SEO from "../seo/SEO";
import { useState } from "react";
import PageTransition from "../components/layout/PageTransition";
import Lightbox from "../components/ui/Lightbox";
import { portfolioImages } from "../data/portfolio";

function Portfolio() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <PageTransition>
        <SEO
          title="Our Work | Frame & Glass Portfolio"
          description="View our recent custom frame and glass projects."
          image="/images/og-image.jpg"
          url="https://your-domain.com/portfolio"
        />

        <section className="bg-gray-50 px-6 py-28 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl font-bold text-gray-900">Our Work</h1>

            <p className="mt-4 max-w-2xl text-gray-600">
              A selection of our recent framing and glass projects.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioImages.map((img) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className="group relative overflow-hidden rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm text-white opacity-0 transition group-hover:opacity-100">
                    {img.label}
                  </div>
                </button>
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
    </>
  );
}

export default Portfolio;
