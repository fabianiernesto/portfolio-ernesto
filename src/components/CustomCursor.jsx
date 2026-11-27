import { useEffect, useRef } from "react";

/* The dot sits exactly where the mouse is, with no easing behind it. */
const CustomCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const onMove = (e) => {
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const hoverable = "a, button, [data-hover='true'], [role='button']";
    const onOver = (e) => {
      if (e.target.closest?.(hoverable)) dotRef.current?.classList.add("is-hover");
    };
    const onOut = (e) => {
      if (e.target.closest?.(hoverable)) dotRef.current?.classList.remove("is-hover");
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
};

export default CustomCursor;
