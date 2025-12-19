'use client'

import { motion } from 'framer-motion'
import { Instagram, } from 'lucide-react'
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Card 1 - Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm justify-between flex flex-col"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 leading-tight">
                <span className="text-purple-400">ProjectMu.House</span> is a{' '}
                <span className="text-white">website application developer</span>{' '}
                with more than{' '}
                <span className="text-white">3 years experience.</span>
              </h2>
            </div>
            <div className="flex items-center justify-end gap-x-2">
              <p className="text-gray-400 text-sm">Stay Linked With Us</p>
              <div className="flex gap-x-1">
                <a
                  href="https://www.instagram.com/projectmu.dev/"
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center hover:scale-110 transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/+6281807709000"
                  className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/orgs/ProjectMu-ID/dashboard"
                  className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center hover:scale-110 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 0z" />
                  </svg>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Card 2 - Logo P */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br bg-white/90 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-purple-400 text-7xl font-bold mb-2" style={{ fontFamily: 'monospace' }}>
                {/* <span className="inline-block"> */}
                <div className="flex flex-col items-start text-4xl leading-tight">
                  <Image src="/images/logo-default.png" alt="Company Logo" width={300} height={300} />
                </div>
                {/* </span> */}
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Projects Count */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-2">
              Over <span className="text-white">10+</span>
            </h3>
            <h3 className="text-3xl font-bold mb-3">
              <span className="text-white">projects</span>
            </h3>
            <p className="text-gray-400">
              have been completed{' '}
              <span className="text-red-500 text-2xl">💯</span>
            </p>
          </motion.div>
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 4 - Empty/Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm min-h-[200px]"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Design <span className="text-purple-400">First</span>, Always
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We believe great software starts from great visuals.
                  Every pixel is crafted to feel smooth, modern, and
                  emotionally engaging — without sacrificing performance.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['UI/UX Focused', 'Clean Code', 'Scalable', 'Accessible'].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 5 - Large Empty/Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm min-h-[200px]"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  How We <span className="text-purple-400">Build</span> Products
                </h3>

                <p className="text-gray-400 max-w-2xl leading-relaxed">
                  We combine modern tech stacks with aesthetic-driven design
                  principles. Our workflow is fast, collaborative, and highly
                  iterative — built for startups, brands, and digital products
                  that want to stand out.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h5 className="font-semibold mb-2">🎨 Design</h5>
                  <p className="text-sm text-gray-400">
                    UI/UX research, wireframe, and visual systems
                    that feel premium and intuitive.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h5 className="font-semibold mb-2">⚙️ Develop</h5>
                  <p className="text-sm text-gray-400">
                    Modern frameworks, clean architecture,
                    and performance-focused implementation.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h5 className="font-semibold mb-2">🚀 Deliver</h5>
                  <p className="text-sm text-gray-400">
                    Scalable products, ready to grow,
                    easy to maintain, and loved by users.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}