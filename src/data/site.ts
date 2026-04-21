import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Wallet,
  Zap,
  Smartphone,
  Database,
  Cloud,
  GraduationCap,
  Braces,
  Library,
  Wrench,
  Mail,
  Linkedin,
  Github,
  Phone,
} from "lucide-react";

export const site = {
  name: "Ponneelan R",
  role: "Software Engineer — Full Stack",
  location: "Chennai, Tamil Nadu, India",
  email: "ponneelan.ramanathan@gmail.com",
  phone: "+91 96296 41742",
  linkedin: "https://www.linkedin.com/in/ponneelan",
  github: "https://github.com/Ponneelan",
  resumeUrl: "/ponneelan-resume.pdf",
  projectsUrl: "/ponneelan-resume.pdf",

  hero: {
    headline:
      "Full-Stack Engineer Building Secure, Scalable Banking & Fintech Applications",
    subHeadline:
      "Software Engineer at Finstein crafting banking, payments, and UPI products across Angular, ASP.NET, and Node.js — shipping features used by 10K+ daily users in production.",
  },

  about: {
    title: "End-to-end delivery across frontend, backend, database, and cloud",
    paragraphs: [
      "Full-stack software engineer at Finstein (2022 – Present) focused on banking and fin-tech — Angular on the front, ASP.NET / Node.js APIs on the back, SQL Server for data, and Azure for delivery.",
      "I own features end-to-end: reusable components and state management that cut redundant API calls, transaction-safe APIs tuned for scale, Ionic Android apps with UPI integrations, and production releases with rapid incident response.",
    ],
    tags: [
      "Angular",
      "TypeScript",
      "C# / ASP.NET",
      "Node.js / NestJS",
      "Ionic",
      "SQL Server",
      "Azure",
      "UPI Payments",
      "Banking & Fin-Tech",
    ],
  },

  expertise: [
    {
      icon: Code2,
      title: "Full-Stack Development",
      body: "Reusable Angular components with state management + transaction-safe ASP.NET / Node.js APIs.",
    },
    {
      icon: Wallet,
      title: "Banking & Fin-Tech",
      body: "Building e-banking, payments, and financial consolidation products for production workloads.",
    },
    {
      icon: Zap,
      title: "API Design & Performance",
      body: "Entity Framework, optimized LINQ/SQL, and DI — ~30% lower database load and faster responses.",
    },
    {
      icon: Smartphone,
      title: "Mobile & UPI Payments",
      body: "Angular + Ionic Android apps with UPI flows, APK builds, and release ownership.",
    },
    {
      icon: Database,
      title: "Database Engineering",
      body: "SQL Server design — stored procedures, indexing, migrations, and performance tuning.",
    },
    {
      icon: Cloud,
      title: "Cloud & Delivery",
      body: "Azure deployments, production issue resolution, and ~40% faster incident turnaround.",
    },
  ] satisfies { icon: LucideIcon; title: string; body: string }[],

  work: [
    {
      org: "E-Banking Web Application",
      role: "Angular · ASP.NET Web API · SQL Server · Azure",
      period: "Finstein · Ongoing",
      bullets: [
        "Developed responsive Angular web UI with reusable components, state management, and reporting features with print support.",
        "Built secure, transaction-safe back-end APIs using ASP.NET Web API, EF Core with ACID compliance, optimized LINQ queries, and Dependency Injection.",
        "Designed and optimized SQL Server databases — stored procedures, indexing, migrations, and performance tuning for high-volume banking data.",
        "Delivered end-to-end features across front-end, back-end, database, and Azure cloud, resolving production issues and improving reliability.",
      ],
    },
    {
      org: "Payment Service Provider (PSP) — Mobile & Web",
      role: "Angular · Ionic · Node.js",
      period: "Finstein · Ongoing",
      bullets: [
        "Developed and maintained Android and web payment applications supporting secure digital transaction workflows.",
        "Integrated UPI payment flows and third-party security SDKs to ensure compliant and reliable payments.",
        "Owned APK builds, production releases, and live issue fixes, ensuring high availability of payment services.",
        "Maintained an Angular-based admin portal for managing users, transactions, and operational workflows.",
      ],
    },
    {
      org: "Financial Consolidation — Notes to Accounts",
      role: "Angular · Node.js · CKEditor",
      period: "Finstein · Ongoing",
      bullets: [
        "Designed and delivered a dynamic Notes to Accounts module enabling structured financial disclosures.",
        "Implemented Excel-based data injection and variable substitution, auto-generating financial tables.",
        "Delivered the feature end-to-end as a sole contributor — frontend, backend, and reporting logic.",
      ],
    },
  ],

  stats: [
    { label: "Daily users in production", value: "10K+" },
    { label: "Fewer redundant API calls", value: "~40%" },
    { label: "Reduction in DB load", value: "~30%" },
    { label: "Faster incident resolution", value: "~40%" },
  ],

  certifications: [
    {
      icon: GraduationCap,
      title: "B.Tech — Information Technology",
      body: "University College of Engineering, Villupuram · GPA 7.50 · Aug 2018 – Jun 2022.",
    },
    {
      icon: Braces,
      title: "Languages",
      body: "TypeScript, JavaScript, C#, Python, SQL.",
    },
    {
      icon: Library,
      title: "Frameworks & Libraries",
      body: "Angular, ASP.NET Web API, Node.js, NestJS, Ionic.",
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      body: "Visual Studio, VS Code, Cursor, Git, Postman, Swagger.",
    },
  ] satisfies { icon: LucideIcon; title: string; body: string }[],

  contact: {
    title: "Let's Connect",
    body: "Open to full-stack roles, fintech product work, and collaborations across Angular, .NET, and Node.js.",
    links: [
      {
        icon: Mail,
        label: "ponneelan.ramanathan@gmail.com",
        href: "mailto:ponneelan.ramanathan@gmail.com",
      },
      {
        icon: Linkedin,
        label: "linkedin.com/in/ponneelan",
        href: "https://www.linkedin.com/in/ponneelan",
      },
      {
        icon: Github,
        label: "github.com/Ponneelan",
        href: "https://github.com/Ponneelan",
      },
      {
        icon: Phone,
        label: "+91 96296 41742",
        href: "tel:+919629641742",
      },
    ] satisfies { icon: LucideIcon; label: string; href: string }[],
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#work" },
  { label: "Impact", href: "#stats" },
  { label: "Education", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
