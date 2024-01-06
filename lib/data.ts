import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eventHub from "@/public/assets/eventHub.png";
import portfolio from "@/public/assets/portfolio.png";
import daa from "@/public/assets/daa.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MS Computer Science",
    location: "University of Texas at Arlington | Texas, US",
    description:
      "I'm currently pursuing my masters in computer science. I'm expected to graduate in May 2025",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Current",
  },
  {
    title: "Senior Software Engineer | Full-Stack Developer",
    location: "Accenture | Munich, Germany",
    description:
      "I worked as a full-stack developer on stack including Next.js,React, TypeScript, Node.js, GraphQL, PostgreSQL, and Azure. I also led development of a new e-commerce platform for the company.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Software Engineer | Full-Stack Developer",
    location: "Accenture | Mumbai, India",
    description:
      "I worked on REST APIs for web applications using Node.js, Express, and MongoDB. I also worked on front-end using React, Redux, and Tailwind.",
    icon: React.createElement(FaReact),
    date: "2018 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "EventHub",
    description:
      "A public web app for organizing tech events. Users can create their own events, and also purchase events hosted by other users.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Stripe",
      "Clerk",
      "Shadcn",
    ],
    imageUrl: eventHub,
  },
  {
    title: "Portfolio",
    description:
      "Dynamic and visually captivating portfolio web app showcasing my skills, experience, and interests.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfolio,
  },
  {
    title: "Analysis of Sorting Algorithms",
    description:
      "A Python based GUI wherein users can select various sorting algorithms, and compare their runtimes.",
    tags: ["Python"],
    imageUrl: daa,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Azure",
  "CI/CD",
  "Java",
  "Kotlin",
  "C/C++",
] as const;
