import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="Real-world projects and industry exposure"
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              variant="glass"
              className="overflow-hidden group hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                {/* Left Panel - Company Info */}
                <div className="bg-gradient-to-br from-primary/5 via-rose/5 to-lavender/5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border/50">
                  <div className="flex md:flex-col gap-4 md:gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold text-lg text-foreground">
                        {exp.company}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Role Details */}
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0 pb-5">
                    <CardTitle className="text-xl font-heading text-primary">{exp.role}</CardTitle>
                    <CardDescription className="text-base mt-2 leading-relaxed">
                      {exp.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-5">
                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="text-sm font-semibold text-foreground uppercase tracking-wider">Key Achievements</h5>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 text-xs font-medium bg-secondary/80 rounded-full text-secondary-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};