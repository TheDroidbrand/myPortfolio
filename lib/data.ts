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
    image: "/placeholder.svg?height=400&width=600",
    category: "Fashion",
    technologies: ["Design", "Branding", "E-commerce", "Marketing"],
    demoUrl: "https://ariye.vercel.app/",
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
    githubUrl: "https://github.com/YourUsername",
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
    githubUrl: "https://github.com/YourUsername",
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
    title: "Fashion Brand Founder",
    company: "Ephira",
    date: "2024 - Present",
    description:
      "Designing and developing a fitnesswear brand that combines functionality with style. Managing branding, marketing, and product design.",
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
]

