/* eslint-disable */
import { Cover, End, Hero, Track, Wing } from "../components/scenes";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const L = [W + "logo_f1.webp", W + "logo_motogp.webp", W + "logo_wec_red.webp"];

const PANELS = [
  { tab: "Motorsport Stories", title: ["Motorsport Stories"], when: "Formula 1, MotoGP and WEC", what: "The business decision under the story",
    trio: [[W + "ms_f1.webp", "Kimi Antonelli, Formula 1", L[0]], [W + "ms_motogp.webp", "Marc Marquez, MotoGP", L[1]], [W + "ms_wec.webp", "Sébastien Buemi, WEC", L[2]]],
    left: ["It started with F1 drivers and now it's also MotoGP and endurance."],
    right: ["The story is the way in, what I'm chasing is the commercial reading a fan account never reaches.", "The one on Kimi Antonelli did 48,508 impressions, and the one on Charles Leclerc around 48,000."], link: ["Read them", LI] },
  { tab: "Behind The Logo", title: ["Behind The Logo"], tall: true, when: "Formula 1, MotoGP and WEC", what: "Why it's on the car (or the bike) and what each side got",
    trio: [[W + "btl2.webp", "Claude and Williams, Formula 1"], [W + "btl_motogp.webp", "Ducati and Lenovo, MotoGP"], [W + "btl_wec_hertz.webp", "Cadillac Jota and Hertz, WEC"]],
    left: ["One sponsorship at a time since October 2026, what the brand bought, what the team gave up and why the visibility was never the whole point."],
    right: ["I sell to companies for a living, so when a brand puts its logo on a car I have a decent idea of what it thinks it's paying for. Claude x Williams went past 52,000 impressions."], link: ["Read them", LI] },
  { tab: "Personal", wide: true, title: ["Personal"], img: "/story/award_moment.webp", alt: "On stage at graduation", pos: "50% 20%", when: "Every now and then", what: "Something from my own life",
    left: ["Asking the president of the FIA what someone my age needs to get in (after drying my hands on my own trousers, TWICE), or my parents hijacking two ceremonies in a row."],
    right: ["And the public promise with a date on it --> on my 22nd birthday I said I'd be working in Formula 1 before 24 September 2027."], link: ["Read them", LI] },
];

const WritingPage = () => (
  <Wing back="/building-now" backLabel="BUILDING NOW">
    <Hero src={W + "writing_close_bg.mp4"} title={["The business", "of racing"]} text="Three posts a week on LinkedIn about the part of motorsport that almost never gets told, the money, the contracts and the decisions." />
    <Track panels={PANELS} label="What I write" />
    <End title={["511,109 impressions"]} text="In the 12 months to 25 November 2026, in front of 205,680 people, with 89% of the impressions coming from outside my own network. Plus 2,610 reactions and 520 comments, and nobody commissioned any of it..." links={[["Read them", LI], ["Let's talk", "/contact"]]} />
  </Wing>
);

export default WritingPage;
