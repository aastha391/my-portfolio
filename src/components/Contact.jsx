import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Code2, Send, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/education.js'

// Sign up free at https://web3forms.com, get your Access Key, and paste it below.
const WEB3FORMS_ACCESS_KEY = '9f1ce827-8210-4bb7-bf70-5e59986a56d6'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      // Fallback: no email service connected yet — open the user's mail client instead
      window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        throw new Error('Failed')
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const links = [
    { name: 'Email', icon: Mail, href: `mailto:${profile.email}`, label: profile.email },
    { name: 'LinkedIn', icon: Linkedin, href: profile.linkedin, label: 'linkedin.com/in/aastha-sheoran' },
    { name: 'GitHub', icon: Github, href: profile.github, label: 'github.com/aastha391' },
    { name: 'LeetCode', icon: Code2, href: profile.leetcode, label: 'leetcode.com/u/Aastha_08' },
  ]

  return (
    <section id="contact" className="relative py-28 px-6 bg-ink/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-mist">
            Let's talk
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="card rounded-2xl p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-muted mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface2 rounded-lg text-mist placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface2 rounded-lg text-mist placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface2 rounded-lg text-mist placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-accent text-ink hover:bg-accent-light transition-colors disabled:opacity-60"
            >
              <Send size={18} />
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-sm text-red-400">Something went wrong. Try emailing directly instead.</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="card rounded-2xl p-6 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent2 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="text-mist">{profile.location}</p>
              </div>
            </div>
            <div className="card rounded-2xl p-6 flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent2 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted">Phone</p>
                <p className="text-mist">{profile.phone}</p>
              </div>
            </div>

            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === 'Email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="card rounded-2xl p-4 flex items-center gap-4 hover:border-accent/40 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-mist">{link.name}</p>
                    <p className="text-xs text-muted font-mono">{link.label}</p>
                  </div>
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
