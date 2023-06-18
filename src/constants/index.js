import {
  mobile,
  backend,
  creator,
  web,
  python,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  ku,
  sist,
  tesla,
  shopify,
  ratisbona,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  pandas,
  bootstrap,
  numpy
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Quick Learner",
    icon: mobile,
  },
  {
    title: "Future Full Stack Developer",
    icon: backend,
  },
  {
    title: "Reliable and Friendly",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "github",
    icon: github,
  }
  ,
  {
    name: "numpy",
    icon: numpy,
  },
  {
    name: "pandas",
    icon: pandas,
  }
];

const experiences = [
  {
    title: "Bachelor's in AI",
    company_name: "Sathyabama University, Chennai",
    icon: sist,
    iconBg: "#E6DEDD",
    date: "July 2021 -July 2022",
    points: [
      "Dived deep into Python programming language with modules such as Tkinter and regex",
      "Learnt techical modules such as Physics for Information Science, Engineering mathematics and Graphics",
      "Came accross the Data Structures and Algorithms and gaining knowledge with problem-solving skills necessary for efficient and optimized development.",
      "Conducting code bootcamps and receiving positive feedbacks from learners.",
    ],
  },
  {
    title: "ODOP Coding Contest",
    company_name: "Sathyabama University",
    icon: sist,
    iconBg: "#E6DEDD",
    date: "March 2023",
    points: [
      "Completed the coding tasks efficiently for 100 consecutive days to qualify for the final round.",
      "Faced stiff competition, where I had to complete 3 coding tasks within an hour.",
      "Utilized my strong time management and coding skills to secure the 2nd prize in the competition."
    ],
  },
  {
    title: "BSc. Data Science",
    company_name: "Catholic University, Ingolstadt",
    icon: ku,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Hackaburg Hackathon 2023",
    company_name: "Ratisbona Coding e.v.",
    icon: ratisbona,
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "Got the 1st prize for the Hackaburg Goes Green held in Regensburg for the 'Think Global Hack Local' track.",
      "Contributing to waste reduction and community connection by utilizing ShareRepair.",
      "Collaborated with my team to build a platform that facilitates repairing items instead of discarding them.",
      "Leveraging my teamwork skills, I made contributions to the application's design using CSS and framer-motion."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
