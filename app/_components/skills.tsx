import { Badge } from "@/components/ui/badge"
import { Wrapper } from "@/components/wrapper"

const skills = [
  "React",
  "Node.js",
  "Next.js",
  "Vite",
  "TypeScript",
  "Postgres",
  "Prisma",
  "drizzle"
]

export function Skills() {
  return (
    <Wrapper className="flex-wrap justify-center gap-2">
      {skills.map((skill, index) => (
        <Badge key={index} className="text-sm sm:text-base">
          {skill}
        </Badge>
      ))}
    </Wrapper>
  )
}
