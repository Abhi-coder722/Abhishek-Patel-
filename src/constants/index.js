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
  nodejs,
  mongodb,
  tng,
  ku,
  sist,
  ratisbona,
  threejs,
  github,
  pandas,
  bootstrap,
  numpy,
  todolist,
  image_editor,
  simongame,
  feelgood,
  motiondetector,
  mysite
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "<About/>",
  },
  {
    id: "work",
    title: "<Education/>",
  },
  {
    id: "contact",
    title: "<Contact/>",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Quick Learner",
    icon: mobile,
  },
  {
    title: "Team Player",
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
      "Learning different modules such as Linar Algebra, Advanced programming, Analysis and Statistics.",
      "Participating in coding assignments and finding the most efficient code for the challenges.",
      "To enhance my communication skills, I have been attending German courses at the B1 level. ",
      "-'Ich werde nicht der Beste sein, Ich werde besser sein als morgen.'"
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
  {
    title: "Junior Software Developer | Consultant",
    company_name: "TNG Technology Consulting GmbH",
    icon: tng,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Started my industrial carrer as a Junior Software Developer at the TNG.",
      "Contributing to one of the biggest AI project related to the topic Generative AI.",
      "Collaborating with my team to build an AI assistant which minimizes the work load.",
      "I currently work here, also improving my professional networks."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Passionate About AI and Coding: I have a deep enthusiasm for AI and coding, constantly seeking to expand my knowledge and skills to stay at the forefront of innovation.",
    // name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Reliability and Dedication: I am committed to delivering high-quality work, meeting deadlines, and consistently exceeding expectations.",
    // name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
 "Friendly and Approachable: As a student, I strive to create a welcoming and supportive environment for my peers and teammates.",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    index:1,
    name: "Personal Portfolio",
    description:
      "Built a fully functional personal portfolio website from scratch while learning, utilizing resources like Stack Overflow to showcase my skills in ReactJS, Tailwind CSS, Three.js, EmailJS, and Framer Motion. ",
    tags: [
      {
        name: "reactjs",
        color: "tailwindcss",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: mysite,
    source_code_link: "https://github.com/Abhi-coder722/Abhishek-Patel-",
  },
    {
      index:2,
    name: "Motion Detector",
    description:
      "Application used to detect and respond to movement or motion in its surroundings, can be used for various purposes : security systems, automation, energy management, and interactive experiences by triggering alerts based on detected motion.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "bokeh",
        color: "green-text-gradient",
      },
      {
        name: "computervision",
        color: "pink-text-gradient",
      },
    ],
    image: motiondetector,
    source_code_link: "https://github.com/Abhi-coder722/Motion-detector-application",
  },
  {
    index:3,
    name: "Feel Good Android app",
    description:
      "Created a self-made, uplifting Android application that highlights my proficiency in Kivy language and Python programming. Implemented various impressive Python libraries to create an engaging and soul-enriching user experience.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "kvlang",
        color: "green-text-gradient",
      },
      {
        name: "oops",
        color: "pink-text-gradient",
      },
    ],
    image: feelgood,
    source_code_link: "https://github.com/Abhi-coder722/Feel-Good-App",
  },
  {
    index:4,
    name: "todolist",
    description:
      "Created a to-do list app using MongoDB, Node.js, and Express.js. It allows users to efficiently manage their tasks, offering features like task creation, updates, and deletion. With MongoDB for seamless data storage and retrieval, this app simplifies task management.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/Abhi-coder722/to-do-list-DB-v2",
  },
  {
    index:5,
    name: "Image-Editor",
    description:
      "Self-made image editor using HTML5, CSS, and jQuery. It offers essential editing features such as brightness, saturation, inversion, grayscale, and rotate/flip options. This user-friendly application allows users to effortlessly enhance and transform their images with a simple and intuitive interface.",
    tags: [
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: image_editor,
    source_code_link: "https://github.com/Abhi-coder722/Image-Editor",
  },
  {
    index:6,
    name: "Simon Game",
    description:
      "Experience the excitement of Simon pattern recognition game! Created using jQuery, HTML5, and CSS, this self-made game challenges your memory skills. Repeat the sequence of colors and watch as the difficulty increases. With engaging visuals and addictive gameplay, it's a thrilling experience for players of all ages.",
    tags: [
      {
        name: "vanillajs",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      }
    ],
    image: simongame,
    source_code_link: "https://github.com/Abhi-coder722/Simon-game",
  },
];

export { services, technologies, experiences, testimonials, projects };
