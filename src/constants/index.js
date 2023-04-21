import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    python,
    ae,
    pr,
    flask,
    elf,
    sqlite,
    raytheon,
    school,
    virtualassistant,
    clientwork,
    git,
    club,
    ecommerce,
    threejs,
    portfolio,
    vlang,
    ruby,
    c,
    cplusplus,
    csharp,
    jquery,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: python,
    },
    {
      title: "Web Developer",
      icon: html,
    },
    {
      title: "Video Editor",
      icon: ae,
    },
  ];

  const techimgoodwith = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Adobe Premiere",
      icon: pr,
    },
    {
      name: "Adobe After Effects",
      icon: ae,
    }
  ];
  const techiveused = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Sqlite",
      icon: sqlite,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },  
    {
      name: 'JQuery',
      icon: jquery,
    },
    {
      name: "Java",
      icon: java,
    },
  ];

  const techimlearning = [
    {
      name: 'Vlang',
      icon: vlang,
    },
    {
      name: 'Ruby',
      icon: ruby,
    },
    {
      name: 'C',
      icon: c,
    },
    {
      name: 'C++',
      icon: cplusplus,
    },
    {
      name: 'C#',
      icon: csharp,
    },
  ];
  
  
  const experiences = [
    {
      title: "A level Student",
      company_name: "My School",
      icon: school,
      iconBg: "#232631",
      date: "September 2021 - May 2023",
      points: [
        "Computer Science: \n Here I learned the fundamentals of everything to do with computer science.",
        "I learned about the basics of programming, and how to use python to create programs.",
        "I undertook my coursework project and decided to create a virtual assistant, that is built using machine learning.",
        "Maths and French: \n I am currently studying for my A levels in Maths and French.",
      ],
    },
    {
      title: "Running Computer Science Club",
      company_name: "My School",
      icon: club,
      iconBg: "#232631",
      date: "September 2022 - January 2023",
      points: [
        "I created a club where I would teach younger students about how to utilise certain bits of hardware and software, for example:",
        "Programming Drones using Python",
        "Creating a VR game using unity",
        "Hacking into windows laptops using the windows utilman hack",
        "Jamming the school wifi using airgeddon and a raspberry pi",
        "Using basic linux commands to access many different files with different levels of protection",
      ],
    },
    {
      title: "Freelance Work",
      company_name: "Freelance",
      icon: clientwork,
      iconBg: "#232631",
      date: "September 2019 - October 2022",
      points: [
        "Over the course of these several years I worked as a freelance developer, configuerer and video editor. \n I worked with multiple companies and individuals. \n Here are some of the projects I worked on:",
        "Programming and running a minecraft server that was used by 100+ people and generated over $1500 in revenue.",
        "Editing videos and montages for an esports organisation called Division6ix",
        "Editing videos and montages for an esports organisation called GenkeiEsports"
      ],
    },
    {
      title: "Work Experience at Raytheon",
      company_name: "Raytheon",
      icon: raytheon,
      iconBg: "#fff",
      date: "August 2022 - August 2022",
      points: [
        "I did a work of work experience for Raytheon where I worked with a team to do day-to-day tasks such as:",
        "Learning linux and how to use it by using a program called Bandit",
        "Created a plesk server from scratch and configured it to work correctly",
        "Learned how to work as a part of a team",
      ],
    },

  ];
  
  
  const projects = [
    {
      name: "Virtual Assistant",
      description:
        "A Python-based application that provides a conversational interface to perform various tasks. This project is built on the basis of machine learning.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: virtualassistant,
      source_code_link: "https://github.com/ItzSimplyJoe/Virtual-Assistant",
    },
    {
      name: "Elf Game",
      description:
        "You are in charge of a Christmas tree business, you have 12 elves that work for you cutting down trees and bringing them back for sale. You have the 25 days of advent to make the biggest profit.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: elf,
      source_code_link: "https://github.com/ItzSimplyJoe/Python-ElfGame",
    },
    {
      name: "Portfolio Website",
      description:
        "Portfolio Website is a simple, static website built using HTML, CSS, and JavaScript. This website serves as a showcase for my personal projects and experience.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        }
      ],
      image: portfolio,
      source_code_link: "https://github.com/ItzSimplyJoe/PortfolioWebsite",
    },
    {
      name: "Ecommerce Website",
      description:
        "A web application built using HTML, CSS, and JavaScript on the front-end and Flask on the back-end. The purpose of the application is to create an online store where users can browse, search, and purchase products.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
            name: "Flask",
            color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        }
      ],
      image: ecommerce,
      source_code_link: "https://github.com/ItzSimplyJoe/Shopwebsite",
    },
  ];

  export { services, techimgoodwith, techimlearning, techiveused, experiences, projects };