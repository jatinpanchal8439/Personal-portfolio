"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
          <p className="text-muted-foreground mb-6">
            I'm Jatin Panchal,  a highly motivated and detail-oriented Bachelor of Computer Applications (BCA) student at Meerut Institute of Technology, with a strong foundation in web development and a growing proficiency in data structures, algorithms, and object-oriented programming. My technical expertise includes the MERN stack (MongoDB, Express.js, React.js, Node.js), C++, and Java, which I continually refine through hands-on projects and self-driven learning. I am deeply passionate about building efficient, scalable, and user-centric applications that solve real-world problems. With a proactive mindset and a keen interest in continuous improvement, I am seeking a challenging opportunity where I can leverage my technical skills, contribute meaningfully to dynamic development teams, and grow into a well-rounded software engineer.
          </p>
          <p className="text-muted-foreground mb-6">
            My journey in technology began several years ago, and since then, I've worked on a diverse range of projects
            that have helped me refine my skills and approach to problem-solving.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Education</h4>
                <p className="text-muted-foreground text-sm"> Bechelor of Computer Appplication
                  Meerut Institue of Technology(Meerut) </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Shamli (247776) Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Experience</h4>
                <p className="text-muted-foreground text-sm">1 Years</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Freelance</h4>
                <p className="text-muted-foreground text-sm">Available</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

