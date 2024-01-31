import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Java,
    SQL
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Journey",
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
      title: "Backend Developer",
      icon: backend,
    },
   
  ];
  
  const technologies = [
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
      name: "Java",
      icon: Java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "SQL",
      icon: SQL,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "HMP HIGH SCHOOL",
      company_name: "Student",
      icon: starbucks,
      iconBg: "#383E56",
      date: "JUNE 2006 - MAY 2016",
      points: [
       "During my school years, I consistently demonstrated academic excellence, earning the reputation of being a bright and dedicated student.",
       "Being a member of my school's basketball team was a memorable experience. Together, we reached the zonals level, a remarkable achievement for a team from a small town.",
       "Actively participating in a wide range of school activities allowed me to explore my interests and develop valuable skills outside the classroom."
      ],
    },
    {
      title: "Hansraj Morarji Junior College",
      company_name: "Student",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2016 - April 2018",
      points: [
        "After achieving an impressive percentage in my 10th board exams, I was resolute in pursuing a career in the field of science with the ultimate goal of becoming an engineer.",
        "To kickstart my JEE preparation, I made the discerning choice of enrolling at Rao Coaching Center, a renowned institution known for its excellence in guiding students toward success."
      ],
    },
    {
      title: "Rajiv Gandhi Institute Of Technology",
      company_name: "Student",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2018 - May 2023",
      points: [
        "As I stepped into the world of engineering, I encountered some initial challenges in keeping up with the coursework, but after a semester of perseverance, I managed to find my footing and excel in my studies.",
        "Regrettably, my second year coincided with the outbreak of the Covid-19 pandemic, which necessitated a shift to online learning and disrupted the traditional learning environment.",
        "However, I utilized this time to my advantage and dedicated myself to acquiring a diverse set of skills. I enrolled in various courses and bootcamps, determined to attain the knowledge and expertise needed to thrive in my chosen field."
      ],
    },
    {
      title: "Job",
      company_name: "Techsa Service pvt ltd",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "As a recent graduate, I enthusiastically embarked on my journey to contribute to the tech industry and showcase my skills to the world. After a determined search, I am thrilled to share that I have successfully secured a position as an Associate Engineer.",
"This opportunity represents a significant milestone in my career, and I am eager to leverage my education, passion for technology, and dedication to make meaningful contributions to the team and the projects we undertake.",
"I am excited about the challenges and learning opportunities that lie ahead and am committed to continuously growing and developing as a professional in the field of engineering."
      ],
   },
  ];
  
  
  const projects = [
    {
      name: "Order Delivery",
      description:
        "Web-based platform that allows my client to assign orders to his agents.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
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
      name: "Twitter Clone",
      description:
        "Welcome to our dynamic social media platform, where you can seamlessly share photos, connect with like-minded individuals, and foster new friendships through engaging interactions.",
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
      source_code_link: "https://github.com/MihirBari/Social-Media",
    },
    {
      name: "E-commerce Website",
      description:
        "Welcome to our versatile multi-vendor platform, where you can both sell and purchase a wide range of products.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongoDb",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
       {
      name: "Techsa Website",
      description:
        "Static website for my current company.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "Techsa.net",
    }
  ];

 

  
  export { services, technologies, experiences, projects };
