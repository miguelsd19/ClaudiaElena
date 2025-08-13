import { useState } from "react";
import { Search, Menu as MenuIcon } from "lucide-react";
import LogoMark from "./LogoMark";

const NAV_LEFT = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 items-center text-white">
          <nav className="flex items-center gap-6 uppercase tracking-[0.25em] text-xs text-white/80">
            {NAV_LEFT.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="justify-self-center">
            <a href="#inicio" aria-label="Logo">
                <LogoMark className="drop-shadow" />
            </a>
          </div>
          <div className="flex items-center justify-end gap-5 text-white/90">
            {/* <button aria-label="Buscar" className="hover:opacity-90"><Search className="h-5 w-5" /></button> */}
            <button aria-label="Menú" className="hover:opacity-90"><MenuIcon className="h-5 w-5" /></button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between text-white">
          <button aria-label="Abrir menú" onClick={() => setOpen(true)}><MenuIcon className="h-6 w-6" /></button>
          <a href="#inicio" aria-label="Logo"><LogoMark /></a>
          {/* <button aria-label="Buscar"><Search className="h-6 w-6" /></button> */}
        </div>
      </div>

      {/* Overlay menú móvil simple */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-3/4 max-w-xs bg-white text-slate-900 p-6">
            <div className="font-semibold mb-4">Menú</div>
            <nav className="grid gap-3">
              {NAV_LEFT.map((n) => (
                <a key={n.href} href={n.href} className="py-2" onClick={() => setOpen(false)}>{n.label}</a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
