import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "NOW",     id: "stage-5" },
  { label: "2025–26", id: "stage-4" },
  { label: "2024–25", id: "stage-3" },
  { label: "2023–24", id: "stage-2" },
  { label: "2022–23", id: "stage-1" },
  { label: "ORIGIN",  id: "stage-0" },
];

const SideNav = () => {
  const [active, setActive] = useState("stage-5");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const targets = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.45, rootMargin: "-30% 0px -30% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);


  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 3) });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop side nav */}
      <nav
        className="hidden md:flex flex-col fixed z-40 left-[88px] top-1/2 -translate-y-1/2"
        aria-label="Stage navigation"
        style={{ gap: "16px" }}
      >
        <span
          aria-hidden="true"
          className="absolute bg-signal pointer-events-none"
          style={{ left: "-14px", top: 0, bottom: 0, width: "1px" }}
        />
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative font-body tracking-nav uppercase text-left flex items-center transition-[color,opacity,font-size] duration-300 ease-out"
              style={{
                height: "28px",
                lineHeight: "28px",
                overflow: "hidden",
                opacity: isActive ? 1 : 0.45,
                color: isActive ? "var(--signal)" : "#ffffff",
                fontSize: isActive ? "13px" : "11px",
                padding: 0,
                background: "transparent",
                border: "none",
              }}
              data-hover="true"
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Mobile dot toggle */}
      <button
        onClick={() => setMobileOpen((o) => !o)}
        className="md:hidden fixed z-50 bottom-6 right-6 w-3.5 h-3.5 rounded-full bg-signal"
        aria-label="Open navigation"
      />

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 flex flex-col items-start justify-center pl-10 gap-6"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="font-display text-anton-48 text-white"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-white font-body text-xs tracking-nav uppercase"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default SideNav;
