import { Rocket, FlaskConical, Lightbulb, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { futureWorks } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

const statusConfig = {
  "In Progress": {
    color: "bg-primary/15 text-primary border-primary/25",
    iconBg: "bg-primary/15",
    icon: Rocket,
  },
  "Researching": {
    color: "bg-lavender/20 text-lavender-foreground border-lavender/30",
    iconBg: "bg-lavender/20",
    icon: FlaskConical,
  },
  "Planned": {
    color: "bg-muted text-muted-foreground border-border",
    iconBg: "bg-muted",
    icon: Lightbulb,
  },
};

export const FutureWorksSection = () => {
  return (
    <section id="future" className="section-padding bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="What's Next"
          subtitle="Upcoming projects and continuous learning paths"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {futureWorks.map((work, index) => {
            const config = statusConfig[work.status as keyof typeof statusConfig];
            const StatusIcon = config?.icon || Lightbulb;
            
            return (
              <Card
                key={work.id}
                variant="elevated"
                className="group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${config?.iconBg}`}>
                      <StatusIcon className={`h-5 w-5 ${config?.color.split(" ")[1]}`} />
                    </div>
                    <span className={`px-3 py-1.5 text-xs font-medium rounded-full border ${config?.color}`}>
                      {work.status}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors">
                    {work.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {work.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Learning Track */}
        <div className="mt-12">
          <Card variant="glass" className="p-8 md:p-10">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent/15 rounded-lg">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Current Learning Tracks
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Large Language Models", progress: "Active", color: "primary" },
                  { title: "System Design", progress: "In Progress", color: "lavender" },
                  { title: "Cloud Architecture", progress: "Learning", color: "sage" },
                  { title: "MLOps & Deployment", progress: "Upcoming", color: "rose" },
                ].map((track, index) => (
                  <div
                    key={index}
                    className="p-5 bg-background/60 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{track.title}</h4>
                    <p className={`text-sm mt-2 font-medium text-${track.color}`}>{track.progress}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};