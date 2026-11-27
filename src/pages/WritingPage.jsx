/* eslint-disable */
import { End, Wing } from "../components/scenes";
import { Counter, Feed, Stats } from "../components/journeys";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const W = "/wings/";
const WIDE = "1200/627", TALL = "4/5";
const LOGOS = [W + "logo_f1.webp", W + "logo_motogp.webp", W + "logo_wec_red.webp"];

const SERIES = [
  { title: "Motorsport Stories", when: "Formula 1, MotoGP and WEC", what: "The business decision under the story", logos: LOGOS,
    posts: [
      { img: W + "ms_f1.webp", alt: "Kimi Antonelli, Formula 1", ratio: WIDE },
      { img: W + "ms_motogp.webp", alt: "Marc Márquez, MotoGP", ratio: WIDE },
      { img: W + "ms_wec.webp", alt: "Sébastien Buemi, WEC", ratio: WIDE },
    ],
    left: ["It started with F1 drivers and now it's also MotoGP and endurance."],
    right: ["The story is the way in, what I'm chasing is the commercial reading a fan account never reaches.", "The one on Kimi Antonelli did *48,508 impressions*, and the one on Charles Leclerc around 48,000."], link: ["Read them", LI] },
  { title: "Behind The Logo", when: "Formula 1, MotoGP and WEC", what: "Why it's on the car (or the bike) and what each side got", logos: LOGOS,
    posts: [
      { img: W + "btl2.webp", alt: "Claude and Williams, Formula 1", ratio: TALL },
      { img: W + "btl_motogp.webp", alt: "Ducati and Lenovo, MotoGP", ratio: TALL },
      { img: W + "btl_wec_hertz.webp", alt: "Cadillac Jota and Hertz, WEC", ratio: TALL },
    ],
    left: ["One sponsorship at a time since October 2026, what the brand bought, what the team gave up and why the visibility was never the whole point."],
    right: ["I sell to companies for a living, so when a brand puts its logo on a car I have a decent idea of what it thinks it's paying for. Claude x Williams went past 52,000 impressions."], link: ["Read them", LI] },
  { title: "Personal", when: "Every now and then", what: "Something from my own life",
    posts: [{ img: "/story/award_moment.webp", alt: "On stage at graduation, IQS Barcelona", ratio: "3/2", pos: "50% 20%" }],
    left: ["Asking the president of the FIA what someone my age needs to get in (after drying my hands on my own trousers, TWICE), or my parents hijacking two ceremonies in a row."],
    right: ["And the public promise with a date on it, on my 22nd birthday I said I'd be working in Formula 1 before *24 September 2027*."], link: ["Read them", LI] },
];

const WritingPage = () => (
  <Wing back="/building-now" backLabel="BUILDING NOW">
    <Counter value={511109} label="Impressions on LinkedIn, last 12 months" text="Three posts a week about the part of motorsport that almost never gets told, the money, the contracts and the decisions. *89%* of those impressions came from people outside my own network." />
    <Stats total={511109} reached={205680} outside={89} best={[52496, "impressions on Claude x Williams, my best post"]} rows={[["Reactions", 2610], ["Comments", 520], ["Saves", 83], ["Sends", 32], ["Reposts", 12]]} />
    <Feed series={SERIES} label="What I write" hold />
    <End title={["Read them"]} text="205,680 people reached, 2,610 reactions and 520 comments in the last 12 months, and nobody commissioned any of it..." links={[["Read them", LI], ["Let's talk", "/contact"]]} />
  </Wing>
);

export default WritingPage;
