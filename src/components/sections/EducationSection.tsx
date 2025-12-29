import { GraduationCap, School, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { educationEntries } from "@/data/education";
import { cn } from "@/lib/utils";

const iconMap = { GraduationCap, School, BookOpen };
const colorClasses: Record<string, string> = {
  primary: "text-primary bg-primary/10 border-primary/20",
  lavender: "text-lavender bg-lavender/10 border-lavender/20",
  sage: "text-sage bg-sage/10 border-sage/20"
};

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <SectionHeading title="Education" subtitle="My academic journey and foundation" />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-6">
            {educationEntries.map((entry, index) => {
              const IconComponent = iconMap[entry.icon as keyof typeof iconMap] || GraduationCap;
              const colors = colorClasses[entry.color] || colorClasses.primary;
              
              return (
                <div key={entry.id} className="relative animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Timeline dot */}
                  <div className={cn("absolute left-6 w-5 h-5 rounded-full border-4 border-background hidden md:flex items-center justify-center z-10", colors)} />
                  
                  <Card variant="elevated" className="md:ml-16 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className={cn("p-3 rounded-xl shrink-0", colors)}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                            <h3 className="text-lg font-heading font-semibold">{entry.title}</h3>
                            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">{entry.period}</span>
                          </div>
                          
                          <p className="text-foreground/80 mb-2">{entry.institution}</p>
                          <p className="text-sm text-muted-foreground mb-3">{entry.location}</p>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <span className={cn("px-3 py-1 rounded-full text-sm font-medium border", colors)}>
                              {entry.scoreType}: {entry.score}
                            </span>
                          </div>
                          
                          {entry.highlights && (
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {entry.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
