import type { Metadata } from "next"
import "./globals.css"
import { geistSans } from "@/fonts"
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de Wellington Galvão"
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-Br">
      <body className={cn("min-h-dvh antialiased", geistSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
