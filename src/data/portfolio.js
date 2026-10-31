export const personal = {
  name: "Abdulrahman",
  fullName: "Abdulrahman Iqbal",
  title: "Machine Learning Researcher",
  roles: ["Machine Learning Researcher", "Backend Engineer", "Python Developer"],
  tagline:
    "Building systems end to end, from reinforcement learning agents trained in physics simulation to production backend and automation pipelines.",
  email: "abrahman142006@gmail.com",
  phone: "0328-7012883",
  location: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/abdulrahman-iqbal01/",
  github: "https://github.com/Abraaham1",
  githubUsername: "Abraaham1",
  avatar: "https://avatars.githubusercontent.com/u/203318462?v=4",
  cgpa: "3.69",
  cvUrl: "/Abdulrahman_Iqbal_CV.pdf",
  cvFileName: "Abdulrahman_Iqbal_CV.pdf",
};

export const profile = `Computer Science undergraduate and researcher building systems end to end, from reinforcement learning agents trained in physics simulation to production backend and automation pipelines. Trained a humanoid robot to balance, resist external pushes, and walk using a custom PPO policy built from scratch, and authored an independent empirical study on zero-knowledge machine learning proof cost. Combines a strong foundation in Python and machine learning with hands-on ERP integration experience from real software house environments.`;

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "PUCIT, University of the Punjab",
    period: "Present",
    detail: "CGPA: 3.69 / 4.0",
    highlight: true,
  },
  {
    degree: "Intermediate",
    school: "Punjab Group of Colleges",
    period: "",
    detail: "1121 / 1200",
  },
  {
    degree: "Matriculation",
    school: "Unique Group of High School",
    period: "",
    detail: "1065 / 1100",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "ML & Robotics",
    skills: [
      "PyTorch",
      "Stable Baselines3",
      "PPO",
      "PyBullet",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "Neural Networks",
      "Computer Vision",
    ],
  },
  {
    title: "Backend & Web",
    skills: ["FastAPI", "Flask", "Django", "MERN Stack", "Microservices", "n8n"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Netsol Technologies Pakistan",
    period: "6 Weeks",
    type: "Internship",
    bullets: [
      "Worked on microservices-based ERP modules and built authentication systems for enterprise-facing modules within a large-scale ERP platform.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "EUSOL Software House",
    period: "6 Weeks",
    type: "Internship",
    bullets: [
      "Developed Python-based automation scripts for reporting and ML-assisted data processing, reducing manual effort and improving accuracy across departments.",
    ],
  },
];

export const research = [
  {
    title: "Empirical Study on ReLU Count and Zero Knowledge Proof Cost",
    venue: "Independent Research",
    description:
      "Investigated how ReLU activation count predicts Zero-Knowledge SNARK proof generation cost under the ezkl / Halo2 proving stack, training five parameter-matched MNIST model variants in PyTorch. Found a strong correlation between ReLU count and both prove time and proof size (Pearson r of 0.90 and 0.91), with model accuracy held stable across variants.",
    tags: ["PyTorch", "zkML", "ezkl", "Halo2", "SNARKs"],
    doi: "10.5281/zenodo.21266805",
    link: "https://doi.org/10.5281/zenodo.21266805",
  },
  {
    title: "Humanoid Robot: Reinforcement Learning in Physics Simulation",
    venue: "Personal Research Project",
    description:
      "Built and trained a humanoid robot from scratch using a custom MLP policy in PyBullet with Stable Baselines3 PPO, across three phases: balance, resisting pushes of up to 100N, and walking. Designed the full reward shaping and training pipeline independently, without a pre-built RL environment template.",
    tags: ["PyBullet", "PPO", "Stable Baselines3", "Reinforcement Learning"],
    doi: null,
    link: null,
  },
];

export const projects = [
  {
    title: "Gesture-Controlled Robotic Hand",
    subtitle: "Computer Vision · Robotics",
    description:
      "Real-time robotic hand that mirrors human finger gestures, translating computer vision hand landmark data into low-latency servo motor commands.",
    tags: ["Python", "Computer Vision", "Robotics"],
    github: "https://github.com/Abraaham1/Robotic-Hand",
    featured: true,
  },
  {
    title: "ERP Modules: Auth, Attendance, Payroll",
    subtitle: "Microservices · FastAPI · React",
    description:
      "Designed a microservices-based ERP system with independent authentication, attendance, and payroll services, using FastAPI, React, and PostgreSQL.",
    tags: ["FastAPI", "React", "PostgreSQL", "Microservices"],
    github: null,
    featured: true,
  },
  {
    title: "Real Estate Plot Management / PayTrack",
    subtitle: "Client Projects",
    description:
      "Delivered a map-based real estate plot management web app and a desktop installment tracking application with dashboards for payment schedules, balances, and overdue alerts, for paying clients.",
    tags: ["Python", "Web App", "Desktop"],
    github: null,
    featured: true,
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const goals = [
  "Advance research in machine learning systems and robotics",
  "Ship production backend and ML infrastructure",
  "Work at top research labs and tech companies",
];
