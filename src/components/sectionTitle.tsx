export default function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string; }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-amber-600 mb-2">{eyebrow}</div>}
      <h2 className="text-2xl sm:text-4xl font-semibold text-slate-900 tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-600 mt-3">{subtitle}</p>}
    </div>
  );
}
