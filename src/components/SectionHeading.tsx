export default function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10">
      {eyebrow && <p className="mb-2 text-sm font-medium uppercase tracking-widest text-rose-dark">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
    </div>
  )
}
