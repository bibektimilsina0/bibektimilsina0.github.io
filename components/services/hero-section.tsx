"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, GraduationCap } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Building Modern{" "}
            <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
              Web & App Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Fast, Reliable, and Scalable
          </p>
        </div>

        {/* Subheading */}
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-lg md:text-xl text-foreground/80">
            Freelance developer specializing in{" "}
            <span className="text-primary font-semibold">one-time projects</span> and{" "}
            <span className="text-primary font-semibold">student-friendly coding support</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Whether you need a full-stack application, debugging assistance, or project guidance,
            I&apos;m here to help you succeed.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="group min-w-[200px] text-base"
            onClick={() => scrollToSection("contact")}
          >
            <Code className="mr-2 h-5 w-5" />
            Hire Me
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="group min-w-[200px] text-base"
            onClick={() => scrollToSection("student-services")}
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            Get Coding Help
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">Fast</div>
            <div className="text-sm text-muted-foreground">Quick turnaround times</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">Reliable</div>
            <div className="text-sm text-muted-foreground">Quality you can trust</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">Scalable</div>
            <div className="text-sm text-muted-foreground">Built for growth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
