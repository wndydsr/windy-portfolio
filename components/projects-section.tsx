"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { easeIn, easeOut } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects = [
    {
      id: 1,
      title: "Online Exam Platform",
      description: "Frontend & Backend web app built with Laravel.",
      fullDescription: "A comprehensive web application for conducting online exams, featuring user authentication, question banks, real-time grading, and detailed analytics.",
      category: "Full Stack Development",
      tools: ["Laravel", "JavaScript", "PHP", "Figma"],
      image: "/images/exam.png",
      details: {
        duration: "6 months",
        role: "Frontend & Backend Developer",
        descriptions: "A web application for conducting online exams, featuring user authentication, question banks, real-time grading, and detailed analytics.",
      },
      hasLink: true,
      link: "https://github.com/wndydsr/aplikasi-ujian-online",
    },
    {
      id: 2,
      title: "Facial Expression Detection App",
      description: "A cross-platform Flutter app that detects facial expressions using an AI model.",
      fullDescription: "A mobile and desktop application built with Flutter that allows users to upload a photo and detect their facial expression using a TensorFlow Lite model. The app uses Google ML Kit for face detection, supports custom UI themes, and features clean animations and custom fonts.",
      category: "Mobile Development",
      tools: ["Flutter", "TFLite", "Google ML Kit", "Dart"],
      image: "/images/aitubes.png",
      details: {
        duration: "2 weeks",
        role: "Mobile Developer (Frontend & AI Integration)",
        descriptions: "A Flutter-based mobile and desktop app that detects facial expressions from a photo using a TFLite model, with face detection powered by Google ML Kit.",
      },
      hasLink: true,
      link: "https://github.com/wndydsr/flutter-ai-expression",
    },
    {
      id: 3,
      title: "Bookstown UI/UX",
      description: "UI/UX design for Bookstown app.",
      fullDescription: "Designed a user-friendly interface for Bookstown, an online bookstore app, focusing on intuitive navigation and engaging user experience.",
      category: "UI/UX Design",
      tools: ["Figma"],
      image: "/images/books.png",
      details: {
        duration: "3 months",
        role: "UI/UX Designer",
        descriptions: "Designed a user-friendly interface for Bookstown, an online bookstore app, focusing on intuitive navigation and engaging user experience.",
      },
      hasLink: true,
      link: "https://www.figma.com/proto/jSxqhm7VsGQWisEW9Q5KWB/SuperShy_BooksTown?node-id=25-6&p=f&t=BPC52qNXvYoDEIGn-0&scaling=scale-down&content-scaling=fixed&page-id=25%3A2&starting-point-node-id=25%3A3",
    },
    {
      id: 4,
      title: "Flexy App",
      description: "UI/UX design for Flexy app.",
      fullDescription: "Designed a modern and responsive interface for Flexy, a flexible workspace management app, focusing on user engagement and ease of use.",
      category: "UI/UX Design",
      tools: ["Figma"],
      image: "/images/flexyapp.png",
      details: {
        duration: "6 months",
        role: "UI/UX Designer",
        descriptions: "Designed a modern and responsive interface for Flexy, a flexible workspace management app, focusing on user engagement and ease of use.",
      },
      hasLink: true,
      link: "https://www.figma.com/proto/lwnoA9GxUdOjM9XEPhOlPV/flexyApp?node-id=100-97&p=f&t=rCrlNTL5snRJqv5Y-0&scaling=scale-down&content-scaling=fixed&page-id=27%3A25&starting-point-node-id=100%3A97&show-proto-sidebar=1",
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website to showcase my projects, certificates, and experiences.",
      fullDescription: "This website is built with Next.js and Tailwind CSS to display my projects, certificates, and organizational experiences. It features interactive UI, dark mode, and animated transitions using Framer Motion.",
      category: "Full Stack Development",
      tools: ["portofolio", "Next.js"],
      image: "/images/porto.png", // ganti dengan gambar portfolio kamu
      details: {
        duration: "Ongoing",
        role: "Fullstack Developer & Designer",
        descriptions: "This website is built with Next.js and Tailwind CSS to display my projects, certificates, and organizational experiences. It features interactive UI, dark mode, and animated transitions using Framer Motion.",
      },
      hasLink: true,
      link: "https://www.windyds.my.id/", // ganti dengan link portfolio kamu jika sudah online
      noDetail: true, // penanda khusus
    },
  ]

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: easeIn,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "UI/UX Design":
        return "bg-blue-100 text-blue-600 border-blue-200"
      case "Full Stack Development":
        return "bg-purple-100 text-purple-600 border-purple-200"
      default:
        return "bg-blue-100 text-blue-600 border-blue-200"
    }
  }

  const getToolColors = (tool: string) => {
    const colors: Record<string, string> = {
      Figma: "bg-blue-100 text-blue-600",
      Laravel: "bg-purple-100 text-purple-600",
      PHP: "bg-blue-100 text-blue-600",
      MySQL: "bg-purple-100 text-purple-600",
      JavaScript: "bg-blue-100 text-blue-600",
      "Adobe Illustrator": "bg-purple-100 text-purple-600",
      Principle: "bg-blue-100 text-blue-600",
      InVision: "bg-purple-100 text-purple-600",
      "Adobe XD": "bg-blue-100 text-blue-600",
      Maze: "bg-purple-100 text-purple-600",
      Hotjar: "bg-blue-100 text-blue-600",
    }
    return colors[tool] || "bg-blue-100 text-blue-600"
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              A showcase of my design and development work, demonstrating technical skills and creative problem-solving
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} onSelect={setSelectedProject} getCategoryColor={getCategoryColor} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {selectedProject && !selectedProject.noDetail && (
                <ProjectDetailModal
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                  getCategoryColor={getCategoryColor}
                  getToolColors={getToolColors}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({
  project,
  onSelect,
  getCategoryColor,
}: {
  project: Project
  onSelect: (project: Project) => void
  getCategoryColor: (category: string) => string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-0 shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (!project.noDetail) onSelect(project)
      }}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradasi di bawah gambar */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/90 via-white/40 to-transparent pointer-events-none" />
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-3 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.tools.slice(0, 3).map((tool: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs border-gray-200 text-gray-600">
              {tool}
            </Badge>
          ))}
        </div>

        {/* Tambahkan tombol/link ke project jika ada */}
        {project.hasLink && project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"
            onClick={e => e.stopPropagation()} // agar tidak buka modal
          >
            Project
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </CardContent>
    </Card>
  )
}

type Project = {
  id: number
  title: string
  description: string
  fullDescription: string
  category: string
  tools: string[]
  image: string
  details: {
    duration: string
    role: string
    descriptions: string
  }
  link?: string
  hasLink?: boolean
  noDetail?: boolean // tambahkan properti ini
}

function ProjectDetailModal({
  project,
  onClose,
  getCategoryColor,
  getToolColors,
}: {
  project: Project
  onClose: () => void
  getCategoryColor: (category: string) => string
  getToolColors: (tool: string) => string
}) {
  return (
    <div className="p-8">
      {/* Header with close button */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <Badge className={`mb-3 ${getCategoryColor(project.category)}`}>{project.category}</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{project.fullDescription}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-100">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Content with side image - Updated layout for bigger image */}
      <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
        {/* Detail */}
        <div className="flex-1">
          <div className="mb-4">
            <span className="font-semibold">Duration</span>
            <div className="mb-2">{project.details.duration}</div>
            <span className="font-semibold">Role</span>
            <div className="mb-2">{project.details.role}</div>
            <span className="font-semibold">Descriptions</span>
            <div className="mb-4">{project.details.descriptions}</div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <Badge key={index} className={getToolColors(tool)}>
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.hasLink && (
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            <Button variant="outline" onClick={onClose} className="border-gray-300 hover:bg-gray-50">
              Close
            </Button>
          </div>
        </div>

        {/* Project Image - Takes 2/5 of the space (bigger than before) */}
        <div className="flex-shrink-0 w-full md:w-[420px] flex justify-center mb-6 md:mb-0">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full max-w-[420px] max-h-[340px] h-auto object-contain rounded-lg shadow bg-white"
          />
        </div>
      </div>
    </div>
  )
}
