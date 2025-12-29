import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/journal/ArticleCard";
import { getCategoryBySlug, blogCategories } from "@/data/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const colorClasses: Record<string, { badge: string; border: string }> = {
  primary: { badge: "bg-primary/15 text-primary", border: "hover:border-primary/30" },
  sage: { badge: "bg-sage/20 text-sage-foreground", border: "hover:border-sage/30" },
  lavender: { badge: "bg-lavender/20 text-lavender-foreground", border: "hover:border-lavender/30" },
  rose: { badge: "bg-rose/15 text-rose-foreground", border: "hover:border-rose/30" }
};

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug || "");

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading mb-4">Category not found</h1>
          <Button asChild><Link to="/#blog">Back to Journal</Link></Button>
        </div>
      </div>
    );
  }

  const colors = colorClasses[category.color] || colorClasses.primary;

  return (
    <>
      <Helmet>
        <title>{category.title} | Journal | Anusha T R</title>
        <meta name="description" content={category.description} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <img src={category.heroImage} alt={category.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="section-container">
              <Button variant="ghost" size="sm" className="mb-4" asChild>
                <Link to="/#blog"><ArrowLeft className="h-4 w-4 mr-2" />All Categories</Link>
              </Button>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">{category.title}</h1>
              <p className="text-muted-foreground mt-2">{category.description}</p>
            </div>
          </div>
        </div>
        
        {/* Articles */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeading title="Articles" subtitle={`${category.articles.length} articles in this category`} />
            <div className="grid md:grid-cols-2 gap-6">
              {category.articles.map(article => (
                <ArticleCard key={article.id} article={article} colorClasses={colors} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CategoryPage;
