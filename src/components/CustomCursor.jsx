import { useEffect, useRef } from "react";

/* The dot sits exactly where the mouse is, with no easing behind it.
   Over anything with data-cursor it grows into a red disc with that word in it. */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const onMove = (e) => {
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const hoverable = "a, button, [data-hover='true'], [role='button']";
    const onOver = (e) => {
      const el = e.target.closest?.(hoverable);
      const dot = dotRef.current;
      if (!el || !dot) return;
      dot.classList.add("is-hover");
      const word = el.getAttribute("data-cursor");
      if (word) {
        labelRef.current.textContent = word;
        dot.classList.add("is-label");
      } else dot.classList.remove("is-label");
    };
    const onOut = (e) => {
      const el = e.target.closest?.(hoverable);
      if (!el || (e.relatedTarget && el.contains(e.relatedTarget))) return;
      dotRef.current?.classList.remove("is-hover", "is-label");
    };

    /* after a click the page usually changes under the mouse: go back to the plain dot */
    const onClick = () => dotRef.current?.classList.remove("is-hover", "is-label");

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div ref={dotRef} className="cursor-dot">
      <span ref={labelRef} />
    </div>
  );
};

export default CustomCursor;
