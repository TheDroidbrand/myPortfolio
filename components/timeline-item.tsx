"use client"

import { motion } from "framer-motion"

interface TimelineItemProps {
  title: string
  company: string
  date: string
  description: string
  index: number
}

export default function TimelineItem({ title, company, date, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l border-muted last:border-0"
    >
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary"></div>

      <div className="bg-card p-6 rounded-lg border">
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-3">{date}</span>
        <h3 className="text-xl font-bold">{title}</h3>
        <h4 className="text-lg text-muted-foreground mb-3">{company}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

