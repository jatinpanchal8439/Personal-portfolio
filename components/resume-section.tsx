"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Award, Briefcase, GraduationCap, Calendar } from "lucide-react"

const experiences = [
  {
    title: "ADIT",
    From: "ITCS Institute",
    period: "2022-2023",
    description:
      "Adavanced Diploma in Information Technology. Completed a comprehensive program covering various aspects of IT, including programming, networking, and database management.",
  },
 
  {
    title: "Web Developer",
    From: "Udemy",
    period: "2024",
    description:
      "Developed and maintained client websites. Collaborated with designers to implement responsive layouts and interactive features.",
  }, {
    title: "AWS Certified Solutions Architect ,Salesforce",
    From: "Meerut Institute of Technology(MIT",
    period: "2024",
    description:
      "Gained the skills to design and deploy scalable systems on AWS. Completed a comprehensive program covering various aspects of AWS architecture, including security, networking, and storage solutions.",
  },
]

const education = [
  {
    degree: "10th",
    institution: "Uttar Pradesh Madhyamik Shiksha Parishad",
    period: "2019- 2020",
    description: "Physics, Chemistry, and Mathematics (PCM) ",
  },
  {
    degree: "12th",
    institution: "Uttar Pradesh Madhyamik Shiksha Parishad",
    period: "2020- 2021",
    description: "Physics, Chemistry, and Mathematics (PCM) with Computer Science",
  },

  {
    degree: "Bachelor of Computer Applications",
    institution: "Meerut Institute of Technology (MIT)",
    period: "2022- 2025",
    description: "Graduated with honors. Focused on Software Development and Database Management.",
  },
]

export default function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="resume" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and qualifications</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold"> Skills Courses</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{exp.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </div>
                    </div>
 
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-primary font-medium mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications and Awards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Certifications & Awards</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Web Development Certification", "Mern-Stack", "JavaScript Certification"].map(
              (cert, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{cert}</h4>
                      <p className="text-sm text-muted-foreground"></p>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button 
            size="lg" 
            className="group"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/JatinPanchalResume.docx.pdf';
              link.download = 'JatinPanchalResume.docx.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
            Download Full Resume
          </Button>
          <p className="mt-2 text-sm text-muted-foreground">Get a complete overview of my experience and skills</p>
        </motion.div>
      </div>
    </section>
  )
}

