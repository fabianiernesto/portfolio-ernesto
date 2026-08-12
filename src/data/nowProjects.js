/* Shared data for the BUILDING NOW wing: the grid cards and their pages. */
export const PROJECTS = [
  {
    id: "writing",
    index: "01",
    status: "LIVE, EVERY WEEK",
    live: true,
    title: "THE BUSINESS OF RACING",
    teaser: "Two weekly series on LinkedIn.",
    img: "/now_writing.jpg",
    link: { label: "Read it on LinkedIn", href: "https://www.linkedin.com/in/ernestofabiani/" },
  },
  {
    id: "garage",
    index: "02",
    status: "LIVE, YOU'RE IN IT",
    live: true,
    title: "THIS GARAGE",
    teaser: "Coded from scratch, no template.",
    img: "/now_garage.jpg",
    link: null,
  },
  {
    id: "f1",
    index: "03",
    status: "IN THE WORKSHOP",
    live: false,
    title: "A RACE, WORTH WATCHING",
    teaser: "Making a Grand Prix hold your attention.",
    img: "/now_f1.jpg",
    link: null,
  },
];

export const getProject = (id) => PROJECTS.find((p) => p.id === id);
