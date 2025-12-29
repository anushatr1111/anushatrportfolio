// Blog Data - Scalable structure for future expansion (JSON/Markdown/CMS ready)

import aiMlJourneyImage from "@/assets/blog/ai-ml-journey.jpg";
import learningProjectsImage from "@/assets/blog/learning-projects.jpg";
import studentEngineerImage from "@/assets/blog/student-engineer.jpg";
import internshipLessonsImage from "@/assets/blog/internship-lessons.jpg";
import generativeAiImage from "@/assets/blog/generative-ai.jpg";
import cnnPlantImage from "@/assets/blog/cnn-plant.jpg";
import auraSafeImage from "@/assets/blog/aura-safe.jpg";
import weatherDebugImage from "@/assets/blog/weather-debug.jpg";
import consistencyImage from "@/assets/blog/consistency.jpg";
import fresherMindsetImage from "@/assets/blog/fresher-mindset.jpg";
import nitTrichyImage from "@/assets/blog/nit-trichy.jpg";
import prigaSolutionsImage from "@/assets/blog/priga-solutions.jpg";

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  heroImage: string;
  inlineImages?: string[];
  readTime: number;
  tags: string[];
  category: string;
  categorySlug: string;
  publishedAt: string;
  author: string;
}

export interface BlogCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  heroImage: string;
  articles: BlogArticle[];
}

export const blogCategories: BlogCategory[] = [
  {
    id: "aiml",
    slug: "my-ai-ml-journey",
    title: "My AI & ML Journey",
    description: "Exploring the fascinating world of artificial intelligence and machine learning",
    icon: "Sparkles",
    color: "primary",
    bgGradient: "from-primary/20 via-primary/10 to-lavender/10",
    heroImage: aiMlJourneyImage,
    articles: [
      {
        id: "aiml-1",
        slug: "getting-started-with-generative-ai",
        title: "Getting Started with Generative AI",
        excerpt: "From confusion to clarity—how I learned to understand LLMs, prompt engineering, and built my first AI-powered application.",
        heroImage: generativeAiImage,
        readTime: 8,
        tags: ["AI", "Generative AI", "LLMs", "Growth"],
        category: "My AI & ML Journey",
        categorySlug: "my-ai-ml-journey",
        publishedAt: "2024-12-15",
        author: "Anusha T R",
        content: `
## The First Encounter

When I first heard about Generative AI and Large Language Models, I felt overwhelmed. The terminology seemed endless—transformers, attention mechanisms, tokens, temperature, top-p sampling. Where was I supposed to begin?

The turning point came when I stopped trying to understand everything at once and instead focused on one question: **What can I actually build with this?**

## Breaking Down the Confusion

I started with the basics. Instead of diving into transformer architectures, I began with prompt engineering—the art of communicating with AI models effectively. This hands-on approach taught me more in a week than months of reading papers.

### Key Lessons Learned

1. **Start with the output, not the theory**: Before understanding how GPT works internally, I learned what it could do for me.

2. **Iterate on prompts like code**: My first prompts were vague and produced mediocre results. Through iteration, I learned to be specific, provide context, and structure my requests.

3. **Understand limitations before capabilities**: Knowing where AI fails taught me how to use it effectively.

## Building My First AI Application

Armed with this understanding, I built a simple document Q&A system. The project was straightforward—upload a PDF, ask questions, get answers. But the learning was profound.

I discovered the importance of:
- **Context windows** and why they matter for document processing
- **Chunking strategies** for handling long documents
- **Prompt templates** that consistently produce good results

## The Growth Mindset

What changed my perspective was realizing that AI/ML is not about memorizing algorithms—it's about solving problems. Every model, every technique exists to address a specific challenge.

Now, when I approach a new AI concept, I ask: "What problem does this solve?" This simple reframe has accelerated my learning exponentially.

## Looking Forward

Generative AI has become central to my technical identity. I'm now exploring:
- Building AI agents that can perform multi-step tasks
- Retrieval-Augmented Generation (RAG) for accurate information retrieval
- Responsible AI practices for ethical development

The journey from confusion to clarity wasn't easy, but it taught me something valuable: **the best way to learn AI is to build with it.**
        `
      },
      {
        id: "aiml-2",
        slug: "building-my-first-cnn",
        title: "Building My First CNN",
        excerpt: "The challenge of plant disease detection taught me the power of computer vision and the importance of quality training data.",
        heroImage: cnnPlantImage,
        readTime: 6,
        tags: ["Deep Learning", "CNN", "Computer Vision", "Projects"],
        category: "My AI & ML Journey",
        categorySlug: "my-ai-ml-journey",
        publishedAt: "2024-11-20",
        author: "Anusha T R",
        content: `
## The Problem That Started It All

Agriculture in India faces massive challenges from plant diseases that destroy crops worth billions annually. When I learned about this in my third year, I wondered: **Could AI help farmers detect diseases early?**

This question led me to my first serious deep learning project—a Convolutional Neural Network for plant disease detection.

## Understanding Convolutional Neural Networks

Before writing a single line of code, I spent two weeks understanding CNNs conceptually. I learned that:

- **Convolutional layers** act like pattern detectors, identifying edges, textures, and shapes
- **Pooling layers** reduce dimensionality while preserving important features
- **Fully connected layers** make the final classification decisions

The "aha moment" came when I visualized what each layer was learning. Early layers detected simple patterns; deeper layers recognized complex disease symptoms.

## The Data Challenge

The most humbling part of this project wasn't the model architecture—it was the data.

### Lessons About Training Data

1. **Quality over quantity**: My first dataset had 10,000 images but poor lighting conditions. A smaller, well-curated dataset performed better.

2. **Data augmentation is essential**: Rotating, flipping, and adjusting brightness artificially expanded my training set and improved generalization.

3. **Class imbalance matters**: Some diseases were rare in my dataset. Without addressing this, my model learned to ignore minority classes.

## From Theory to Implementation

Using PyTorch, I built a CNN with:
- 3 convolutional blocks with ReLU activation
- Max pooling after each block
- Dropout for regularization
- A final softmax layer for multi-class classification

The training process taught me patience. Watching loss curves, adjusting learning rates, debugging gradient issues—each challenge added to my understanding.

## Results and Reflections

The final model achieved **92% accuracy** on the test set—not perfect, but meaningful for a first attempt.

More importantly, I learned:
- **Deep learning is iterative**: My first model was terrible. Improvement came through experimentation.
- **Domain knowledge matters**: Understanding plant pathology helped me interpret model predictions.
- **Real-world deployment is different**: Running inference on low-power devices required model optimization.

## Impact and Future

This project solidified my passion for AI applications with real-world impact. The intersection of technology and agriculture excites me—there's so much potential to help farmers make data-driven decisions.

Next, I want to explore object detection for locating diseased regions and mobile deployment for on-field use.
        `
      }
    ]
  },
  {
    id: "projects",
    slug: "learning-through-projects",
    title: "Learning Through Projects",
    description: "Hands-on experiences that shaped my engineering skills",
    icon: "Lightbulb",
    color: "sage",
    bgGradient: "from-sage/20 via-sage/10 to-primary/10",
    heroImage: learningProjectsImage,
    articles: [
      {
        id: "projects-1",
        slug: "aura-safe-from-idea-to-app",
        title: "Aura Safe: From Idea to App",
        excerpt: "How building a safety app taught me about real-time systems, Firebase integration, and the responsibility of building for impact.",
        heroImage: auraSafeImage,
        readTime: 7,
        tags: ["Flutter", "Firebase", "Mobile Dev", "Projects"],
        category: "Learning Through Projects",
        categorySlug: "learning-through-projects",
        publishedAt: "2024-10-15",
        author: "Anusha T R",
        content: `
## The Origin Story

Personal safety applications had always interested me, but most existing solutions felt incomplete. Either they were too complicated to use in emergencies or they lacked reliable location tracking.

I asked myself: **What if I could build something that works when it matters most?**

## Defining the Core Features

After researching user needs and existing solutions, I identified three non-negotiable features:

1. **Real-time GPS tracking** that works reliably
2. **One-tap emergency alerts** to trusted contacts
3. **Seamless background operation** without draining battery

## The Technical Journey

### Choosing Flutter

Cross-platform development was essential—I needed the app on both iOS and Android. Flutter's single codebase approach and excellent performance made it the obvious choice.

Learning Dart was surprisingly smooth. Its similarity to Java and JavaScript meant I could focus on Flutter concepts rather than language syntax.

### Firebase Integration

Firebase became the backbone of Aura Safe:

- **Firebase Auth** for secure user authentication
- **Cloud Firestore** for real-time data synchronization
- **Cloud Messaging** for instant push notifications

The real challenge was implementing reliable location tracking. GPS accuracy varies wildly, and I needed to handle scenarios like poor connectivity and battery optimization.

### The Responsibility Factor

Building a safety app carries weight. If the app fails during an emergency, the consequences could be severe. This responsibility pushed me to:

- Write comprehensive error handling
- Test extensively under poor network conditions
- Implement fallback mechanisms for every critical feature

## Challenges and Solutions

### Challenge 1: Background Location

Android's power optimization killed my app's background service. Solution: implementing foreground services with persistent notifications.

### Challenge 2: Network Reliability

Users might need help in areas with poor connectivity. Solution: offline-first architecture with automatic sync when connection restores.

### Challenge 3: User Experience

Emergency situations are stressful. Solution: large, accessible buttons and minimal steps to trigger alerts.

## What I Learned

1. **User research is engineering**: Understanding user needs shaped technical decisions more than any tutorial.

2. **Real-time systems are complex**: Synchronizing state across devices reliably requires careful architecture.

3. **Testing is non-negotiable**: For safety-critical apps, comprehensive testing isn't optional—it's essential.

## The Impact

Aura Safe is now used by my friends and family. Knowing that my code provides real peace of mind is the most rewarding outcome of any project I've built.

Building for impact isn't about complexity—it's about solving real problems reliably.
        `
      },
      {
        id: "projects-2",
        slug: "when-apis-break-lessons-from-weather-app",
        title: "When APIs Break: Lessons from Weather App",
        excerpt: "Debugging production issues taught me more than any tutorial. Here's what went wrong and how I fixed it.",
        heroImage: weatherDebugImage,
        readTime: 5,
        tags: ["JavaScript", "APIs", "Debugging", "Growth"],
        category: "Learning Through Projects",
        categorySlug: "learning-through-projects",
        publishedAt: "2024-09-10",
        author: "Anusha T R",
        content: `
## The Moment Everything Broke

My weather application was working perfectly—until it wasn't. One morning, I woke up to messages from friends: "Your app shows nothing."

The API I depended on had changed its response format without warning. This experience taught me more about software engineering than weeks of tutorials.

## The Investigation

### Step 1: Check the Obvious

First, I verified that my API key was still valid and that I hadn't exceeded rate limits. Both were fine.

### Step 2: Examine the Response

Using browser developer tools, I inspected the actual API response. The structure had changed—fields I expected were nested differently, and some were renamed.

### Step 3: Understand the Failure Mode

My code crashed silently because I was accessing properties on undefined objects. No error messages, just empty screens.

## The Fixes

### Immediate Fix: Defensive Coding

I restructured my data parsing to handle missing fields gracefully:

\`\`\`javascript
// Before: Assumed structure existed
const temp = data.main.temp;

// After: Defensive access
const temp = data?.main?.temp ?? 'N/A';
\`\`\`

### Long-term Fix: Response Validation

I implemented schema validation to catch API changes early. Now, when the API response doesn't match expected structure, I get clear error messages instead of silent failures.

## Lessons for Future Projects

1. **APIs are external dependencies**: They will change. Your code must handle this gracefully.

2. **Silent failures are dangerous**: Always log errors and provide fallback UI for failure states.

3. **Monitoring matters**: I now implement basic uptime monitoring for any production application.

4. **Documentation is fragile**: API documentation may lag behind actual implementation. Always test against real responses.

## Building Resilience

After this experience, I adopted new practices:

- **Cache API responses** for offline access and as fallbacks
- **Implement retry logic** with exponential backoff
- **Show meaningful error states** to users
- **Set up alerts** for unusual response patterns

## The Silver Lining

This debugging session was frustrating, but it transformed how I think about external dependencies. Now, I design for failure from the start.

Every bug is a lesson. This one taught me that production is the real classroom.
        `
      }
    ]
  },
  {
    id: "career",
    slug: "from-student-to-software-engineer",
    title: "From Student to Software Engineer",
    description: "Reflections on the transition from academic learning to professional readiness",
    icon: "GraduationCap",
    color: "lavender",
    bgGradient: "from-lavender/20 via-lavender/10 to-rose/10",
    heroImage: studentEngineerImage,
    articles: [
      {
        id: "career-1",
        slug: "the-art-of-consistency-in-tech",
        title: "The Art of Consistency in Tech",
        excerpt: "How discipline and daily practice transformed my approach to learning—150+ LeetCode problems and counting.",
        heroImage: consistencyImage,
        readTime: 5,
        tags: ["Career", "DSA", "Growth", "Mindset"],
        category: "From Student to Software Engineer",
        categorySlug: "from-student-to-software-engineer",
        publishedAt: "2024-08-25",
        author: "Anusha T R",
        content: `
## The Consistency Revelation

When I started my coding journey, I believed talent was everything. Some people were "naturally good" at programming; others weren't. I thought I was in the second category.

Then I discovered a simple truth: **consistency beats talent.**

## The 150+ Problem Journey

Solving 150+ problems on LeetCode wasn't about grinding—it was about building a system.

### My Daily Practice Framework

1. **One problem per day, minimum**: Even on busy days, I solved at least one problem. The streak mattered more than the difficulty.

2. **Focus on understanding, not speed**: I'd rather spend 2 hours truly understanding a solution than solving 5 problems superficially.

3. **Review and revise**: Every week, I revisited problems I'd struggled with. Spaced repetition works for algorithms too.

## What Changed

### Before Consistency
- Overwhelmed by problem statements
- Couldn't recognize patterns
- Gave up after 10 minutes of struggle

### After Consistency
- Problems feel familiar, even when new
- Pattern recognition is automatic
- Comfortable with struggle—it's part of learning

## The Compound Effect

Small daily improvements compound dramatically. After six months:
- My problem-solving time dropped by 60%
- I could approach new problems with frameworks, not fear
- Technical interviews became conversations, not interrogations

## Practical Tips for Building Consistency

1. **Start ridiculously small**: If one problem feels like too much, do one a week. Build the habit first.

2. **Track your progress**: I maintain a spreadsheet of solved problems. Seeing the numbers grow is motivating.

3. **Join a community**: Accountability helps. I study with friends who share progress daily.

4. **Embrace the plateau**: Progress isn't linear. Some weeks feel stagnant. Trust the process.

## Beyond LeetCode

The consistency mindset extends to everything:
- Learning new frameworks: consistent daily study
- Building projects: consistent small commits
- Writing: consistent reflection (like this blog)

## The Deeper Lesson

Consistency isn't about perfection—it's about showing up. On bad days, I solve easy problems. On good days, I tackle hard ones. But I always show up.

This simple discipline has transformed my technical skills more than any course, bootcamp, or tutorial. **The secret isn't a secret—it's just doing the work, day after day.**
        `
      },
      {
        id: "career-2",
        slug: "preparing-for-full-time-a-freshers-mindset",
        title: "Preparing for Full-Time: A Fresher's Mindset",
        excerpt: "What I learned about positioning myself, building a portfolio, and staying confident in a competitive market.",
        heroImage: fresherMindsetImage,
        readTime: 6,
        tags: ["Career", "Portfolio", "Growth", "Job Search"],
        category: "From Student to Software Engineer",
        categorySlug: "from-student-to-software-engineer",
        publishedAt: "2024-07-30",
        author: "Anusha T R",
        content: `
## The Fresher Reality

The job market for freshers is competitive. Thousands of graduates compete for limited positions. I could have felt hopeless, but instead, I chose to focus on what I could control.

## Building a Portfolio That Speaks

### Quality Over Quantity

I have three main projects on my portfolio. Each one:
- Solves a real problem
- Uses relevant technologies
- Is documented and deployable

A portfolio with three excellent projects beats a portfolio with ten half-finished ones.

### Telling the Story

Technical skills alone don't differentiate candidates. I learned to articulate:
- **Why I built each project**: What problem motivated me?
- **What I learned**: Technical and soft skills developed
- **What I'd improve**: Showing self-awareness and growth mindset

## Positioning Strategy

### Finding My Niche

Instead of being "a software developer," I positioned myself at the intersection of AI/ML and software engineering. This specificity:
- Made my profile memorable
- Aligned with high-demand areas
- Reflected genuine interest

### Continuous Learning Signals

I invested in certifications strategically:
- AWS Cloud Practitioner for cloud credibility
- Google Cloud AI certifications for ML focus
- These aren't just credentials—they're signals of commitment

## Handling Rejection

I've faced rejections. Some hurt more than others. But I developed a framework:

1. **Ask for feedback** when possible
2. **Extract one lesson** from each rejection
3. **Take a break** if needed, then continue
4. **Remember that rejection isn't personal**—it's about fit

## Staying Confident

Confidence for a fresher doesn't mean pretending to know everything. It means:

- **Acknowledging what you know well**
- **Being honest about what you're learning**
- **Showing enthusiasm for growth**

Recruiters appreciate candidates who are self-aware and eager to learn.

## The Long Game

Job searching is a marathon, not a sprint. I'm prepared for:
- Multiple interview rounds
- Technical assessments that challenge me
- Waiting periods that test patience

But I'm also confident because I've put in the work. My skills are real. My projects are meaningful. My growth is documented.

## Advice for Fellow Freshers

1. **Start building now**: Don't wait for graduation. Projects matter more than grades.

2. **Network genuinely**: Connect with professionals not to ask for jobs, but to learn.

3. **Stay curious**: The tech landscape changes. Adaptability is your greatest asset.

4. **Take care of yourself**: Job searching is stressful. Balance it with rest and activities you enjoy.

The transition from student to professional is challenging, but it's also exciting. Every day is an opportunity to become the engineer you want to be.
        `
      }
    ]
  },
  {
    id: "internships",
    slug: "lessons-from-internships",
    title: "Lessons from Internships",
    description: "Real-world experiences that shaped my professional development",
    icon: "Rocket",
    color: "rose",
    bgGradient: "from-rose/20 via-rose/10 to-lavender/10",
    heroImage: internshipLessonsImage,
    articles: [
      {
        id: "internships-1",
        slug: "nit-trichy-my-first-real-ai-project",
        title: "NIT Trichy: My First Real AI Project",
        excerpt: "Building fraud detection with NLP showed me the gap between academic knowledge and real-world application.",
        heroImage: nitTrichyImage,
        readTime: 7,
        tags: ["AI", "NLP", "Internship", "Growth"],
        category: "Lessons from Internships",
        categorySlug: "lessons-from-internships",
        publishedAt: "2024-06-20",
        author: "Anusha T R",
        content: `
## The Opportunity

When I received the internship offer from NIT Trichy, I was excited and nervous. This was my chance to work on real AI problems with experienced researchers.

The project: **Building a fraud detection system using Natural Language Processing.**

## The Academic-to-Real-World Gap

### What I Expected
- Clean, well-labeled datasets
- Clear problem definitions
- Straightforward implementation

### What I Found
- Messy, incomplete data
- Evolving requirements
- Multiple valid approaches with trade-offs

This gap was the most valuable lesson of my internship.

## The Project Journey

### Phase 1: Understanding the Domain

Before writing code, I spent two weeks understanding fraud patterns:
- What makes a message suspicious?
- How do fraudsters evolve their tactics?
- What are acceptable false positive rates?

Domain knowledge proved as important as technical skills.

### Phase 2: Data Preprocessing

Real-world data is messy. I learned to:
- Handle multiple languages and transliteration
- Normalize text while preserving important signals
- Balance classes in imbalanced datasets

### Phase 3: Model Development

I implemented a Bag of Words approach with advanced features:
- N-gram analysis for phrase detection
- TF-IDF weighting for term importance
- Feature engineering based on domain insights

### Phase 4: Evaluation and Iteration

Production ML isn't about achieving the highest accuracy. It's about:
- Understanding failure modes
- Balancing precision and recall based on business needs
- Building interpretable systems that stakeholders trust

## Key Technical Lessons

1. **Preprocessing is 80% of the work**: Model architecture matters less than data quality.

2. **Simple models often win**: My sophisticated neural network was outperformed by a well-tuned logistic regression.

3. **Interpretability matters**: Stakeholders need to understand why the system flags certain messages.

## Professional Lessons

### Communication
I learned to explain technical decisions to non-technical stakeholders. This skill is as important as coding.

### Collaboration
Working with a team meant:
- Code reviews that improved my practices
- Design discussions that broadened my perspective
- Learning from others' expertise

### Time Management
Real projects have deadlines. I learned to:
- Prioritize ruthlessly
- Deliver incrementally
- Communicate blockers early

## The Impact

The fraud detection system is now part of the organization's security infrastructure. Knowing my work protects people from financial harm is deeply satisfying.

## Reflection

This internship transformed how I approach AI projects. Academic exercises are valuable, but real-world application teaches lessons no course can provide.

The gap between knowing and doing is where growth happens.
        `
      },
      {
        id: "internships-2",
        slug: "full-stack-at-priga-solutions",
        title: "Full-Stack at PriGa Solutions",
        excerpt: "From database design to payment integration—how shipping a travel booking platform shaped my engineering skills.",
        heroImage: prigaSolutionsImage,
        readTime: 6,
        tags: ["Full Stack", "MERN", "Internship", "Projects"],
        category: "Lessons from Internships",
        categorySlug: "lessons-from-internships",
        publishedAt: "2024-05-15",
        author: "Anusha T R",
        content: `
## The Challenge

PriGa Solutions tasked me with building a complete travel booking platform. This wasn't a learning project—it was a production system with real users and real money.

**The tech stack**: MongoDB, Express, React, Node.js (MERN)

## Building from Zero

### Database Design

My first major decision: how to structure the database.

I learned that database design isn't just about storing data—it's about:
- Optimizing for common queries
- Planning for scale
- Maintaining data integrity

The schema went through three iterations before I was satisfied.

### API Architecture

Building REST APIs taught me:
- Consistent naming conventions matter
- Error handling is a feature, not an afterthought
- Documentation saves future debugging time

### Frontend Development

React for a complex booking system meant:
- Managing complex state across multiple forms
- Handling loading and error states gracefully
- Building responsive UI that works on all devices

## The Payment Integration

Integrating payment processing was the most challenging part:

1. **Security is paramount**: Handling financial data requires strict protocols.

2. **Testing is different**: I couldn't test with real money, so I set up comprehensive sandbox environments.

3. **Edge cases multiply**: Payment failures, refunds, partial bookings—each scenario needed handling.

## Lessons in Shipping

### Lesson 1: Done is Better Than Perfect

My first version had rough edges. But it worked. Shipping early allowed for feedback and iteration.

### Lesson 2: User Feedback is Gold

Real users found issues I never anticipated. Their feedback shaped the final product more than my initial designs.

### Lesson 3: Monitoring is Essential

Production bugs happen. I implemented logging and monitoring to catch issues before users reported them.

## Technical Growth

This internship compressed years of learning into months:
- **Backend**: Building scalable APIs, database optimization, authentication flows
- **Frontend**: State management, component architecture, performance optimization
- **DevOps**: Deployment, environment management, CI/CD basics

## Soft Skills Development

Beyond code, I developed:
- **Client communication**: Translating technical constraints into business terms
- **Project management**: Breaking large features into manageable sprints
- **Problem-solving under pressure**: Production issues don't wait for convenient times

## The Product

The travel booking platform now serves real customers. Features I built:
- Search and filter for travel packages
- Secure booking and payment flow
- User profiles and booking history
- Admin dashboard for management

## Reflection

Full-stack development is demanding because it requires understanding the entire system. But this holistic view makes you a better engineer at any level.

Shipping a real product taught me that software engineering isn't about perfect code—it's about solving problems for users. The code is just the tool.
        `
      }
    ]
  }
];

// Utility function to get all articles
export const getAllArticles = (): BlogArticle[] => {
  return blogCategories.flatMap(category => category.articles);
};

// Utility function to get article by slug
export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return getAllArticles().find(article => article.slug === slug);
};

// Utility function to get category by slug
export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blogCategories.find(category => category.slug === slug);
};

// Utility function to get adjacent articles
export const getAdjacentArticles = (currentSlug: string): { prev: BlogArticle | null; next: BlogArticle | null } => {
  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex(article => article.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? allArticles[currentIndex - 1] : null,
    next: currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null
  };
};
