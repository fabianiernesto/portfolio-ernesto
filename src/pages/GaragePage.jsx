/* eslint-disable */
import { End, Wing } from "../components/scenes";
import { Bays, Compare, DoorLift } from "../components/journeys";

const W = "/wings/";

const PILE = { title: ["Not another PDF"], when: "2026", what: "I was sick of the CV everyone else hands over",
  before: W + "garage_may.webp", beforeAlt: "This website in May 2026, its first version", beforeTag: "May 2026",
  after: W + "garage_now.webp", afterAlt: "This website today", afterTag: "Today",
  left: ["That PDF you fire off to a motorsport company, landing in a pile of hundreds that look EXACTLY the same, opened for two seconds, closed, and forgotten before the next one loads."],
  right: ["So instead of sending another one I built this, a website you can walk through, made with Claude Code by someone who had never written a line of code in his life."] };

const CLAUDE = [
  { tab: "Claude Code", title: "Claude", kind: "object", tone: "light", side: "left", cut: true, img: "/claude_bot.png", ratio: "1/1", tilt: -2, alt: "The Claude Code mascot with a coffee",
    when: "How it was built", what: "Two weeks of conversations for the first version",
    text: ["A good friend of mine, Marc Guitart Frescó, told me you could code a website from zero *without knowing how to program*, so I set out to find whether that was true.", "I'd describe what I wanted in plain words, it would build it, I'd break it trying to change one tiny thing, and we'd work out together why it broke.", "That exact loop is how I learned what this tool can do, and it's the same one that later turned into Racing Simplified."],
    link: ["See Racing Simplified", "/building-now/f1"] },
];

const GaragePage = () => (
  <Wing back="/building-now" backLabel="BUILDING NOW">
    <DoorLift door={W + "door.webp"} under={W + "garage_close_bg.mp4"} title={["This garage"]} when="Built with Claude Code, 2026" text="A web portfolio looks like something only developers get to make. It isn't, not anymore." hold />
    <Compare d={{ ...PILE, title: PILE.title.join(" ") }} hold />
    <Bays items={CLAUDE} name="garage" hold />
    <End title={["At least mine", "isn't another PDF", "in the pile"]} links={[["Built already", "/story"], ["Let's talk", "/contact"]]} />
  </Wing>
);

export default GaragePage;
