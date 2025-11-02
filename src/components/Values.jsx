import { Compass, Leaf, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Compass,
    title: 'Purposeful',
    text: 'Designs guided by clear direction and the needs of the community.',
    accent: 'from-emerald-400 to-green-600',
  },
  {
    icon: Leaf,
    title: 'Nature-first',
    text: 'Organic forms, earthy palettes, and textures inspired by the outdoors.',
    accent: 'from-green-300 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'In Service',
    text: 'Creating for impact with empathy, integrity, and craft.',
    accent: 'from-rose-300 to-amber-400',
  },
  {
    icon: Sparkles,
    title: 'Modern Craft',
    text: 'Balancing tradition with bold, contemporary expression.',
    accent: 'from-cyan-300 to-indigo-500',
  },
];

export default function Values() {
  return (
    <section id="values" className="relative py-24 bg-gradient-to-b from-emerald-900/40 to-emerald-950/60">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.25),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">The Scouting Spirit</h2>
          <p className="mt-3 text-emerald-100/90">
            A design practice rooted in values—trust, discipline, and love for nature—transformed into immersive, modern visuals.
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
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-emerald-950 shadow` }>
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-emerald-100/80">{item.text}</p>
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-gradient-to-tr from-emerald-400/20 to-green-500/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
