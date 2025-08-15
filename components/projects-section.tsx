import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution built with Next.js, featuring real-time inventory management and secure payment processing.",
    image: "/modern-ecommerce-interface.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, built using React and Firebase.",
    image: "/task-management-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing modern design principles and smooth animations.",
    image: "/portfolio-website-design.png",
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary font-heading">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="fade-in-up-delay-1 hover:scale-105 transition-transform duration-200 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Site
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
