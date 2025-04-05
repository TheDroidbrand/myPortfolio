"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"

// Define project categories
const categories = ["All", "Fashion", "Tech", "Game"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="text-sm md:text-base"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

