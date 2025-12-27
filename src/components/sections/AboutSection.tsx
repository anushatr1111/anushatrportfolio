import { GraduationCap, MapPin, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMe, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building intelligent systems that make a difference"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card variant="glass" className="p-6 md:p-8">
              <CardContent className="p-0 space-y-4">
                {aboutMe.summary.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutMe.highlights.map((highlight, index) => (
                <Card key={index} variant="elevated" className="p-4">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{highlight}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Sidebar */}
          <div className="space-y-6">
            <Card variant="gradient" className="p-6">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">{education.period}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium text-foreground">{education.degree}</h5>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{education.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">CGPA: {education.cgpa}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">Higher Secondary</p>
                  <p className="text-sm font-medium">{education.highSchool.name}</p>
                  <p className="text-sm text-primary font-semibold">{education.highSchool.percentage}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card variant="elevated" className="p-6">
              <CardContent className="p-0 space-y-4">
                <h4 className="font-heading font-semibold text-foreground">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Expected Graduation</span>
                    <span className="text-sm font-medium">2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Specialization</span>
                    <span className="text-sm font-medium">AI/ML</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <span className="text-sm font-medium">India</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
