"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, ThumbsUp, Clock, Award, Users, DollarSign, MessageSquare } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies like React, Next.js, and Node.js.",
    icon: <Code className="h-6 w-6 text-primary" />,
    price: "Starting at $300",
  },
  {
    title: "Frontend Development",
    description: "Pixel-perfect UI implementation from designs with responsive layouts and animations.",
    icon: <Layout className="h-6 w-6 text-primary" />,
    price: "Starting at $200",
  },
  {
    title: "Backend Development",
    description: "Robust API development, database design, and server-side logic implementation.",
    icon: <Server className="h-6 w-6 text-primary" />,
    price: "Starting at $250",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end development solutions from database to user interface with seamless integration.",
    icon: <Layers className="h-6 w-6 text-primary" />,
    price: "Starting at $400",
  },
]

 

export default function FiverrSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="fiverr" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Fiverr Freelance Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer professional web development services on Fiverr with a focus on quality and client satisfaction.
          </p>
        </motion.div>

        {/* Fiverr Profile Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-background rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48 md:h-64 bg-primary/10">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col md:flex-row items-center md:items-end gap-4">
                <div className="relative w-24 h-24 rounded-full border-4 border-background overflow-hidden bg-background">
                  <Image src="/jatinf.jpg" alt="Jatin Panchal" fill className="object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold">Jatin Panchal</h3>
                  <p className="text-muted-foreground">Professional Web Developer</p>
                  <div className="flex items-center justify-center md:justify-start mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium">5.0 (2 reviews)</span>
                  </div>
                </div>
                <div className="md:ml-auto">
                  <Button asChild>
                    <a href="https://www.fiverr.com/jatinvishwak134/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Fiverr Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <ThumbsUp className="h-5 w-5 text-primary mr-2" />
                    <span className="font-bold text-lg">100%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span className="font-bold text-lg">100%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">On-time Delivery</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MessageSquare className="h-5 w-5 text-primary mr-2" />
                    <span className="font-bold text-lg">100%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Response Rate</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="font-bold text-lg">2+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Clients Served</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">About Me</h4>
                <p className="text-muted-foreground">
                  I'm a passionate web developer with expertise in building modern, responsive websites and web
                  applications. With over 1 years of experience, I specialize in creating custom solutions that meet my
                  clients' specific needs. My goal is to deliver high-quality work that exceeds expectations and helps
                  businesses achieve their online objectives.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-primary/5">
                    React.js
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5">
                    Express.js
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="bg-primary/5">
                    UI/UX Design
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">My Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">{service.icon}</div>
                    <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-medium text-primary">{service.price}</span>
                      <Badge variant="outline" className="bg-primary/5">
                        <DollarSign className="h-3 w-3 mr-1" />
                        Best Seller
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

     

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer">
                <Award className="mr-2 h-5 w-5" />
                View All Reviews on Fiverr
              </a>
            </Button>
          </div>
      </div>
    </section>
  )
}

// Import missing components
import { Code, Layout, Server, Layers } from "lucide-react"

