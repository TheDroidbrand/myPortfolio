"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-4 border-primary/30 glow-box">
              <Image
                src="/MyPicture.jpg?height=500&width=500"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Seyi</span>
            </h2>
            <h3 className="text-xl text-muted-foreground mb-6">Creative Problem-Solver & Developer</h3>
            <div className="space-y-4 text-lg">
              <p>
                I'm a creative problem-solver who's never satisfied with boring. I build tools, brands, and games that
                are functional, fun, and a little unexpected.
              </p>
              <p>
                Whether it's fashion that feels futuristic or an AI bot that helps students learn, I'm all about turning
                ideas into beautifully chaotic reality.
              </p>
              <p>
                My current projects include <span className="text-secondary">Ephira</span> (fitnesswear designed for the
                gym and the glow-up after), an <span className="text-primary">AI Educational Chatbot</span> (a smart
                assistant for students, powered by Django and OpenAI), and a{" "}
                <span className="text-primary">Memory Match Game</span> (a fun brain teaser for devs, coming soon to
                this site).
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/Resume.pdf" download >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/thedroidbrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary/10 p-3 rounded-full transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/seyifunmiadeojo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary/10 p-3 rounded-full transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/notunknownseyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-primary/10 p-3 rounded-full transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Python",
              "Django",
              "JavaScript",
              "React",
              "Next.js",
              "SQLite",
              "Brand Development",
              "Problem Solving",
              "Creative Thinking",
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

