import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="uppercase tracking-widest text-sm text-muted-foreground">
            Crafted with Precision
          </span>

          <h1 className="font-heading mt-4 text-4xl md:text-5xl lg:text-6xl leading-tight">
            Custom Frame & Glass Work
            <br />
            <span className="text-neutral-600">Made to Last</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Handcrafted picture frames, mirror installations, and precision
            glass cutting — trusted by local customers for quality and care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-neutral-800 transition"
            >
              Get a Quote
            </Link>

            <Link
              to="/portfolio"
              className="px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white transition"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/portfolio/frame-1.jpg"
            alt="Custom picture frame"
            className="rounded-lg object-cover h-56 w-full"
          />
          <img
            src="/images/portfolio/glass-1.jpg"
            alt="Glass cutting work"
            className="rounded-lg object-cover h-56 w-full"
          />
          <img
            src="/images/portfolio/frame-2.jpg"
            alt="Mirror framing"
            className="rounded-lg object-cover h-56 w-full col-span-2"
          />
        </div>

      </div>
    </section>
  );
}
