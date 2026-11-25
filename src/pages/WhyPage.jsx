/* eslint-disable */
import { Cover, End, Hero, Track, Wing } from "../components/scenes";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const CARS = {
  from: "20", to: "06", cover: W + "cars.webp", coverAlt: "Lightning McQueen mid air", pos: "50% 50%", shift: -12, drop: 8,
  title: ["First love,", "a cartoon car"], when: "2006, two years old",
  intro: "My mum swears she can still hear it. Three straight months of the same film, a two year old planted in front of the screen watching a red cartoon car go round in circles... and the second it ended, asking for it again.",
};

const PANELS = [
  { tab: "The engines", title: ["The engines"], img: W + "cars.webp", alt: "Lightning McQueen", pos: "42% 50%", when: "Mallorca, 2006", what: "Cars, the Pixar film",
    left: ["Even then, the sound of them put goosebumps on a kid who could barely talk. I rewatched it twenty years later and my skin did the EXACT same thing, same shiver, same kid."],
    right: ["It's still the most watched film of my life and nobody in my house has ever managed to explain it (my mum just rolls her eyes when it comes up)."] },
  { tab: "My father", title: ["My father"], img: W + "dad_hd.webp", alt: "Ernesto as a toddler with his father", pos: "60% 50%", when: "A few years later", what: "A living room in Mallorca",
    left: ["The engines stopped being cartoons and I wasn't watching alone anymore. One of those old tube TVs, Vettel in the Red Bull, Antonio Lobato's voice over the roar of all of it... and me lying on top of my dad, glued to the screen, not able to move."],
    right: ["I couldn't tell you a single thing about the result, I just remember being right there next to him.", "We understand each other better inside a paddock or watching a race than almost anywhere else, and I sometimes wonder if without motorsport we'd ever have got to know each other the way we do."] },
  { tab: "The same language", full: true, title: ["The same", "language, still"], img: W + "drive.webp", alt: "Classic cars in Mallorca", pos: "50% 45%", when: "Today",
    what: "Motorsport handed us a language before we knew we were missing one",
    left: ["It's not that we don't talk about other things, it's that something happens when it's cars that doesn't happen anywhere else, *a way of both being there at the same time* without either of us trying.", "I don't know where the passion for the sport ends and where what I feel when I'm with my dad talking about it begins... and I'm not sure I want to know."] },
  { tab: "Enrique Tintoré", title: ["Enrique Tintoré"], img: W + "tintore_hd.webp", alt: "Enrique Tintoré leaning on his Maserati in the 1940s", pos: "62% 50%", when: "Born in Barcelona in 1913", what: "My great-uncle, the one leaning on the Maserati in the 1940s",
    left: ["“Ernesto, that man you see in the photo is your great-uncle. This motor thing, *you carry it in your blood*.” That's what my great-aunt told me in 2026 when I mentioned I wanted a career in motorsport, and then she sent me the photo."],
    right: ["A textile industrialist and member of the legendary Penya Rhin, one of the very few people who ever shared a grid with Fangio and Nuvolari. He was more the man putting his own money in and running it from the inside than the one collecting the wins.", "And now there's me, 80 years later, learning the business behind it with no clue the pull already had a name in the family."] },
];

const WhyPage = () => (
  <Wing>
    <Hero src="/why_drive.webp" title={["Why motorsport"]} text="A cartoon car, a tube TV, my father, and a man in an old photo I didn't know was family." pos="50% 45%" />
    <Cover s={CARS} />
    <Track panels={PANELS} label="Where it comes from" />
    <End title={["Some things", "you choose,", "this one chose first"]} links={[["Building now", "/building-now"], ["Let's talk", "/contact"]]} />
  </Wing>
);

export default WhyPage;
