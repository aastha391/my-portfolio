import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6 bg-ink/85 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-mist">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="card rounded-2xl p-6 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <span className="font-mono text-xs text-muted">{cert.date}</span>
              </div>
              <h3 className="font-display font-semibold text-mist mb-1">{cert.title}</h3>
              <p className="text-accent2 text-sm font-medium mb-3">{cert.issuer}</p>
              <p className="text-muted text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
