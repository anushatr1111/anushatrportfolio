import { ArrowRight, Github, Download, Mail, Sparkles, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import profilePhoto1 from "@/assets/profile-1.jpg";
import profilePhoto2 from "@/assets/profile-2.jpg";
import profilePhoto3 from "@/assets/profile-3.jpg";
import { useEffect, useState } from "react";

const profilePhotos = [profilePhoto1, profilePhoto2, profilePhoto3];

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profilePhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width Background Banner with Image - Parallax */}
      <div className="absolute inset-0">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 z-10" />
        
        {/* Background image - subtle on right side with parallax */}
        <div 
          className="absolute right-0 top-0 w-full h-[120%] transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img
            src={profilePhotos[0]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-30 blur-sm"
          />
        </div>
        
        {/* Decorative gradient orbs with parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-rose/15 rounded-full blur-[150px] z-0 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-lavender/15 rounded-full blur-[120px] z-0 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * -0.08}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] z-0 transition-transform duration-100 ease-out"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)` }}
        />
      </div>
      
      <div className="section-container relative z-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Status Badge */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">Open to Full-Time Opportunities</span>
              </div>
            </div>
            
            <div className="space-y-4 animate-fade-up delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.05] tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text block sm:inline">{personalInfo.name}</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-foreground/90">
                  {personalInfo.title}
                </p>
                <p className="text-lg font-medium text-rose flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {personalInfo.subtitle}
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-200">
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
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
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
            <div className="flex items-center gap-6 sm:gap-8 pt-4 animate-fade-up delay-400">
              <div className="text-center group cursor-default">
                <p className="text-2xl sm:text-3xl font-bold font-heading gradient-text transition-transform group-hover:scale-110">150+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">LeetCode Problems</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center group cursor-default">
                <p className="text-2xl sm:text-3xl font-bold font-heading gradient-text transition-transform group-hover:scale-110">3+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Internships</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center group cursor-default">
                <p className="text-2xl sm:text-3xl font-bold font-heading gradient-text transition-transform group-hover:scale-110">8.0</p>
                <p className="text-xs sm:text-sm text-muted-foreground">CGPA</p>
              </div>
            </div>
          </div>

          {/* Right - Organic Blob Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
            <div className="relative group">
              {/* Animated blob glow background */}
              <div 
                className="absolute -inset-6 bg-gradient-to-br from-rose/40 via-lavender/30 to-primary/40 blur-3xl opacity-60 transition-all duration-700 group-hover:opacity-80 group-hover:scale-110"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animation: 'blob-morph 8s ease-in-out infinite'
                }}
              />
              
              {/* Secondary animated blob */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-rose/20 to-lavender/30 blur-2xl opacity-50 transition-all duration-500 group-hover:opacity-70"
                style={{
                  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                  animation: 'blob-morph-reverse 10s ease-in-out infinite'
                }}
              />
              
              {/* Main organic blob image container */}
              <div 
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-rose/30"
                style={{
                  borderRadius: '60% 40% 45% 55% / 55% 45% 50% 50%',
                  animation: 'blob-morph-subtle 12s ease-in-out infinite'
                }}
              >
                {/* Border effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/50 via-rose/40 to-lavender/50 p-1"
                  style={{
                    borderRadius: 'inherit'
                  }}
                >
                  <div 
                    className="w-full h-full bg-card overflow-hidden relative"
                    style={{
                      borderRadius: '58% 42% 47% 53% / 53% 47% 52% 48%'
                    }}
                  >
                    {profilePhotos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Anusha T R - AI/ML Software Engineer ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover scale-125 object-[center_30%] transition-opacity duration-1000 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-primary/60 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                style={{
                  borderRadius: '50% 60% 40% 60% / 60% 40% 60% 50%'
                }}
              />
              <div 
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-rose to-rose/60 opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12"
                style={{
                  borderRadius: '40% 60% 50% 50% / 50% 60% 40% 60%'
                }}
              />
              <div 
                className="absolute top-1/2 -left-8 w-8 h-8 bg-lavender opacity-60 transition-all duration-300 group-hover:opacity-90 group-hover:scale-125"
                style={{
                  borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%'
                }}
              />
              <div 
                className="absolute bottom-1/4 -right-6 w-6 h-6 bg-primary/60 opacity-70 transition-all duration-300 group-hover:opacity-100"
                style={{
                  borderRadius: '45% 55% 50% 50% / 55% 45% 55% 45%'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
