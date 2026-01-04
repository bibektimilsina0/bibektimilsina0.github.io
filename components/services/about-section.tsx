"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-accent/20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
        </div>

        {/* About content */}
        <Card className="border-2 hover:border-primary/50 transition-colors">
          <CardContent className="pt-8 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Bibek Timilsina</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Full-Stack Developer</Badge>
                <Badge variant="secondary">Computer Engineer</Badge>
                <Badge variant="secondary">Kathmandu, Nepal</Badge>
              </div>
            </div>

            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                With a background in Computer Engineering and a strong foundation in both frontend and backend technologies, 
                I create web applications that not only look stunning but also deliver seamless user experiences.
              </p>
              
              <p>
                I specialize in <span className="text-primary font-semibold">React.js</span>, <span className="text-primary font-semibold">Next.js</span>, 
                <span className="text-primary font-semibold"> Node.js</span>, <span className="text-primary font-semibold">Express.js</span>, and 
                <span className="text-primary font-semibold"> MongoDB</span>, and I&apos;m dedicated to staying updated with the latest trends in web development.
              </p>

              <p>
                From React Query for server state to Zustand for client state, from shadcn/ui components to custom animations — 
                I leverage the best tools to create exceptional user experiences.
              </p>
            </div>

            {/* Experience highlights */}
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Current Work</h4>
                <div className="space-y-2">
                  <div className="text-sm">
                    <div className="font-medium">Muktinath Krishi Company</div>
                    <div className="text-muted-foreground">Software Developer</div>
                    <div className="text-xs text-muted-foreground">July 2025 - Present</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developing e-commerce platforms using Next.js, TypeScript, Zustand, and shadcn/ui
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Recent Projects</h4>
                <div className="space-y-2">
                  <div className="text-sm">
                    <div className="font-medium">CareerLink</div>
                    <div className="text-muted-foreground">Internship platform for students</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Dream Backers</div>
                    <div className="text-muted-foreground">Modern crowdfunding platform</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">SAFAR</div>
                    <div className="text-muted-foreground">Tourism platform with AR features</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
