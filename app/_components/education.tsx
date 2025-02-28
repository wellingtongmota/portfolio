import { EducationCard } from "@/components/education-card"
import { Wrapper } from "@/components/wrapper"

export function Education() {
  return (
    <Wrapper className="flex-col gap-4">
      <h2 className="pb-2 text-3xl font-bold">Formação</h2>

      <EducationCard
        img="/icons/anhanguera.jpg"
        title="Faculdade Anhanguera"
        description="Ciência da Computação - 2016 • 2021"
      />

      <EducationCard
        img="/icons/ifsp.jpg"
        title="Instituto Federal de Educação, Ciência e Tecnologia de São Paulo -
            IFSP"
        description="Técnico em Informática - 2012 • 2014"
      />
    </Wrapper>
  )
}
