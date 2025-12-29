import { Code2, Trophy, Award, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievementsList } from "@/data/achievements";
import { cn } from "@/lib/utils";

const iconMap = { Code2, Trophy, Award, GitBranch };
const colorClasses: Record<string, string> = {
  primary: "text-primary bg-primary/10",
  rose: "text-rose bg-rose/10",
  lavender: "text-lavender bg-lavender/10",
  sage: "text-sage bg-sage/10"
};

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="section-container">
        <SectionHeading title="Achievements" subtitle="Milestones that reflect discipline and growth" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsList.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Trophy;
            const colors = colorClasses[achievement.color] || colorClasses.primary;
            
            return (
              <Card
                key={achievement.id}
                variant="elevated"
                className="group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={cn("w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110", colors)}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  
                  {achievement.metric && (
                    <p className="text-3xl font-heading font-bold gradient-text mb-2">{achievement.metric}</p>
                  )}
                  
                  <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
