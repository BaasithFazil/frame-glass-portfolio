import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection() {
  // Listen to WINDOW scroll
  const { scrollY } = useScroll();

  // Background moves slower than page
  const y = useTransform(scrollY, [0, 800], ["-80px", "80px"]);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background image */}
      <motion.div
        className="absolute -inset-20 bg-cover bg-center will-change-transform"
        style={{
          y,
          backgroundImage: "url('/images/hero/parallax-frame.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl">
            Crafted Details Matter
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Precision framing and glass work that elevates every space.
          </p>
        </div>
      </div>
    </section>
  );
}
