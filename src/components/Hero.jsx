import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

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
