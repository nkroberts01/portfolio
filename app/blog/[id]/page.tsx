import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// This would typically come from a database, CMS, or API
const getBlogPost = (id: string) => {
  // Example blog post data - replace with your actual blog posts
  const posts = [
    {
      id: "1",
      title: "Getting Started with PyTorch: A Beginner's Guide",
      excerpt:
        "Learn the basics of PyTorch, one of the most popular deep learning frameworks, and build your first neural network.",
      content: `
# Getting Started with PyTorch: A Beginner's Guide

PyTorch is an open-source machine learning library developed by Facebook's AI Research lab. It's known for its flexibility and ease of use, especially for researchers and those who prefer a more "pythonic" approach to deep learning.

## Why PyTorch?

PyTorch has gained popularity for several reasons:

1. **Dynamic Computational Graph**: Unlike some other frameworks, PyTorch builds the computational graph on-the-fly, which makes debugging easier and allows for more flexible model architectures.

2. **Python Integration**: PyTorch feels natural to Python programmers, with intuitive APIs and familiar concepts.

3. **Strong Community Support**: With a growing community, you'll find plenty of resources, tutorials, and pre-trained models.

4. **Research-Friendly**: Many researchers prefer PyTorch for its flexibility and ease of experimentation.

## Installation

Installing PyTorch is straightforward. You can use pip:

\`\`\`python
pip install torch torchvision
\`\`\`

Or conda:

\`\`\`python
conda install pytorch torchvision -c pytorch
\`\`\`

## Tensors: The Building Blocks

In PyTorch, tensors are similar to NumPy arrays but can run on GPUs to accelerate computing. Here's how to create and manipulate tensors:

\`\`\`python
import torch

# Create a tensor
x = torch.tensor([[1, 2, 3], [4, 5, 6]])
print(x)

# Get shape
print(x.shape)

# Operations
y = x + 2
print(y)

# Matrix multiplication
z = torch.matmul(x, torch.ones(3, 2))
print(z)
\`\`\`

## Building a Simple Neural Network

Let's build a simple neural network for classifying the MNIST dataset:

\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim
import torchvision
import torchvision.transforms as transforms

# Load and transform data
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

trainset = torchvision.datasets.MNIST(root='./data', train=True,
                                     download=True, transform=transform)
trainloader = torch.utils.data.DataLoader(trainset, batch_size=64,
                                         shuffle=True)

# Define the network
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(28 * 28, 128)
        self.fc2 = nn.Linear(128, 64)
        self.fc3 = nn.Linear(64, 10)
        self.relu = nn.ReLU()
        
    def forward(self, x):
        x = x.view(-1, 28 * 28)
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.fc3(x)
        return x

net = Net()

# Define loss function and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(net.parameters(), lr=0.01)

# Train the network
for epoch in range(5):
    running_loss = 0.0
    for i, data in enumerate(trainloader, 0):
        inputs, labels = data
        
        optimizer.zero_grad()
        
        outputs = net(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        
        running_loss += loss.item()
        if i % 100 == 99:
            print(f'Epoch {epoch + 1}, Batch {i + 1}, Loss: {running_loss / 100:.3f}')
            running_loss = 0.0

print('Finished Training')
\`\`\`

## Conclusion

This is just the beginning of what you can do with PyTorch. As you become more comfortable with the basics, you can explore more advanced topics like:

- Convolutional Neural Networks (CNNs)
- Recurrent Neural Networks (RNNs)
- Transfer Learning
- Custom Datasets and Data Loading
- Deployment

Happy coding and deep learning!
      `,
      image: "/placeholder.svg?height=500&width=1000&text=PyTorch+Guide",
      date: "May 15, 2023",
      readTime: "8 min read",
      tags: ["PyTorch", "Deep Learning", "Tutorial"],
      author: {
        name: "Your Name",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Machine Learning Engineer & Student",
      },
    },
    // Add more blog posts as needed
  ]

  const post = posts.find((p) => p.id === id)
  if (!post) return null

  return post
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12 max-w-4xl">
      <Link href="/blog" className="inline-flex items-center mb-6">
        <Button variant="ghost" className="pl-0">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <article>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg mb-8">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>

        <div className="prose max-w-none dark:prose-invert">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
                  {paragraph.substring(2)}
                </h1>
              )
            } else if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-6 mb-3">
                  {paragraph.substring(3)}
                </h2>
              )
            } else if (paragraph.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-bold mt-5 mb-2">
                  {paragraph.substring(4)}
                </h3>
              )
            } else if (paragraph.startsWith("```")) {
              const codeContent = paragraph.split("\n").slice(1, -1).join("\n")
              return (
                <div key={i} className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                  <pre>
                    <code>{codeContent}</code>
                  </pre>
                </div>
              )
            } else if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").map((item) => item.substring(2))
              return (
                <ul key={i} className="list-disc pl-5 my-4 space-y-2">
                  {items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )
            } else {
              return (
                <p key={i} className="my-4">
                  {paragraph}
                </p>
              )
            }
          })}
        </div>
      </article>

      <Separator className="my-12" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={post.author.image || "/placeholder.svg"} alt={post.author.name} fill className="object-cover" />
          </div>
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-muted-foreground">{post.author.bio}</div>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>

      <Separator className="my-12" />

      <div className="flex justify-between">
        <Link href="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All Posts
          </Button>
        </Link>
        {/* You could add next/previous post navigation here */}
      </div>
    </div>
  )
}
