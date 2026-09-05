import {
  backend,
  web,
  creator,
  mobile,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
  Java,
  SQL,
  techsa,
  techsaLogo,
  crm,
  mcp,
  mcpIcon,
  lama,
  docker,
  typescript,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech Stack",
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
    title: "Model Context Protocol & AI Agents",
    subtitle: "MCP servers, autonomous tool registries, LLM integration & Ollama",
    icon: creator,
    badge: "AI Specialty",
  },
  {
    title: "Full Stack Web Developer",
    subtitle: "Modern, responsive frontend & robust backend architectures",
    icon: web,
    badge: "Full Stack",
  },
  {
    title: "Enterprise Systems & Automations",
    subtitle: "SolarWinds SWQL, HCL BigFix, Silverfort & secure Node.js APIs",
    icon: backend,
    badge: "Enterprise",
  },
  {
    title: "Vector Search & Intelligent RAG",
    subtitle: "ChromaDB, Qdrant embeddings, semantic search & automated SOP retrieval",
    icon: mobile,
    badge: "AI & RAG",
  },
];

const technologies = [
  {
    name: "Model Context Protocol (MCP)",
    icon: mcpIcon,
    category: "AI & Tools",
    level: "Flagship",
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "Frontend",
    level: "Expert",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "Languages",
    level: "Proficient",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Languages",
    level: "Expert",
  },
  {
    name: "SQL",
    icon: SQL,
    category: "Database",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Database",
    level: "Proficient",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend",
    level: "Expert",
  },
  {
    name: "Docker",
    icon: docker,
    category: "AI & Tools",
    level: "Proficient",
  },
  {
    name: "Three JS",
    icon: threejs,
    category: "Frontend",
    level: "Proficient",
  },
  {
    name: "Git",
    icon: git,
    category: "AI & Tools",
    level: "Advanced",
  },
  {
    name: "LLM / Ollama",
    icon: lama,
    category: "AI & Tools",
    level: "Advanced",
  },
  {
    name: "Java",
    icon: Java,
    category: "Languages",
    level: "Advanced",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    category: "Frontend",
    level: "Proficient",
  },
  {
    name: "HTML 5",
    icon: html,
    category: "Frontend",
    level: "Expert",
  },
  {
    name: "CSS 3",
    icon: css,
    category: "Frontend",
    level: "Expert",
  },
];
  
const experiences = [
  {
    title: "Associate Engineer",
    company_name: "Techsa Services Pvt Ltd",
    icon: techsaLogo,
    iconBg: "#1f1d36",
    date: "Oct 2023 - Present",
    role_type: "Full-Time",
    points: [
      "Engineered 'Son of Anton', an enterprise AI operations platform built on Anthropic's Model Context Protocol (MCP) using @modelcontextprotocol/sdk to connect LLMs with infrastructure systems.",
      "Integrated 50+ enterprise IT tools across SolarWinds Orion (SWQL queries, network alerts, interface telemetry), HCL BigFix (Session Relevance, patch compliance), and Silverfort identity security.",
      "Implemented Retrieval-Augmented Generation (RAG) using ChromaDB and Qdrant vector databases for instant SOP retrieval and automated IT incident remediation.",
      "Developed full-stack in-house CRM system using ReactJS, NodeJS, ExpressJS, and SQL with RBAC authentication, leave management, customer lifecycle tracking, automated birthday email notifications (DOB records), pixel open tracking (IP & browser analytics), and sales task management.",
      "Built and deployed high-performance modern web applications utilizing React, Node.js, Express, Tailwind CSS, and SQL databases.",
    ],
  },
  {
    title: "Bachelor of Engineering (B.E.)",
    company_name: "Rajiv Gandhi Institute of Technology (RGIT)",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2018 - May 2023",
    role_type: "Education",
    points: [
      "Graduated with comprehensive coursework in Computer Engineering, Data Structures, Algorithms, Database Management Systems, and Computer Networks.",
      "Spearheaded hands-on projects spanning full-stack development, distributed computing, and RESTful API design.",
      "Cultivated deep expertise in modern web engineering, JavaScript/TypeScript architectures, and backend system design.",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    company_name: "Hansraj Morarji Junior College",
    icon: tesla,
    iconBg: "#1d1836",
    date: "June 2016 - April 2018",
    role_type: "Science",
    points: [
      "Completed rigorous science curriculum with focus on Mathematics, Physics, and Chemistry.",
      "Enrolled in competitive engineering entrance preparation at Rao Coaching Center, cultivating analytical problem-solving skills.",
    ],
  },
  {
    title: "Secondary School Certificate (SSC)",
    company_name: "HMP High School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2006 - May 2016",
    role_type: "Foundations",
    points: [
      "Demonstrated academic excellence throughout secondary education with top honors.",
      "Represented school in the basketball team reaching the zonals championship level.",
      "Developed foundational interest in technology, science, and computer logic.",
    ],
  },
];

const projects = [
  {
    id: "mcp-ai",
    name: "Son of Anton – Enterprise MCP AI Platform",
    subtitle: "Model Context Protocol (MCP) AI Ops & Autonomous IT Infrastructure Platform",
    featured: true,
    category: "Full Stack",
    badge: "⭐ Flagship AI Platform",
    description:
      "Enterprise-grade AI operations platform built on Anthropic's Model Context Protocol (@modelcontextprotocol/sdk). Connects local & cloud LLMs (Ollama, Claude, OpenAI) to live IT infrastructure across SolarWinds, HCL BigFix, and Silverfort with 50+ autonomous inspection tools and ChromaDB vector RAG.",
    longDescription:
      "Son of Anton is a production-ready AI operations assistant built around the Model Context Protocol (MCP). It empowers IT engineers and NOC teams to query, diagnose, and remediate enterprise infrastructure using natural language. The architecture features an MCP Server with Stdio and Express transports, an intelligent tool registry with 50+ specialized tools, automated SWQL/BigFix Relevance generation, and ChromaDB vector search over IT Standard Operating Procedures (SOPs).",
    tags: [
      { name: "Model Context Protocol (MCP)", color: "blue-text-gradient" },
      { name: "LLM / Ollama", color: "pink-text-gradient" },
      { name: "SolarWinds SWQL", color: "green-text-gradient" },
      { name: "HCL BigFix", color: "blue-text-gradient" },
      { name: "Silverfort MFA", color: "orange-text-gradient" },
      { name: "ChromaDB RAG", color: "pink-text-gradient" },
      { name: "React + Vite", color: "green-text-gradient" },
      { name: "Node.js / Express", color: "blue-text-gradient" },
    ],
    image: mcp,
    source_code_link: "",
    is_enterprise: true,
    highlights: [
      "Official @modelcontextprotocol/sdk implementation with Stdio and REST transports",
      "50+ production-grade tools for CPU/Memory nodes, alerts, VM health, and NCM backups",
      "Dynamic SWQL & BigFix Session Relevance query synthesis from natural language",
      "Vector RAG with ChromaDB & Qdrant for automated IT SOP and playbook retrieval",
      "Enterprise security audit tool with Silverfort MFA and identity risk analysis",
      "Modern React + Vite frontend with streaming AI chat, model switching, and RBAC",
    ],
    metrics: [
      { label: "MCP Tools", value: "50+" },
      { label: "Connected Platforms", value: "SolarWinds, BigFix, Silverfort" },
      { label: "Protocol", value: "MCP v1.x (Anthropic standard)" },
      { label: "RAG Engine", value: "ChromaDB + Qdrant" },
    ],
  },
  {
    id: "crm-system",
    name: "Customer Relationship Management (CRM) Portal",
    subtitle: "In-House Sales, Email Tracking & Workforce Operations Platform",
    featured: true,
    category: "Full Stack",
    badge: "⭐ Enterprise CRM System",
    description:
      "Full-stack in-house CRM system developed using ReactJS, NodeJS, ExpressJS, and SQL for the enterprise sales team. Implemented role-based authentication, leave management, and customer lifecycle tracking to streamline operations. Features automated birthday email notifications, an email tracking system using tracking pixels to monitor email opens, browser details, and IP activity insights, plus a sales task management module.",
    longDescription:
      "Customer Relationship Management (CRM) Portal: Developed a full-stack in-house CRM system using ReactJS, NodeJS, ExpressJS, and SQL for the sales team. Implemented role-based authentication, leave management, and customer lifecycle tracking to streamline operations. Built automated birthday email notifications for customers and employees using stored DOB records. Developed an email tracking system using tracking pixels to monitor email opens, browser details, and IP-based activity insights. Designed a task management module for assigning, monitoring, and tracking sales team tasks.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "ExpressJS", color: "pink-text-gradient" },
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Email Tracking Pixels", color: "green-text-gradient" },
      { name: "Automated Email Triggers", color: "pink-text-gradient" },
      { name: "RBAC Security", color: "orange-text-gradient" },
      { name: "Task Management", color: "blue-text-gradient" },
    ],
    image: crm,
    source_code_link: "https://github.com/MihirBari/CRM",
    is_enterprise: true,
    highlights: [
      "Full-stack in-house CRM built using ReactJS, NodeJS, ExpressJS, and SQL for sales operations",
      "Role-based authentication (RBAC), leave management, and customer lifecycle tracking",
      "Automated birthday email notifications for customers and employees using stored DOB records",
      "Email tracking system using tracking pixels to monitor email opens, browser details, and IP insights",
      "Task management module for assigning, monitoring, and tracking sales team deliverables",
    ],
    metrics: [
      { label: "Stack", value: "React + Node + Express + SQL" },
      { label: "Authentication", value: "Role-Based (RBAC)" },
      { label: "Email Intelligence", value: "Pixel Open Tracking" },
      { label: "Automations", value: "Automated DOB Triggers" },
    ],
  },
  {
    id: "order-delivery",
    name: "Dispatch & Order Delivery Platform",
    subtitle: "Client-Agent Logistics & Task Assignment System",
    featured: false,
    category: "Full Stack",
    badge: "Logistics",
    description:
      "Web-based logistics and order management platform that enables clients and dispatchers to assign delivery orders to field agents with status tracking and SQL data persistence.",
    longDescription:
      "Logistics coordination portal built to streamline last-mile deliveries. Enables order creation, driver dispatch, route assignment, and real-time status updates with responsive client dashboards.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Express", color: "blue-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/MihirBari",
    is_enterprise: false,
    highlights: [
      "Real-time dispatch board for client-to-agent order assignment",
      "Automated order status progression (Pending, In-Transit, Delivered)",
      "Tailwind-crafted responsive UI with quick status filters",
    ],
    metrics: [
      { label: "Stack", value: "React + Tailwind + SQL" },
      { label: "Domain", value: "Logistics / Dispatch" },
    ],
  },
  {
    id: "social-media",
    name: "SocialConnect (Twitter Clone)",
    subtitle: "Real-Time Social Network Platform",
    featured: false,
    category: "Full Stack",
    badge: "Web App",
    description:
      "Modern dynamic social media platform allowing users to share visual content, interact with feeds in real time, build networks, and engage through comments and reactions.",
    longDescription:
      "Interactive social application mimicking core Twitter/X workflows with modern user experience, custom UI themes, responsive photo galleries, and real-time interaction states.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "SCSS / Modern UI", color: "pink-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/MihirBari/Social-Media",
    is_enterprise: false,
    highlights: [
      "Custom feed rendering with infinite-style browsing and media embeds",
      "User profile customization, follower relationships, and engagement tracking",
      "Modular SCSS styling with mobile-first responsive layout",
    ],
    metrics: [
      { label: "Frontend", value: "React + SCSS" },
      { label: "Code", value: "Public GitHub" },
    ],
  },
  {
    id: "techsa-website",
    name: "Techsa Corporate Portal",
    subtitle: "Corporate Presence & Services Showcase",
    featured: false,
    category: "Frontend",
    badge: "Corporate",
    description:
      "Modern corporate website built for Techsa Services, presenting enterprise IT solutions, service catalogs, company milestones, and client contact funnels.",
    longDescription:
      "High-performance, sleek corporate web presence optimized for fast loading, clean typography, responsive layout across mobile and desktop, and brand consistency.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Responsive Design", color: "pink-text-gradient" },
    ],
    image: techsa,
    source_code_link: "https://Techsa.net",
    is_enterprise: true,
    highlights: [
      "Interactive service catalogs showcasing IT infrastructure & monitoring solutions",
      "Clean corporate branding and optimized asset loading",
      "Mobile-responsive navigation and accessible layout",
    ],
    metrics: [
      { label: "Role", value: "Frontend Lead" },
      { label: "Status", value: "Production Live" },
    ],
  },
];

export { services, technologies, experiences, projects };
