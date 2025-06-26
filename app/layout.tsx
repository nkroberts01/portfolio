import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nate Roberts - Machine Learning Engineer",
  description: "Personal portfolio showcasing machine learning projects, research, and blog posts",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background">
              <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <nav className="grid gap-6 text-lg font-medium">
                        <Link href="/" className="hover:text-foreground/80 transition-colors">
                          Home
                        </Link>
                        <Link href="/resume" className="hover:text-foreground/80 transition-colors">
                          Resume
                        </Link>
                        <Link href="/projects" className="hover:text-foreground/80 transition-colors">
                          Projects
                        </Link>
                        <Link href="/research" className="hover:text-foreground/80 transition-colors">
                          Research
                        </Link>
                        <Link href="/blog" className="hover:text-foreground/80 transition-colors">
                          Blog
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="font-bold inline-block">Nate Roberts</span>
                  </Link>
                </div>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                  <Link href="/" className="hover:text-foreground/80 transition-colors">
                    Home
                  </Link>
                  <Link href="/resume" className="hover:text-foreground/80 transition-colors">
                    Resume
                  </Link>
                  <Link href="/projects" className="hover:text-foreground/80 transition-colors">
                    Projects
                  </Link>
                  <Link href="/research" className="hover:text-foreground/80 transition-colors">
                    Research
                  </Link>
                  <Link href="/blog" className="hover:text-foreground/80 transition-colors">
                    Blog
                  </Link>
                </nav>
              </div>
            </header>
            {children}
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="https://github.com/nkroberts01" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/nathan-roberts-325857219/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
