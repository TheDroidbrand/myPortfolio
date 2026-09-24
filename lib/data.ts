export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ariye Watch Store",
    description:
      "Stylish watches that look good in and out of the gym. Combines performance materials with elevated streetwear design.",
    image: "/ariye.jpg?height=400&width=600",
    category: "Fashion",
    technologies: ["Design", "Branding", "E-commerce", "Marketing"],
    demoUrl: "https://ariye.com.ng/",
    githubUrl: "https://github.com/thedroidbrand/",
  },
  {
    id: 2,
    title: "AI Educational Chatbot",
    description:
      "Helps middle and high school students learn programming interactively. Features adaptive learning, gamified quizzes, and a natural language interface.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Tech",
    technologies: ["Django", "JavaScript", "OpenAI API", "SQLite"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/thedroidbrand/",
  },
  {
    id: 3,
    title: "Memory Match – Tech Stack Edition",
    description:
      "Matching game for developers where you pair logos with their names. Simple, fun, and a challenge for the brain.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Game",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    demoUrl: "/game",
    githubUrl: "https://github.com/thedroidbrand/",
  },
]

export const experience = [
  {
    title: "Self-taught Developer",
    company: "Freelance",
    date: "2020 - Present",
    description:
      "Building full-stack projects with a focus on AI integration and educational tools. Developing interactive applications that make learning programming fun.",
  },
  {
    title: "Wrist Watch Brand Founder",
    company: "Ariye",
    date: "2024 - Present",
    description:
      "Designing and developing stylish watches that look good in and out of the gym. Combines performance materials with elevated streetwear design.. Managing branding, marketing, and product design.",
  },
]

export const education = [
  {
    degree: "Self-taught Programming",
    institution: "Online Courses & Projects",
    date: "2020 - Present",
    description:
      "Learned programming through online courses, documentation, and building real-world projects. Focused on Python, Django, and JavaScript.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Lead City University",
    date: "2020 - 2024",
    description:
      "Acquired my bachelors degree in Software Engineering from Lead City University .",
  },
  {
    degree: "Master of Science: Financial Engineering",
    institution: "World Quant University",
    date: "In Progress",
    description:
      "Working on getting my masters degree in financial engineering",
  },
  {
    degree: "Associate Degree: Business Administration ",
    institution: "University of the People ",
    date: "In Progress",
    description:
      "Working on getting my associate degree in business administration",
  },
]

