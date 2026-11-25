/* eslint-disable */
import { Cover, End, Hero, Track, Wing } from "../components/scenes";
import { SEASONS } from "../data/story";

const A = "/story/";

const ME = [{
  tab: "Ernesto Fabiani",
  title: ["Ernesto Fabiani"], img: A + "portrait.webp", alt: "Ernesto Fabiani", pos: "62% 20%",
  left: ["22 years old, Mallorca to Barcelona to Madrid, International Business graduate, and I've never wanted something this clearly in my life, a job in motorsport, on the business side of it."],
  right: ["I've spent four years throwing myself into things I had no business doing at that age, because sitting still has never been an option for me.", "From here the page goes BACKWARDS, from what I do today, through each year of my degree, to a warehouse floor in 2022."],
  link: ["LinkedIn", "https://www.linkedin.com/in/ernestofabiani/"],
}, {
  tab: "José Collado", title: ["José Collado"], img: A + "jc.webp", alt: "José Collado S.A.", pos: "30% 50%",
  when: "July 2026 to today", what: "Head of B2B Digital Growth, remote from Madrid",
  left: ["José Collado S.A. is a chemical disinfection company founded in 1925. I was brought in right after graduating to build its B2B digital growth function from the ground up."],
  right: ["In practice that's LinkedIn, email marketing and the website, all of it tied to how the company reaches business clients online and converts them.", "And four summers before that I was cleaning its factory floors, so keep scrolling to the very end :)"],
}];

const StoryPage = () => (
  <Wing>
    <Hero src={A + "hero.mp4"} title={["Built already"]} text="This is not a CV. It's the four years that got me here, 2026 back to 2022." />
    <Track panels={ME} label="Today, 2026" />
    {SEASONS.map((s) => (
      <div key={s.from}>
        <Cover s={s} />
        <Track panels={s.panels} label={`${s.title[0]}, ${s.when}`} />
      </div>
    ))}
    <End title={["Let's talk"]}
      text="If you're in motorsport or automotive, or you know someone who is, write me. No pitch needed, no formalities... I just really like talking to people who live in this world ;)"
      links={[["Contact", "/contact"], ["LinkedIn", "https://www.linkedin.com/in/ernestofabiani/"]]}
      credits="Photos: Sheffield, Benedict Hunjan (CC BY-SA 3.0). Paris, Getfunky Paris (CC BY 2.0). Barcelona, Mickey Løgitmark (CC BY 3.0). Cropped and resized, via Wikimedia Commons." />
  </Wing>
);

export default StoryPage;
