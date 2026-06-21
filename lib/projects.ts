export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: "Enterprise" | "Backend" | "SaaS" | "Fintech" | "Freelance";
  featured: boolean;
  rank: number;
  stack: string[];
  metrics?: { value: string; label: string }[];
  // case study
  problem: string;
  architecture: string[];
  outcome: string[];
  links?: { live?: string; github?: string };
};

export const projects: Project[] = [
  {
    slug: "machine-health-monitoring-saas",
    title: "Machine Health Monitoring SaaS",
    tagline:
      "Secure multi-tenant monitoring platform for 15+ enterprise manufacturing clients.",
    category: "Enterprise",
    featured: true,
    rank: 1,
    stack: [
      "NestJS",
      "React",
      "Redux Toolkit",
      "MongoDB",
      "SQL Server",
      "Redis",
      "RabbitMQ",
    ],
    metrics: [
      { value: "15+", label: "Enterprise clients" },
      { value: "100%", label: "Data segregation" },
    ],
    problem:
      "Industrial manufacturers needed a single platform to monitor machine health in real time, predict faults, and act before downtime — while keeping each client's data fully isolated.",
    architecture: [
      "Multi-tenant architecture with tenant-level data isolation and enterprise SSO.",
      "Real-time IoT telemetry ingestion feeding predictive alert pipelines.",
      "Asynchronous processing with RabbitMQ + Redis to minimize anomaly-detection latency.",
      "Dual-database strategy: MongoDB for time-series telemetry, SQL Server for relational data.",
    ],
    outcome: [
      "Served 15+ enterprise manufacturing clients with 100% data segregation.",
      "Predictive alerts reduced unplanned downtime for clients.",
      "Platform scaled cleanly as the client base grew.",
    ],
    links: {},
  },
  {
    slug: "api-gateway",
    title: "API Gateway",
    tagline:
      "Centralized backend gateway for routing, auth, and RBAC across all microservices.",
    category: "Backend",
    featured: true,
    rank: 2,
    stack: ["NestJS", "Redis", "RabbitMQ", "JWT", "RBAC"],
    metrics: [{ value: "40%", label: "Faster request handling" }],
    problem:
      "A growing fleet of microservices needed centralized authentication, license validation, and consistent request handling without duplicating logic everywhere.",
    architecture: [
      "Centralized NestJS API Gateway managing REST routing and authentication.",
      "Redis caching + RabbitMQ messaging for high-throughput request handling.",
      "Middleware layers for rate limiting, circuit breaking, and request validation.",
      "License validation and RBAC enforcement at the edge.",
    ],
    outcome: [
      "Improved request-handling performance by 40%.",
      "Single, consistent security and validation layer across all services.",
      "Reduced duplicated auth logic and simplified service development.",
    ],
    links: {},
  },
  {
    slug: "super-admin-onboarding-system",
    title: "Super Admin Onboarding System",
    tagline:
      "Multi-tenant onboarding with automated provisioning and AES-encrypted messaging.",
    category: "SaaS",
    featured: true,
    rank: 3,
    stack: ["Angular", "NestJS", "Redis", "RabbitMQ", "AES Encryption"],
    metrics: [{ value: "80%", label: "Faster onboarding" }],
    problem:
      "Onboarding new tenants was slow and manual. The team needed a control plane to provision tenants, configure feature flags, and manage roles securely.",
    architecture: [
      "Hierarchical permission model: super admin / tenant admin / end-user.",
      "RabbitMQ-based messaging with AES-encrypted communication.",
      "Automated tenant provisioning, feature flags, and subscription tiers.",
      "Single control plane for system-wide configuration.",
    ],
    outcome: [
      "Reduced onboarding time by 80%.",
      "Fully scoped, role-based data access across the platform.",
      "Self-serve provisioning removed manual setup bottlenecks.",
    ],
    links: {},
  },
  {
    slug: "sangrel-trading-analytics",
    title: "Sangrel — Trading Analytics Platform",
    tagline:
      "Solo-built, production-grade trading analytics platform for a UAE client — deployed end-to-end with full DevOps ownership.",
    category: "Fintech",
    featured: true,
    rank: 4,
    stack: [
      "Django",
      "Django REST Framework",
      "Python",
      "Django Templates",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "DigitalOcean",
      "Cloudflare",
      "Nginx",
      "JWT",
      "RBAC",
    ],
    metrics: [{ value: "1", label: "Solo developer, end-to-end" }],
    problem:
      "A UAE-based client needed a production-ready trading analytics platform built and shipped by a single developer — from requirements gathering through architecture, development, and go-live deployment.",
    architecture: [
      "Django REST Framework backend with JWT authentication, RBAC, and a modular app structure for long-term maintainability.",
      "Supabase (managed PostgreSQL) as the primary data layer, leveraging real-time and storage capabilities.",
      "Dockerized stack deployed to a DigitalOcean VPS with Nginx reverse proxy and Cloudflare for SSL, CDN caching, and DDoS protection.",
      "Companion Super Admin Portal with granular RBAC, real-time metrics dashboard, user activity logs, and full audit logging.",
      "Multi-layered authentication (JWT + session checks) securing all admin and analytics routes.",
    ],
    outcome: [
      "Delivered a live trading analytics platform solo — architecture through production deployment.",
      "Full operational control via the Super Admin Portal (user management, permissions, system health).",
      "Secured, high-availability deployment with automated HTTPS, CDN, and DDoS protection via Cloudflare.",
    ],
    links: { live: "https://sangrel.com" },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.rank - b.rank);
