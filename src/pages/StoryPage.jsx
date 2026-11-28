/* eslint-disable */
import { Fragment } from "react";
import { Cover, End, Hero, Wing } from "../components/scenes";
import { Bays } from "../components/journeys";
import { SEASONS } from "../data/story";

const A = "/story/";

const ME = [{
  tab: "Ernesto Fabiani",
  title: ["Ernesto Fabiani"], img: A + "portrait_hd.webp", alt: "Ernesto Fabiani", pos: "62% 20%",
  when: "Today, 2026", what: "International Business graduate, based in Madrid",
  left: ["22 years old, Mallorca to Barcelona to Madrid, International Business graduate, and I've never wanted something this clearly in my life, *a job in motorsport, on the business side of it*."],
  right: ["I've spent four years throwing myself into things I had no business doing at that age, because sitting still has never been an option for me.", "From here the page goes BACKWARDS, from what I do today, through each year of my degree, to a warehouse floor in 2022."],
  link: ["LinkedIn", "https://www.linkedin.com/in/ernestofabiani/"],
}, {
  tab: "José Collado", title: ["José Collado"], img: A + "jc.webp", alt: "José Collado S.A.", pos: "30% 50%",
  when: "July 2026 to today", what: "Head of B2B Digital Growth, remote from Madrid",
  left: ["José Collado S.A. is a chemical disinfection company founded in 1925. I was brought in right after graduating to build its B2B digital growth function from the ground up."],
  right: ["In practice that's LinkedIn, email marketing and the website, all of it tied to how the company reaches business clients online and converts them.", "And four summers before that I was cleaning its factory floors, so keep scrolling to the very end :)"],
}];

/* Every moment is a full screen of its own: strong photographs and videos fill it, personal photographs float like prints. */
const SHAPE = { "portrait_hd.webp": "1/1", "jc.webp": "2000/1333", "bgs.webp": "1334/2000", "unno.webp": "1600/1571", "mouthx.webp": "2000/1233", "paris.webp": "1538/2000", "podcast.webp": "1200/1778", "barcelona.webp": "768/1376" };
const toBays = (panels) => panels.map((p, i) => {
  const photo = p.full || p.img.endsWith(".mp4");
  return {
    tab: p.tab, title: p.title.join(" "), when: p.when, what: p.what, text: [...(p.left || []), ...(p.right || [])], link: p.link,
    img: p.img, alt: p.alt, pos: p.pos, kind: photo ? "photo" : "object", tone: photo ? "photo" : "light",
    side: i % 2 ? "right" : "left", ratio: SHAPE[p.img.split("/").pop()], tilt: i % 2 ? 1.6 : -1.6,
  };
});

const StoryPage = () => (
  <Wing>
    <Hero src={A + "hero.mp4"} title={["Built already"]} text="This is not a CV. It's the four years that got me here, 2026 back to 2022." />
    <Bays items={toBays(ME)} label="Today, 2026" name="today" dense />
    {SEASONS.map((s, i) => (
      <Fragment key={s.from}>
        <Cover s={s} hold />
        <Bays items={toBays(s.panels)} label={`${s.title[0]}, ${s.when}`} name={"y" + s.from} dense hold={i === SEASONS.length - 1} />
      </Fragment>
    ))}
    <End title={["Let's talk"]}
      text="If you're in motorsport or automotive, or you know someone who is, write me. No pitch needed, no formalities... I just really like talking to people who live in this world ;)"
      links={[["Contact", "/contact"], ["LinkedIn", "https://www.linkedin.com/in/ernestofabiani/"]]}
      credits="Photos: Sheffield, Benedict Hunjan (CC BY-SA 3.0). Paris, Getfunky Paris (CC BY 2.0). Barcelona, Mickey Løgitmark (CC BY 3.0). Cropped and resized, via Wikimedia Commons." />
  </Wing>
);

export default StoryPage;
