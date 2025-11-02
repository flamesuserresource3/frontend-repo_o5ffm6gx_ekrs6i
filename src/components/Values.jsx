import { Rocket, Cpu, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Rocket,
    title: 'Real‑time 3D',
    text: 'Spline-powered hero scenes and interactive objects that run smoothly across devices.',
    accent: 'from-fuchsia-400 to-indigo-600',
  },
  {
    icon: Cpu,
    title: 'Motion Craft',
    text: 'Micro‑interactions, parallax, and cinematic timing using Framer Motion.',
    accent: 'from-cyan-400 to-violet-600',
  },
  {
    icon: Shield,
    title: 'Performance',
    text: 'Optimized assets, lazy loading, and accessible UI patterns out of the box.',
    accent: 'from-emerald-400 to-teal-600',
  },
  {
    icon: Sparkles,
    title: 'Visual Identity',
    text: 'Cohesive art direction with neon gradients and glassmorphism for a cyber feel.',
    accent: 'from-amber-300 to-rose-500',
  },
];

export default function Values() {
  return (
    <section id="values" className="relative py-24 bg-gradient-to-b from-slate-950/60 to-black/80">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Capabilities</h2>
          <p className="mt-3 text-white/80">
            I bring together design, interaction, and performance to craft immersive web experiences.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white shadow` }>
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/75">{item.text}</p>
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-gradient-to-tr from-fuchsia-400/20 to-indigo-500/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
