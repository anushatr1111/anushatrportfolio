import { ArrowRight, Github, Download, Mail, Sparkles, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      
      {/* Soft decorative blobs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-rose/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-lavender/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Image - Centered at top with face focus */}
          <div className="animate-fade-up mb-10">
            <div className="relative group">
              {/* Decorative ring */}
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
              
              {/* Soft glow - enhanced on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose/30 via-lavender/20 to-primary/20 rounded-full blur-2xl scale-110 transition-all duration-500 group-hover:scale-125 group-hover:from-rose/40 group-hover:via-lavender/30 group-hover:to-primary/30" />
              
              {/* Image Container - Zoomed and repositioned for face focus */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-card shadow-2xl transition-all duration-500 group-hover:shadow-rose/20 group-hover:shadow-3xl group-hover:border-primary/30">
                <img
                  src={profilePhoto}
                  alt="Anusha T R - AI/ML Software Engineer"
                  className="w-full h-full object-cover scale-150 object-[center_15%] transition-transform duration-700 group-hover:scale-155"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-2xl rotate-12 opacity-80 transition-transform duration-300 group-hover:rotate-[20deg] group-hover:scale-110" />
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-rose to-rose/60 rounded-2xl -rotate-12 opacity-80 transition-transform duration-300 group-hover:-rotate-[20deg] group-hover:scale-110" />
              <div className="absolute top-1/4 -left-4 w-6 h-6 bg-lavender rounded-full opacity-60 transition-all duration-300 group-hover:opacity-80 group-hover:scale-125" />
            </div>
          </div>

          {/* Content - Centered below image */}
          <div className="space-y-6 animate-fade-up delay-100">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">Open to Full-Time Opportunities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-heading font-medium text-foreground/90">
                {personalInfo.title}
              </p>
              <p className="text-lg font-medium text-rose flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                {personalInfo.subtitle}
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fade-up delay-200">
            <Button variant="hero" size="lg" asChild className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="group hover:shadow-lg hover:shadow-primary/10 transition-shadow">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                GitHub
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="group hover:shadow-lg hover:shadow-primary/10 transition-shadow">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-wrap gap-4 justify-center mt-4 animate-fade-up delay-300">
            <Button variant="ghost" size="default" asChild className="text-muted-foreground hover:text-foreground group">
              <a href={personalInfo.resumeUrl} download>
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
            </Button>
            <Button variant="ghost" size="default" asChild className="text-muted-foreground hover:text-foreground group">
              <a href="#contact">
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 justify-center pt-8 animate-fade-up delay-400">
            <div className="text-center group cursor-default">
              <p className="text-3xl font-bold font-heading gradient-text transition-transform group-hover:scale-110">150+</p>
              <p className="text-sm text-muted-foreground">LeetCode Problems</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center group cursor-default">
              <p className="text-3xl font-bold font-heading gradient-text transition-transform group-hover:scale-110">3+</p>
              <p className="text-sm text-muted-foreground">Internships</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center group cursor-default">
              <p className="text-3xl font-bold font-heading gradient-text transition-transform group-hover:scale-110">8.0</p>
              <p className="text-sm text-muted-foreground">CGPA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
