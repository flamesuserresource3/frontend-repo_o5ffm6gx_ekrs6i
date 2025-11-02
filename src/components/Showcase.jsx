import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Cyber Interface',
    subtitle: '3D UI Prototype',
    color: 'from-fuchsia-400 to-indigo-700',
  },
  {
    title: 'Astral Explorer',
    subtitle: 'Interactive Scene',
    color: 'from-cyan-300 to-violet-600',
  },
  {
    title: 'Neon Atlas',
    subtitle: 'Brand + Website',
    color: 'from-emerald-300 to-teal-600',
  },
  {
    title: 'Quantum Motion',
    subtitle: 'Micro‑interaction Set',
    color: 'from-amber-300 to-rose-500',
  },
  {
    title: 'Signal Grid',
    subtitle: 'Generative Patterns',
    color: 'from-indigo-300 to-purple-600',
  },
  {
    title: 'Void Runner',
    subtitle: 'Poster Series',
    color: 'from-pink-400 to-fuchsia-600',
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
            <p className="mt-1 text-sm text-white/80">{subtitle}</p>
          </div>
          <div className="rounded-full border border-white/20 bg-white/10 p-2 text-white/90 group-hover:bg-white/20 transition-colors">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 h-40 w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.25),transparent_60%)]" />
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-black/70">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Projects</h2>
            <p className="mt-3 text-white/80">
              A curated gallery of 3D interfaces, interactive scenes, and motion studies.
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

        <div id="contact" className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/50 to-fuchsia-800/30 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s build something immersive</h3>
              <p className="mt-2 text-white/80">
                Available for product launches, portfolio sites, and interactive installations.
              </p>
            </div>
            <a
              href="mailto:hello@nebulastudio.dev"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-fuchsia-500/30 transition-shadow"
            >
              Email hello@nebulastudio.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
