import { GraduationCap, MapPin, Target, Sparkles, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMe, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Discipline. Consistency. Purpose."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card variant="glass" className="p-8 md:p-10">
              <CardContent className="p-0 space-y-5">
                {aboutMe.summary.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutMe.highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  variant="elevated" 
                  className="p-5 group hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-0 flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{highlight}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Sidebar */}
          <div className="space-y-6">
            <Card variant="gradient" className="p-6 border-l-4 border-l-primary">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-semibold text-xl text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">{education.period}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-medium text-foreground leading-snug">{education.degree}</h5>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{education.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span className="font-heading font-semibold text-lg text-primary">CGPA: {education.cgpa}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Higher Secondary</p>
                  <p className="text-sm font-medium text-foreground">{education.highSchool.name}</p>
                  <p className="text-sm text-primary font-semibold mt-1">{education.highSchool.percentage}</p>
                </div>
              </CardContent>
            </Card>

            {/* Fresher Badge */}
            <Card variant="elevated" className="p-6 bg-gradient-to-br from-rose/10 to-lavender/10 border-rose/20">
              <CardContent className="p-0 text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-rose/20 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-rose" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground">Fresher</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ready to bring fresh perspectives and dedication to your team
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};