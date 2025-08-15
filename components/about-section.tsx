import { Code, Smartphone, Palette } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <img
                src="/assets/images/heroimage.png"
                alt="Profile"
                className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-primary/20"
              />
            </div>

            <div className="fade-in-up-delay-1">
              <h2 className="text-4xl font-bold mb-6 text-primary font-heading">About Me</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate web developer with a love for creating digital experiences that make a difference. With
                expertise in modern web technologies, I focus on building scalable, user-friendly applications that
                solve real-world problems. When I'm not coding, you'll find me exploring new technologies, contributing
                to open source projects, or sharing knowledge with the developer community.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Web Development</h3>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Mobile Apps</h3>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">UI/UX Design</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
