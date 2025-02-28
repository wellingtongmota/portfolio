import { Wrapper } from "@/components/wrapper"
import { Hero } from "./_components/hero"
import { Education } from "./_components/education"
import { Certificates } from "./_components/certificates"
import { Skills } from "./_components/skills"

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-screen-xl flex-col items-center border-x px-4 py-16">
      <Wrapper className="flex-col gap-8">
        <Hero />
        <Skills />
        <Education />
        <Certificates />
      </Wrapper>
    </div>
  )
}
