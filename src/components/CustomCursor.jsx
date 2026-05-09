import { useEffect, useRef } from "react";
import { lerp } from "../lib/lerp";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const animate = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.16);
      current.current.y = lerp(current.current.y, target.current.y, 0.16);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);

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
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
};

export default CustomCursor;
