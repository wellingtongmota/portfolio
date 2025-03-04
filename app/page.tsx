import { Wrapper } from "@/components/wrapper"
import { Certificates } from "./_components/certificates"
import { Education } from "./_components/education"
import { Hero } from "./_components/hero"
import { MyDock } from "./_components/my-dock"
import { Projects } from "./_components/projects"
import { IconSkill } from "@/components/icon-skill"
import { Skills } from "./_components/skills"

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-screen-xl flex-col items-center border-x px-4 pt-8 pb-4 sm:pt-16">
      <Wrapper className="flex-col gap-8">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <MyDock />
      </Wrapper>
    </div>
  )
}
