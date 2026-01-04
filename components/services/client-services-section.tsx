"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Zap, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Build modern, SEO-friendly websites using Next.js, React, and Tailwind CSS. From landing pages to complex web applications.",
    features: ["Next.js & React", "Responsive Design", "SEO Optimized", "Performance Focused"],
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Full-stack applications, dashboards, and SaaS MVPs with clean architecture and scalable backends.",
    features: ["Full-Stack Apps", "Admin Dashboards", "SaaS MVPs", "API Integration"],
  },
  {
    icon: Zap,
    title: "One-Time Projects",
    description: "Fast delivery for standalone projects with clean, maintainable code and comprehensive documentation.",
    features: ["Quick Turnaround", "Clean Code", "Documentation", "Scalable Architecture"],
  },
  {
    icon: Wrench,
    title: "Bug Fixing & Optimization",
    description: "Performance optimization, UI fixes, code refactoring, and debugging for existing applications.",
    features: ["Performance Tuning", "UI/UX Fixes", "Code Refactoring", "Security Audits"],
  },
];

export function ClientServicesSection() {
  return (
    <section id="client-services" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Professional Services for{" "}
            <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end development solutions tailored to your business needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
