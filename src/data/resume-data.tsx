import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Hristomir Dimov",
  initials: "HD",
  location: "Burgas, Bulgaria, EEST",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about: "",
  summary: (
    <>
      nsh napishi za sebe si ddz
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: "x",
      },
    ],
  },
  education: [
    {
      school: "FH Aachen - University of Applied Sciences",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "2025"
    },
  ],
  work: [
    {
      company: "Friedrich Lütze GmbH",
      link: "https://www.luetze.com/company/friedrich-luetze-gmbh",
      badges: ["C/C++", "Python", "JavaScript", "Unit Testing"],
      title: "Intern",
      start: "March 2024",
      end: "August 2024",
      description: (
        <>
        Remodeled the Lutze Build System to generate a software architecture diagramm, based on a project's source code and its dependencies, 
        while also gaining strong fundamentals in software architecture, unit testing practices with C/C++, and cross-team collaboration.
        </>
      ),
    }
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
