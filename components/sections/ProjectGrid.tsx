'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 bg-[#252525]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 sm:px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-purple-500 transition text-sm sm:text-base"
          >
            Selected Projects
          </motion.button>
        </div>

        {/* Grid */}
        <div className="grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* ===== PROJECT CARD TEMPLATE ===== */}
            {[
              {
                title: 'Pandaswim Class',
                desc: 'Web App • Admin Panel • Currency',
                img: '/images/projects/image-1.png',
                cover: true,
              },
              {
                title: 'SIBOP',
                desc: 'Web App • Admin Panel • Geomap',
                img: '/images/projects/image-2.png',
                contain: true,
              },
              {
                title: 'Inventu',
                desc: 'Web App • Admin Panel • Inventory Management',
                img: '/images/projects/image-3.png',
                cover: true,
              },
              {
                title: 'POSMu',
                desc: 'Web App • Admin Panel • Point of Sale',
                img: '/images/projects/image-4.png',
                contain: true,
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative aspect-square overflow-hidden rounded-3xl cursor-pointer group bg-white ring-1 ring-black/5 hover:ring-0"
              >
                {/* Background blur (for 16:9 images) */}
                {project.contain && (
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover blur-xl scale-110 opacity-60"
                  />
                )}

                {/* Main image */}
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className={[
                    'transition-transform duration-500 ease-out',
                    project.cover
                      ? 'object-cover object-top group-hover:scale-105'
                      : 'object-contain p-4 sm:p-6 group-hover:scale-105',
                  ].join(' ')}
                />

                {/* Overlay (desktop hover only) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text */}
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 sm:translate-y-3 sm:group-hover:translate-y-0">
                  <h4 className="text-white font-semibold text-base sm:text-lg leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
