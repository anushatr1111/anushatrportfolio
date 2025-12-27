import { Rocket, FlaskConical, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { futureWorks } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

const statusConfig = {
  "In Progress": {
    color: "bg-primary/10 text-primary border-primary/20",
    icon: Rocket,
  },
  "Researching": {
    color: "bg-accent/10 text-accent border-accent/20",
    icon: FlaskConical,
  },
  "Planned": {
    color: "bg-muted text-muted-foreground border-border",
    icon: Lightbulb,
  },
};

export const FutureWorksSection = () => {
  return (
    <section id="future" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="What's Next"
          subtitle="Upcoming projects and learning paths I'm exploring"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {futureWorks.map((work, index) => {
            const config = statusConfig[work.status as keyof typeof statusConfig];
            const StatusIcon = config?.icon || Lightbulb;
            
            return (
              <Card
                key={work.id}
                variant="outlined"
                className="group hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${config?.color.split(" ")[0]} border ${config?.color.split(" ")[2]}`}>
                      <StatusIcon className={`h-5 w-5 ${config?.color.split(" ")[1]}`} />
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${config?.color}`}>
                      {work.status}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {work.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {work.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Learning Track */}
        <div className="mt-12">
          <Card variant="glass" className="p-6 md:p-8">
            <CardContent className="p-0">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Current Learning Tracks
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Large Language Models", progress: "Active" },
                  { title: "System Design", progress: "In Progress" },
                  { title: "Cloud Architecture", progress: "Learning" },
                  { title: "MLOps & Deployment", progress: "Upcoming" },
                ].map((track, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <h4 className="font-medium text-foreground">{track.title}</h4>
                    <p className="text-sm text-primary mt-1">{track.progress}</p>
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
