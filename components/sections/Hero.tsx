'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), transparent, rgba(37, 99, 235, 0.2))',
            'linear-gradient(to bottom right, rgba(37, 99, 235, 0.2), transparent, rgba(147, 51, 234, 0.2))',
            'linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), transparent, rgba(37, 99, 235, 0.2))',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [-150, 150, -150],
          y: [-100, 100, -100],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-purple-500/50 text-sm backdrop-blur-sm">
              Welcome To ProjectMu House
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Creating Web Applications with
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Fresh Ideas and Attractive UI.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            We create amazing applications with attractive and functional UI
          </motion.p>


          <motion.button
            onClick={() => {
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-white"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={28} />
          </motion.button>

        </motion.div>
      </div>
    </section>
  )
}