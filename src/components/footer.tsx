import { BRAND } from "../data/brand";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.</div>
        <div className="text-sm text-slate-500">Hecho con <span className="text-amber-600">arquitectura</span> y detalle.</div>
      </div>
    </footer>
  );
}
