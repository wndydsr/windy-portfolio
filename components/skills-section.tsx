"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Figma, Code, Palette, Users, MessageSquare, Clock } from "lucide-react"

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills = [
    {
      category: "Design Tools",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      items: [
        { name: "Figma", icon: <Figma className="h-5 w-5" />, color: "text-blue-500" },
        { name: "CorelDRAW", icon: <Palette className="h-5 w-5" />, color: "text-blue-500" },
        { name: "Canva", icon: <Palette className="h-5 w-5" />, color: "text-blue-500" },
      ],
    },
    {
      category: "Development Tools",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      items: [
        { name: "Flutter", icon: <Code className="h-5 w-5" />, color: "text-purple-500" },
        { name: "HTML", icon: <Code className="h-5 w-5" />, color: "text-purple-500" },
        { name: "CSS", icon: <Code className="h-5 w-5" />, color: "text-purple-500" },
        { name: "JavaScript", icon: <Code className="h-5 w-5" />, color: "text-purple-500" },
      ],
    },
    {
      category: "Interpersonal Skills",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      items: [
        { name: "Teamwork", icon: <Users className="h-5 w-5" />, color: "text-blue-600" },
        { name: "Communication", icon: <MessageSquare className="h-5 w-5" />, color: "text-blue-600" },
        { name: "Time Management", icon: <Clock className="h-5 w-5" />, color: "text-blue-600" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Skills</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                variants={itemVariants}
                className={`${skillGroup.bgColor} rounded-xl p-6 border ${skillGroup.borderColor} shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center p-3 bg-white/70 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <div className={skill.color}>{skill.icon}</div>
                      <span className="text-sm text-gray-800 ml-3 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
