import { useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin, MessageSquare } from "lucide-react";
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
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to discuss opportunities? Let's connect!"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card variant="elevated" className="p-6 md:p-8">
            <CardHeader className="p-0 pb-6">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
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
            <Card variant="glass" className="p-6">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground">
                  I'm currently open to internship opportunities in AI/ML and Software Engineering.
                  Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">{personalInfo.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <MapPin className="h-5 w-5 text-accent" />
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
            <Card variant="gradient" className="p-6">
              <CardContent className="p-0 flex items-center gap-4">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-50" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Available for Internships</p>
                  <p className="text-sm text-muted-foreground">
                    Looking for AI/ML and Software Engineering roles
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
