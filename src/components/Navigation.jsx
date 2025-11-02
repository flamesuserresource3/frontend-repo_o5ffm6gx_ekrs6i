import { useState } from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#values', label: 'Capabilities' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-4 py-3 shadow-lg ring-1 ring-black/5">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 select-none">
              <div className="relative">
                <span className="absolute -inset-1 rounded-full bg-fuchsia-500/30 blur" />
                <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white shadow">
                  <Rocket className="h-5 w-5" />
                </div>
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-white tracking-wide">Nebula Studio</div>
                <div className="text-xs text-white/70 flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> 3D • Motion • Web
                </div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/90 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-fuchsia-500/30 transition-shadow"
              >
                Start a Project
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="mt-3 md:hidden border-t border-white/10 pt-3">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-white/90 hover:text-white hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white"
                >
                  Start a Project
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
