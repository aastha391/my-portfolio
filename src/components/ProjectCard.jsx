import { motion } from 'framer-motion'
import { Users, User, Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`card rounded-2xl p-8 hover:border-accent/40 transition-colors ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-display font-bold text-2xl text-mist">{project.title}</h3>
          <p className="text-accent2 text-sm font-medium mt-1">{project.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
          <span className="font-mono text-xs text-muted whitespace-nowrap">{project.date}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-muted font-mono mb-4">
        {project.team.includes('Individual') ? <User size={14} /> : <Users size={14} />}
        {project.team}
        <span className="text-white/20">·</span>
        {project.role}
      </div>

      <p className="text-muted text-sm leading-relaxed mb-5">{project.description}</p>

      {project.stats && (
        <div className="flex gap-6 mb-5">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-bold text-xl text-accent">{stat.value}</div>
              <div className="text-xs text-muted font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      <ul className="space-y-2 mb-5">
        {project.points.map((point, i) => (
          <li key={i} className="text-sm text-mist/80 flex gap-2">
            <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-md bg-surface2 text-xs font-mono text-muted border border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
