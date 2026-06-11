'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCalendar, HiLocationMarker, HiEye } from 'react-icons/hi'

const projects = [
  { id: 1, title: 'Pengiriman Material Industri', category: 'Logistik', date: 'Jan 2026', location: 'Jakarta', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600' },
  { id: 2, title: 'Distribusi Minuman KOJE', category: 'F&B', date: 'Feb 2026', location: 'Surabaya', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600' },
  { id: 3, title: 'Warehouse Operasional', category: 'Logistik', date: 'Mar 2026', location: 'Jakarta', image: 'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=600' },
]

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Activities
          </span>
          <h2 className="section-title">
            Dokumentasi <span className="text-primary">Operasional</span>
          </h2>
          <p className="section-subtitle">Kegiatan nyata distribusi dan kolaborasi bersama klien</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(project.image)}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition">
                <p className="text-accent text-xs font-semibold">{project.category}</p>
                <h3 className="text-white font-bold">{project.title}</h3>
                <div className="flex gap-3 text-white/70 text-xs mt-1">
                  <span className="flex items-center gap-1"><HiCalendar /> {project.date}</span>
                  <span className="flex items-center gap-1"><HiLocationMarker /> {project.location}</span>
                </div>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <HiEye className="text-white text-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" className="max-w-full max-h-full rounded-2xl" />
          <button className="absolute top-6 right-6 text-white text-2xl" onClick={() => setSelectedImage(null)}>✕</button>
        </div>
      )}
    </section>
  )
}
