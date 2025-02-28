import { EducationCard } from "@/components/education-card"
import { Wrapper } from "@/components/wrapper"

export function Certificates() {
  return (
    <Wrapper className="flex-col gap-4">
      <h2 className="text-2xl font-bold">Certificados</h2>

      <EducationCard
        img="/icons/fiap.jpg"
        title="Fiap - Centro Universitário"
        description="DevOps & AgileCulture 60hs"
      />

      <EducationCard
        img="/icons/fiap.jpg"
        title="Fiap - Centro Universitário"
        description="Design Thinking 40hs"
      />

      <EducationCard
        img="/icons/fiap.jpg"
        title="Fiap - Centro Universitário"
        description="User Experience 60hs"
      />

      <EducationCard
        img="/icons/fiap.jpg"
        title="Fiap - Centro Universitário"
        description="Business Intelligence 40hs"
      />

      <EducationCard
        img="/icons/softblue.jpg"
        title="Softblue"
        description="HTML5, CSS3, JavaScript & Ajax 40hs"
      />

      <EducationCard
        img="/icons/softblue.jpg"
        title="Softblue"
        description="SQL Completo 20hs"
      />

      <EducationCard
        img="/icons/softblue.jpg"
        title="Softblue"
        description="UML"
      />
    </Wrapper>
  )
}
