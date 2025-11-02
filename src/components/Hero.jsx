import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-emerald-950/60" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-emerald-100 shadow">
              <Star className="h-3.5 w-3.5 text-amber-300" />
              Inspired by the spirit of Bangladesh Scouts
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Nature-led graphic design with a modern soul
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/90">
              I craft visual identities, posters, and digital art that blend scouting values—service, discipline, and nature—with contemporary aesthetics.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                Explore Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white"
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
