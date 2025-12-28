import { BookOpen, Calendar, ArrowRight, Feather } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  "Reflections": "bg-rose/15 text-rose-foreground border-rose/25",
  "AI/ML": "bg-primary/15 text-primary border-primary/25",
  "Career": "bg-lavender/20 text-lavender-foreground border-lavender/30",
};

export const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Journal"
          subtitle="Reflections on AI, growth, and the journey of becoming"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              variant="elevated"
              className="group flex flex-col hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Post Header with Category */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1.5 text-xs font-medium rounded-full border ${categoryColors[post.category] || categoryColors["Career"]}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
              </div>

              <CardHeader className="pt-2">
                <CardTitle className="text-lg font-heading group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 leading-relaxed mt-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="ghost" className="w-full group/btn justify-between" disabled>
                  <span className="flex items-center gap-2">
                    <Feather className="h-4 w-4" />
                    Read Article
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-14">
          <Card variant="glass" className="p-10 text-center bg-gradient-to-br from-rose/10 via-lavender/10 to-primary/10">
            <CardContent className="p-0 space-y-5">
              <div className="mx-auto w-16 h-16 bg-rose/20 rounded-2xl flex items-center justify-center">
                <Feather className="h-8 w-8 text-rose" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Journal Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                I'm crafting thoughtful articles about AI, Machine Learning, and the art of consistent growth. 
                Each piece reflects my journey and learnings.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};