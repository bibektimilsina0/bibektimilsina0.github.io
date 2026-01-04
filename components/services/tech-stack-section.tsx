"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techStack = {
  "Frontend": [
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  "Backend": [
    "Node.js",
    "Express.js",
    "NestJS",
    "REST APIs",
    "GraphQL",
  ],
  "Database": [
    "MongoDB",
    "PostgreSQL",
    "Firebase",
  ],
  "State Management": [
    "Zustand",
    "Redux Toolkit",
    "React Query",
    "Context API",
  ],
  "Tools & Others": [
    "Git",
    "Docker",
    "Vercel",
    "Firebase",
  ],
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            Modern technologies and tools I use to build exceptional applications
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies]) => (
            <Card
              key={category}
              className="hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional note */}
        <div className="text-center pt-6">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Always exploring and learning new technologies to provide the best solutions for your projects
          </p>
        </div>
      </div>
    </section>
  );
}
