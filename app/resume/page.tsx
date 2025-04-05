"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import TimelineItem from "@/components/timeline-item"
import { education, experience } from "@/lib/data"

export default function ResumePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <div className="mt-8">
            <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="text-primary mr-2">|</span> Experience
            </h2>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  company={item.company}
                  date={item.date}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="text-secondary mr-2">|</span> Education
            </h2>

            <div className="space-y-8">
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.degree}
                  company={item.institution}
                  date={item.date}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="text-primary mr-2">|</span> Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "HTML & CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Framer Motion",
              "Git",
              "Responsive Design",
              "UI/UX Design",
              "RESTful APIs",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-card border hover:border-primary p-4 rounded-lg text-center transition-colors"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

