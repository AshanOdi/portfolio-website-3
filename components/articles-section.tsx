'use client';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const articles = [
  {
    title: "Building Scalable React Applications",
    snippet:
      "Learn the best practices for structuring large React applications with proper state management and component architecture.",
    readTime: "8 min read",
  },
  {
    title: "Modern CSS Techniques for 2024",
    snippet:
      "Explore the latest CSS features including container queries, cascade layers, and modern layout techniques.",
    readTime: "6 min read",
  },
  {
    title: "TypeScript Tips for Better Code",
    snippet: "Advanced TypeScript patterns and techniques to write more maintainable and type-safe code.",
    readTime: "10 min read",
  },
]

export function ArticlesSection() {
  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* GitHub Section */}
            <div className="fade-in-up">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-primary font-heading">GitHub</h2>
                <p className="text-muted-foreground mb-6">
                  Check out my open source contributions and personal projects on GitHub.
                </p>
                <Button 
                  className="hover:scale-105 transition-transform duration-200"
                  onClick={() => window.open('https://github.com/AshanOdi', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit GitHub Profile
                </Button>
              </div>
            </div>

            {/* Articles Section */}
            <div className="fade-in-up-delay-1">
              <h2 className="text-3xl font-bold mb-8 text-primary font-heading">Featured Articles</h2>
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <Card key={article.title} className="hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{article.title}</h3>
                      <p className="text-muted-foreground mb-3">{article.snippet}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read More →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
