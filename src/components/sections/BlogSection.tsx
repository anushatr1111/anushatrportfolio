import { useState } from "react";
import { Calendar, ArrowRight, Feather, Sparkles, BookOpen, Lightbulb, GraduationCap, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

// Journey-based blog categories with themed styling
const journeyCategories = [
  {
    id: "aiml",
    title: "My AI & ML Journey",
    icon: Sparkles,
    color: "primary",
    bgGradient: "from-primary/20 via-primary/10 to-lavender/10",
    posts: [
      {
        title: "Getting Started with Generative AI",
        excerpt: "From confusion to clarity—how I learned to understand LLMs, prompt engineering, and built my first AI-powered application.",
        readTime: "8 min read",
        status: "Coming Soon"
      },
      {
        title: "Building My First CNN",
        excerpt: "The challenge of plant disease detection taught me the power of computer vision and the importance of quality training data.",
        readTime: "6 min read",
        status: "Coming Soon"
      }
    ]
  },
  {
    id: "projects",
    title: "Learning Through Projects",
    icon: Lightbulb,
    color: "sage",
    bgGradient: "from-sage/20 via-sage/10 to-primary/10",
    posts: [
      {
        title: "Aura Safe: From Idea to App",
        excerpt: "How building a safety app taught me about real-time systems, Firebase integration, and the responsibility of building for impact.",
        readTime: "7 min read",
        status: "Coming Soon"
      },
      {
        title: "When APIs Break: Lessons from Weather App",
        excerpt: "Debugging production issues taught me more than any tutorial. Here's what went wrong and how I fixed it.",
        readTime: "5 min read",
        status: "Coming Soon"
      }
    ]
  },
  {
    id: "career",
    title: "From Student to Software Engineer",
    icon: GraduationCap,
    color: "lavender",
    bgGradient: "from-lavender/20 via-lavender/10 to-rose/10",
    posts: [
      {
        title: "The Art of Consistency in Tech",
        excerpt: "How discipline and daily practice transformed my approach to learning—150+ LeetCode problems and counting.",
        readTime: "5 min read",
        status: "Coming Soon"
      },
      {
        title: "Preparing for Full-Time: A Fresher's Mindset",
        excerpt: "What I learned about positioning myself, building a portfolio, and staying confident in a competitive market.",
        readTime: "6 min read",
        status: "Coming Soon"
      }
    ]
  },
  {
    id: "internships",
    title: "Lessons from Internships",
    icon: Rocket,
    color: "rose",
    bgGradient: "from-rose/20 via-rose/10 to-lavender/10",
    posts: [
      {
        title: "NIT Trichy: My First Real AI Project",
        excerpt: "Building fraud detection with NLP showed me the gap between academic knowledge and real-world application.",
        readTime: "7 min read",
        status: "Coming Soon"
      },
      {
        title: "Full-Stack at PriGa Solutions",
        excerpt: "From database design to payment integration—how shipping a travel booking platform shaped my engineering skills.",
        readTime: "6 min read",
        status: "Coming Soon"
      }
    ]
  }
];

const colorClasses: Record<string, { badge: string; icon: string; border: string }> = {
  primary: {
    badge: "bg-primary/15 text-primary border-primary/25",
    icon: "text-primary bg-primary/10",
    border: "hover:border-primary/30"
  },
  sage: {
    badge: "bg-sage/20 text-sage-foreground border-sage/30",
    icon: "text-sage bg-sage/15",
    border: "hover:border-sage/30"
  },
  lavender: {
    badge: "bg-lavender/20 text-lavender-foreground border-lavender/30",
    icon: "text-lavender bg-lavender/15",
    border: "hover:border-lavender/30"
  },
  rose: {
    badge: "bg-rose/15 text-rose-foreground border-rose/25",
    icon: "text-rose bg-rose/10",
    border: "hover:border-rose/30"
  }
};

export const BlogSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("aiml");

  return (
    <section id="blog" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Journal"
          subtitle="Reflections on AI, growth, and the journey of becoming"
        />

        {/* Journey Categories */}
        <div className="space-y-6">
          {journeyCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const colors = colorClasses[category.color];
            const isExpanded = expandedCategory === category.id;

            return (
              <div
                key={category.id}
                className="animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                  className={cn(
                    "w-full p-6 rounded-2xl border bg-card transition-all duration-500",
                    "hover:shadow-lg flex items-center justify-between group cursor-pointer",
                    colors.border,
                    isExpanded && "shadow-md border-opacity-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("p-3 rounded-xl transition-all duration-300 group-hover:scale-110", colors.icon)}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.posts.length} articles
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={cn(
                    "h-5 w-5 text-muted-foreground transition-all duration-300",
                    isExpanded ? "rotate-90 text-primary" : "group-hover:translate-x-1"
                  )} />
                </button>

                {/* Posts Grid */}
                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-out",
                  isExpanded ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
                )}>
                  <div className="grid md:grid-cols-2 gap-4 pl-4 border-l-2 border-dashed border-border/50 ml-8">
                    {category.posts.map((post, postIndex) => (
                      <Card
                        key={postIndex}
                        variant="elevated"
                        className={cn(
                          "group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                          colors.border
                        )}
                        style={{ animationDelay: `${postIndex * 100}ms` }}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className={cn("px-3 py-1 text-xs font-medium rounded-full border", colors.badge)}>
                              {post.status}
                            </span>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>
                          <CardTitle className="text-base font-heading group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <CardDescription className="line-clamp-3 leading-relaxed text-sm">
                            {post.excerpt}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button variant="ghost" size="sm" className="w-full group/btn justify-between text-muted-foreground hover:text-foreground" disabled>
                            <span className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              Read Article
                            </span>
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-14">
          <Card variant="glass" className="p-10 text-center bg-gradient-to-br from-rose/10 via-lavender/10 to-primary/10 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-0 space-y-5">
              <div className="mx-auto w-16 h-16 bg-rose/20 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-3">
                <Feather className="h-8 w-8 text-rose" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Journal Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                I'm crafting thoughtful articles about AI, Machine Learning, and the art of consistent growth. 
                Each piece reflects my journey and learnings—stories of challenges, growth, and discovery.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
