export default function SectionHeading({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow?: string
  title: string
  centered?: boolean
}) {
  return (
    <div className={centered ? 'mb-10 text-center' : 'mb-10'}>
      {eyebrow && <p className="mb-2 text-sm font-medium uppercase tracking-widest text-rose-dark">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
    </div>
  )
}
