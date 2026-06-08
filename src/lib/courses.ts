import type { Course } from "../types/course";

export const courses: Course[] = [
  {
    id: "fullstack-web-dev",
    slug: "fullstack-web-dev",

    // ======================
    // 🧾 BASIC INFO (cards)
    // ======================
    tag: "BEGINNER",
    category: "TECHNOLOGY",
    title: "Full-Stack Web Development Bootcamp",
    subtitle:
      "Become a professional Full-Stack Developer by building real-world projects.",
    desc: "Master HTML, CSS, JavaScript, React, Node.js and build 5 real-world projects.",

    duration: "42 hrs",
    lessons: 88,
    rating: 4.9,
    reviews: 1240,
    students: 12450,
    price: "$89",
    icon: "💻",
    gradient: "from-[#1a0a2e] to-[#3b0f8e]",

    // ======================
    // 📖 DETAILS PAGE DATA
    // ======================
    introVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "English",
    certificate: true,

    learn: [
      "Build responsive websites with HTML & CSS",
      "Master JavaScript fundamentals",
      "Create modern React applications",
      "Build REST APIs with Node.js & Express",
      "Work with MongoDB databases",
      "Deploy full-stack applications",
    ],

    requirements: [
      "A computer with internet access",
      "No programming experience required",
      "Willingness to learn and practice",
    ],

    modules: [
      {
        title: "Introduction to Web Development",
        duration: "45 mins",
        lessons: [
          {
            title: "Course Welcome",
            duration: "10 mins",
            description:
              "Overview of the course, learning path and projects.",
          },
          {
            title: "How The Web Works",
            duration: "15 mins",
            description:
              "Understanding browsers, servers and websites.",
          },
          {
            title: "Development Environment Setup",
            duration: "20 mins",
            description:
              "Install VS Code, Node.js and required tools.",
          },
        ],
      },

      {
        title: "HTML Fundamentals",
        duration: "2 hrs",
        lessons: [
          {
            title: "HTML Document Structure",
            duration: "20 mins",
            description: "Learn the anatomy of an HTML document.",
          },
          {
            title: "Text Elements & Formatting",
            duration: "25 mins",
            description: "Work with headings, paragraphs and lists.",
          },
          {
            title: "Forms & Inputs",
            duration: "35 mins",
            description: "Build forms and collect user data.",
          },
        ],
      },
    ],
  },

  // ======================
  // 📊 DATA ANALYTICS
  // ======================
  {
    id: "data-analytics-pro",
    slug: "data-analytics-pro",

    tag: "INTERMEDIATE",
    category: "DATA & AI",
    title: "Data Analytics & Visualization Pro",
    subtitle: "Turn raw data into powerful business insights",
    desc: "Excel, SQL, Python, and Tableau. Build dashboards and analytics pipelines.",

    duration: "38 hrs",
    lessons: 74,
    rating: 4.8,
    reviews: 870,
    students: 8900,
    price: "$79",
    icon: "📊",
    gradient: "from-[#0f1a2e] to-[#0f3b8e]",

    introVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "English",
    certificate: true,

    learn: [
      "Analyze data using Excel & SQL",
      "Build dashboards in Tableau",
      "Use Python for data analysis",
      "Clean and transform datasets",
    ],

    requirements: [
      "Basic computer skills",
      "No prior data experience required",
    ],

    modules: [
      {
        title: "Data Fundamentals",
        duration: "1 hr",
        lessons: [
          {
            title: "Introduction to Data",
            duration: "15 mins",
            description: "What is data and how it drives decisions.",
          },
        ],
      },
      {
        title: "Data Analysis with Python",
        duration: "2 hrs",
        lessons: [
          {
            title: "Introduction to Data",
            duration: "15 mins",
            description: "What is data and how it drives decisions.",
          },
        ],
      },
    ],
  },

  // ======================
  // 🎨 UI/UX DESIGN
  // ======================
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",

    tag: "BEGINNER",
    category: "DESIGN",
    title: "UI/UX Design Masterclass",
    subtitle: "Design beautiful and user-friendly digital experiences",
    desc: "Learn Figma, UX principles, wireframing and design systems.",

    duration: "30 hrs",
    lessons: 60,
    rating: 4.9,
    reviews: 2100,
    students: 10200,
    price: "$69",
    icon: "🎨",
    gradient: "from-[#1a0a2e] to-[#6b21e8]",

    introVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    language: "English",
    certificate: true,

    learn: [
      "Master UI design principles",
      "Build wireframes in Figma",
      "Create design systems",
      "Improve user experience flow",
    ],

    requirements: ["No design experience required"],

    modules: [
      {
        title: "Design Basics",
        duration: "1 hr",
        lessons: [
          {
            title: "What is UI/UX",
            duration: "10 mins",
            description: "Understanding user-centered design.",
          },
        ],
      },
    ],
  },
];