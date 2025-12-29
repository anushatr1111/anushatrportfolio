import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Lightbulb, GraduationCap, Rocket, Clock, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogCategories, getAllArticles } from "@/data/blog";
import { cn } from "@/lib/utils";

const iconMap = { Sparkles, Lightbulb, GraduationCap, Rocket };

const colorClasses: Record<string, { badge: string; icon: string; border: string; bg: string }> = {
  primary: {
    badge: "bg-primary/15 text-primary border-primary/25",
    icon: "text-primary bg-primary/10",
    border: "hover:border-primary/30",
    bg: "from-primary/20 via-primary/10 to-lavender/10"
  },
  sage: {
    badge: "bg-sage/20 text-sage-foreground border-sage/30",
    icon: "text-sage bg-sage/15",
    border: "hover:border-sage/30",
    bg: "from-sage/20 via-sage/10 to-primary/10"
  },
  lavender: {
    badge: "bg-lavender/20 text-lavender-foreground border-lavender/30",
    icon: "text-lavender bg-lavender/15",
    border: "hover:border-lavender/30",
    bg: "from-lavender/20 via-lavender/10 to-rose/10"
  },
  rose: {
    badge: "bg-rose/15 text-rose-foreground border-rose/25",
    icon: "text-rose bg-rose/10",
    border: "hover:border-rose/30",
    bg: "from-rose/20 via-rose/10 to-lavender/10"
  }
};

export const BlogSection = () => {
  const latestArticles = getAllArticles().slice(0, 4);

  return (
    <section id="blog" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Journal"
          subtitle="Reflections on AI, growth, and the journey of becoming"
        />

        {/* Category Navigation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {blogCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Sparkles;
            const colors = colorClasses[category.color];

            return (
              <Link
                key={category.id}
                to={`/journal/${category.slug}`}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card
                  variant="elevated"
                  className={cn(
                    "h-full group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer",
                    colors.border
                  )}
                >
                  <CardContent className="p-6">
                    <div className={cn("p-3 rounded-xl w-fit mb-4 transition-all duration-300 group-hover:scale-110", colors.icon)}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.articles.length} articles
                    </p>
                    <ArrowRight className="h-4 w-4 text-muted-foreground mt-3 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Latest Articles */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-heading font-semibold">Latest Articles</h3>
            <Link to="/journal/my-ai-ml-journey" className="text-sm text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {latestArticles.map((article, index) => {
              const category = blogCategories.find(c => c.slug === article.categorySlug);
              const colors = colorClasses[category?.color || "primary"];

              return (
                <Link
                  key={article.id}
                  to={`/journal/${article.categorySlug}/${article.slug}`}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card
                    variant="elevated"
                    className={cn(
                      "h-full group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden",
                      colors.border
                    )}
                  >
                    {/* Hero Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={article.heroImage}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <Badge variant="secondary" className={cn("text-xs", colors.badge)}>
                          {category?.title}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime} min read
                        </span>
                        <span>{article.publishedAt}</span>
                      </div>
                      <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <CardDescription className="line-clamp-2 text-sm">
                        {article.excerpt}
                      </CardDescription>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
