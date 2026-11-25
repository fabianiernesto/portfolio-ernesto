/* eslint-disable */
import { Cover, End, Hero, Track, Wing } from "../components/scenes";

const LI = "https://www.linkedin.com/in/ernestofabiani/";
const RS = "https://racing-simplified.vercel.app/";
const W = "/wings/";

const ContactPage = () => (
  <Wing>
    <Track panels={[{ wide: true, title: ["Let's talk"], img: "/contact_lando.jpg", alt: "Lando Norris on the phone", pos: "50% 25%",
      left: ["If you're in motorsport or automotive, or you know someone who is, write me. An email and a LinkedIn message land in the same place, and *I answer every single one*."],
      right: ["No pitch needed, no formalities... I just really like talking to people who live in this world ;)"],
      links: [["Email me", "mailto:fabianicolladoernesto@gmail.com?subject=Hello%20Ernesto"], ["LinkedIn", LI]] }]} />
  </Wing>
);

export default ContactPage;
