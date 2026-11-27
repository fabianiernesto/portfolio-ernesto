/* eslint-disable */
import { Track, Wing } from "../components/scenes";
import { Countdown } from "../components/journeys";

const LI = "https://www.linkedin.com/in/ernestofabiani/";

/* Midnight in Madrid, 24 September 2027 */
const DEADLINE = Date.parse("2027-09-24T00:00:00+02:00");

const ContactPage = () => (
  <Wing>
    <Countdown to={DEADLINE} label={<>Days until <b>24 September 2027</b></>} text="On my 22nd birthday I said in public that I'd be working in Formula 1 before this date." />
    <Track panels={[{ wide: true, title: ["Let's talk"], img: "/contact_lando.jpg", alt: "Lando Norris on the phone", pos: "50% 25%",
      left: ["If you're in motorsport or automotive, or you know someone who is, write me. An email and a LinkedIn message land in the same place, and *I answer every single one*."],
      right: ["No pitch needed, no formalities... I just really like talking to people who live in this world ;)"],
      links: [["Email me", "mailto:fabianicolladoernesto@gmail.com?subject=Hello%20Ernesto"], ["LinkedIn", LI]] }]} />
  </Wing>
);

export default ContactPage;
