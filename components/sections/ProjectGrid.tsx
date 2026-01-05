'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectGrid() {

  const MotionLink = motion(Link)

  const projects = [
    {
      title: 'Pandaswim Class',
      desc: 'Web App • Admin Panel • Currency',
      img: '/images/projects/image-1.png',
      cover: true,
      slug: 'pandaswim-class',
    },
    {
      title: 'SIBOP',
      desc: 'Web App • Admin Panel • Geomap',
      img: '/images/projects/image-2.png',
      contain: true,
      slug: 'sibop',
    },
    {
      title: 'Inventu',
      desc: 'Web App • Admin Panel • Inventory Management',
      img: '/images/projects/image-3.png',
      cover: true,
      slug: 'inventu',
    },
    {
      title: 'POSMu',
      desc: 'Web App • Admin Panel • Point of Sale',
      img: '/images/projects/image-4.png',
      contain: true,
      slug: 'posmu',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 bg-[#252525]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 sm:mb-12 gap-4">
          <div className="text-center sm:text-left w-full sm:w-auto">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-5 sm:px-6 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-purple-500 transition text-sm sm:text-base"
            >
              Selected Projects
            </motion.button>
          </div>

          {/* See more projects button */}
          <div className="w-full sm:w-auto text-center sm:text-right">
            <MotionLink
              href="/projects"
              aria-label="See more projects"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-gray-200 text-sm sm:text-base hover:bg-white/5 transition"
            >
              See more projects
              →
            </MotionLink>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* ===== PROJECT CARD TEMPLATE ===== */}
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                aria-label={`View details for ${project.title}`}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="relative aspect-square overflow-hidden rounded-3xl cursor-pointer group bg-white ring-1 ring-black/5 hover:ring-0"
                >
                  {/* Background blur (for contain images) */}
                  {project.contain && (
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover blur-xl scale-110 opacity-60"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  )}

                  {/* Main image */}
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
