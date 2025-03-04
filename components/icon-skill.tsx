import { cn } from "@/lib/utils"
import Image from "next/image"
import { ElementType, HTMLAttributes } from "react"

type IconSkillProps = HTMLAttributes<HTMLDivElement> & {
  className?: string
  img: string
  title: string
}
export function IconSkill({ className, img, title, ...props }: IconSkillProps) {
  return (
    <div
      className="max-w- flex flex-col items-center justify-between space-y-1.5"
      {...props}
    >
      <Image
        width={48}
        height={48}
        src={img}
        alt={title}
        className={cn(["object-contain", className])}
      />

      <p className="text-muted-foreground text-sm">{title}</p>
    </div>
  )
}
