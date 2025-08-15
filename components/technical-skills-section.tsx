"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-gray-800" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "JavaScript", level: 94, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-600" },
      { name: "Python", level: 80, color: "bg-blue-500" },
      { name: "PostgreSQL", level: 78, color: "bg-blue-700" },
      { name: "MongoDB", level: 82, color: "bg-green-500" },
      { name: "REST APIs", level: 88, color: "bg-orange-500" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90, color: "bg-red-500" },
      { name: "Docker", level: 75, color: "bg-blue-600" },
      { name: "AWS", level: 70, color: "bg-orange-600" },
      { name: "Figma", level: 85, color: "bg-purple-500" },
      { name: "Vercel", level: 92, color: "bg-black" },
    ],
  },
]

export function TechnicalSkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills with staggered delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(
                () => {
                  setAnimatedSkills((prev) => new Set([...prev, `${categoryIndex}-${skillIndex}`]))
                },
                categoryIndex * 200 + skillIndex * 100,
              )
            })
          })
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("technical-skills")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="technical-skills" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold mb-4 text-primary font-heading">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proficiency levels in various technologies and tools I work with
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className={`group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } hover:scale-105 hover:-rotate-1`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-center text-primary group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const isAnimated = animatedSkills.has(`${categoryIndex}-${skillIndex}`)
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            <span
                              className={`text-sm text-muted-foreground transition-all duration-500 ${
                                isAnimated ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color} relative`}
                              style={{
                                width: isAnimated ? `${skill.level}%` : "0%",
                                transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                              }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Floating skill badges */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech, index) => (
                <div
                  key={tech}
                  className={`px-4 py-2 bg-primary/10 rounded-full text-primary font-medium transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:scale-110 cursor-default ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionDelay: `${1000 + index * 100}ms`,
                    animation: isVisible ? `float ${2 + index * 0.2}s ease-in-out infinite` : "none",
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
