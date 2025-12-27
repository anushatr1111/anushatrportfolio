import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="section-container">
        <SectionHeading
          title="Work Experience"
          subtitle="Professional internships and industry exposure"
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              variant="glass"
              className="overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-[240px_1fr] gap-0">
                {/* Left Panel - Company Info */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 border-b md:border-b-0 md:border-r border-border">
                  <div className="flex md:flex-col gap-4 md:gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold text-foreground">
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
                <div className="p-6">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-xl text-primary">{exp.role}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-foreground">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
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
