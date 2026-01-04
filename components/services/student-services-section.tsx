"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, BookOpen, Clock, Rocket, Lightbulb } from "lucide-react";

const studentServices = [
  {
    icon: Code2,
    title: "Coding Help & Debugging",
    description: "Get unstuck with debugging assistance, code reviews, and best practice guidance for your programming assignments.",
    highlight: "Available 24/7",
  },
  {
    icon: BookOpen,
    title: "Project Guidance & Mentorship",
    description: "Navigate your projects with expert guidance, from planning to implementation to final submission.",
    highlight: "Step-by-step support",
  },
  {
    icon: Clock,
    title: "Time-Zone Friendly Support",
    description: "Flexible scheduling to accommodate international students across different time zones and busy schedules.",
    highlight: "Global availability",
  },
  {
    icon: Rocket,
    title: "Final Year / Capstone Projects",
    description: "Comprehensive support for final year projects, including architecture design, implementation, and documentation.",
    highlight: "End-to-end help",
  },
  {
    icon: Lightbulb,
    title: "Concept Explanation",
    description: "Clear explanations of web development, app development, backend concepts, and modern frameworks.",
    highlight: "Learn by doing",
  },
];

export function StudentServicesSection() {
  return (
    <section id="student-services" className="py-20 px-4 bg-accent/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Student Support
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Services for{" "}
            <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
              Students
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learning-focused guidance to help you succeed in your coding journey
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentServices.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur"
            >
              <CardHeader>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-center text-sm text-muted-foreground italic">
                <span className="font-semibold text-foreground">Important:</span> All guidance and support provided is learning-focused and plagiarism-free. 
                I help you understand concepts and build skills, not complete assignments for you.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
