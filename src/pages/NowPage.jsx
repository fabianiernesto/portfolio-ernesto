/* eslint-disable */
import { End, Hero, Wing } from "../components/scenes";
import { Rail } from "../components/journeys";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const PANELS = [
  { tab: "Racing Simplified", wide: true, title: ["Racing Simplified"], img: W + "rs_key.webp", fit: true, alt: "Racing Simplified, the website that explains every F1 race, and lets you play it", when: "Live since 25 November 2026", what: "A website that explains every F1 race of 2026",
    left: ["Built alone, at night and on weekends since 7 August, on the official timing data and with Claude Code."], right: ["You can read every session like a story, or play the race itself."], link: ["See the project", "/building-now/f1"] },
  { tab: "LinkedIn", wide: true, title: ["LinkedIn"], img: W + "btl2_car.webp", alt: "Behind The Logo, Claude and Williams", when: "Three posts a week, every week", what: "The business behind motorsport",
    left: ["*I'm NOT in motorsport yet!!!* And instead of waiting I write about the business side of it, mostly so that by the time I get in I already know how the money moves."],
    right: ["Drivers' stories with the business decision underneath and the deals behind the logos, in Formula 1, MotoGP and WEC, and every now and then something from my own life."], link: ["How it works", "/building-now/writing"] },
  { tab: "YouTube", wide: true, title: ["YouTube"], img: W + "youtube.webp", alt: "The YouTube channel", fit: true, when: "Since November 2026", what: "The business behind motorsport, on video",
    left: ["Behind The Logo in long form, why a brand is on that car and what each side got out of it, with the room a post doesn't have."], right: ["The first one is Claude x Williams, and it's on its way."], link: ["Open the channel", "https://www.youtube.com/@ernestofabianicollado"] },
  { tab: "MAD Formula Team", wide: true, title: ["MAD Formula Team"], img: W + "mad.webp", alt: "A MAD Formula Team car", pos: "50% 45%", when: "Since November 2026", what: "Formula Student, Universidad Carlos III de Madrid",
    left: ["Students who design and build a single seater every year and race it around Europe. I work side by side with Andrei Furtuna, its Team Principal & CEO."], right: ["They bring the car and I bring the systems, starting with how the team tells its story on LinkedIn."], link: ["See the team", "https://madformulateam.com/"] },
  { tab: "Formula Careers", wide: true, title: ["Formula Careers"], img: W + "fcn_certificate.webp", alt: "Formula Careers Network certificate of membership 2026, Ernesto Fabiani Collado", cert: true, when: "Since August 2026", what: "Founding 20, The Formula Careers Network",
    left: ["The private community Louise McGrath, founder of Formula Careers, opened for people who want to work in motorsport. She *hand-picked 20 of us* out of about 1,400 applications."], right: ["I got in for the commercial angle, partnerships, sponsorship and the money behind the sport, in a room where most people come from engineering."], link: ["Formula Careers", "https://formulacareers.com/"] },
  { tab: "This garage", wide: true, title: ["This garage"], img: W + "door.webp", alt: "The garage door", when: "Live, you're in it", what: "The CV I built instead of sending another PDF",
    left: ["Every line of this website was built with Claude Code by a business student who had never written code in his life."],
    right: ["And it keeps changing, which a PDF can't really do :)"], link: ["The story behind it", "/building-now/garage"] },
];

const NowPage = () => (
  <Wing>
    <Hero src={W + "garage_close_bg.mp4"} title={["Building now"]} text="Wanting in is not a plan, so this is the part I can control. Six things running right now, all pointing at the same place..." />
    <Rail items={PANELS.map((d) => ({ ...d, title: d.title.join(" "), text: [...d.left, ...(d.right || [])] }))} />
    <End title={["Let's talk"]} text="Deadline: 24 September 2027. That's when I said in public I'd be working in Formula 1, so if you can see a way in that I can't, I'd love to hear it :)" links={[["Contact", "/contact"], ["LinkedIn", LI]]} />
  </Wing>
);

export default NowPage;
