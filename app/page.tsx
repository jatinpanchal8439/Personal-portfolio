import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import ChatbotButton from "@/components/chatbot-button"
import Navbar from "@/components/navbar"
import ResumeSection from "@/components/resume-section"
import FiverrSection from "@/components/fiverr-section"

export const metadata: Metadata = {
  title: "Jatin Panchal | Portfolio",
  description: "Personal portfolio website of Jatin Panchal - MERN Stack Developer & Fiverr Freelancer",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ResumeSection />
      <FiverrSection />
      <Contact />
      <ChatbotButton />
    </main>
  )
}

