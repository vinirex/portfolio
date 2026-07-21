"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { GitHubCalendar } from "react-github-calendar";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <div className="prose prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
          <p>
            Hello! I&apos;m a software engineer with a passion for building scalable, high-performance web applications. I enjoy blending logic and design to create intuitive user experiences.
          </p>
          <p>
            My journey into software development started with a curiosity for how things work on the internet. Fast forward to today, I have had the privilege of working on various projects, ranging from small business websites to enterprise-level microservices.
          </p>
          <p>
            When I&apos;m not coding, you can usually find me reading about the latest tech trends, contributing to open-source, or experimenting with new frameworks. My main focus these days is mastering machine learning integration in full-stack applications.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">Technical Mindset</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], index) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                {category}
              </h3>
              <div className="space-y-6">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        className="bg-primary h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-8">GitHub Contributions</h2>
        <div className="p-8 border border-border bg-card rounded-xl overflow-x-auto flex justify-center">
          <GitHubCalendar 
            username="vini-rex" 
            colorScheme="dark"
            theme={{
              light: ['#18181b', '#3B82F6'],
              dark: ['#18181b', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa'],
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
