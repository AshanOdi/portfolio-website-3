import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  {
    name: "React.js",
    icon: "/react-logo.png",
    description: "Building dynamic user interfaces",
  },
  {
    name: "Next.js",
    icon: "/nextjs-logo.png",
    description: "Full-stack React framework",
  },
  {
    name: "Node.js",
    icon: "/nodejs-logo.png",
    description: "Server-side JavaScript runtime",
  },
]

const specializations = [
  {
    title: "Mobile App Development",
    description: "Creating responsive mobile experiences with React Native and Progressive Web Apps.",
  },
  {
    title: "Web App Development",
    description: "Building scalable web applications with modern frameworks and best practices.",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces with focus on user experience and accessibility.",
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary font-heading">Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized in modern web technologies and user-centered design
            </p>
          </div>

          {/* Specializations */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {specializations.map((spec, index) => (
              <Card key={spec.title} className="fade-in-up-delay-1 hover:scale-105 transition-transform duration-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{spec.title}</h3>
                  <p className="text-muted-foreground">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies */}
          <div className="text-center mb-8 fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground">Technologies I Master</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="text-center fade-in-up-delay-2">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-12 h-12" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{tech.name}</h4>
                <p className="text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
