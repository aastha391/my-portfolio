import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 bg-ink/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-mist">
            Experience
          </h2>
        </motion.div>

        {experience.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-accent2" />
              <span className="font-mono text-xs text-accent2 uppercase tracking-wide">{exp.type}</span>
            </div>

            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="font-display font-bold text-xl text-mist">{exp.role}</h3>
              <span className="font-mono text-xs text-muted">{exp.date}</span>
            </div>
            <p className="text-accent font-medium text-sm mb-4">{exp.company}</p>

            <p className="text-muted text-sm leading-relaxed mb-5">{exp.description}</p>

            <ul className="space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-mist/80">
                  <CheckCircle2 className="w-4 h-4 text-accent2 flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
