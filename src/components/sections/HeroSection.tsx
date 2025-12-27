import { ArrowRight, Github, Linkedin, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import profileAvatar from "@/assets/profile-avatar.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">Open for Internships</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-medium text-muted-foreground">
                {personalInfo.title}
              </p>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {personalInfo.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up delay-200">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Button variant="ghost" size="default" asChild>
                <a href={personalInfo.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="ghost" size="default" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Stats */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4 animate-fade-up delay-400">
              <div className="text-center">
                <p className="text-2xl font-bold font-heading gradient-text">150+</p>
                <p className="text-sm text-muted-foreground">LeetCode Problems</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold font-heading gradient-text">3+</p>
                <p className="text-sm text-muted-foreground">Internships</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold font-heading gradient-text">8.0</p>
                <p className="text-sm text-muted-foreground">CGPA</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up delay-300">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-75" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <img
                  src={profileAvatar}
                  alt="Anusha T R - AI/ML Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-12 opacity-80 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl -rotate-12 opacity-80 blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
