/* eslint-disable */
import { End, Hero, Wing } from "../components/scenes";
import { Bays } from "../components/journeys";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const ITEMS = [
  { title: "Racing Simplified", tone: "rs", side: "left", kind: "object", img: W + "rs_key.webp", ratio: "2400/1254", tilt: -1.4, alt: "Racing Simplified, the website that explains every F1 race, and lets you play it",
    when: "Live since 25 November 2026", what: "A website that explains every F1 race of 2026",
    text: ["Built alone, at night and on weekends since 7 August, on the official timing data and with Claude Code.", "You can read every session like a story, or play the race itself."], link: ["Explore Racing Simplified", "/building-now/f1"] },
  { title: "LinkedIn", tone: "light", side: "right", kind: "stack", stack: [[W + "btl2.webp", "Claude and Williams, Formula 1"], [W + "btl_motogp.webp", "Ducati and Lenovo, MotoGP"], [W + "btl_wec_hertz.webp", "Cadillac Jota and Hertz, WEC"]],
    when: "Three posts a week, every week", what: "The business behind motorsport",
    text: ["*I'm NOT in motorsport yet!!!* And instead of waiting I write about the business side of it, mostly so that by the time I get in I already know how the money moves.", "Drivers' stories with the business decision underneath and the deals behind the logos, in Formula 1, MotoGP and WEC, and every now and then something from my own life."],
    stat: ["511,109", "impressions in the last 12 months"], link: ["See the numbers and posts", "/building-now/writing"] },
  { title: "YouTube", tone: "dark", side: "left", kind: "object", img: W + "youtube.webp", ratio: "2400/1254", tilt: 1.2, alt: "The YouTube channel",
    when: "Since November 2026", what: "The business behind motorsport, on video",
    text: ["Behind The Logo in long form, why a brand is on that car and what each side got out of it, with the room a post doesn't have.", "The first one is Claude x Williams, and it's on its way."], link: ["Open the channel", "https://www.youtube.com/@ernestofabianicollado"] },
  { title: "MAD Formula Team", tone: "photo", side: "right", kind: "photo", img: W + "mad.webp", pos: "38% 50%", alt: "A MAD Formula Team car",
    when: "Since November 2026", what: "Formula Student, Universidad Carlos III de Madrid",
    text: ["Students who design and build a single seater every year and race it around Europe. I work side by side with Andrei Furtuna, its Team Principal & CEO.", "They bring the car and I bring the systems, starting with how the team tells its story on LinkedIn."], link: ["Visit the team", "https://madformulateam.com/"] },
  { title: "Formula Careers", tone: "light", side: "left", kind: "object", img: W + "fcn_certificate.webp", ratio: "791/557", tilt: 2.2, alt: "Formula Careers Network certificate of membership 2026, Ernesto Fabiani Collado",
    when: "Since August 2026", what: "Founding 20, The Formula Careers Network",
    text: ["The private community Louise McGrath, founder of Formula Careers, opened for people who want to work in motorsport. She *hand-picked 20 of us* out of about 1,400 applications.", "I got in for the commercial angle, partnerships, sponsorship and the money behind the sport, in a room where most people come from engineering."], link: ["Visit Formula Careers", "https://formulacareers.com/"] },
  { title: "This garage", tone: "photo", side: "right", kind: "photo", dim: true, img: W + "door.webp", pos: "50% 50%", alt: "The garage door",
    when: "Live, you're in it", what: "The CV I built instead of sending another PDF",
    text: ["Every line of this website was built with Claude Code by a business student who had never written code in his life.", "And it keeps changing, which a PDF can't really do :)"], link: ["See how I built it", "/building-now/garage"] },
];

const NowPage = () => (
  <Wing>
    <Hero src={W + "garage_close_bg.mp4"} title={["Building now"]} text="Wanting in is not a plan, so this is the part I can control. Six things running right now, all pointing at the same place..." />
    <Bays items={ITEMS} label="Right now" hold />
    <End title={["Let's talk"]} text="Deadline: 24 September 2027. That's when I said in public I'd be working in Formula 1, so if you can see a way in that I can't, I'd love to hear it :)" links={[["Contact", "/contact"], ["LinkedIn", LI]]} />
  </Wing>
);

export default NowPage;
