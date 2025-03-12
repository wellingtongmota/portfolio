import { ProjectCard } from "@/components/project-card"
import { Wrapper } from "@/components/wrapper"
import React from "react"

export function Projects() {
  return (
    <Wrapper className="flex-col gap-4">
      <h2 className="text-2xl font-bold">Projetos</h2>

      <ProjectCard
        img="/projects/justhome.png"
        title="JustHome"
        url="https://justhome.nookdev.com.br/"
        repository="https://github.com/wellingtongmota/justhome"
        tecnologies={[
          "Next.Js",
          "TypeScript",
          "Tailwind CSS",
          "Keen Slider",
          "Lucide React"
        ]}
      >
        Este é um site de demonstração da Justhome, uma agência imobiliária. O
        site exibe diversas funcionalidades e recursos que podem ser
        implementados para um negócio imobiliário real.
      </ProjectCard>

      <ProjectCard
        img="/projects/moviesNook.png"
        title="moviesNook"
        url="https://wellingtongmota.github.io/movies-nook/"
        repository="https://github.com/wellingtongmota/movies-nook"
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

      <ProjectCard
        img="/projects/camping.png"
        title="Camping - Fonte da Vida"
        url="https://wellingtongmota.github.io/camping/"
        repository="https://github.com/wellingtongmota/camping"
        tecnologies={[
          "Vite",
          "JavaScript",
          "React Router",
          "Chakra Ui",
          "Formik",
          "Yup"
        ]}
      >
        Site para reservar vaga no acampamento de jovens da igreja Fonte da
        Vida.
      </ProjectCard>
    </Wrapper>
  )
}
