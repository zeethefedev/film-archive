import roll1 from "../../../public/filmrolls/roll1.png";
import roll2 from "../../../public/filmrolls/roll2.png";
import roll3 from "../../../public/filmrolls/roll3.png";
import roll4 from "../../../public/filmrolls/roll4.png";
import roll5 from "../../../public/filmrolls/roll5.png";
import roll6 from "../../../public/filmrolls/roll6.png";
import roll7 from "../../../public/filmrolls/roll7.png";

export const ICONS = [
  {
    name: "full-screen",
    path: "M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z",
  },
  {
    name: "full-screen-exit",
    path: "M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z",
  },
  {
    name: "back",
    path: "M13.939 4.939L6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z",
  },
];

export const RUNNING_TEXT = [
  {
    text: ["Film is not dead"],
    image: [{ src: roll1, alt: "film roll" }],
    left: "50%",
  },
  {
    text: ["Film", "is not dead"],
    image: [
      { src: roll2, alt: "film roll" },
      { src: roll3, alt: "film roll" },
    ],
    left: "-10%",
  },
  {
    text: ["Film is", "not dead"],
    image: [
      { src: roll4, alt: "film roll" },
      { src: roll5, alt: "film roll" },
    ],
    left: "-10%",
  },
  {
    text: ["Film", "is not", "dead"],
    image: [
      { src: roll6, alt: "film roll" },
      { src: roll7, alt: "film roll" },
      { src: roll1, alt: "film roll" },
    ],
    left: "-20%",
  },
];

export const RUNNING_TEXT_MB = [
  { type: "text", value: "Film is" },
  { type: "image", src: roll1, alt: "film roll" },
  { type: "image", src: roll2, alt: "film roll" },
  { type: "text", value: "not" },
  { type: "image", src: roll3, alt: "film roll" },
  { type: "text", value: "dead" },
  { type: "text", value: "Film" },
  { type: "image", src: roll4, alt: "film roll" },
  { type: "text", value: "is" },
  { type: "image", src: roll6, alt: "film roll" },
  { type: "image", src: roll7, alt: "film roll" },
  { type: "text", value: "not dead" },
];

export const FOOTER_LINKS = {
  frameWorks: {
    name: "Frameworks",
    links: [
      { name: "NextJS", href: "" },
      { name: "Framer Motion", href: "" },
      { name: "StoryBlok", href: "" },
    ],
  },
  otherWorks: {
    name: "Other works",
    links: [
      { name: "Xoi Com", href: "" },
      { name: "RTD", href: "" },
    ],
  },
  socials: {
    name: "Socials",
    links: [
      { name: "GitHub", href: "https://github.com/zeethefedev" },
      { name: "LinkedIn", href: "" },
    ],
  },
};

export const BREAKPOINT = {
  MOBILE: 575.98,
  SMALL: 767.98,
  MEDIUM: 991.98,
  LARGE: 1199.98,
};
