import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProfilePhoto({ name }) {
  const [errored, setErrored] = useState(false)
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-8"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent2 opacity-30 blur-xl" />
      <div className="relative w-full h-full rounded-full border-2 border-accent/40 overflow-hidden bg-surface2 flex items-center justify-center">
        {!errored ? (
          <img
            src="/profile.jpg"
            alt={name}
            onError={() => setErrored(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span className="font-display font-bold text-3xl text-accent">{initials}</span>
        )}
      </div>
    </motion.div>
  )
}
