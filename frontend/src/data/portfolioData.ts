// ============================================================
// PORTFOLIO DATA CONFIG
// Edit this file to update all your portfolio content.
// Each section's data is clearly separated below.
// ============================================================

export const profileData = {
  name: "Salman Ajmal",
  subtitle: "CS @ LUMS • Full-Stack Developer • AI Researcher",
  // Replace with your avatar image path in /public
  avatarUrl: "/cu.png",
  // Status badge on the profile card
  statusBadge: "Open to Opportunities",
};

export const highlightCard = {
  // Change this to whatever status you want to show
  // Options: "project", "opportunity", "research", "collaboration"
  type: "opportunity" as const,
  title: "Available for Summer 2026",
  subtitle: "Open to internships, research positions, and collaborations",
  badge: "New",
};

export const bioData = {
  fullName: "Salman Ajmal",
  introduction: "Computer Science student passionate about building impactful software.",
  mission: "I believe in using technology to solve real problems — combining thoughtful design with robust engineering to create products that genuinely help people.",
  about: "I'm a developer with a deep appreciation for thoughtful design and clean, expressive web experiences. My work centers on full-stack development, AI/ML research, and creating scalable systems. Currently pursuing my BS in Computer Science at LUMS with a focus on deep learning and data science.",
  interests: ["Full-Stack Development", "Machine Learning", "Computer Vision", "System Design", "UI/UX Design"],
  availability: "Open to summer 2026 internships and research opportunities",
  location: "Lahore, Pakistan",
  email: "salmanatwork1@gmail.com",
  links: {
    github: "https://github.com/salman192003",
    linkedin: "https://linkedin.com/in/salman-ajmal",
  },
};

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript / TypeScript", level: 88 },
        { name: "Python", level: 85 },
        { name: "C#", level: 80 },
        { name: "SQL", level: 82 },
        { name: "C / C++", level: 75 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      name: "Frameworks & Libraries",
      icon: "🧩",
      skills: [
        { name: "React", level: 88 },
        { name: "Spring Boot", level: 85 },
        { name: "Node.js / Express", level: 85 },
        { name: "ASP.NET Core", level: 80 },
        { name: "Django", level: 75 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Framer Motion", level: 78 },
      ],
    },
    {
      name: "Tools & Platforms",
      icon: "🔧",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Docker", level: 78 },
        { name: "Figma", level: 80 },
        { name: "SonarQube", level: 72 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "Agile / Scrum", level: 82 },
      ],
    },
    {
      name: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL Server", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "Redis", level: 72 },
      ],
    },
    {
      name: "AI / ML / Research",
      icon: "🧠",
      skills: [
        { name: "PyTorch", level: 80 },
        { name: "TensorFlow", level: 72 },
        { name: "scikit-learn", level: 78 },
        { name: "Computer Vision", level: 80 },
        { name: "NLP Basics", level: 70 },
      ],
    },
  ],
};

export const educationData = [
  {
    institution: "Lahore University of Management Sciences",
    degree: "BSc. Computer Science",
    dates: "Sep 2022 – Expected May 2026",
    location: "Lahore, Pakistan",
    achievements: ["Dean's Honor List"],
    coursework: [
      "Data Science",
      "Deep Learning",
      "Machine Learning",
      "Algorithms",
      "Software Engineering",
      "Database Systems",
    ],
    activities: ["Teaching Assistant for Algorithms"],
  },
  {
    institution: "Hertie School",
    degree: "Data Science Summer School",
    dates: "Aug 2023",
    location: "Berlin, Germany (Remote)",
    achievements: [],
    coursework: ["Data Science Methodologies", "Statistical Analysis"],
    activities: [],
  },
  {
    institution: "Cedar College",
    degree: "A Levels",
    dates: "Graduated May 2022",
    location: "Karachi, Pakistan",
    achievements: ["Merit Scholarship"],
    coursework: [],
    activities: [],
  },
];

export const projectsData = [
  {
    title: "Algnosis – AI Diagnosis Platform",
    summary: "AI-driven diagnosis platform for multi-modal medical data (MRI, CT, blood reports) using computer vision models with up to 30% higher accuracy after retraining.",
    techStack: ["Java Spring Boot", "MongoDB", "React", "PyTorch"],
    impact: "30% accuracy improvement in diagnostic models",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#764ba2",
  },
  {
    title: "EmCon – Multi-Hospital Management",
    summary: "Multi-hospital patient management system with JWT-based role access control, centralized data access, and 12-week Agile sprint delivery.",
    techStack: ["Node.js", "MongoDB", "Express", "JWT"],
    impact: "Centralized data access for multi-hospital network",
    gradient: "linear-gradient(135deg, #00c6fb 0%, #005bea 100%)",
    accentColor: "#005bea",
  },
  {
    title: "Taskly – Task Management System",
    summary: "Enterprise-grade task management system with role-based access, concurrent multi-user support, and 25% latency reduction through query optimization and caching.",
    techStack: ["ASP.NET Core", "React", "xUnit", "SonarQube"],
    impact: "25% latency reduction via optimization",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accentColor: "#f5576c",
  },
  {
    title: "FinTrack – Student Expense Tracker",
    summary: "Student expense tracking app with Figma wireframes, user-centered design, dynamic React components, and responsive Tailwind CSS layouts.",
    techStack: ["React", "Tailwind CSS", "Figma"],
    impact: "Full UX research-to-implementation cycle",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accentColor: "#00f2fe",
  },
];

export const researchData = [
  {
    lab: "LUMS Computer Vision Lab",
    role: "Research Assistant",
    area: "Computer Vision & Medical Imaging",
    duration: "Ongoing",
    contributions: [
      "Working on multi-modal medical image analysis using deep learning",
      "Retraining computer vision models for improved diagnostic accuracy",
      "Developing inference pipelines for real-time analysis",
    ],
    publications: [],
    outcomes: ["30% improvement in diagnostic model accuracy"],
  },
];

export const experienceData = [
  {
    company: "10Pearls Pakistan",
    role: "Full Stack Development Intern",
    duration: "Dec 2025 – Feb 2026",
    achievements: [
      "Engineered a multi-tenant SaaS task management platform with ASP.NET Core and React",
      "Achieved 85% test coverage via CI/CD with xUnit and SonarQube",
      "Implemented role-based access control and concurrent multi-user support",
      "Reduced query latency by 25% through optimization and Redis caching",
    ],
    tools: ["ASP.NET Core", "React", "xUnit", "SonarQube", "Redis"],
    impact: "85% test coverage, 25% latency reduction",
  },
  {
    company: "Netsol Technologies Ltd.",
    role: "Software Development Intern",
    duration: "Jul 2025 – Aug 2025",
    achievements: [
      "Architected Java Spring Boot microservices for backend infrastructure",
      "Optimized computer vision models with Django inference pipeline",
      "Presented technical results to senior leadership from 10 teams",
    ],
    tools: ["Java Spring Boot", "Django", "Python", "Docker"],
    impact: "Cross-team technical presentation delivered",
  },
  {
    company: "Lahore University of Management Sciences",
    role: "Teaching Assistant — Algorithms",
    duration: "Aug 2025 – Dec 2025",
    achievements: [
      "Designed assessments for a 300+ student Data Structures & Algorithms course",
      "Conducted weekly office hours for advanced algorithm topics",
      "Improved student understanding of dynamic programming and graph algorithms",
    ],
    tools: ["Python", "C++", "Algorithm Design"],
    impact: "Supported 300+ students",
  },
];

export const contactData = {
  email: "salmanatwork1@gmail.com",
  github: "https://github.com/salman192003",
  githubHandle: "@salman192003",
  linkedin: "https://linkedin.com/in/salman-ajmal",
  linkedinName: "Salman Ajmal",
  location: "Lahore, Pakistan",
  // Add phone if desired
  // phone: "+92 xxx xxxxxxx",
};

export const resumeData = {
  summary: "Computer Science student at LUMS specializing in full-stack development, AI/ML research, and scalable system design. Dean's Honor List recipient with industry experience at leading tech companies.",
  highlights: [
    "BSc. Computer Science @ LUMS — Dean's Honor List",
    "Full Stack Intern @ 10Pearls — 85% test coverage, 25% latency reduction",
    "Software Intern @ Netsol — Spring Boot microservices & CV pipelines",
    "Teaching Assistant for Algorithms — 300+ students",
    "AI Diagnosis Platform — 30% accuracy improvement",
  ],
  // Path to your resume PDF in /public
  resumePdfUrl: "/CV.pdf",
};
