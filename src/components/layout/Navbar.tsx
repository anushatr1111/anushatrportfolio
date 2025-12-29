import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.replace("#", ""));
      let currentSection = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm" : "bg-transparent"
    )}>
      <div className="section-container">
        <div className="flex items-center justify-between h-18 md:h-20">
          <a href="#" className="font-heading font-bold text-2xl gradient-text hover:opacity-80 transition-opacity">
            {personalInfo.name.split(" ")[0]}
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                    isActive 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground",
                    // Underline indicator
                    "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-primary after:rounded-full after:transition-all after:duration-300",
                    isActive 
                      ? "after:w-6 after:opacity-100" 
                      : "after:w-0 after:opacity-0 hover:after:w-4 hover:after:opacity-50"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:scale-110 transition-all duration-300"
            >
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              asChild 
              className="hover:scale-110 transition-all duration-300"
            >
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild className="group">
              <a href="#contact">
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                Contact
              </a>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="transition-all duration-300"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="section-container py-4 space-y-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </a>
            );
          })}
          
          {/* Mobile Social Links */}
          <div className="flex gap-4 px-4 py-3 border-t border-border mt-2 pt-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
