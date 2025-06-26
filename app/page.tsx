import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Nathan Roberts</h1>
                  <p className="text-xl text-muted-foreground">Machine Learning Engineer & Student</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/projects">
                    <Button className="w-full min-[400px]:w-auto">View Projects</Button>
                  </Link>
                  <Link href="/resume">
                    <Button className="w-full min-[400px]:w-auto" variant="outline">
                      Resume
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Link href="https://github.com/nkroberts01" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/nathan-roberts-325857219/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:your.email@example.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work in machine learning and AI
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Link
                  key={i}
                  href={`/projects/project-${i}`}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Project+${i}`}
                      alt={`Project ${i}`}
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Project Title {i}</h3>
                    <p className="text-sm text-muted-foreground">
                      Brief description of the project and technologies used.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/projects">
                <Button variant="outline">View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
