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
        <Button variant="outline" asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Nathan Roberts</CardTitle>
          <CardDescription>Machine Learning Engineer & Student</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="w-full h-[800px] rounded-lg overflow-hidden flex items-center justify-center">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full max-w-4xl h-full mx-auto"
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="mb-4">Unable to display PDF.</p>
                  <Button asChild>
                    <a href="/resume.pdf" target="_blank">
                      Open PDF in new tab
                    </a>
                  </Button>
                </div>
              </div>
            </object>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}