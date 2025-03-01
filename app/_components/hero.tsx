import { Wrapper } from "@/components/wrapper"

export function Hero() {
  return (
    <Wrapper className="flex-col items-center gap-8 pb-2 md:flex-row md:justify-between">
      <div className="flex-1 justify-center space-y-4 sm:items-start">
        <h1 className="text-4xl font-extrabold">Olá, sou Wellington!</h1>
        <p className="sm:text-md max-w-lg text-sm">
          Desenvolvedor Frontend, especializado na criação de sites dinâmicos e
          performáticos com React, TypeScript, Next.js e Vite. Tenho experiência
          no desenvolvimento de micro-SaaS, utilizando PostgreSQL e ORMs como
          Prisma e Drizzle para modelagem de dados.
        </p>
      </div>

      <div className="flex flex-1 justify-center overflow-hidden rounded-4xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image_perfil.jpg"
          alt="Imagem de perfil"
          className="aspect-square max-w-56 min-w-24 overflow-hidden rounded-4xl"
        />
      </div>
    </Wrapper>
  )
}
