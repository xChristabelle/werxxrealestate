import about from "@/assets/about-1.jpg";
import feature from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "",
  headline: "We help Realtors and Brokers Visualize Data and ",
  headlineHighlight: "Drive Performance.",
  description:
    "Track and measure all aspects of your business to not only stay up to date with your sales, but also motivate yourself and the agents around you.",
  button: true,
  buttonLabel: "Get Started",
  imgStart: false,
  img: about,
  alt: "",
  dark: false,
  primary: false,
  darkText: true,
  accordion: false,
  tabs: false,
};

export const homeObjTwo = {
  id: "features",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "",
  headline: "Clean, Simple, and ",
  headlineHighlight: "Easy to Use.",
  description: "",
  button: false,
  buttonLabel: "",
  imgStart: true,
  img: feature,
  alt: "",
  dark: true,
  primary: true,
  darkText: false,
  accordion: true,
  tabs: false,
};

export const homeObjThree = {
  id: "features2",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "",
  headline: "Hold Yourself and Your Team ",
  headlineHighlight: "Accountable.",
  description:
    "It is the thing we all hate but all need. It has never been so important to hold all agents accountable to their goals. With Hubze the numbers never lie.",
  button: true,
  buttonLabel: "Get Started",
  imgStart: false,
  img: feature2,
  alt: "",
  dark: false,
  primary: false,
  darkText: true,
  accordion: false,
  tabs: true,
};
