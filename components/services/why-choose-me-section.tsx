"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Clean & Maintainable Code",
    description: "Write code that's not just functional, but also readable, well-structured, and easy to maintain for the long term.",
  },
  {
    title: "Fast Communication",
    description: "Quick response times and clear communication throughout the project lifecycle. Stay updated at every step.",
  },
  {
    title: "Real-World Experience",
    description: "Hands-on experience with production applications, e-commerce platforms, and SaaS products used by real users.",
  },
  {
    title: "Student-Friendly Explanations",
    description: "Break down complex concepts into simple, understandable parts. Patient teaching approach for learners at all levels.",
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates for both professional projects and student support. Quality service that respects your budget.",
  },
  {
    title: "Modern Tech Stack",
    description: "Leverage the latest technologies and best practices to build applications that are fast, secure, and scalable.",
  },
];

export function WhyChooseMeSection() {
  return (
    <section id="why-me" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Why Choose Me?
          </h2>
          <p className="text-lg text-muted-foreground">
            Combining technical expertise with clear communication and dedication to quality
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
