import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
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
          <a href="#" className="font-heading font-bold text-2xl gradient-text">
            {personalInfo.name.split(" ")[0]}
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors elegant-link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#contact"><Mail className="h-4 w-4" />Contact</a>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</Button>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
        <div className="section-container py-4 space-y-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg">{link.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};