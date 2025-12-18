'use client'

import { Mail, Instagram, MessageCircle, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-20 px-4 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Let&apos;s Collaborating with Us! 🙌
        </h2>

        <div className="flex justify-center gap-x-2 mb-12">
          <a
            href="mailto:projectmuuid@gmail.com"
            className="text-xl hover:text-primary transition transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.instagram.com/projectmu.dev/"
            className="text-xl hover:text-primary transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://wa.me/+6281807709000"
            className="text-xl hover:text-primary transition transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
          {/* <a
            href="#"
            className="text-xl hover:text-primary transition transform hover:scale-110"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a> */}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            © {currentYear} ProjectMu House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}