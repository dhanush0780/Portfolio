import { Project, SkillCategory, EducationMilestone, GitHubRepo } from '../types';

export const PERSONAL_INFO = {
  name: "Dhanush T",
  intro: "HELLO, I'M DHANUSH T",
  headline: "Building Intelligent Solutions Through Code.",
  subtitle: "AI/ML Enthusiast | Full Stack Developer | Computer Science Engineering Student",
  description: "I'm a third-semester Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at REVA University. I enjoy building practical applications, integrating AI into websites, and developing full-stack solutions that solve real-world problems.",
  status: "Open to Learning & Opportunities",
  email: "Dhanushtd16@gamil.com",
  githubUsername: "dhanush0780",
  githubUrl: "https://github.com/dhanush0780",
  linkedinPlaceholderUrl: "https://linkedin.com",
  university: "REVA University",
  semester: "3rd Semester",
  specialization: "AI & Machine Learning",
  aboutParagraphs: [
    "I am an undergraduate Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at REVA University, currently pursuing my third semester.",
    "I am passionate about programming, AI integration, and full-stack web development. I enjoy turning ideas into functional applications, experimenting with new technologies, and continuously improving my development skills.",
    "My goal is to grow as an AI/ML Engineer while developing strong software engineering and full-stack development skills."
  ]
};

export const ABOUT_CARDS = [
  {
    title: "Current Semester",
    value: "3rd Semester",
    subtext: "B.Tech Computer Science",
  },
  {
    title: "University",
    value: "REVA University",
    subtext: "Bengaluru, India",
  },
  {
    title: "Specialization",
    value: "AI & Machine Learning",
    subtext: "School of C&IT",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      {
        name: "Python",
        icon: "python",
        description: "Core logic, data manipulation, backend scripting & AI pipelines",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        description: "Interactive client-side web development & asynchronous logic",
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: "html",
        description: "Semantic page structure & accessible web fundamentals",
      },
      {
        name: "CSS",
        icon: "css",
        description: "Modern responsive layouts, Flexbox, Grid & animations",
      },
      {
        name: "React.js",
        icon: "react",
        description: "Component architecture, reactive state hooks & dynamic UIs",
      },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      {
        name: "Flask",
        icon: "flask",
        description: "Lightweight Python microframework for REST APIs & model endpoints",
      },
      {
        name: "Supabase",
        icon: "supabase",
        description: "Backend-as-a-service, PostgreSQL database & authentication",
      },
    ],
  },
  {
    category: "AI & Development",
    skills: [
      {
        name: "AI API Integration",
        icon: "cpu",
        description: "Connecting modern LLM & generative AI APIs to applications",
      },
      {
        name: "AI-powered Applications",
        icon: "sparkles",
        description: "Building smart tools with automated analysis & score generation",
      },
      {
        name: "Full Stack Development",
        icon: "layers",
        description: "End-to-end web applications combining UI, APIs & databases",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    description: "An AI-powered resume analysis application that allows users to upload their resumes and receive AI-generated feedback and an evaluation score. Built using Flask, Python, PDF processing, and AI API integration.",
    technologies: ["Python", "Flask", "AI API", "HTML", "CSS"],
    category: "AI & Machine Learning",
    badge: "AI Powered",
    previewDetails: {
      overview: "Transforms unstructured PDF resumes into structured analytical feedback. Employs Python text extraction algorithms and AI APIs to score candidate qualifications against technical role benchmarks.",
      highlights: [
        "PDF text extraction & token parsing via Python backend",
        "AI-generated evaluation score with ATS readability metrics",
        "Granular actionable feedback on technical keywords, formatting, and impact phrases",
      ],
      features: [
        "Instant PDF Document Upload",
        "Evaluation Score (0-100)",
        "Keyword Match Analysis",
        "Actionable Recommendations",
      ],
      mockPreviewType: "resume-analyzer",
    },
  },
  {
    id: "assignment-tracker",
    name: "Assignment Tracker",
    description: "A productivity application that allows students to add assignments, set submission dates, and manage academic reminders through a simple and organized interface.",
    technologies: ["React.js", "Supabase", "JavaScript"],
    githubUrl: "https://github.com/dhanush0780/Assignment-Tracker",
    category: "Full Stack Productivity",
    badge: "Full Stack",
    previewDetails: {
      overview: "Designed specifically for university students to eliminate deadline anxiety. Connects a modern React frontend with Supabase real-time storage for instant assignment synchronization.",
      highlights: [
        "Real-time database sync using Supabase PostgreSQL tables",
        "Interactive calendar submission tracker with urgent deadline tags",
        "Clean task prioritization by course subject and due date",
      ],
      features: [
        "Real-Time Supabase Synchronization",
        "Deadline Urgency Badges",
        "Task Categorization by Subject",
        "Persistent Student Storage",
      ],
      mockPreviewType: "assignment-tracker",
    },
  },
  {
    id: "subscription-box",
    name: "Subscription Box Management System",
    description: "A full-stack subscription platform where users can explore and purchase subscription boxes based on their personal interests.",
    technologies: ["React.js", "Supabase", "JavaScript"],
    category: "E-Commerce & Full Stack",
    badge: "Full Stack",
    previewDetails: {
      overview: "A responsive e-commerce web platform offering curated interest-based subscription plans. Manages catalog exploration, personalized preferences, and order tracking.",
      highlights: [
        "Dynamic box catalog filtering by user hobbies and technology genres",
        "Interactive cart & subscription cycle configuration (monthly, quarterly)",
        "Supabase relational data schema for customer order management",
      ],
      features: [
        "Interest-Based Curated Catalog",
        "Tiered Subscription Explorer",
        "Interactive Cart & Checkout Flow",
        "Supabase Order Management",
      ],
      mockPreviewType: "subscription-box",
    },
  },
  {
    id: "ipl-booking",
    name: "IPL Ticket Booking Website",
    description: "A ticket booking website that allows users to explore IPL matches and book tickets through an intuitive interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/dhanush0780/IPL-BOOKING-SITE",
    category: "Web Application",
    badge: "Interactive UI",
    previewDetails: {
      overview: "A fast, intuitive cricket match booking portal showcasing IPL schedules, stadium venue information, stand tier selection, and instantaneous ticket confirmation receipts.",
      highlights: [
        "Dynamic fixture schedule with team logos and match dates",
        "Interactive stadium seating tier selection (Pavilion, Grand Stand, Club)",
        "Live ticket price calculator with instant booking confirmation voucher",
      ],
      features: [
        "IPL Fixture & Match Calendar",
        "Interactive Stadium Stand Selector",
        "Real-Time Fare Computation",
        "Booking Confirmation Modal & Ticket Slip",
      ],
      mockPreviewType: "ipl-booking",
    },
  },
  {
    id: "college-fest",
    name: "College Fest Pass Booking Website",
    description: "A college fest website where users can explore upcoming events, discover programs, and purchase event passes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/dhanush0780/College_fest-",
    category: "Event Platform",
    badge: "Event System",
    previewDetails: {
      overview: "An engaging campus festival web portal engineered to promote university cultural, technical, and sports events with online pass reservations and program schedules.",
      highlights: [
        "Program agenda breakdown across cultural, gaming, and tech tracks",
        "Tiered pass booking with student discount validation",
        "Interactive event countdown and printable pass generation",
      ],
      features: [
        "Multi-Track Event Schedule",
        "Tiered Pass Selection (Standard, VIP, All-Access)",
        "Instant Pass Confirmation with QR Placeholder",
        "Responsive Mobile-Friendly Layout",
      ],
      mockPreviewType: "fest-pass",
    },
  },
];

export const EDUCATION_TIMELINE: EducationMilestone[] = [
  {
    period: "Current Status",
    institution: "REVA University",
    stage: "Third Semester",
    details: "Specialization in Artificial Intelligence & Machine Learning. Focusing on core algorithms, object-oriented programming, data structures, and AI-enabled full-stack web applications.",
    statusBadge: "Currently Pursuing (3rd Sem)",
    iconType: "specialization",
  },
  {
    period: "Undergraduate (Second Year onwards)",
    institution: "REVA University",
    stage: "Second Year onwards",
    details: "Degree: Computer Science Engineering – Artificial Intelligence & Machine Learning. Pursuing advanced coursework in modern software engineering, databases, and applied machine learning.",
    iconType: "university",
  },
  {
    period: "Undergraduate (First Year)",
    institution: "Jain University",
    stage: "First Year",
    details: "Built solid foundations in engineering mathematics, problem solving, computational logic, and foundational programming concepts.",
    iconType: "university",
  },
  {
    period: "Pre-University / 12th Grade",
    institution: "Narayana Co, Kasturi Nagar",
    stage: "12th Grade",
    details: "Completed higher secondary education with a focus on science and mathematics, developing a strong analytical foundation for computer engineering.",
    iconType: "school",
  },
];

export const GITHUB_REPOSITORIES: GitHubRepo[] = [
  {
    name: "IPL-BOOKING-SITE",
    description: "A ticket booking website that allows users to explore IPL matches and book tickets through an intuitive interface.",
    url: "https://github.com/dhanush0780/IPL-BOOKING-SITE",
    language: "JavaScript / HTML / CSS",
  },
  {
    name: "Assignment-Tracker",
    description: "A productivity application for students to manage assignments, deadlines, and academic reminders with Supabase.",
    url: "https://github.com/dhanush0780/Assignment-Tracker",
    language: "React.js / Supabase",
  },
  {
    name: "College_website",
    description: "A comprehensive college web portal featuring department overviews, announcements, and campus resources.",
    url: "https://github.com/dhanush0780/College_website",
    language: "HTML / CSS / JavaScript",
  },
  {
    name: "College_fest-",
    description: "Event pass reservation portal where students explore festival programs, competitions, and book event tickets.",
    url: "https://github.com/dhanush0780/College_fest-",
    language: "HTML / CSS / JavaScript",
  },
];
