import Link from "next/link"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Name</CardTitle>
          <CardDescription>Machine Learning Engineer & Student</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            A passionate machine learning engineer with experience in [your specific areas]. Currently pursuing [your
            degree] at [your university].
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">Contact</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Email: your.email@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Location: City, State</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Links</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <Link
                    href="https://github.com/yourusername"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com/in/yourusername"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://yourpersonalwebsite.com"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Personal Website
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>University Name</CardTitle>
              <span className="text-sm text-muted-foreground">2020 - Present</span>
            </div>
            <CardDescription>Bachelor/Master of Science in Computer Science</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Relevant coursework: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Data
              Structures and Algorithms
            </p>
            <p className="text-sm mt-2">GPA: 3.8/4.0</p>
          </CardContent>
        </Card>
        {/* Add more education entries as needed */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <Card className="mb-4">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Company Name</CardTitle>
              <span className="text-sm text-muted-foreground">Jun 2023 - Aug 2023</span>
            </div>
            <CardDescription>Machine Learning Intern</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Developed and implemented a deep learning model for [specific task]</li>
              <li>Improved model accuracy by X% by [specific technique]</li>
              <li>Collaborated with a team of X engineers to deploy models to production</li>
              <li>Technologies used: PyTorch, TensorFlow, Python, Docker</li>
            </ul>
          </CardContent>
        </Card>
        {/* Add more experience entries as needed */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>C++</li>
                <li>SQL</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>Scikit-learn</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS/GCP</li>
                <li>MLflow</li>
                <li>Jupyter</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Problem Solving</li>
                <li>Technical Writing</li>
                <li>Team Collaboration</li>
                <li>Project Management</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Deep Learning Specialization - Coursera</span>
                <span className="text-sm text-muted-foreground">2022</span>
              </li>
              <Separator />
              <li className="flex justify-between">
                <span>Machine Learning - Stanford Online</span>
                <span className="text-sm text-muted-foreground">2021</span>
              </li>
              {/* Add more certifications as needed */}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
