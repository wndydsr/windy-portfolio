"use client"

import { useState } from "react"
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { Target, Code2, Palette, X, Award, BookOpen, Users } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Highlight = {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  bgColor: string
  iconBg: string
  details: {
    overview: string
    skills: string[]
    achievements: string[]
    experience: string
  }
}

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null)

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
        duration: 0.4,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: easeInOut, // Use the imported easing function or another valid easing
      },
    },
  }

  const highlights = [
    {
      id: 1,
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: "Goal-Oriented",
      description: "Focused on delivering results that meet both user needs and business objectives",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      details: {
        overview:
          "I approach every project with clear objectives and measurable outcomes. My goal-oriented mindset ensures that design decisions are always aligned with business goals and user needs.",
        skills: ["Strategic Planning", "User Research", "Data-Driven Design", "KPI Analysis"],
        achievements: [
          "Increased user engagement by 40% through strategic UX improvements",
          "Reduced bounce rate by 25% with optimized user flows",
          "Improved conversion rates by 30% through A/B testing",
        ],
        experience:
          "Throughout my academic projects and internships, I've consistently focused on creating solutions that deliver tangible results. I believe in setting clear success metrics from the start and iterating based on user feedback and data insights.",
      },
    },
    {
      id: 2,
      icon: <Code2 className="h-6 w-6 text-purple-500" />,
      title: "Technical Skills",
      description: "Hands-on with modern development and design tools, while continuing to learn more.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      details: {
        overview:
          "I bridge the gap between design and development with hands-on experience in both domains. This technical foundation allows me to create designs that are not only beautiful but also feasible and efficient to implement.",
        skills: ["Frontend Development", "UI/UX Design", "Prototyping", "Version Control"],
        achievements: [
          "Built 5+ responsive web applications using modern frameworks",
          "Created 20+ high-fidelity prototypes in Figma",
          "Contributed to open-source projects on GitHub",
        ],
        experience:
          "My technical journey started with learning HTML/CSS and has evolved to include modern frameworks like Flutter and Laravel. I'm passionate about staying updated with the latest design and development trends, ensuring my skills remain relevant in the fast-evolving tech landscape.",
      },
    },
    {
      id: 3,
      icon: <Palette className="h-6 w-6 text-blue-600" />,
      title: "Creative Problem Solving",
      description: "Combining creativity with analytical thinking to solve complex challenges",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      details: {
        overview:
          "I thrive on tackling complex design challenges by combining creative thinking with systematic problem-solving approaches. Every design problem is an opportunity to innovate and create meaningful user experiences.",
        skills: ["Design Thinking", "User Journey Mapping", "Information Architecture", "Creative Ideation"],
        achievements: [
          "Redesigned complex workflows reducing user task completion time by 50%",
          "Created innovative solutions for accessibility challenges",
          "Developed design systems that improved team efficiency by 35%",
        ],
        experience:
          "My approach to problem-solving involves deep user research, iterative design processes, and continuous testing. I believe that the best solutions come from understanding the root cause of problems and thinking beyond conventional approaches.",
      },
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              I'm Windy Destiana Sari, an Informatics Engineering student at Politeknik Negeri Semarang with a passion
              for creating intuitive and impactful digital experiences. I specialize in UI/UX design and frontend
              development, with expertise in tools like Figma and Flutter.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              I enjoy working at the intersection of design and development, where I can turn ideas into well-crafted and functional digital experiences.
              I'm eager to contribute to innovative projects and grow my
              skills in a dynamic internship environment.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`${item.bgColor} p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-white`}
              >
                <div className="flex items-center mb-4">
                  <div className={`${item.iconBg} p-3 rounded-full shadow-sm`}>{item.icon}</div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* About Detail Modal */}
      <AnimatePresence>
        {selectedHighlight && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedHighlight(null)}
            />
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AboutDetailModal highlight={selectedHighlight} onClose={() => setSelectedHighlight(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

type AboutDetailModalProps = {
  highlight: Highlight
  onClose: () => void
}

function AboutDetailModal({ highlight, onClose }: AboutDetailModalProps) {
  if (!highlight) return null // Tambahan pengaman jika dipanggil tanpa highlight
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className={`${highlight.iconBg} p-3 rounded-full shadow-sm`}>{highlight.icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{highlight.title}</h2>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-100">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Overview */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Overview
          </h3>
          <p className="text-gray-700 leading-relaxed">{highlight.details.overview}</p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-purple-500" />
            Related Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {highlight.details.skills.map((skill, index) => (
              <Badge key={index} className="bg-blue-100 text-blue-700">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500" />
            Key Achievements
          </h3>
          <ul className="space-y-2">
            {highlight.details.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" />
            Experience & Approach
          </h3>
          <p className="text-gray-700 leading-relaxed">{highlight.details.experience}</p>
        </div>

        {/* Close Button */}
        <div className="pt-4">
          <Button variant="outline" onClick={onClose} className="w-full border-gray-300 hover:bg-gray-50">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
