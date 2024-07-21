import {
  unt,
  dsd,
  dvm,
  tcc,
  js,
  logo,
  ca,
  re,
  next,
  tail,
  ts,
  benGears,
  benFlask,
  benCom,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import { FaHome, FaGithub, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "3",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "1",
    title: "Resume",
    url: "#resume",
  },
  // {
  //   id: "4",
  //   title: "Contact",
  //   url: "#contact",
  // },

  {
    id: "4",
    title: "Contact",
    url: "#contact",
    onlyMobile: true,
  },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  {
    logo: dsd,
    name: "Dallas Software Developers"
  },
  {
    logo: dvm,
    name: "DevMountain"
  },
  {
    logo: tcc,
    name: "Texas Coding Club"
  },
  {
    logo: unt,
    name: "UNT Department of Economics"
  }
  // dsd, dvm, tcc, unt, ];
];

export const brainwaveServices = [
  "Open to Collaboration",
  "Mentor and Apprenticeships",
  "Hackathons"
];

export const brainwaveServicesIcons = [
  figma,
  ca,
  discord,
  notion,
  slack,
];

export const roadmap = [
  {
    id: "0",
    title: "Gaining Access to Protected Marketing Accounts",
    text: "Customer seeking a technical solution in order to streamline Authentication and Admin Authorization Permissions",
    date: "July 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Increasing Lead Conversions",
    text: "Create a landing page with modern UI elements that drive customer engagements and generates more leads.",
    date: "February 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Creating a Community for Developers in the DFW area",
    text: "Texas Coding Club was established in order to create physical presense to engineers wanting to hone in on their skills. TCC hosts meetups, peer reviews and builds projects. ",
    date: "March 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Building With Modern Web Frameworks",
    text: "From making simple command-line functions to finding a way to host and deploy modern websites, Joe has come a long way finding deployment solutions for his projects. Joe maintains a blog using Next.js and Typescript in order to progress his modern technology skillset. ",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const collabContent = [
  {
    id: "0",
    title: "Modern JavaScript Frameworks",
    text: collabText,
  },
  {
    id: "1",
    title: "Cutting Edge UI interfaces",
  },
  {
    id: "2",
    title: "Design and Deployment Solutions",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Canva",
    icon: ca,
    width: 36,
    height: 28,
  }, 
   {
    id: "5",
    title: "JavaScript",
    icon: js,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "Next",
    icon: next,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "React",
    icon: re,
    width: 34,
    height: 34,
  },

  {
    id: "6",
    title: "TypeScript",
    icon: ts,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Tailwind",
    icon: tail,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "1",
    title: "Involved with Developer Community",
    text: "Active attendee at developer bi-monthly events netwokring and meeting other technologists in the DFW area.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benCom,
    light: true,
  },
  {
    id: "0",
    title: "Innovative Technologies",
    text: "I've dedicated over 2,000+ hours working with the technologies of modern web architecture and design.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benFlask,
  },
  {
    id: "2",
    title: "Able to Work Anywhere",
    text: "I'm flexible to work remote or in office to meet project needs.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benGears,
  },  
  {
    id: "4",
    title: "Project Management",
    text: "I have experience using various project management tools in order to optimize project metrics. ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benFlask,
  },
  {
    id: "3",
    title: "Fast Response",
    text: "I work quick to minimize the time needed for feature implementation or debugging.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benGears,
    light: true,
  },
  {
    id: "5",
    title: "Leadership and Organization",
    text: "Co-Founder of Texas Coding Club, a Dallas-based group for emerging programmers",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benCom,
  },

];
export const pricing = [
  {
    id: "0",
    title: "Collaboration",
    description: "Open to working on small projects with other aspiring developers. I'm looking to increase my contribution to open source projects",
    button: null,
    headline: 'collab',
    features: [
      "Open-Source Projects",
      "DFW Meetups",
      "Hackathons",
    ],
  },
  {
    id: "1",
    title: "Full or Part-Time Employment",
    description: "Let's get in touch today regarding employment opportunities. Onsite or remote location solutions. Flexible hours to meet your workforce requirements.",
    button: "email",
    headline: 'employ',
    features: [
      "Front-End",
      "Back-End",
      "Design",
      "Authentication & Authorization solutions",
    ],
  },
  {
    id: "2",
    title: "Consulting and Contract Work",
    description: "Have an idea for a website? Let me design and build it for you.",
    button: null,
    headline: 'contract',
    features: [
      "Landing Pages",
      "Portfolio Pages",
      "About Me Websites",
    ],
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },

  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];


export const socialMediaLinks = [
  {name: 'Home', href: 'https://joeoverflowcode.github.io', icon: FaHome},
  { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: FaLinkedinIn},
  { name: 'Github', href: 'https://github.com/joeoverflowcode/', icon: FaGithubAlt },
];