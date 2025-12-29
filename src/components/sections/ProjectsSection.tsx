import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Leaf, Shield, CloudSun, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const projectConfig: Record<string, { gradient: string; icon: typeof Shield }> = {
  "aura-safe": { 
    gradient: "from-rose/30 via-rose/20 to-lavender/20",
    icon: Shield
  },
  "plant-disease": { 
    gradient: "from-sage/30 via-sage/20 to-primary/20",
    icon: Leaf
  },
  "weather-app": { 
    gradient: "from-primary/30 via-lavender/20 to-rose/10",
    icon: CloudSun
  },
};

interface TechStackProps {
  technologies: string[];
}

const TechStack = ({ technologies }: TechStackProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCount = 4;
  const hasMore = technologies.length > visibleCount;
  const hiddenCount = technologies.length - visibleCount;

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {technologies.slice(0, visibleCount).map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 text-xs font-medium bg-secondary/80 rounded-full text-secondary-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary"
          >
            {tech}
          </span>
        ))}
        
        {hasMore && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="group inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/10 cursor-pointer"
            aria-expanded={isExpanded}
            aria-label={`Show ${hiddenCount} more technologies`}
          >
            <span>+{hiddenCount} more</span>
            <ChevronDown className="h-3 w-3 transition-transform group-hover:translate-y-0.5" />
          </button>
        )}
      </div>
      
      {/* Expanded Technologies */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-wrap gap-2 pt-2 animate-fade-in">
          {technologies.slice(visibleCount).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-xs font-medium bg-primary/10 rounded-full text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20"
              style={{ animationDelay: `${techIndex * 50}ms` }}
            >
              {tech}
            </span>
          ))}
          
          <button
            onClick={() => setIsExpanded(false)}
            className="group inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-full hover:bg-secondary transition-all duration-300 cursor-pointer"
            aria-label="Show less technologies"
          >
            <span>Show less</span>
            <ChevronUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications showcasing AI, ML, and full-stack development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const config = projectConfig[project.image] || projectConfig["weather-app"];
            const IconComponent = config.icon;
            
            return (
              <Card
                key={project.id}
                variant="elevated"
                className="group flex flex-col overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image/Gradient */}
                <div className={`h-52 bg-gradient-to-br ${config.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Icon */}
                  <div className="relative z-10 p-6 bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                    <IconComponent className="h-12 w-12 text-primary transition-colors group-hover:text-primary" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-card/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg group-hover:scale-150 transition-transform duration-700" />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  {/* Impact Statement */}
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/20">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Impact:</span>{" "}
                      {project.impact}
                    </p>
                  </div>

                  {/* Technologies with Interactive Expand */}
                  <TechStack technologies={project.technologies} />
                </CardContent>

                <CardFooter className="gap-3 pt-4">
                  <Button variant="hero" size="sm" className="flex-1 group/btn" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-md">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View project">
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-14">
          <Button variant="heroOutline" size="lg" asChild className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
            <a href="https://github.com/anushatr1111" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
