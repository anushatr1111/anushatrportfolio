import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Machine Learning in Python",
    excerpt: "A beginner-friendly guide to understanding ML fundamentals and building your first model with Scikit-learn.",
    date: "Coming Soon",
    category: "Machine Learning",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "Best practices for designing and implementing scalable REST APIs for modern web applications.",
    date: "Coming Soon",
    category: "Backend",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "My Journey: From DSA Problems to Real Projects",
    excerpt: "How consistent LeetCode practice transformed my problem-solving approach and interview preparation.",
    date: "Coming Soon",
    category: "Career",
    readTime: "5 min read",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-secondary/20">
      <div className="section-container">
        <SectionHeading
          title="Blog & Articles"
          subtitle="Sharing insights on AI, development, and my learning journey"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              variant="elevated"
              className="group flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Post Header with Category */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
              </div>

              <CardHeader className="pt-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
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
                <Button variant="ghost" className="w-full group/btn" disabled>
                  <BookOpen className="h-4 w-4" />
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Placeholder Banner */}
        <div className="mt-12">
          <Card variant="gradient" className="p-8 text-center">
            <CardContent className="p-0 space-y-4">
              <BookOpen className="h-12 w-12 mx-auto text-primary/50" />
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Blog Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I'm working on writing articles about AI, Machine Learning, and my development journey.
                Stay tuned for insights and tutorials!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
