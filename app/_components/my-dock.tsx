"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { Separator } from "@radix-ui/react-separator"
import { Github, Home, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const social = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/wellingtongmota",
    icon: Github
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wellingtongmota/",
    icon: Linkedin
  },
  email: {
    name: "Enviar Email",
    url: "mailto:wellingtongalvao96@gmail.com?subject=Contato",
    icon: Mail
  }
}

export function MyDock() {
  return (
    <div className="dark:bg-primary-foreground sticky bottom-4 mx-auto flex gap-2 rounded-lg border px-3 py-2 shadow-sm backdrop-blur-3xl">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer rounded-full"
            >
              <Link href="/">
                <Home className="size-4" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" />

        {Object.entries(social).map(([name, social]) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer rounded-full"
              >
                <Link href={social.url} target="_blank">
                  <social.icon className="size-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator orientation="vertical" />

        <Tooltip>
          <TooltipTrigger asChild>
            <ModeToggle />
          </TooltipTrigger>
          <TooltipContent>
            <p>Alternar tema</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
