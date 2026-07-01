import { profile } from '../data/education.js'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted font-mono">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React, Three.js &amp; Framer Motion</span>
      </div>
    </footer>
  )
}
