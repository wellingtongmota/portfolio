import { IconSkill } from "@/components/icon-skill"
import { Wrapper } from "@/components/wrapper"

export function Skills() {
  return (
    <Wrapper className="animate-fade flex-col pt-4 opacity-0">
      <h2 className="text-2xl font-bold">Skills</h2>
      <p className="pt-2 pb-8 text-sm">
        As habilidades, ferramentas e tecnologias em que sou realmente bom.
      </p>

      <div className="flex w-full flex-wrap items-center justify-center gap-12">
        <IconSkill img="/skills/icon_react.svg" title="React" />
        <IconSkill img="/skills/icon_javascript.svg" title="JavaScript" />
        <IconSkill img="/skills/icon_typescript.svg" title="TypeScript" />
        <IconSkill img="/skills/icon_nodejs.svg" title="Node.js" />
        <IconSkill img="/skills/icon_nextjs.svg" title="Next.Js" />
        <IconSkill img="/skills/icon_vite.svg" title="Vite" />
        <IconSkill img="/skills/icon_tailwindcss.svg" title="Tailwindcss" />
        <IconSkill img="/skills/icon_git.svg" title="Git" />
        <IconSkill
          img="/skills/icon_expressjs.svg"
          title="Express.JS"
          className="rounded-md p-1 dark:bg-neutral-300"
        />
        <IconSkill img="/skills/icon_postgres.svg" title="PostgresSQL" />
        <IconSkill
          img="/skills/icon_prismaorm.svg"
          title="Prisma ORM"
          className="rounded-md p-1 dark:bg-neutral-300"
        />
        <IconSkill img="/skills/icon_drizzle.svg" title="Drizzle ORM" />
      </div>
    </Wrapper>
  )
}
