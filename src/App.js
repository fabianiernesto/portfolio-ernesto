/* eslint-disable */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import EntranceDoor from "./components/EntranceDoor";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import GarageHub from "./components/GarageHub";

import StoryPage from "./pages/StoryPage";
import WhyPage from "./pages/WhyPage";
import NowPage from "./pages/NowPage";
import GaragePage from "./pages/GaragePage";
import WritingPage from "./pages/WritingPage";
import F1Page from "./pages/F1Page";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

/* Reset scroll to top on every route change (Lenis-aware) */
const ScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* Home = garage door (first visit only) + hub menu behind it */
const Home = ({ entered, setEntered }) => {
  return (
    <>
      {!entered && <EntranceDoor onOpen={() => setEntered(true)} />}
      <GarageHub entered={entered} />
    </>
  );
};

function App() {
  // Door only greets visitors landing on the hub; deep links skip it
  const [entered, setEntered] = useState(
    () => typeof window !== "undefined" && window.location.pathname !== "/"
  );

  useEffect(() => {
    // Lock scroll until the door has opened
    document.body.style.overflow = entered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  useEffect(() => {
    const setSpineOffset = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      document.documentElement.style.setProperty(
        "--spine-left",
        isMobile ? "20px" : "48px"
      );
    };
    setSpineOffset();
    window.addEventListener("resize", setSpineOffset);
    return () => window.removeEventListener("resize", setSpineOffset);
  }, []);

  // iOS Low Power Mode blocks video autoplay. Force-play all background
  // videos on the first user gesture (touch / scroll / click) so they start
  // immediately instead of showing the native play-button overlay.
  useEffect(() => {
    const playAll = () => {
      document.querySelectorAll("video").forEach((v) => {
        v.muted = true;
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      });
    };

    playAll(); // attempt immediately

    const onFirstGesture = () => {
      playAll();
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("scroll", onFirstGesture);
    };

    window.addEventListener("touchstart", onFirstGesture, { passive: true });
    window.addEventListener("click", onFirstGesture, { passive: true });
    window.addEventListener("scroll", onFirstGesture, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onFirstGesture);
      window.removeEventListener("click", onFirstGesture);
      window.removeEventListener("scroll", onFirstGesture);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollReset />
      <CustomCursor />

      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home entered={entered} setEntered={setEntered} />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/why-motorsport" element={<WhyPage />} />
          <Route path="/building-now" element={<NowPage />} />
          <Route path="/building-now/garage" element={<GaragePage />} />
          <Route path="/building-now/writing" element={<WritingPage />} />
          <Route path="/building-now/f1" element={<F1Page />} />
          <Route path="/building-now/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home entered={entered} setEntered={setEntered} />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
