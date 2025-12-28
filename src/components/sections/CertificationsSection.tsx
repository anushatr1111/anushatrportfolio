import { Cloud, Network, Award, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications, googleSkills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, any> = {
  Cloud: Cloud,
  Network: Network,
  Router: Network,
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Credentials"
          subtitle="Professional certifications and continuous learning achievements"
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Professional Certifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-semibold text-foreground flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="h-5 w-5 text-primary" />
              </div>
              Professional Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = iconMap[cert.icon] || Award;
                
                return (
                  <Card
                    key={cert.id}
                    variant="elevated"
                    className="group hover:border-primary/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {cert.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{cert.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Google Cloud Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-semibold text-foreground flex items-center gap-3">
              <div className="p-2 bg-lavender/20 rounded-lg">
                <Sparkles className="h-5 w-5 text-lavender-foreground" />
              </div>
              Google Cloud & AI Skills
            </h3>
            
            <Card variant="gradient" className="p-6 border-l-4 border-l-lavender">
              <CardContent className="p-0">
                <div className="grid gap-3">
                  {googleSkills.map((skill, index) => (
                    <div
                      key={skill.id}
                      className="flex items-center justify-between p-4 bg-background/60 rounded-xl hover:bg-background/90 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-lavender rounded-full group-hover:scale-125 transition-transform" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{skill.title}</p>
                          <p className="text-xs text-muted-foreground">{skill.issuer}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-lavender/15 text-lavender-foreground rounded-full">
                        {skill.category}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements Quick View */}
            <Card variant="elevated" className="p-6 bg-gradient-to-br from-accent/10 to-rose/10 border-accent/20">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-heading flex items-center gap-3">
                  <Award className="h-5 w-5 text-accent" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-heading font-bold text-xl text-primary">150+</span>
                  <span className="text-muted-foreground">LeetCode problems solved</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-heading font-bold text-primary">SIH 2025</span>
                  <span className="text-muted-foreground">Smart India Hackathon participant</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-heading font-bold text-primary">TCS</span>
                  <span className="text-muted-foreground">CodeVita Season 11 completed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};