import { cn } from "@/lib/utils"

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  className?: string
}

export function Wrapper({ children, className, ...props }: WrapperProps) {
  return (
    <div className={cn("flex w-full max-w-5xl", className)} {...props}>
      {children}
    </div>
  )
}
