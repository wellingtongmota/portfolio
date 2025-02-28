import { ThemeProvider } from "@/components/theme-provider"
import { geistMono } from "@/fonts"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { PropsWithChildren } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de Wellington Galvão"
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <body className={cn("min-h-dvh antialiased", geistMono.className)}>
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
