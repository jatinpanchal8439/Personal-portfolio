"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Layers, Database, Globe, X } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [

  {
    id: 1,
    title: "Foody-Zone",
    description:
      "A Foody Zone full-stack application is a food delivery platform that allows users to browse restaurants, order meals, track deliveries, and make secure payments",
    image: "/food.png",
    tags: ["React", "Express.js", "Node.js", "CSS Modules"],
    liveUrl: "https://clever-unicorn-0e06ce.netlify.app/",
    githubUrl: "githubhttps://github.com/jatinpanchal8439/Food-zone-website",
    icon: <Globe className="h-10 w-10 text-primary" />,
    category: "fullstack",
    featured: true,
    
  },
  {
    id: 2,
    title: "interior-designer-website",
    description:
      "interior-designer-website is a modern and responsive website designed for an interior design company. It showcases the company's portfolio, services, and contact information.",
    image: "/interior.jpeg",
    tags: ["React", "Tailwind CSS",  "Vite"],
    liveUrl: "https://keen-meringue-b92231.netlify.app/",
    githubUrl: "https://github.com/jatinpanchal8439/Project",
    icon: <Layers className="h-10 w-10 text-primary" />,
    category: "frontend",
    featured: false,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with animations and dark mode support. Showcases projects, skills, and contact information with a modern design.",
    image: "/vip-port.jpg",
    tags: ["Html",'Tailwind CSS','Javascript'],
    liveUrl: "https://lambent-zabaione-1895d8.netlify.app/",
    githubUrl: "https://github.com/jatinpanchal8439/Vipin_Portfolio",
    icon: <Code className="h-10 w-10 text-primary" />,
    category: "frontend",
    featured: false,
  },
  {
    id: 4,
    title: "Photography-Website",
    description:
      "A photography website that showcases a collection of stunning images. The site features a clean and modern design, allowing users to easily navigate through different galleries and view high-resolution photos.",
    image: "/ph.jpeg",
    tags: ["Html",'CSS', 'Javascript'],
    liveUrl: "https://aquamarine-axolotl-04eb93.netlify.app/",
    githubUrl: "https://aquamarine-axolotl-04eb93.netlify.app/",
    icon: <Database className="h-10 w-10 text-primary" />,
    category: "frontend",
    featured: false,
  },
  {
    id: 5,
    title: "Spotify-Clone",
    description:
      "Spotify-Clone is a web application that replicates the core features of Spotify, allowing users to stream music, create playlists, and discover new songs.",
    image: "/spo2.jpeg",
    tags: ["Html", "Tailwind CSS", "Javascript"],
    liveUrl: "https://merry-kangaroo-1cd3d8.netlify.app/",
    githubUrl: "https://github.com/jatinpanchal8439/Spotify-clone",
    icon: <Globe className="h-10 w-10 text-primary" />,
    category: "fullstack",
    featured: false,
  },
  
  {
    id: 6,
    title: "Tic-Tac-Toe Game",
    description: "A Tic-Tac-Toe game built with HTML, CSS, and JavaScript is a simple yet interactive web-based game where two players take turns marking X or O on a 3×3 grid. The first to align three marks in a row, column, or diagonal wins.",
    image: "/tic2.png",
    tags: ["Html", "JavaScript", "CSS", ], 
    liveUrl: "https://jatinpanchal8439.github.io/Tic-tac-tae/",
    githubUrl: "https://github.com/jatinpanchal8439/Tic-tac-tae",
    icon: <Layers className="h-10 w-10 text-primary" />,
    category: "backend",
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("all")
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const filteredProjects =
    activeTab === "all"
      ? projects
      : activeTab === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.category === activeTab)

  const openProjectDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-5 w-auto">
                <TabsTrigger value="all" className="px-4">
                  All
                </TabsTrigger>
                <TabsTrigger value="featured" className="px-4">
                  Featured
                </TabsTrigger>
                <TabsTrigger value="frontend" className="px-4">
                  Frontend
                </TabsTrigger>
                <TabsTrigger value="backend" className="px-4">
                  Backend
                </TabsTrigger>
                <TabsTrigger value="fullstack" className="px-4">
                  Full Stack
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variants={itemVariants}
                    onClick={() => openProjectDetails(project)}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="featured" className="mt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variants={itemVariants}
                    onClick={() => openProjectDetails(project)}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="frontend" className="mt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variants={itemVariants}
                    onClick={() => openProjectDetails(project)}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="backend" className="mt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variants={itemVariants}
                    onClick={() => openProjectDetails(project)}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="fullstack" className="mt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variants={itemVariants}
                    onClick={() => openProjectDetails(project)}
                  />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-background/50 backdrop-blur-sm rounded-full"
                  onClick={closeProjectDetails}
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="h-64 relative">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24"></div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    {selectedProject.featured && (
                      <Badge variant="outline" className="bg-primary/10 text-primary mt-1">
                        Featured Project
                      </Badge>
                    )}
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">{selectedProject.icon}</div>
                </div>

                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Responsive design for all devices</li>
                      <li>User authentication and authorization</li>
                      <li>Data persistence with database integration</li>
                      <li>Modern UI with smooth animations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">My Role:</h4>
                    <p className="text-muted-foreground">
                      Designed and developed the entire application from concept to deployment, including frontend,
                      backend, and database architecture.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" size="lg" asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </a>
                  </Button>
                  <Button size="lg" asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[0]
  variants: any
  onClick: () => void
}

function ProjectCard({ project, variants, onClick }: ProjectCardProps) {
  return (
    <motion.div variants={variants}>
      <Card
        className="h-full flex flex-col overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full">
            {project.icon}
          </div>
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
          )}
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

