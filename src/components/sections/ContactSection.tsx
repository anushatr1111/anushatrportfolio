import { useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin, MessageSquare, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect and explore opportunities together"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <Card variant="elevated" className="p-8 md:p-10">
            <CardHeader className="p-0 pb-8">
              <CardTitle className="flex items-center gap-3 font-heading text-2xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                Send a Message
              </CardTitle>
              <CardDescription className="mt-2 text-base">
                Fill out the form below and I'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-border/60 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-border/60 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none bg-background/50 border-border/60 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card variant="glass" className="p-8">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively seeking full-time opportunities in AI/ML and Software Engineering.
                  Whether you have a question, a project idea, or just want to say hi—I'd love to hear from you!
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 bg-background/60 rounded-xl hover:bg-background/90 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{personalInfo.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-background/60 rounded-xl">
                    <div className="p-3 bg-rose/15 rounded-xl">
                      <MapPin className="h-5 w-5 text-rose" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card variant="elevated" className="p-6">
              <CardContent className="p-0 space-y-4">
                <h4 className="font-heading font-semibold text-foreground">Find me on</h4>
                <div className="flex gap-4">
                  <Button variant="heroOutline" size="lg" className="flex-1" asChild>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" className="flex-1" asChild>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card variant="gradient" className="p-6 bg-gradient-to-br from-primary/10 via-rose/10 to-lavender/10 border-primary/20">
              <CardContent className="p-0 flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-40" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">Open to Full-Time Opportunities</p>
                    <Sparkles className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI/ML · Software Engineering · Fresher
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