"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/assets/images/heroimage.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-background/80" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up font-heading">
            <span className="text-white">Hi, I'm a</span>
            <br />
            <span className="text-primary">Web Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 fade-in-up-delay-1 max-w-2xl mx-auto leading-relaxed">
            I create modern, responsive web applications with clean code and exceptional user experiences.
          </p>

          <Button
            size="lg"
            className="fade-in-up-delay-2 text-lg px-8 py-6 hover:scale-105 transition-transform duration-200"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
