export const personalInfo = {
  name: "Anusha T R",
  title: "AI | ML | Software Engineer",
  subtitle: "Fresher",
  tagline: "Building intelligent, scalable systems with clarity, discipline, and purpose.",
  email: "anushatr1111@gmail.com",
  github: "https://github.com/anushatr1111",
  linkedin: "https://linkedin.com/in/anushatr",
  resumeUrl: "/resume.pdf",
};

export const aboutMe = {
  summary: `I'm a Computer Science Engineering graduate with a passion for creating intelligent systems that solve real-world problems. My expertise spans AI, Machine Learning, Generative AI, Cloud Computing, and Full-Stack Development—backed by hands-on project experience and industry internships.

I approach every challenge with discipline, consistency, and a growth mindset. Whether it's building fraud detection systems using NLP, developing cross-platform mobile applications, or deploying ML models on the cloud—I bring clarity and purpose to my work.

Currently seeking full-time opportunities where I can contribute my technical skills while continuing to grow as an engineer. Ready to make an impact from day one.`,
  highlights: [
    "Job-Ready with Strong Project Experience",
    "150+ DSA Problems Solved on LeetCode",
    "AWS Certified Cloud Practitioner",
    "Google Cloud & Generative AI Certified",
  ],
};

export const skills = {
  aiml: {
    title: "AI / ML & Generative AI",
    icon: "Brain",
    color: "primary",
    items: [
      "Machine Learning",
      "Deep Learning", 
      "NLP",
      "CNNs",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "AI Agents",
      "Responsible AI",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Vertex AI",
    ],
  },
  cloud: {
    title: "Cloud, MLOps & DevOps",
    icon: "Cloud",
    color: "lavender",
    items: [
      "Google Cloud Platform",
      "AWS",
      "Docker",
      "Kubernetes (GKE)",
      "Cloud Build",
      "CI/CD Pipelines",
      "Artifact Registry",
      "Model Deployment",
    ],
  },
  data: {
    title: "Data & Analytics",
    icon: "BarChart3",
    color: "sage",
    items: [
      "SQL",
      "NoSQL",
      "BigQuery",
      "Looker Studio",
      "BI Dashboards",
      "Data Visualization",
      "Feature Engineering",
    ],
  },
  software: {
    title: "Software Engineering",
    icon: "Code2",
    color: "accent",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "System Design",
      "REST APIs",
      "Microservices",
      "Git & GitHub",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
    ],
  },
  webdev: {
    title: "Web & App Development",
    icon: "Globe",
    color: "rose",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Django",
      "Flutter",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
};

export const experiences = [
  {
    id: 1,
    role: "Data Analytics Intern",
    company: "National Institute of Technology Trichy",
    period: "June 2025",
    description: "Built an AI-powered fraud detection system leveraging Natural Language Processing for intelligent threat analysis and prevention.",
    achievements: [
      "Developed machine learning pipeline for fraud detection using NLP and text classification",
      "Implemented Bag of Words model with advanced feature extraction for message analysis",
      "Created threat detection algorithms for real-time security monitoring",
    ],
    technologies: ["Python", "NLP", "Scikit-learn", "Data Analysis", "Machine Learning"],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Astro Web Solution",
    period: "December 2024",
    description: "Engineered a comprehensive Hospital Management System with full-stack capabilities, improving healthcare administrative workflows.",
    achievements: [
      "Built end-to-end patient portal with secure data management",
      "Designed responsive admin dashboard for hospital operations",
      "Developed appointment scheduling and automated billing modules",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Database Design", "REST APIs"],
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "PriGa Solutions",
    period: "June 2024",
    description: "Architected and deployed a complete travel booking platform using the MERN stack with integrated payment processing.",
    achievements: [
      "Built scalable booking management system handling multiple concurrent users",
      "Integrated secure payment gateway with transaction management",
      "Implemented user authentication and profile management system",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Payment Integration"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Aura Safe Mobile Application",
    description: "Cross-platform safety application featuring real-time GPS tracking, emergency alerts, and AI-powered threat detection. Built with Flutter for seamless iOS and Android deployment.",
    impact: "Enables users to share live location with trusted contacts and trigger emergency responses instantly.",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "AI Integration"],
    github: "https://github.com/anushatr1111/aura-safe-app.git",
    image: "aura-safe",
  },
  {
    id: 2,
    title: "Plant Disease Detection using AI",
    description: "Deep learning model utilizing Convolutional Neural Networks for automated plant disease identification, helping farmers make data-driven decisions for crop health management.",
    impact: "Achieves high accuracy in identifying multiple plant diseases from leaf images, supporting agricultural automation.",
    technologies: ["Python", "PyTorch", "CNN", "Computer Vision", "Flask", "Deep Learning"],
    github: "https://github.com/anushatr1111/Plant-detection-diease.git",
    image: "plant-disease",
  },
  {
    id: 3,
    title: "Weather Forecasting Web Application",
    description: "Responsive weather application with real-time data visualization, providing accurate forecasts and interactive weather maps powered by external APIs.",
    impact: "Delivers instant weather updates with intuitive UI/UX for planning daily activities.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST API", "Data Visualization"],
    github: "https://github.com/anushatr1111/weather-app.git",
    image: "weather-app",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2025",
    category: "Cloud",
    icon: "Cloud",
  },
  {
    id: 2,
    title: "Network Essentials",
    issuer: "Infosys Springboard",
    date: "July 2024",
    category: "Networking",
    icon: "Network",
  },
  {
    id: 3,
    title: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "June 2024",
    category: "Networking",
    icon: "Router",
  },
];

export const googleSkills = [
  {
    id: 1,
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    category: "Generative AI",
  },
  {
    id: 2,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    category: "Generative AI",
  },
  {
    id: 3,
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    category: "Generative AI",
  },
  {
    id: 4,
    title: "Responsible AI",
    issuer: "Google Cloud",
    category: "Generative AI",
  },
  {
    id: 5,
    title: "Machine Learning Engineer Study Guide",
    issuer: "Google Cloud",
    category: "ML Engineering",
  },
  {
    id: 6,
    title: "Vertex AI & AI Agents",
    issuer: "Google Cloud",
    category: "AI Development",
  },
];

export const achievements = [
  {
    id: 1,
    title: "150+ DSA Problems Solved",
    description: "Consistent problem-solving practice on LeetCode",
    icon: "Trophy",
  },
  {
    id: 2,
    title: "Smart India Hackathon 2025",
    description: "Selected participant in national-level hackathon",
    icon: "Award",
  },
  {
    id: 3,
    title: "TCS CodeVita Season 11",
    description: "Completed competitive coding competition",
    icon: "Code",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    description: "Active contributions to GitHub projects",
    icon: "GitBranch",
  },
];

export const futureWorks = [
  {
    id: 1,
    title: "LLM-Powered Code Assistant",
    status: "In Progress",
    description: "Building an intelligent coding assistant using Large Language Models for code generation and debugging.",
  },
  {
    id: 2,
    title: "System Design Learning Path",
    status: "Researching",
    description: "Deep diving into distributed systems, scalability patterns, and cloud architecture.",
  },
  {
    id: 3,
    title: "RAG-based Document Q&A",
    status: "Planned",
    description: "Retrieval-Augmented Generation system for intelligent document analysis and querying.",
  },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science and Engineering",
  institution: "Kamaraj College of Engineering and Technology, Virudhunagar",
  period: "2022–2026",
  cgpa: "8.00/10.00",
  highSchool: {
    name: "P.S. Chidambara Nadar English Senior School, Madurai",
    period: "2021–2022",
    percentage: "78%",
  },
};

export const blogPosts = [
  {
    id: 1,
    title: "The Art of Consistency in Tech",
    excerpt: "How discipline and daily practice transformed my approach to learning and problem-solving in AI/ML.",
    date: "Coming Soon",
    category: "Reflections",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Getting Started with Generative AI",
    excerpt: "A beginner-friendly guide to understanding LLMs, prompt engineering, and building your first AI application.",
    date: "Coming Soon",
    category: "AI/ML",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "From DSA to Real-World Projects",
    excerpt: "Bridging the gap between competitive coding and building production-ready applications.",
    date: "Coming Soon",
    category: "Career",
    readTime: "6 min read",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Credentials" },
  { href: "#blog", label: "Journal" },
  { href: "#contact", label: "Contact" },
];