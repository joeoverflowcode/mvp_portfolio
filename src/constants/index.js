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

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "1",
    title: "Involvement",
    url: "#involvement",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
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
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
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
    title: "Forefront of Technology",
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
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
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
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
