import { Code2, Brain, Globe, Database, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  Code2: Code2,
  Brain: Brain,
  Globe: Globe,
  Database: Database,
  Cloud: Cloud,
};

export const SkillsSection = () => {
  const skillCategories = Object.values(skills);

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Card
                key={index}
                variant="elevated"
                className="group hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag"
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
