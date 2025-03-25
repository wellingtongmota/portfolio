import { ExternalLink, Github } from "lucide-react"
import { Badge } from "./ui/badge"
import Link from "next/link"
import { Button } from "./ui/button"

type ProjectCardProps = {
  children: React.ReactNode
  img: string
  title: string
  url?: string
  repository?: string
  tecnologies?: string[]
}
export function ProjectCard({
  children,
  img,
  title,
  url,
  repository,
  tecnologies
}: ProjectCardProps) {
  return (
    <div className="grid overflow-hidden rounded-md border md:grid-cols-2 md:gap-4">
      <div className="bg-accent flex justify-center p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={title} className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col space-y-4 p-4 md:p-12">
        <h4 className="text-lg">{title}</h4>

        <div className="text-xs">{children}</div>

        <div className="space-y-2">
          <h5>Tecnologias</h5>
          <div className="flex flex-wrap gap-1">
            {tecnologies &&
              tecnologies.map((item, index) => (
                <Badge key={index} variant="outline">
                  {item}
                </Badge>
              ))}
          </div>
        </div>
        <div className="mt-auto flex items-center gap-1">
          {url && (
            <Button asChild size="icon" variant="ghost">
              <Link href={url} target="_blank">
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          )}

          {repository && (
            <Button asChild size="icon" variant="ghost">
              <Link href={repository} target="_blank">
                <Github className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
