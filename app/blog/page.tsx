import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  // Example blog posts - replace with your actual blog posts
  const posts = [
    {
      id: 1,
      title: "Getting Started with PyTorch: A Beginner's Guide",
      excerpt:
        "Learn the basics of PyTorch, one of the most popular deep learning frameworks, and build your first neural network.",
      image: "/placeholder.svg?height=300&width=600&text=PyTorch+Guide",
      date: "May 15, 2023",
      readTime: "8 min read",
      tags: ["PyTorch", "Deep Learning", "Tutorial"],
      featured: true,
    },
    {
      id: 2,
      title: "Understanding Transformers: The Architecture Behind Modern NLP",
      excerpt: "A deep dive into the transformer architecture that powers models like BERT, GPT, and T5.",
      image: "/placeholder.svg?height=300&width=600&text=Transformers",
      date: "April 3, 2023",
      readTime: "12 min read",
      tags: ["NLP", "Transformers", "Deep Learning"],
      featured: true,
    },
    {
      id: 3,
      title: "Implementing a ResNet from Scratch",
      excerpt: "Learn how to implement a Residual Network (ResNet) architecture from scratch using PyTorch.",
      image: "/placeholder.svg?height=300&width=600&text=ResNet",
      date: "March 20, 2023",
      readTime: "10 min read",
      tags: ["Computer Vision", "CNN", "PyTorch"],
      featured: false,
    },
    {
      id: 4,
      title: "A Practical Guide to Hyperparameter Tuning",
      excerpt: "Explore different strategies for tuning hyperparameters in your machine learning models.",
      image: "/placeholder.svg?height=300&width=600&text=Hyperparameter+Tuning",
      date: "February 12, 2023",
      readTime: "7 min read",
      tags: ["Machine Learning", "Optimization", "Best Practices"],
      featured: false,
    },
    {
      id: 5,
      title: "Introduction to Reinforcement Learning",
      excerpt: "An introduction to the fundamentals of reinforcement learning and its applications.",
      image: "/placeholder.svg?height=300&width=600&text=Reinforcement+Learning",
      date: "January 25, 2023",
      readTime: "9 min read",
      tags: ["Reinforcement Learning", "AI", "Tutorial"],
      featured: false,
    },
    {
      id: 6,
      title: "Deploying ML Models with FastAPI",
      excerpt: "A step-by-step guide to deploying your machine learning models as a REST API using FastAPI.",
      image: "/placeholder.svg?height=300&width=600&text=FastAPI+Deployment",
      date: "December 10, 2022",
      readTime: "6 min read",
      tags: ["MLOps", "FastAPI", "Deployment", "Python"],
      featured: false,
    },
  ]

  const featuredPosts = posts.filter((post) => post.featured)
  const recentPosts = posts.filter((post) => !post.featured)

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      Read More
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
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 gap-8">
          {recentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-6">
                <div className="relative aspect-[3/2] md:h-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{post.excerpt}</CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
