/* eslint-disable */
import { End, Poster, Track, Wing } from "../components/scenes";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const PANELS = [
  { tab: "The idea", words: true, dark: true, n: "01", title: ["Every race,", "simplified"], when: "Live since 25 November 2026", what: "racing-simplified.vercel.app",
    left: ["Formula 1 is full of things happening at once, a strategy call here, a penalty there, a gap that suddenly matters, and unless you already know the sport most of it just goes past you."],
    right: ["So I took every race of the 2026 season and explained it so that *ANYONE can follow it*, using the official timing data. 21 Grands Prix so far, and every session of every weekend, practice included."], link: ["Open the website", RS] },
  { tab: "Read it", words: true, dark: true, n: "02", title: ["Read it"], when: "Scrolled", what: "The weekend as a story, along the real track",
    left: ["You pick a circuit and a session, and as you scroll the track draws itself under you and a card lands for every moment that mattered, lap by lap. There are more than 1,300 of them across the season."],
    right: ["When something big happens the page stops and asks you --> would you have pitted? Which penalty would you give if you were the steward? You answer first, and then the data shows what happened.", "And if you get lost there's Alfred, who talks like a mate on the team radio and only knows what the timing knows."] },
  { tab: "Play it", words: true, dark: true, n: "03", title: ["Play it"], when: "Simplified", what: "Two ways of playing the real race",
    left: ["Call the race plays the whole thing back in about three minutes on the real circuit. It stops when the race turns, you say what happens next and how sure you are, and then the race answers you."],
    right: ["In Paddock exchange every driver is a share worth his position. You buy low and sell high lap by lap, as the race really went, and if he retires you lose it."] },
  { tab: "How it's built", words: true, dark: true, n: "04", title: ["How it's built"], when: "Since 7 August 2026", what: "Alone, after my 9 to 6, with Claude Code",
    left: ["Thousands of lines of Python read the timing of every session (OpenF1 and FastF1) and turn it into the moments and the calls, and the website itself is made in Next.js. If the data can't back a claim, *the claim isn't made*."],
    right: ["For a while my code was convinced races had been stopped with a red flag, and the culprit was hiding in two words: chequeRED FLAG hahaha", "The best way to understand it is to go in and see it for yourself."], link: ["Open the website", RS] },
];

const F1Page = () => (
  <Wing back="/building-now" backLabel="BUILDING NOW" cls="rs-dark">
    <Poster src={W + "rs_key.webp"} alt="Racing Simplified, the website that explains every F1 race, and lets you play it" title="Racing Simplified" />
    <Track panels={PANELS} label="Racing Simplified" />
    <End title={["It's all yours"]} text="It isn't affiliated with Formula 1 in any way, it's just me trying to make this sport easier to love. And I'm sure something is broken somewhere, so if you find it, tell me." links={[["Open it", RS], ["Let's talk", "/contact"]]} />
  </Wing>
);

export default F1Page;
