import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { FutureWorksSection } from "@/components/sections/FutureWorksSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { personalInfo } from "@/data/portfolio";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | AI & ML Software Engineer Portfolio</title>
        <meta
          name="description"
          content={`${personalInfo.name} - ${personalInfo.title}. ${personalInfo.tagline} Explore projects in Machine Learning, NLP, Deep Learning, and Full-Stack Development.`}
        />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Software Developer, Python, React, NLP, Deep Learning, Full Stack Developer, Portfolio, Internship"
        />
        <meta name="author" content={personalInfo.name} />
        <link rel="canonical" href="https://anushatr.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${personalInfo.name} | AI & ML Software Engineer`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} | AI & ML Software Engineer`} />
        <meta name="twitter:description" content={personalInfo.tagline} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: personalInfo.name,
            jobTitle: personalInfo.title,
            url: "https://anushatr.dev",
            sameAs: [personalInfo.github, personalInfo.linkedin],
            knowsAbout: [
              "Machine Learning",
              "Artificial Intelligence",
              "Software Engineering",
              "Python",
              "React",
              "NLP",
            ],
          })}
        </script>
      </Helmet>

      <ScrollProgress />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <FutureWorksSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
