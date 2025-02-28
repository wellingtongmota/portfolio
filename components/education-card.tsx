type EducationCardProps = {
  img: string
  title: string
  description: string
}

export function EducationCard({ img, title, description }: EducationCardProps) {
  return (
    <div className="bg-accent flex items-center gap-4 rounded-md p-4">
      <div className="aspect-square w-full max-w-16 overflow-hidden rounded-md bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}
