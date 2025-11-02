import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Hill Tracts Poster Series',
    subtitle: 'Culture & Landscape',
    color: 'from-emerald-400 to-green-700',
  },
  {
    title: 'Urban Scout Identity',
    subtitle: 'Brand System',
    color: 'from-teal-300 to-emerald-600',
  },
  {
    title: 'Mangrove Guardian',
    subtitle: 'Environmental Campaign',
    color: 'from-lime-300 to-green-600',
  },
  {
    title: 'Jamboree 2.0',
    subtitle: 'Event Visuals',
    color: 'from-cyan-300 to-emerald-500',
  },
  {
    title: 'Folk Patterns Lab',
    subtitle: 'Generative Study',
    color: 'from-amber-300 to-rose-400',
  },
  {
    title: 'Delta Typography',
    subtitle: 'Type Exploration',
    color: 'from-indigo-300 to-violet-500',
  },
];

function ProjectCard({ title, subtitle, color }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-30`} />
      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-emerald-100/85">{subtitle}</p>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 p-2 text-white/90 group-hover:bg-white/20 transition-colors">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 h-40 w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.25),transparent_60%)]" />
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-emerald-950/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Projects</h2>
            <p className="mt-3 text-emerald-100/90">
              An interactive gallery of posters, identities, and digital experiments crafted with a scout’s curiosity.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:text-white">
            Get the full portfolio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-900/60 to-emerald-800/40 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s build something meaningful</h3>
              <p className="mt-2 text-emerald-100/85">
                Available for branding, poster design, editorial, and digital art collaborations.
              </p>
            </div>
            <a
              href="mailto:studio@scouthouse.design"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Email studio@scouthouse.design
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
