import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Values from './components/Values';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <div className="fixed inset-0 -z-[1] bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.10),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.08),transparent_50%)]" />

      <Navigation />
      <main>
        <Hero />
        <Values />
        <Showcase />
      </main>
      <footer className="py-10 border-t border-white/10 bg-emerald-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-emerald-100/70">
          © {new Date().getFullYear()} Scouthouse Studio — Crafted in Bangladesh, shared worldwide.
        </div>
      </footer>
    </div>
  );
}

export default App;
