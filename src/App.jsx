import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Values from './components/Values';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle cosmic background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.10),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.08),transparent_50%)]" />

      <Navigation />
      <main>
        <Hero />
        <Values />
        <Showcase />
      </main>
      <footer className="py-10 border-t border-white/10 bg-black/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/70">
          © {new Date().getFullYear()} Nebula Studio — 3D, motion, and web experiences.
        </div>
      </footer>
    </div>
  );
}

export default App;
