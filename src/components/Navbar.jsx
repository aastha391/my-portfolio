import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      let current = 'hero'
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            current = section.id
          }
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/5' : 'py-2'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display font-bold text-lg text-mist"
        >
          AS<span className="text-accent">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative px-4 py-2 text-sm font-mono transition-colors ${
                active === s.id ? 'text-accent' : 'text-muted hover:text-mist'
              }`}
            >
              {s.label}
              {active === s.id && (
                <motion.div
                  layoutId="navdot"
                  className="absolute bottom-0 left-4 right-4 h-px bg-accent"
                />
              )}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-3 px-4 py-2 text-sm font-mono rounded-full border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-mist"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-ink border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`text-left font-mono text-sm py-1 ${
                    active === s.id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {s.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="text-left font-mono text-sm py-1 text-accent"
              >
                Resume ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
