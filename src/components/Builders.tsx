import { useRef, useEffect } from "react";
import BuilderProfile from "./BuilderProfile";
import { BUILDERS } from "../data/builders";

export default function Builders() {
  const buildersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buildersRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-4");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        },
      );

      const cards = buildersRef.current.querySelectorAll(".builder-card");
      cards.forEach((card) => observer.observe(card));

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4">
          Meet Our Builders
        </h2>
        <p className="text-gray-400 mb-12">
          Expert developers and designers ready to build your MVP
        </p>

        <div
          ref={buildersRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {BUILDERS.map((builder) => (
            <div
              key={builder.id}
              className="builder-card opacity-0 translate-y-4 transition-all duration-500 ease-out"
            >
              <BuilderProfile {...builder} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
