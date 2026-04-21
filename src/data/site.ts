import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  LineChart,
  Layers,
  ShieldCheck,
  Users,
  Wallet,
  Award,
  GraduationCap,
  Mail,
  Linkedin,
  FileDown,
  MapPin,
} from "lucide-react";

export const site = {
  name: "Ponneelan Ramanathan",
  role: "Digital Product & Engineering Leader",
  location: "Chennai, Tamil Nadu, India",
  email: "ponneelan.ramanathan@finstein.ai",
  linkedin: "https://www.linkedin.com/in/",
  resumeUrl: "/resume.pdf",
  projectsUrl: "/projects.pdf",

  hero: {
    headline:
      "Digital Transformation Leader Architecting Scalable & Intelligent Financial Ecosystems",
    subHeadline:
      "An ambitious, performance-driven senior professional transforming the fintech landscape through innovation and strategic leadership.",
  },

  about: {
    title: "Architecting end-to-end digital solutions for financial services",
    paragraphs: [
      "Senior fintech professional with experience in digital transformation, IT project management, and business process reengineering across Banking, NBFC, and Financial Services.",
      "Focused on translating strategy into working product — building teams, platforms, and partnerships that compound into durable business outcomes.",
    ],
    tags: [
      "Banking",
      "NBFC",
      "Digital Lending",
      "Payments",
      "Platform Engineering",
      "AI / ML",
    ],
  },

  expertise: [
    {
      icon: LineChart,
      title: "Digital Transformation",
      body: "Architecting end-to-end digital solutions for financial services.",
    },
    {
      icon: Briefcase,
      title: "Project & Change Management",
      body: "Leading complex IT implementations and organizational transformations.",
    },
    {
      icon: Users,
      title: "Team Leadership & Talent Development",
      body: "Building high-performance teams and retaining technical talent.",
    },
    {
      icon: Layers,
      title: "Stakeholder Management",
      body: "Building strategic partnerships and managing cross-functional teams.",
    },
    {
      icon: Wallet,
      title: "Budgeting & Cost Control",
      body: "Optimizing IT spend while maximizing business value.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity & Compliance",
      body: "Ensuring enterprise security, regulatory compliance, and risk management.",
    },
  ] satisfies { icon: LucideIcon; title: string; body: string }[],

  work: [
    {
      org: "Finstein",
      role: "Digital Products",
      period: "Current",
      bullets: [
        "Leading digital product initiatives.",
        "Building platform capabilities and team culture.",
      ],
    },
    {
      org: "Previous Engagement",
      role: "Platform / Engineering Lead",
      period: "—",
      bullets: [
        "Shipped lending workflows adaptable across multiple sectors.",
        "Integrated third-party APIs for identity, KYC, and payments.",
      ],
    },
    {
      org: "Earlier Engagement",
      role: "Engineering",
      period: "—",
      bullets: [
        "Built internal systems streamlining HR, product, audit, and risk operations.",
        "Delivered modular applications aligned to evolving business needs.",
      ],
    },
  ],

  stats: [
    { label: "Years of Experience", value: "10+" },
    { label: "APIs & systems connected", value: "25+" },
    { label: "Team members led", value: "20+" },
    { label: "Modules delivered", value: "30+" },
  ],

  certifications: [
    { icon: Award, title: "Professional Certification", body: "Relevant industry credential." },
    { icon: Award, title: "Domain Certification", body: "Specialized training." },
    { icon: GraduationCap, title: "Academic Credential", body: "Post-graduate qualification." },
    { icon: GraduationCap, title: "Academic Credential", body: "Under-graduate qualification." },
  ] satisfies { icon: LucideIcon; title: string; body: string }[],

  contact: {
    title: "Let's Connect",
    body: "Open to roles, collaborations, and conversations around product, engineering, and transformation.",
    links: [
      { icon: Mail, label: "Email", href: "mailto:ponneelan.ramanathan@finstein.ai" },
      { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/" },
      { icon: FileDown, label: "Download Resume", href: "/resume.pdf" },
      { icon: MapPin, label: "Chennai, India", href: "#" },
    ] satisfies { icon: LucideIcon; label: string; href: string }[],
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Stats", href: "#stats" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
