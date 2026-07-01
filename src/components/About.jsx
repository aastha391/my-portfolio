import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/education.js'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-ink/85 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-mist mb-6">
            A CS engineer who ships across the stack
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl">
            I'm a Computer Science Engineering student who moves comfortably between frontend
            interfaces, backend APIs, and machine learning pipelines. Whether it's building a
            multi-role dashboard in React or training a text classifier to hit a 0.91 F1-score, I
            care about shipping things that actually work end to end — not just in a notebook or a
            mockup.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-accent2" />
            <h3 className="font-display font-semibold text-xl text-mist">Education</h3>
          </div>

          <div className="relative border-l border-white/10 pl-8 space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[38px] top-1 w-2.5 h-2.5 rounded-full bg-accent" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="font-semibold text-mist">{item.degree}</h4>
                  <span className="font-mono text-xs text-muted">{item.date}</span>
                </div>
                {item.institution && (
                  <p className="text-sm text-muted mt-1">{item.institution}</p>
                )}
                <p className="text-sm text-accent2 mt-1 font-mono">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
