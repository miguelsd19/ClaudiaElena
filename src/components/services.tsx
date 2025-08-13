import { SERVICES } from "../data/services";
import SectionTitle from "./sectionTitle";

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Servicios" title="Soluciones a la medida" subtitle="Acompaño tu proyecto desde la idea hasta la entrega, con claridad y transparencia." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-sm bg-amber-100 text-amber-800 grid place-items-center mb-4">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-slate-900 mb-1">{s.title}</div>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
