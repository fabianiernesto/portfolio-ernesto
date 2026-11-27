/* eslint-disable */
import { Cover, End, Wing } from "../components/scenes";
import { Album } from "../components/journeys";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const CARS = {
  head: "Why motorsport", sub: "A cartoon car, a tube TV, my father, and a man in an old photo I didn't know was family.",
  from: "20", to: "06", cover: W + "cars.webp", coverAlt: "Lightning McQueen mid air", pos: "50% 50%", shift: -12, drop: 8,
  title: ["First love,", "a cartoon car"], when: "2006, two years old",
  intro: "My mum swears she can still hear it. Three straight months of the same film, a two year old planted in front of the screen watching a red cartoon car go round in circles... and the second it ended, asking for it again.",
};

const ALBUM = [
  { title: "The engines", img: W + "cars.webp", alt: "Lightning McQueen", ratio: "16/10", pos: "42% 50%", tilt: -2.2, caption: "Cars, the film I watched every single day", when: "Mallorca, 2006", what: "Cars, the Pixar film",
    text: ["Even then, the sound of the engines put goosebumps on a kid who could barely talk. I rewatched it twenty years later and my skin did the EXACT same thing, same shiver, same kid.", "It's still the most watched film of my life and nobody in my house has ever managed to explain it (my mum just rolls her eyes when it comes up)."] },
  { title: "My father", img: W + "dad_hd.webp", alt: "Ernesto as a toddler with his father", ratio: "4/3", pos: "55% 40%", tilt: 1.8, caption: "My dad and me", when: "A few years later", what: "A living room in Mallorca",
    text: ["The engines stopped being cartoons and I wasn't watching alone anymore. One of those old tube TVs, Vettel in the Red Bull, Antonio Lobato's voice over the roar of all of it... and me lying on top of my dad, glued to the screen.", "I couldn't tell you a single thing about the result, I just remember being right there next to him."] },
  { title: "The same language", img: W + "drive.webp", alt: "Classic cars in Mallorca", ratio: "16/9", pos: "50% 45%", tilt: -1.4, caption: "Still at it, years later", when: "Today", what: "Motorsport handed us a language before we knew we were missing one",
    text: ["We understand each other better inside a paddock or watching a race than almost anywhere else. Something happens when it's cars, *a way of both being there at the same time* without either of us trying.", "I don't know where the passion for the sport ends and where what I feel when I'm with my dad talking about it begins... and I'm not sure I want to know."] },
  { title: "Enrique Tintor\u00e9", img: W + "tintore_hd.webp", alt: "Enrique Tintor\u00e9 leaning on his Maserati in the 1940s", ratio: "3/2", pos: "50% 50%", tilt: 2.4, caption: "The photo my great-aunt sent me", when: "Born in Barcelona in 1913", what: "My great-uncle, the one leaning on the Maserati in the 1940s",
    text: ["\u201cErnesto, that man you see in the photo is your great-uncle. This motor thing, *you carry it in your blood*.\u201d That's what my great-aunt told me in 2026, and then she sent me the photo.", "A textile industrialist and member of the legendary Penya Rhin, who shared a grid with Fangio and Nuvolari. And now there's me, 80 years later, with no clue the pull already had a name in the family."] },
];

const WhyPage = () => (
  <Wing>
    <Cover s={CARS} />
    <Album items={ALBUM} label="Where it comes from" />
    <End title={["Some things", "you choose,", "this one chose first"]} links={[["Building now", "/building-now"], ["Let's talk", "/contact"]]} />
  </Wing>
);

export default WhyPage;
