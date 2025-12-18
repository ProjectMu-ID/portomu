'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { PricingPackage } from '@/app/types'

const packages: PricingPackage[] = [
  {
    id: 1,
    name: 'Standard Package',
    price: '5jt',
    features: ['Responsive Design', 'SEO Optimized', '3 Pages'],
  },
  {
    id: 2,
    name: 'Standard Package',
    price: '5jt',
    featured: true,
    features: ['Responsive Design', 'SEO Optimized', '5 Pages', 'Premium Support'],
  },
  {
    id: 3,
    name: 'Standard Package',
    price: '5jt',
    features: ['Responsive Design', 'SEO Optimized', '3 Pages'],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full border border-purple-500 mb-4 hover:bg-purple-500/10 transition"
          >
            Pricelist
          </motion.button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`
                p-8 rounded-2xl border backdrop-blur-sm
                ${
                  pkg.featured
                    ? 'bg-gradient-to-br from-purple-900/50 to-transparent border-purple-500'
                    : 'bg-black/50 border-gray-800 hover:border-purple-500/50'
                }
                transition-all
              `}
            >
              <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
              <div className="mb-6">
                <p className="text-sm text-gray-400">IDR</p>
                <p className="text-4xl font-bold">
                  <span className="text-primary">{pkg.price}</span>
                </p>
              </div>

              {pkg.features && (
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-purple-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-medium">
                Choose Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}