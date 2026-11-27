/* eslint-disable */
import { End, Track, Wing } from "../components/scenes";
import { DoorLift } from "../components/journeys";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const PANELS = [
  { tab: "The pile", words: true, title: ["Not another PDF"], when: "2026", what: "I was sick of the CV everyone else hands over",
    left: ["That PDF you fire off to a motorsport company, landing in a pile of hundreds that look EXACTLY the same, opened for two seconds, closed, and forgotten before the next one loads.", "So instead of sending another one I built this, a website you can walk through, made with Claude Code by someone who had never written a line of code in his life."] },
  { tab: "Claude Code", light: true, title: ["Claude"], img: "/claude_bot.png", alt: "The Claude Code mascot with a coffee", pos: "50% 50%", contain: true, when: "How it was built", what: "Two weeks of conversations for the first version",
    left: ["A good friend of mine, Marc Guitart Frescó, told me you could code a website from zero *without knowing how to program*, so I set out to find whether that was true."],
    right: ["I'd describe what I wanted in plain words, it would build it, I'd break it trying to change one tiny thing, and we'd work out together why it broke.", "That exact loop is how I learned what this tool can do, and it's the same one that later turned into Racing Simplified."], link: ["See Racing Simplified", "/building-now/f1"] },
];

const GaragePage = () => (
  <Wing back="/building-now" backLabel="BUILDING NOW">
    <DoorLift door={W + "door.webp"} under={W + "garage_close_bg.mp4"} title={["This garage"]} when="Built with Claude Code, 2026" text="A web portfolio looks like something only developers get to make. It isn't, not anymore." />
    <Track panels={PANELS} label="How it was made" />
    <End title={["At least mine", "isn't another PDF", "in the pile"]} links={[["Built already", "/story"], ["Let's talk", "/contact"]]} />
  </Wing>
);

export default GaragePage;
