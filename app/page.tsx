import { Wrapper } from "@/components/wrapper"
import { Hero } from "./_components/hero"
import { Education } from "./_components/education"

export default function Home() {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-screen-xl flex-col items-center border-x px-4 py-16">
      <Wrapper className="flex-col gap-8">
        <Hero />
        <Education />
      </Wrapper>
    </div>
  )
}
