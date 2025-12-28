import { Code2, Brain, Globe, Cloud, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  Code2: Code2,
  Brain: Brain,
  Globe: Globe,
  Cloud: Cloud,
  BarChart3: BarChart3,
};

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
  lavender: "bg-lavender/20 text-lavender-foreground border-lavender/30 hover:bg-lavender/30",
  sage: "bg-sage/20 text-sage-foreground border-sage/30 hover:bg-sage/30",
  accent: "bg-accent/15 text-accent-foreground border-accent/25 hover:bg-accent/25",
  rose: "bg-rose/20 text-rose-foreground border-rose/30 hover:bg-rose/30",
};

const iconColorMap: Record<string, string> = {
  primary: "bg-primary/15 text-primary group-hover:bg-primary/25",
  lavender: "bg-lavender/25 text-lavender-foreground group-hover:bg-lavender/35",
  sage: "bg-sage/25 text-sage-foreground group-hover:bg-sage/35",
  accent: "bg-accent/20 text-accent-foreground group-hover:bg-accent/30",
  rose: "bg-rose/25 text-rose-foreground group-hover:bg-rose/35",
};

export const SkillsSection = () => {
  const skillCategories = Object.values(skills);

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and expertise I bring to every project"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const colorClasses = colorMap[category.color] || colorMap.primary;
            const iconClasses = iconColorMap[category.color] || iconColorMap.primary;
            
            return (
              <Card
                key={index}
                variant="elevated"
                className="group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${iconClasses}`}>
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                    </div>
                    <CardTitle className="text-lg font-heading">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${colorClasses}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};