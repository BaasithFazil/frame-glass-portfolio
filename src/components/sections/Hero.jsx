import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Truck } from "lucide-react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    image: "/images/hero/parallax-frame.jpg",
    eyebrow: "BESPOKE DETAILS FOR YOUR SPACE",
    title: "Custom",
    emphasis: "Mirror Framing",
    description:
      "Bespoke frames, precision glass, and mirrors that make every room feel complete.",
    link: "/services",
  },
  {
    image: "/images/portfolio/frame-1.jpg",
    eyebrow: "MADE TO DISPLAY WHAT MATTERS",
    title: "Picture",
    emphasis: "Framing",
    description:
      "Thoughtfully crafted frames for artwork, photos, certificates, and treasured memories.",
    link: "/portfolio",
  },
  {
    image: "/images/portfolio/glass-1.jpg",
    eyebrow: "PRECISION CUT FOR EVERY PROJECT",
    title: "Glass",
    emphasis: "Solutions",
    description:
      "Reliable glass cutting, replacement, and finishing for homes, workspaces, and interiors.",
    link: "/services",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 850], ["0px", "150px"]);
  const slide = slides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () =>
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () =>
    setActiveSlide((current) => (current + 1) % slides.length);

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-stone-200 text-white md:min-h-[760px]">
      {slides.map((item, index) => (
        <Motion.div
          key={item.image}
          className={`absolute -inset-y-40 inset-x-0 bg-cover bg-center transition-opacity duration-700 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url('${item.image}')`, y: backgroundY }}
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={showPrevious}
        className="absolute left-2 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/25 text-white transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5 md:left-8"
      >
        <ChevronLeft strokeWidth={1.5} size={42} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={showNext}
        className="absolute right-2 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/25 text-white transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 md:right-8"
      >
        <ChevronRight strokeWidth={1.5} size={42} />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-screen-2xl items-center justify-center px-6 pb-20 pt-36 text-center md:min-h-[760px]">
        <div
          key={activeSlide}
          className="max-w-3xl animate-[fade-in_500ms_ease-out]"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-white/90">
            {slide.eyebrow}
          </p>
          <h1 className="text-5xl font-black leading-[0.9] tracking-tight drop-shadow-sm sm:text-6xl md:text-7xl lg:text-8xl">
            {slide.title}
            <span className="mt-2 block text-white">{slide.emphasis}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
            {slide.description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to={slide.link}
              className="min-w-36 bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-zinc-800"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="min-w-40 border border-white bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-transparent hover:text-white"
            >
              Upload your Photo
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 flex w-[min(92%,510px)] -translate-x-1/2 items-center justify-between border border-white/30 bg-white px-6 py-3 text-zinc-950 shadow-lg sm:px-9">
        <span className="text-xl font-black leading-none sm:text-2xl">
          ISLANDWIDE
          <br />
          DELIVERY
        </span>
        <span className="flex items-center gap-2 text-right text-sm font-black leading-none text-zinc-950 sm:text-base">
          FAST
          <br />
          DELIVERY{" "}
          <Truck
            className="h-12 w-12 text-zinc-800 sm:h-14 sm:w-14"
            strokeWidth={1.7}
          />
        </span>
      </div>
      <div className="absolute bottom-5 left-5 z-20 flex gap-2 md:left-8">
        {slides.map((item, index) => (
          <button
            type="button"
            key={item.image}
            aria-label={`Show ${item.emphasis} slide`}
            onClick={() => setActiveSlide(index)}
            className="grid h-8 w-8 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className={`h-1 transition-all ${index === activeSlide ? "w-7 bg-white" : "w-3 bg-white/50 hover:bg-white"}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
