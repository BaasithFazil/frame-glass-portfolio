import { useEffect } from "react";

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const imageData =
    typeof image === "string"
      ? { src: image, alt: "", label: "" }
      : image;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-0 top-0 mb-4 rounded-full bg-white/10 px-3 py-1 text-2xl text-white transition hover:bg-white/20"
          aria-label="Close image preview"
        >
          &times;
        </button>

        <img
          src={imageData.src}
          alt={imageData.alt}
          className="max-h-[80vh] w-full rounded-xl object-contain"
        />

        {imageData.label && (
          <p className="mt-4 text-center text-sm text-gray-200">{imageData.label}</p>
        )}
      </div>
    </div>
  );
}
