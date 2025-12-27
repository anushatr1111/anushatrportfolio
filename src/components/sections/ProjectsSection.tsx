import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

// Project images - we'll use gradient placeholders with icons
const projectImages: Record<string, string> = {
  "aura-safe": "from-primary/20 to-accent/20",
  "plant-disease": "from-green-500/20 to-emerald-500/20",
  "weather-app": "from-blue-500/20 to-cyan-500/20",
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications showcasing AI, ML, and full-stack development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              variant="elevated"
              className="group flex flex-col overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Gradient */}
              <div className={`h-48 bg-gradient-to-br ${projectImages[project.image]} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="relative z-10 text-4xl font-bold font-heading text-foreground/30">
                  {project.title.split(" ")[0]}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                {/* Impact Statement */}
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="gap-2">
                <Button variant="hero" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/anushatr" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
