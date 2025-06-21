"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, Github, MessageSquare, Send, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast" // perbaiki import toast

export default function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null) // tambahkan tipe number | null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    if (res.ok) {
      toast({ title: "Message sent successfully!" })
      setFormData({ name: "", email: "", message: "" })
    } else {
      toast({ title: "Failed to send message.", variant: "destructive" })
    }
  }

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

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/windy-destiana",
      description: "Professional Network",
      color: "bg-blue-100 text-blue-600 border-blue-200",
      hoverColor: "hover:bg-blue-200",
      interactive: true,
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/wndydsr",
      description: "Code Repository",
      color: "bg-purple-100 text-purple-600 border-purple-200",
      hoverColor: "hover:bg-purple-200",
      interactive: true,
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "https://mail.google.com/mail/?view=cm&to=windydestianasari@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      description: "windydestianasari@gmail.com",
      color: "bg-blue-100 text-blue-600 border-blue-200",
      hoverColor: "hover:bg-blue-200",
      interactive: true,
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/wndydsr_",
      description: "More about me",
      color: "bg-purple-100 text-purple-600 border-purple-200",
      hoverColor: "hover:bg-purple-200",
      interactive: true,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
            <div className="h-1 w-16 bg-purple-500 mx-auto"></div>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="w-full min-h-[120px] border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${link.color} ${link.hoverColor} ${
                      link.interactive ? "hover:scale-105 hover:shadow-md" : "hover:shadow-sm"
                    }`}
                    onMouseEnter={() => (link.interactive ? setHoveredIndex(index) : null)}
                    onMouseLeave={() => (link.interactive ? setHoveredIndex(null) : null)}
                  >
                    <motion.div
                      className={`p-2 rounded-full flex-shrink-0`}
                      animate={
                        link.interactive && hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
                      }
                      transition={{ duration: 0.2 }}
                    >
                      {link.icon}
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-gray-800 text-sm">{link.name}</div>
                      <div className="text-xs text-gray-600 truncate">{link.description}</div>
                    </div>
                    {link.interactive && (
                      <motion.div
                        animate={{ x: hoveredIndex === index ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400"
                      >
                        →
                      </motion.div>
                    )}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
