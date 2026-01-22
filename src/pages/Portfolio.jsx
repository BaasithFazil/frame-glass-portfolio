import SEO from "../components/SEO";
import { useState } from "react";

function Portfolio() {
    const [activeImage, setActiveImage] = useState(null);

    const images = [
        {
          src: "/images/portfolio/frame-1.jpg",
          alt: "Custom Picture Framing",
          label: "Custom Picture Framing",
        },
        {
          src: "/images/portfolio/frame-2.jpg",
          alt: "Artwork Framing",
          label: "Artwork Framing",
        },
        {
          src: "/images/portfolio/frame-3.jpg",
          alt: "Certificate Framing",
          label: "Certificate Framing",
        },
        {
          src: "/images/portfolio/glass-1.jpg",
          alt: "Mirror & Glass Framing",
          label: "Mirror & Glass Framing",
        },
        {
          src: "/images/portfolio/glass-2.jpg",
          alt: "Glass Installation",
          label: "Glass Installation",
        },
        {
          src: "/images/portfolio/glass-3.jpg",
          alt: "Glass Replacement",
          label: "Glass Replacement",
        },
      ];
      
  return (
    <>
      <SEO
        title="Our Work | Frame & Glass Portfolio"
        description="View our recent custom frame and glass projects."
        image="/images/og-image.jpg"
        url="https://your-domain.com/portfolio"
      />

      <section className="bg-gray-50 px-6 py-28 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Work
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            A selection of our recent framing and glass projects.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {images.map((img, index) => (
    <div
      key={index}
      className="group relative cursor-pointer overflow-hidden rounded-lg"
      onClick={() => setActiveImage(img)}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm text-white opacity-0 transition group-hover:opacity-100">
        {img.label}
      </div>
    </div>
  ))}
</div>

        </div>

        {activeImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    onClick={() => setActiveImage(null)}
  >
    <div
      className="relative max-w-4xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={() => setActiveImage(null)}
        className="absolute -top-10 right-0 text-white text-3xl"
        aria-label="Close"
      >
        &times;
      </button>

      <img
        src={activeImage.src}
        alt={activeImage.alt}
        className="max-h-[80vh] w-full rounded-lg object-contain"
      />

      <p className="mt-4 text-center text-sm text-gray-200">
        {activeImage.label}
      </p>
    </div>
  </div>
)}

      </section>
    </>
  );
}

export default Portfolio;
