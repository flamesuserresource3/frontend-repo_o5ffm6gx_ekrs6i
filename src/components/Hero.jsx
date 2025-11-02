import Spline from '@splinetool/react-spline';
import { ArrowRight, Star, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft neon overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-violet-900/30 to-black/70" />

      {/* Animated Scout Emblem (floating compass) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-20 hidden md:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="relative h-28 w-28"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500/15 to-indigo-600/15 blur" />
          <div className="absolute inset-2 rounded-full border border-fuchsia-400/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white shadow-lg">
              <Compass className="h-8 w-8" />
              <span className="sr-only">Scout emblem</span>
            </div>
          </div>
          {/* Orbiting glow */}
          <motion.span
            className="absolute -right-1 top-1 h-3 w-3 rounded-full bg-fuchsia-300 shadow-[0_0_16px_4px_rgba(217,70,239,0.6)]"
            animate={{ y: [0, -6, 0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />
        </motion.div>
        <div className="mt-3 select-none rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 shadow">
          Scout Mode: Active
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 shadow">
              <Star className="h-3.5 w-3.5 text-fuchsia-300" />
              Futuristic 3D • Interactive • Cyber Aesthetic
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              3D experiences for bold, modern brands
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              I design and build immersive, animated websites with real‑time 3D, cinematic motion, and responsive performance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-fuchsia-500/30 transition-shadow"
              >
                Explore Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
