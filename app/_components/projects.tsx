import { ProjectCard } from "@/components/project-card"
import { Wrapper } from "@/components/wrapper"
import React from "react"

export function Projects() {
  return (
    <Wrapper className="flex-col gap-4">
      <h2 className="text-2xl font-bold">Projetos</h2>

      <ProjectCard
        img="/projects/moviesNook.png"
        title="moviesNook"
        url="https://wellingtongmota.github.io/movies-nook/"
        tecnologies={[
          "Vite",
          "TypeScript",
          "React Router",
          "Tailwind CSS",
          "Axios",
          "Tanstack Query"
        ]}
      >
        Bem vindo ao MovieNook! Um site para pesquisar filmes usando a API The
        Movie Database (TMDB) e salvar seus filmes favoritos usando a API
        Context.
      </ProjectCard>
    </Wrapper>
  )
}
