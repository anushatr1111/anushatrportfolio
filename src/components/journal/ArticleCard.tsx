import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogArticle } from "@/data/blog";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: BlogArticle;
  colorClasses: { badge: string; border: string };
}

export const ArticleCard = ({ article, colorClasses }: ArticleCardProps) => {
  return (
    <Card
      variant="elevated"
      className={cn(
        "group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden",
        colorClasses.border
      )}
    >
      {/* Article Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
          <div className="flex gap-2 flex-wrap">
            {article.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime} min read
          </span>
        </div>
        <CardTitle className="text-base font-heading group-hover:text-primary transition-colors line-clamp-2 leading-snug">
          {article.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-4">
        <CardDescription className="line-clamp-3 leading-relaxed text-sm">
          {article.excerpt}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="w-full group/btn justify-between text-muted-foreground hover:text-foreground"
          asChild
        >
          <Link to={`/journal/${article.categorySlug}/${article.slug}`}>
            <span className="flex items-center gap-2">
              Read Article
            </span>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-all group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
