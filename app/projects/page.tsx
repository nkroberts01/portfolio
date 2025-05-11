import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  // Example project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Machine Learning Project 1",
      description: "A brief description of the project, its goals, and the problem it solves.",
      image: "/placeholder.svg?height=300&width=600&text=Project+1",
      tags: ["PyTorch", "Computer Vision", "CNN"],
      github: "https://github.com/yourusername/project1",
      demo: "https://demo-link.com/project1",
      featured: true,
    },
    {
      id: 2,
      title: "NLP Research Implementation",
      description: "Implementation of a research paper on natural language processing techniques.",
      image: "/placeholder.svg?height=300&width=600&text=Project+2",
      tags: ["NLP", "BERT", "Transformers", "HuggingFace"],
      github: "https://github.com/yourusername/project2",
      demo: null,
      featured: true,
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing machine learning model results and metrics.",
      image: "/placeholder.svg?height=300&width=600&text=Project+3",
      tags: ["React", "D3.js", "Python", "Flask"],
      github: "https://github.com/yourusername/project3",
      demo: "https://demo-link.com/project3",
      featured: false,
    },
    {
      id: 4,
      title: "Reinforcement Learning Environment",
      description: "Custom environment for testing reinforcement learning algorithms.",
      image: "/placeholder.svg?height=300&width=600&text=Project+4",
      tags: ["Reinforcement Learning", "PyTorch", "OpenAI Gym"],
      github: "https://github.com/yourusername/project4",
      demo: null,
      featured: false,
    },
    {
      id: 5,
      title: "Time Series Forecasting",
      description: "Forecasting model for time series data using deep learning approaches.",
      image: "/placeholder.svg?height=300&width=600&text=Project+5",
      tags: ["Time Series", "LSTM", "Prophet", "TensorFlow"],
      github: "https://github.com/yourusername/project5",
      demo: "https://demo-link.com/project5",
      featured: false,
    },
    {
      id: 6,
      title: "ML Model Deployment Pipeline",
      description: "End-to-end pipeline for training, testing, and deploying machine learning models.",
      image: "/placeholder.svg?height=300&width=600&text=Project+6",
      tags: ["MLOps", "Docker", "AWS", "CI/CD"],
      github: "https://github.com/yourusername/project6",
      demo: null,
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      {featuredProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </Link>
                    {project.demo && (
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="ghost" size="sm">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold mb-6">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.id}>
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={`/projects/${project.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
