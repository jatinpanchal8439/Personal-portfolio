"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Layout, Server, Smartphone, TestTube, Search, Figma, Cloud, Zap, Layers, Lock } from "lucide-react"

const skills = [
  { name: "HTML/CSS", level: 90, icon: <Layout className="h-4 w-4 text-primary" /> },
  { name: "JavaScript", level: 85, icon: <Code className="h-4 w-4 text-primary" /> },
  { name: "React.js", level: 80, icon: <Layers className="h-4 w-4 text-primary" /> },
  { name: "Next.js", level: 75, icon: <Zap className="h-4 w-4 text-primary" /> },
  { name: "Node.js", level: 70, icon: <Server className="h-4 w-4 text-primary" /> },
  { name: "TypeScript", level: 65, icon: <Code className="h-4 w-4 text-primary" /> },
  { name: "MongoDB", level: 60, icon: <Database className="h-4 w-4 text-primary" /> },
  { name: "UI/UX Design", level: 55, icon: <Figma className="h-4 w-4 text-primary" /> },
  { name: "Web Security", level: 70, icon: <Lock className="h-4 w-4 text-primary" /> },
]

const categories = [
  { name: "Frontend", icon: <Layout className="h-6 w-6 text-primary" /> },
  { name: "Backend", icon: <Server className="h-6 w-6 text-primary" /> },
  { name: "UI/UX", icon: <Figma className="h-6 w-6 text-primary" /> },
  { name: "Mobile", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { name: "Database", icon: <Database className="h-6 w-6 text-primary" /> },
  { name: "DevOps", icon: <Cloud className="h-6 w-6 text-primary" /> },
  { name: "Testing", icon: <TestTube className="h-6 w-6 text-primary" /> },
  { name: "SEO", icon: <Search className="h-6 w-6 text-primary" /> },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I've acquired throughout my journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1 items-center">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-1.5 rounded-full mr-2">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.1 * index }}
                />
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group hover:bg-primary/20 transition-colors cursor-pointer">
                <div className="group-hover:scale-110 transition-transform">{category.icon}</div>
              </div>
              <h3 className="font-medium">{category.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">My Tech Stack</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center">
            {[
              { name: "HTML5", icon: <Layout className="h-8 w-8 text-primary" /> },
              { name: "CSS3", icon: <Layout className="h-8 w-8 text-primary" /> },
              { name: "JavaScript", icon: <Code className="h-8 w-8 text-primary" /> },
              { name: "React", icon: <Layers className="h-8 w-8 text-primary" /> },
              { name: "Node.js", icon: <Server className="h-8 w-8 text-primary" /> },
              { name: "MongoDB", icon: <Database className="h-8 w-8 text-primary" /> },
              { name: "Express", icon: <Server className="h-8 w-8 text-primary" /> },
              { name: "Next.js", icon: <Zap className="h-8 w-8 text-primary" /> },
              { name: "TypeScript", icon: <Code className="h-8 w-8 text-primary" /> },
              { name: "Tailwind CSS", icon: <Layout className="h-8 w-8 text-primary" /> },
              { name: "Git", icon: <Code className="h-8 w-8 text-primary" /> },
              { name: "Figma", icon: <Figma className="h-8 w-8 text-primary" /> },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-2 rounded-lg p-2 bg-background shadow-sm hover:shadow-md transition-shadow">
                  {tech.icon}
                </div>
                <span className="text-xs text-muted-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

