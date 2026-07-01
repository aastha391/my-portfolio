import { motion } from 'framer-motion'

export default function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card rounded-2xl p-6 hover:border-accent/40 transition-colors"
    >
      <h3 className="font-display font-semibold text-mist mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-md bg-surface2 text-xs font-mono text-accent2 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
