// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  mongodb,
  // git,
  // figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  // youtube,
  linkedin,
  // twitter,
  github,
  githubs,
  sql,
  edu,
  kali,
  amazon,
  whatsapp,
  instagram,
  facebook,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "Education",
    title: "Education",
    link: null,
  },
   {
    id: "My",
    title: "My Skills",
    link: null,
  },
  {
    id: "Projects",
    title: "Projects",
    link: null,
  },
  {
    id: "Contact",
    title: "Contact",
    link: "",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "python Developer",
    icon: mobile,
  },
  {
    title: "web Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
   {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Amazon",
    icon: amazon,
  },
  {
    name: "kali",
    icon: kali,
  },
  {
    name: "sql",
    icon: sql,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "github",
    icon: githubs,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
 
  
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Master of Computer Applications",
    company_name: "East West Institute of Technology, Bengaluru",
    icon: edu,
    iconBg: "#383E56",
    date: "Feb 2024 - oct 2025",
    points: [
      "I am currently pursuing a Master of Computer Applications (MCA) at East West Institute of Technology, Bengaluru.",
      "1st sem SGPA: 8 / 2nd sem SGPA: 7.5 / 3rd sem SGPA: 9",
      "My academic journey here is equipping me with a strong foundation in computer science and application development.",
      "The institute's robust curriculum and experienced faculty are helping me enhance my technical skills, problem-solving abilities, and industry readiness.",
      "I'm also actively engaging in projects and collaborative learning opportunities to gain practical exposure in this dynamic field.",
    ],
  },
  {
    title: "Bachelor of Science - Computer Science",
    company_name: "Government Science College, Hassan",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - sep 2023",
    points: [
      "I successfully completed a Bachelor of Science (BSc) in Computer Science in 2023, achieving a CGPA of 6.7. ",
      "Through this program, I gained a solid foundation in computer science principles, programming, and problem-solving.",
      "It allowed me to explore various areas of technology, preparing me to tackle real-world challenges.",
      "The experience has strengthened my passion for the field and motivated me to continue expanding my knowledge and skills.",
    ],
  },
  {
    title: "PUC-PCMC",
    company_name: "Student's PU College, Hassan",
    icon: edu,
    iconBg: "#383E56",
    date: "Jun 2019 - mar 2020",
    points: [
      "I completed my Pre-University Course (PUC) with a specialization in PCMC (Physics, Chemistry, Mathematics, and Computer Science), achieving a percentage of 67.78. ",
      " During this phase, I built a strong academic foundation in science and mathematics, while also developing analytical and problem-solving skills.",
      "This curriculum provided me with valuable insights and prepared me for further studies in computer science and related fields.",
    ],
  },
  {
    title: "SSLC",
    company_name: "Sri Adichunchanagiri English Medium School, Hassan",
    icon: edu,
    iconBg: "#E6DEDD",
    date: "Jun 2017 - mar 2018",
    points: [
      "I completed my Secondary School Leaving Certificate (SSLC) with a percentage of 69.88. ",
      "This milestone provided me with a strong academic foundation across diverse subjects and helped me develop essential learning habits.",
      "It marked the beginning of my journey toward further studies and personal growth, laying the groundwork for my academic and professional aspirations.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Pranuth H M",
    designation: "DevOps Engineer",
    company: ".",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Suhas Kawshik",
    designation: "Java Developer",
    company: ".",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized his website, his traffic increased by 50%. We can't thank them enough!",
    name: "Nishanth P",
    designation: "Marketing Manager",
    company: ".",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  {
    name: "whatsapp",
    icon: whatsapp,
    link: "whatsapp://send?phone=916366598233&text=Hello%20Tharun",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/mr___suryx_____unofficixl",
  },
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/tarunkumar.tarunkumar.50115161?mibexti=ZbWKwdL",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/tharun-kumar-r-g-7661192b9",
  },
  {
    name: "Github",
    icon: github,
    link: "https://github.com/Tharunkumarsurya",
  },
] as const;
