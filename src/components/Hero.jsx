import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ProfilePhoto from './ProfilePhoto.jsx'
import { profile } from '../data/education.js'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ProfilePhoto name={profile.name} />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-accent2 mb-6 tracking-wide"
        >
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl leading-tight text-mist mb-6"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
        >
          <span className="text-gradient font-medium">{profile.tagline}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-7 py-3 bg-accent text-ink rounded-full font-semibold hover:bg-accent-light transition-colors"
          >
            View Projects
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="px-7 py-3 border border-white/15 rounded-full font-semibold text-mist hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-7 py-3 text-muted hover:text-accent transition-colors font-mono text-sm"
          >
            Download Resume ↓
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToProjects}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  )
}
