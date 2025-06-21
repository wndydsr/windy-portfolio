"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Package } from "lucide-react"

export default function OrganizationsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  return (
    <section id="organizations" className="py-16 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Organizations</h2>
            <div className="h-1 w-16 bg-purple-500 mx-auto"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="flex gap-6 mb-8">
              <div className="hidden sm:flex items-start pt-1">
                <div className="bg-purple-100 p-3 rounded-full shadow-sm border border-purple-200">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-md font-medium text-gray-900">Electrical Engineering Student Association</h3>
                    <span className="text-xs text-purple-600 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                      May 2024 - May 2025
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    Active member of the Electrical Engineering Student Association.
                  </p>

                  <div className="mt-2 pt-2 border-t border-purple-100">
                    {/* Logistics Division */}
                    <div className="flex items-center gap-2 mb-1">
                      <Package className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-gray-800 text-sm">Staff of the Library Division</span>
                    </div>
                    <p className="text-gray-700 text-xs pl-6 mb-2">
                      Supporting internal documentation and resource organization.
                    </p>
                    {/* Event Division */}
                    <div className="flex items-center gap-2 mb-1">
                      <Package className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-gray-800 text-sm">Event Committees – Various Roles</span>
                    </div>
                    <p className="text-gray-700 text-xs pl-6 mb-2">
                      Managed logistics for various programs and events, ensuring smooth execution and resource management.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
