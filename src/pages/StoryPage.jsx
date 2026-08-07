/* eslint-disable */
import TimelineSpine from "../components/TimelineSpine";
import BackToGarage from "../components/BackToGarage";

import Stage5_Present from "../components/stages/Stage5_Present";
import StageSheffield from "../components/stages/StageSheffield";
import Stage4_Unno from "../components/stages/Stage4_Unno";
import Stage3_DenseYear from "../components/stages/Stage3_DenseYear";
import StagePodcast from "../components/stages/StagePodcast";
import StageBarcelona from "../components/stages/StageBarcelona";
import StageHackathon from "../components/stages/StageHackathon";
import StageClosing from "../components/stages/StageClosing";
import Stage2_Paris from "../components/stages/Stage2_Paris";

const STAGES = [
  { id: "stage-5", year: "2026" },
  { id: "stage-4", year: "2025—26" },
  { id: "stage-3", year: "2024—25" },
  { id: "stage-podcast", year: "podcast" },
  { id: "stage-2", year: "2023—24" },
  { id: "stage-barcelona", year: "2022—23" },
];

const StoryPage = () => {
  return (
    <div className="relative min-h-screen">
      <TimelineSpine stages={STAGES} />
      <BackToGarage />

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
  );
};

export default StoryPage;
