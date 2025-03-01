import { ExternalLink } from "lucide-react"
import { Badge } from "./ui/badge"
import Link from "next/link"

type ProjectCardProps = {
  children: React.ReactNode
  img: string
  title: string
  url?: string
  tecnologies?: string[]
}
export function ProjectCard({
  children,
  img,
  title,
  url,
  tecnologies
}: ProjectCardProps) {
  return (
    <div className="group grid overflow-hidden rounded-md border md:grid-cols-2 md:gap-4">
      <div className="bg-accent flex max-h-96 justify-center p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="Print moviesNook" className="object-contain" />
      </div>
      <div className="space-y-4 p-4 md:p-12">
        <div className="flex items-center justify-between gap-1">
          <h4 className="text-lg">{title}</h4>
          {url && (
            <Link href={url} target="_blank">
              <ExternalLink className="text-muted-foreground size-4 group-hover:text-blue-600 group-hover:transition group-hover:duration-150" />
            </Link>
          )}
        </div>
        <div className="text-xs">{children}</div>

        <div className="flex flex-wrap gap-1">
          {tecnologies &&
            tecnologies.map((item, index) => (
              <Badge key={index} variant="outline">
                {item}
              </Badge>
            ))}
        </div>
      </div>
    </div>
  )
}
