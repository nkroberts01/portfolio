import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// This would typically come from a database or API
const getProjectData = (id: string) => {
  // Example project data - replace with your actual projects
  const projects = [
    {
      id: "1",
      title: "Machine Learning Project 1",
      description: "A brief description of the project, its goals, and the problem it solves.",
      longDescription: `
        This is a detailed description of the project. You can include multiple paragraphs explaining:
        
        - The problem you were trying to solve
        - Your approach and methodology
        - The technologies and algorithms you used
        - The results and impact of your work
        - Challenges you faced and how you overcame them
        
        This section can be as detailed as you want, and you can include code snippets, equations, or other technical details.
      `,
      image: "/placeholder.svg?height=500&width=1000&text=Project+1+Banner",
      additionalImages: [
        "/placeholder.svg?height=300&width=500&text=Screenshot+1",
        "/placeholder.svg?height=300&width=500&text=Screenshot+2",
        "/placeholder.svg?height=300&width=500&text=Screenshot+3",
      ],
      tags: ["PyTorch", "Computer Vision", "CNN", "Deep Learning", "Python"],
      github: "https://github.com/yourusername/project1",
      demo: "https://demo-link.com/project1",
      date: "January 2023",
      featured: true,
    },
    // Add more projects as needed
  ]

  const project = projects.find((p) => p.id === id)
  if (!project) return null

  return project
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12 max-w-4xl">
      <Link href="/projects" className="inline-flex items-center mb-6">
        <Button variant="ghost" className="pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="relative aspect-[21/9] overflow-hidden rounded-lg mb-8">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground mt-2">{project.date}</p>
        </div>
        <div className="flex gap-2">
          <Link href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-lg mb-4">{project.description}</p>
        <div className="prose max-w-none dark:prose-invert">
          {project.longDescription.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {project.additionalImages && project.additionalImages.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.additionalImages.map((img, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
        <ul className="list-disc pl-5 space-y-2">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>

      <Separator className="my-12" />

      <div className="flex justify-between">
        <Link href="/projects">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All Projects
          </Button>
        </Link>
        {/* You could add next/previous project navigation here */}
      </div>
    </div>
  )
}
