/* eslint-disable */
import { useEffect, useState } from "react";

import EntranceDoor from "./components/EntranceDoor";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import TimelineSpine from "./components/TimelineSpine";

import Stage5_Present from "./components/stages/Stage5_Present";
import StageSheffield from "./components/stages/StageSheffield";
import Stage4_Unno from "./components/stages/Stage4_Unno";
import Stage3_DenseYear from "./components/stages/Stage3_DenseYear";
import StagePodcast from "./components/stages/StagePodcast";
import StageBarcelona from "./components/stages/StageBarcelona";
import StageHackathon from "./components/stages/StageHackathon";
import StageClosing from "./components/stages/StageClosing";
import Stage2_Paris from "./components/stages/Stage2_Paris";

const STAGES = [
  { id: "stage-5", year: "2026" },
  { id: "stage-4", year: "2025—26" },
  { id: "stage-3", year: "2024—25" },
  { id: "stage-podcast", year: "podcast" },
  { id: "stage-2", year: "2023—24" },
  { id: "stage-barcelona", year: "2022—23" },
];

function App() {
  const [entered, setEntered] = useState(false);

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

  return (
    <>
      <EntranceDoor onOpen={() => setEntered(true)} />

      <SmoothScroll>
        <div className="relative min-h-screen">
          <TimelineSpine stages={STAGES} />
          <CustomCursor />

          <main className="relative z-10">
            <Stage5_Present />
            <StageSheffield />
            <Stage4_Unno />
            <Stage3_DenseYear />
            <Stage2_Paris />
            <StagePodcast />
            <StageBarcelona />
            <StageHackathon />
            <StageClosing />
          </main>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
