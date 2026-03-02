import { Wrapper } from "@/components/wrapper"
import { Certificates } from "./_components/certificates"
import { Education } from "./_components/education"
import { Hero } from "./_components/hero"
import { MyDock } from "./_components/my-dock"
import { Projects } from "./_components/projects"
import { Skills } from "./_components/skills"
import { Info } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="bg-destructive flex items-center gap-2 p-1 text-sm text-white">
        <Info className="size-4" />
        <p>Sites em Next.Js estão em manutenção</p>
      </div>
      <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col items-center border-x px-4 pt-8 pb-4 sm:pt-16">
        <Wrapper className="flex-col gap-8">
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Certificates />
          <MyDock />
        </Wrapper>
      </div>
      ♫
    </>
  )
}
