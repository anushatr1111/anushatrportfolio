// Education Data - Structured for clear academic progression

export interface EducationEntry {
  id: string;
  type: "degree" | "higher-secondary" | "secondary";
  title: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: "CGPA" | "Percentage" | "Grade";
  icon: string;
  color: string;
  highlights?: string[];
}

export const educationEntries: EducationEntry[] = [
  {
    id: "bachelors",
    type: "degree",
    title: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Kamaraj College of Engineering and Technology",
    location: "Virudhunagar, Tamil Nadu",
    period: "2022 – 2026",
    score: "8.00 / 10.00",
    scoreType: "CGPA",
    icon: "GraduationCap",
    color: "primary",
    highlights: [
      "Specializing in AI/ML and Software Engineering",
      "Active participant in coding competitions",
      "Multiple certifications in cloud and AI"
    ]
  },
  {
    id: "higher-secondary",
    type: "higher-secondary",
    title: "Higher Secondary Education (Class XII)",
    institution: "P.S. Chidambara Nadar English Senior School",
    location: "Madurai, Tamil Nadu",
    period: "2021 – 2022",
    score: "78%",
    scoreType: "Percentage",
    icon: "School",
    color: "lavender",
    highlights: [
      "Science stream with Computer Science",
      "Strong foundation in mathematics and programming"
    ]
  },
  {
    id: "secondary",
    type: "secondary",
    title: "Secondary Education (Class X)",
    institution: "P.S. Chidambara Nadar English Senior School",
    location: "Madurai, Tamil Nadu",
    period: "2019 – 2020",
    score: "85%",
    scoreType: "Percentage",
    icon: "BookOpen",
    color: "sage",
    highlights: [
      "First exposure to computer science",
      "Developed interest in logical problem-solving"
    ]
  }
];
