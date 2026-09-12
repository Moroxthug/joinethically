"use client";

import { useEffect, useState } from "react";

/**
 * The thin progress line every serious longform site now carries. Purely
 * decorative, so it's hidden from assistive tech and respects reduced motion
 * via CSS rather than disabling itself.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable <= 0 ? 0 : Math.min(1, window.scrollY / scrollable));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
