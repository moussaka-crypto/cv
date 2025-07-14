import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Hristomir Dimov",
  initials: "HD",
  location: "Burgas, Bulgaria",
  locationLink: "https://www.google.com/maps/place/Burgas",
  about: "",
  summary: (
    <>
      nsh napishi za sebe si ddz
    </>
  ),
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "hrissdimov8@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/moussaka-crypto",
        icon: "github",
      },
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/bjarocki/",
      //   icon: "linkedin",
      // },
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
      title: "Software Development Intern",
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
    "Python",
    "C/C++",
    "Make",
    "Java",
    "JavaScript",
    "AWS",
    "Docker",
    "Terraform",
    "SQL",
    "Jupyter",
    "Tableau"

  ],
  projects: [
    {
      title: "UDP-Client-Server",
      techStack: ["C++", "Winsock", "UDP"],
      description:
        "A multithreaded UDP client-server system in C++ using Winsock, enabling asynchronous message exchange and real-time communication simulation.",
      link: {
        label: "UDP Client/Server",
        href: "https://github.com/moussaka-crypto/UDP-Client-Server",
      },
    },
    {
      title: "Doppelganger",
      techStack: [
        "Python",
      ],
      description:
        "A Python script to scan duplicate copies in a given directory. This tool compares not only file names, but also file hashes to ensure no false search results.",
      link: {
        label: "Doppelganger",
        href: "https://github.com/moussaka-crypto/Doppelganger",
      },
    },
    {
      title: "Bank",
      techStack: ["Java", "JUnit", "JavaFX", "SceneBuilder"],
      description:
        "A universal banking software demo project with a simple GUI in JavaFX with the goal to simulate the core operations of a banking system in Java.",
      link: {
        label: "Bank",
        href: "https://github.com/moussaka-crypto/Bank",
      },
    },
  ],
} as const;
