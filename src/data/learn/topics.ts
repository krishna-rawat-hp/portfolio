export interface Topic {
  id: string;
  title: string;
  description?: string;
  subtopics?: Topic[];
  blogs?: Blog[];
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  type: "blog" | "interview";
}

export const topics: Topic[] = [
  {
    id: "react",
    title: "React.js",
    description: "Learn React.js from basics to advanced concepts",
    subtopics: [
      {
        id: "react-basics",
        title: "React Basics",
        blogs: [
          {
            id: "react-hooks",
            title: "Understanding React Hooks",
            description: "A comprehensive guide to React Hooks",
            content: "Coming soon...",
            date: "2025-09-28",
            tags: ["react", "hooks", "frontend"],
            type: "blog",
          },
        ],
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Master JavaScript programming",
    subtopics: [
      {
        id: "js-fundamentals",
        title: "JavaScript Fundamentals",
        blogs: [
          {
            id: "js-closures",
            title: "JavaScript Closures Explained",
            description: "Common interview questions on closures",
            content: "Coming soon...",
            date: "2025-09-28",
            tags: ["javascript", "interview-prep"],
            type: "interview",
          },
        ],
      },
    ],
  },
];
