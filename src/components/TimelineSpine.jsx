import { useEffect, useState } from "react";

const TimelineSpine = ({ stages }) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!stages?.length) return;
    const sections = stages.map((s) => document.getElementById(s.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPulse(true);
            window.setTimeout(() => setPulse(false), 600);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-20% 0px -20% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [stages]);

  return (
    <div
      className="fixed top-0 bottom-0 z-40 pointer-events-none"
      style={{ left: "var(--spine-left, 48px)" }}
    >
      <div
        className="absolute top-0 bottom-0 bg-signal transition-[width] duration-300"
        style={{ width: pulse ? 2 : 1, left: 0 }}
      />
    </div>
  );
};

export default TimelineSpine;
