"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 font-medium text-sm mb-2 border border-blue-100">
              Designing Interfaces, Building Experiences
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Windy Destiana Sari</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              <span className="text-purple-600 font-medium">Informatics Engineering Student at Politeknik Negeri Semarang</span>
            </p>
            <p className="text-sm text-gray-600 max-w-2xl">
                Turning ideas into meaningful digital experiences by exploring UI/UX and building interfaces that feel easy to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button
                asChild
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link href="#projects">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-full px-6 py-2 transition-all duration-300"
              >
                <a href="/windy-cv.pdf" download>
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden shadow-lg border-4 border-blue-400">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/windyporto.jpg"
                  alt="Windy Destiana Sari"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
