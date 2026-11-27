/* eslint-disable */
import { Wing } from "../components/scenes";
import { Countdown, Talk } from "../components/journeys";

/* Midnight in Madrid, 24 September 2027 */
const DEADLINE = Date.parse("2027-09-24T00:00:00+02:00");

const ContactPage = () => (
  <Wing>
    <Countdown hold to={DEADLINE} label={<>Days until <b>24 September 2027</b></>} text="On my 22nd birthday I said in public that I'd be working in Formula 1 before this date." />
    <Talk img="/contact_lando.jpg" alt="Lando Norris on the phone" pos="50% 25%" title="Let's talk"
      left={["If you're in motorsport or automotive, or you know someone who is, write me. An email and a LinkedIn message land in the same place, and *I answer every single one*."]}
      right={["No pitch needed, no formalities... I just really like talking to people who live in this world ;)"]}
      email="fabianicolladoernesto@gmail.com" subject="Hello Ernesto"
      linkedin="https://www.linkedin.com/in/ernestofabiani/" linkedinLabel="linkedin.com/in/ernestofabiani" />
  </Wing>
);

export default ContactPage;
