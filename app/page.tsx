"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Cpu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-primary glow">Seyi</span>.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I build sleek, functional projects at the intersection of tech, fashion, and education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/game">Play My Game</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Do</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-8 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fashion Design</h3>
              <p className="text-muted-foreground">
                Creating stylish fitnesswear that looks good in and out of the gym, combining performance with elevated
                streetwear design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-lg border hover:border-secondary transition-colors"
            >
              <div className="bg-secondary/10 p-3 rounded-full w-fit mb-6">
                <Code className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tech Development</h3>
              <p className="text-muted-foreground">
                Building AI-powered educational tools that make learning programming interactive and engaging for
                students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card p-8 rounded-lg border hover:border-primary transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Game Development</h3>
              <p className="text-muted-foreground">
                Creating fun, educational games that challenge the brain while teaching valuable tech concepts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">Check out some of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/30"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Coding My Way Through Chaos — Stylishly.</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm building a future where tech, style, and education collide. Let's connect!
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

