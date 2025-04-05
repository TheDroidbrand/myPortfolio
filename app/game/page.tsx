"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function GamePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Memory Match</h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 border border-primary/30 glow-box">
            <Gamepad2 className="h-24 w-24 mx-auto mb-6 text-primary animate-pulse-glow" />

            <h2 className="text-3xl font-bold mb-4">Coming Soon: Memory Match – Tech Stack Edition</h2>

            <p className="text-xl text-muted-foreground mb-8">
              Match tech logos with their names in a fun brain teaser for devs. Test your knowledge of programming
              languages, frameworks, and tools!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg">
                Notify Me
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

