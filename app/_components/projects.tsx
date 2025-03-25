import { ProjectCard } from "@/components/project-card"
import { Wrapper } from "@/components/wrapper"
import React from "react"

export function Projects() {
  return (
    <Wrapper className="flex-col gap-4">
      <h2 className="text-2xl font-bold">Projetos</h2>

      <ProjectCard
        img="/projects/todo_print.png"
        title="todoNookdev"
        url="https://todo.nookdev.com.br/"
        repository="https://github.com/wellingtongmota/todo"
        tecnologies={[
          "Next.Js",
          "TypeScript",
          "Better Auth",
          "Prisma",
          "React Hook Form",
          "Zod",
          "date-fns",
          "Tailwind CSS",
          "Lucide React"
        ]}
      >
        Site desenvolvido com Next.Js. Criado para mostrar o uso das Server
        Actions, integração com banco de dados PostgreSQL através do Prisma ORM
        e autenticação com o framework Better Auth.
        <br />
        <p className="mt-1">Funcionalidades:</p>
        <ul className="mt-1 list-inside list-disc">
          <li>Autenticação de usuário</li>
          <li>Autenticação pelo GitHub</li>
          <li>Verificação por e-mail</li>
          <li>CRUD de to-dos</li>
          <li>Temas claro e escuro</li>
        </ul>
      </ProjectCard>

      <ProjectCard
        img="/projects/justhome_print.png"
        title="Landing Page - JustHome"
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
        img="/projects/nextcent_print.png"
        title="Landing Page - Nextcent"
        url="https://nextcent.nookdev.com.br/"
        repository="https://github.com/wellingtongmota/next-cent"
        tecnologies={["Next.Js", "TypeScript", "Tailwind CSS", "Lucide React"]}
      >
        Landing Page baseado em um design do figma. Créditos ao autor do design
        estão no README do repositório.
      </ProjectCard>

      <ProjectCard
        img="/projects/moviesNook_print.png"
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
