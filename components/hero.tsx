"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Twitter, Mail, Briefcase, ExternalLink, MessageCircle } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-background to-background/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <motion.div
          className="mb-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
            <Image 
              src="/jatin.jpg" 
              alt="Jatin Panchal" 
              width={128} 
              height={128} 
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm <span className="text-primary">Jatin Panchal</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-muted-foreground mb-4 h-12 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Software Engineer",
              2000,
              "Fiverr Freelancer",
              2000,
              "UI/UX Designer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="text-primary font-medium"
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Badge variant="outline" className="bg-primary/5 text-primary">
            React.js
          </Badge>
          <Badge variant="outline" className="bg-primary/5 text-primary">
            Node.js
          </Badge>
          <Badge variant="outline" className="bg-primary/5 text-primary">
            MongoDB
          </Badge>
          <Badge variant="outline" className="bg-primary/5 text-primary">
            Express.js
          </Badge>
          <Badge variant="outline" className="bg-primary/5 text-primary">
            Next.js
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="group" asChild>
            <Link href="#projects">
              <Briefcase className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View My Work
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Link>
          </Button>
          <Button size="lg" variant="secondary" className="group" asChild>
            <Link href="#resume">
              <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              Resume
            </Link>
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center mt-8 space-x-4"
        >
          <Link href="https://github.com/jatinpanchal8439" className="bg-background hover:bg-primary/10 transition-colors p-3 rounded-full group">
            <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/jatin-vishwakarma-a2ba05310/" className="bg-background hover:bg-primary/10 transition-colors p-3 rounded-full group">
            <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://www.fiverr.com/jatinvishwak134/buying?source=avatar_menu_profile" className="bg-background hover:bg-primary/10 transition-colors p-3 rounded-full group">
            <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="sr-only">Fiverr</span>
          </Link>
          <Link href="https://wa.me/91 9760299195" className="bg-background hover:bg-primary/10 transition-colors p-3 rounded-full group">
            <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="sr-only">WhatsApp</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      {Array.from({ length: 20 }).map((_, i) => {
        // Use index-based deterministic positions for SSR
        const basePos = i * 18; // Spread elements evenly
        const left = `${(basePos % 100) + 5}%`;
        const top = `${((basePos * 1.618) % 100) + 5}%`; // Golden ratio spread
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: 121.36687855688726,
              height: 135.5047097438977,
              left,
              top,
            }}
            animate={{
              x: [0, (i % 3) * 30 - 30], // Deterministic movement based on index
              y: [0, (i % 5) * 20 - 40],
            }}
            transition={{
              duration: 10 + (i % 5),
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        );
      })}

      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1,
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <Link href="#about">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-12 w-12 bg-background/50 backdrop-blur-sm hover:bg-primary/20"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
