// Achievements Data - Independent section for highlighting accomplishments

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  metric?: string;
  category: "competitive" | "hackathon" | "contribution" | "certification";
}

export const achievementsList: Achievement[] = [
  {
    id: "leetcode",
    title: "150+ LeetCode Problems Solved",
    description: "Consistent daily practice in Data Structures and Algorithms, demonstrating problem-solving discipline and technical readiness.",
    icon: "Code2",
    color: "primary",
    metric: "150+",
    category: "competitive"
  },
  {
    id: "sih",
    title: "Smart India Hackathon 2025",
    description: "Selected participant in India's largest national hackathon, competing with teams across the country to solve real-world problems.",
    icon: "Trophy",
    color: "rose",
    category: "hackathon"
  },
  {
    id: "codevita",
    title: "TCS CodeVita Season 11",
    description: "Successfully completed TCS CodeVita, one of the world's largest coding competitions, showcasing algorithmic problem-solving skills.",
    icon: "Award",
    color: "lavender",
    category: "competitive"
  },
  {
    id: "opensource",
    title: "Open Source Contributor",
    description: "Active contributions to GitHub projects, collaborating with the developer community and improving shared codebases.",
    icon: "GitBranch",
    color: "sage",
    category: "contribution"
  }
];
