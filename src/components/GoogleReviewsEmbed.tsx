import React from "react";
import { useEffect } from "react";

export default function GoogleReviewsWidget() {
  useEffect(() => {
    // Prevent loading script multiple times
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        {/* Elfsight Widget */}
        <div
          className="elfsight-app-22e7e2d2-e8a9-4b60-9788-bd8947935345"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}

  