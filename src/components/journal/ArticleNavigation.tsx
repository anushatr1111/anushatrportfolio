import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogArticle } from "@/data/blog";

interface ArticleNavigationProps {
  prevArticle: BlogArticle | null;
  nextArticle: BlogArticle | null;
}

export const ArticleNavigation = ({ prevArticle, nextArticle }: ArticleNavigationProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-border/50">
      {prevArticle ? (
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground group flex-1 justify-start"
          asChild
        >
          <Link to={`/journal/${prevArticle.categorySlug}/${prevArticle.slug}`}>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="text-xs block opacity-70">Previous</span>
              <span className="text-sm font-medium line-clamp-1">{prevArticle.title}</span>
            </div>
          </Link>
        </Button>
      ) : (
        <div className="flex-1" />
      )}
      
      {nextArticle ? (
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground group flex-1 justify-end"
          asChild
        >
          <Link to={`/journal/${nextArticle.categorySlug}/${nextArticle.slug}`}>
            <div className="text-right">
              <span className="text-xs block opacity-70">Next</span>
              <span className="text-sm font-medium line-clamp-1">{nextArticle.title}</span>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
};
