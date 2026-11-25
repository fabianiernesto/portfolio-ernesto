/* eslint-disable */
import { Cover, End, Hero, Track, Wing } from "../components/scenes";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const PANELS = [
  { tab: "The idea", wide: true, title: ["Every race, simplified"], img: W + "rs_home.webp", alt: "Racing Simplified home", when: "Live since 25 November 2026", what: "racing-simplified.vercel.app",
    left: ["Formula 1 is full of things happening at once, a strategy call here, a penalty there, a gap that suddenly matters, and unless you already know the sport most of it just goes past you."],
    right: ["So I took every race of the 2026 season and explained it so that ANYONE can follow it, using the official timing data. 21 Grands Prix so far, every session of every weekend."], link: ["Open the website", RS] },
  { tab: "Read it", wide: true, title: ["Read it"], img: W + "rs_read.webp", alt: "The sessions of a weekend", when: "Scrolled", what: "The weekend as a story, along the real track",
    left: ["The circuit draws itself under you and the cards land as the laps go by, with more than 1,300 moments of the season explained one by one."],
    right: ["And when something big happens it stops you --> would you have pitted? Which penalty would you give if you were the steward? You answer first, then the data shows what the team did."] },
  { tab: "Play it", wide: true, title: ["Play it"], img: W + "rs_call.webp", alt: "Call the race", when: "Simplified", what: "Two ways of playing the real race",
    left: ["Call the race plays the whole thing back in about three minutes on the real circuit, it stops when the race turns and asks you what happens next."],
    right: ["In Paddock exchange every driver is a share worth his position, so you buy low and sell high lap by lap, as the race really went."] },
  { tab: "How it's built", wide: true, title: ["How it's built"], img: W + "rs_hub.webp", alt: "The Las Vegas hub", when: "Since 7 August 2026", what: "Alone, after my 9 to 6, with Claude Code",
    left: ["Thousands of lines of Python read the timing of every session (OpenF1 and FastF1) and the website is made in Next.js. If the data can't back a claim, the claim isn't made."],
    right: ["For a while my code was convinced races had been stopped with a red flag, and the culprit was hiding in two words: chequeRED FLAG hahaha"], link: ["Open the website", RS] },
];

const F1Page = () => (
  <Wing back="/building-now" backLabel="BUILDING NOW">
    <Hero src={W + "rs_car.webp"} title={["Racing", "Simplified"]} text="Every F1 race of 2026, explained so anyone can follow it. It's live." />
    <Track panels={PANELS} label="Racing Simplified" />
    <End title={["It's all yours"]} text="It isn't affiliated with Formula 1 in any way, it's just me trying to make this sport easier to love. And I'm sure something is broken somewhere, so if you find it, tell me." links={[["Open it", RS], ["Let's talk", "/contact"]]} />
  </Wing>
);

export default F1Page;
