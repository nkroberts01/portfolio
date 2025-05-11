import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ResearchPage() {
  // Example research data - replace with your actual research
  const research = [
    {
      id: 1,
      title: "Novel Approach to Neural Network Optimization",
      abstract:
        "This research explores a novel approach to optimizing neural networks for specific tasks, resulting in improved performance and reduced computational requirements.",
      image: "/placeholder.svg?height=300&width=600&text=Research+1",
      tags: ["Neural Networks", "Optimization", "Deep Learning"],
      publication: "Journal of Machine Learning Research",
      date: "June 2023",
      link: "https://example.com/research1",
      pdf: "https://example.com/research1.pdf",
      collaborators: ["Dr. Jane Smith", "Prof. John Doe"],
    },
    {
      id: 2,
      title: "Comparative Analysis of Transfer Learning Techniques",
      abstract:
        "A comprehensive analysis of various transfer learning techniques applied to computer vision tasks with limited training data.",
      image: "/placeholder.svg?height=300&width=600&text=Research+2",
      tags: ["Transfer Learning", "Computer Vision", "Few-shot Learning"],
      publication: "Conference on Computer Vision and Pattern Recognition (CVPR)",
      date: "March 2022",
      link: "https://example.com/research2",
      pdf: "https://example.com/research2.pdf",
      collaborators: ["Dr. Alex Johnson"],
    },
    {
      id: 3,
      title: "Efficient Natural Language Processing for Resource-Constrained Devices",
      abstract:
        "This paper presents methods for deploying NLP models on devices with limited computational resources while maintaining acceptable performance.",
      image: "/placeholder.svg?height=300&width=600&text=Research+3",
      tags: ["NLP", "Edge Computing", "Model Compression"],
      publication: "Workshop on Efficient Natural Language Processing",
      date: "November 2021",
      link: "https://example.com/research3",
      pdf: "https://example.com/research3.pdf",
      collaborators: ["Prof. Sarah Williams", "Dr. Michael Brown"],
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Research</h1>

      <section className="mb-12">
        <div className="prose max-w-none dark:prose-invert mb-8">
          <p>
            My research focuses on [your research interests and areas]. I'm particularly interested in [specific aspects
            or problems] and how they can be applied to [real-world applications or domains].
          </p>
          <p>
            I've collaborated with researchers from [universities or organizations] and published papers in [conferences
            or journals].
          </p>
        </div>

        <Separator className="my-8" />

        <h2 className="text-2xl font-bold mb-6">Publications</h2>
        <div className="grid grid-cols-1 gap-8">
          {research.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div className="relative aspect-[3/2] md:h-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col p-6">
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <div className="text-sm text-muted-foreground mb-2">
                    {item.publication} • {item.date}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardDescription className="text-base mb-4">{item.abstract}</CardDescription>

                  <div className="mt-auto">
                    <div className="text-sm mb-4">
                      <span className="font-medium">Collaborators:</span> {item.collaborators.join(", ")}
                    </div>
                    <div className="flex gap-2">
                      <Link href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Publication
                        </Button>
                      </Link>
                      <Link href={item.pdf} target="_blank" rel="noopener noreferrer">
                        <Button size="sm">Download PDF</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Deep Learning",
              description: "Exploring novel architectures and optimization techniques for neural networks.",
              icon: "🧠",
            },
            {
              title: "Computer Vision",
              description: "Developing algorithms for image recognition, object detection, and scene understanding.",
              icon: "👁️",
            },
            {
              title: "Natural Language Processing",
              description: "Building models for language understanding, generation, and translation.",
              icon: "💬",
            },
            {
              title: "Reinforcement Learning",
              description: "Creating agents that learn to make decisions through interaction with environments.",
              icon: "🎮",
            },
            {
              title: "AI Ethics",
              description: "Studying the ethical implications of AI systems and ensuring responsible development.",
              icon: "⚖️",
            },
            {
              title: "Edge AI",
              description: "Deploying machine learning models on resource-constrained devices.",
              icon: "📱",
            },
          ].map((interest, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="text-4xl mb-2">{interest.icon}</div>
                <CardTitle>{interest.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{interest.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
