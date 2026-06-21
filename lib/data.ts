import {
  Code2,
  Server,
  Database,
  Cloud,
  Layers,
  TestTube2,
} from "lucide-react";

export const metrics = [
  { value: 40, suffix: "%", label: "API performance gain" },
  { value: 80, suffix: "%", label: "Faster onboarding" },
  { value: 15, suffix: "+", label: "Enterprise clients" },
  { value: 4, suffix: "+", label: "Years experience" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "C/C++"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["NestJS", "Node.js", "Express.js", "Django", "FastAPI"],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["React", "Redux Toolkit", "Angular", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Docker", "Jenkins", "CI/CD", "Grafana", "PM2"],
  },
  {
    title: "Architecture & Practices",
    icon: TestTube2,
    items: [
      "Microservices",
      "Event-Driven Systems",
      "RabbitMQ",
      "Multi-Tenant Isolation",
      "RBAC / SSO",
      "System Design",
    ],
  },
];

export const experience = [
  {
    role: "Software Development Engineer",
    company: "Akrivia Automation Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Apr 2022 — Present",
    points: [
      "Architected a multi-tenant industrial automation SaaS platform from scratch, scaling it to serve 15+ enterprise clients with 100% data isolation using NestJS/FastAPI microservices and RabbitMQ event-driven communication.",
      "Improved API request-handling performance by 40% by building a centralized NestJS API Gateway with Redis caching, RBAC enforcement, rate limiting, and circuit breaking.",
      "Reduced client onboarding time by 80% with a multi-tenant onboarding system using RabbitMQ messaging, AES-encrypted communication, and automated tenant provisioning.",
      "Cut anomaly-detection and notification latency significantly via asynchronous processing pipelines with RabbitMQ and Redis for real-time IoT telemetry ingestion.",
      "Increased data reliability and query performance with a dual-database (MongoDB + SQL Server) strategy optimized for time-series and relational workloads.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent",
    location: "Remote",
    period: "Jun 2026 — Present",
    points: [
      "Delivered a production-grade Django full-stack application for a UAE-based client as sole developer, owning architecture through go-live with Django REST Framework, JWT auth, and modular app structure.",
      "Reduced deployment overhead and improved uptime by containerizing with Docker Compose and deploying to a DigitalOcean VPS with Nginx reverse proxy and Cloudflare SSL/DNS.",
      "Enabled full operational control by building a Super Admin Portal with granular RBAC, audit logging, and a real-time metrics dashboard.",
    ],
  },
];

export const services = [
  {
    title: "Full-Stack Product Builds",
    description:
      "End-to-end web applications from architecture to go-live — React/Next.js or Angular front-ends backed by NestJS, Node, or Django APIs.",
    icon: "Layers",
  },
  {
    title: "APIs & Microservices",
    description:
      "Scalable RESTful and event-driven services, API gateways, RBAC/SSO, and inter-service messaging with RabbitMQ and Redis.",
    icon: "Server",
  },
  {
    title: "Multi-Tenant SaaS",
    description:
      "Secure multi-tenant platforms with tenant isolation, automated onboarding, subscription tiers, and admin control planes.",
    icon: "Database",
  },
  {
    title: "DevOps & Deployment",
    description:
      "Dockerized deployments, CI/CD pipelines, VPS/cloud provisioning, domain + SSL setup, and production monitoring.",
    icon: "Cloud",
  },
];

// TODO: Replace these placeholder testimonials with real quotes (name + role).
export const testimonials = [
  {
    quote:
      "Deekshith owned our platform's backend end-to-end and consistently delivered scalable, reliable services ahead of schedule.",
    name: "[Placeholder — add real name]",
    role: "Engineering Lead, Akrivia Automation",
  },
  {
    quote:
      "As a solo developer he shipped our entire product from architecture to deployment. Communication and delivery were excellent.",
    name: "[Placeholder — add real name]",
    role: "Founder, UAE Client",
  },
  {
    quote:
      "Strong system-design instincts and a real focus on performance. Our API latency dropped noticeably after his gateway work.",
    name: "[Placeholder — add real name]",
    role: "Senior Engineer, Akrivia Automation",
  },
];
