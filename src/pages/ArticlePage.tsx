import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/journal/ReadingProgress";
import { ArticleNavigation } from "@/components/journal/ArticleNavigation";
import { getArticleBySlug, getAdjacentArticles } from "@/data/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const ArticlePage = () => {
  const { articleSlug } = useParams();
  const article = getArticleBySlug(articleSlug || "");
  const { prev, next } = getAdjacentArticles(articleSlug || "");

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading mb-4">Article not found</h1>
          <Button asChild><Link to="/journal">Back to Journal</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | Anusha T R</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
      
      <ReadingProgress />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        {/* Content */}
        <article className="section-container -mt-32 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link to={`/journal/${article.categorySlug}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {article.category}
              </Link>
            </Button>
            
            {/* Header */}
            <header className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{article.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="h-4 w-4" />{article.author}</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(article.publishedAt).toLocaleDateString()}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.readTime} min read</span>
              </div>
            </header>
            
            {/* Article Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              {article.content.split('\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) return <h2 key={i} className="text-2xl font-heading font-semibold mt-8 mb-4">{paragraph.slice(3)}</h2>;
                if (paragraph.startsWith('### ')) return <h3 key={i} className="text-xl font-heading font-medium mt-6 mb-3">{paragraph.slice(4)}</h3>;
                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) 
                  return <p key={i} className="mb-2 pl-4">{paragraph}</p>;
                if (paragraph.startsWith('- ')) return <p key={i} className="mb-2 pl-4">{paragraph}</p>;
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) return <p key={i} className="font-semibold mb-4">{paragraph.slice(2, -2)}</p>;
                if (paragraph.trim()) return <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>;
                return null;
              })}
            </div>
            
            {/* Navigation */}
            <div className="mt-8">
              <ArticleNavigation prevArticle={prev} nextArticle={next} />
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
};

export default ArticlePage;
