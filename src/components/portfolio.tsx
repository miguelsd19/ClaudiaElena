import { PROJECTS } from "../data/projects";
import SectionTitle from "./SectionTitle";

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Portafolio" title="Trabajo reciente" subtitle="Una selección de proyectos residenciales, comerciales e interiores." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group rounded-3xl overflow-hidden border bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={`${p.title} – ${p.category}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-widest text-slate-500">{p.category} • {p.year}</div>
                <h3 className="font-semibold text-slate-900 mt-1">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
