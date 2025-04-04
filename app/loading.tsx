import { LoadingCircle } from "@/components/loading-circle"

export default function LoadingPage() {
  return (
    <main className="flex h-dvh w-full items-center justify-center">
      <LoadingCircle label="Carregando..." />
    </main>
  )
}
