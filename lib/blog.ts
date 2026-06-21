export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  // Simple markdown-ish body rendered as paragraphs/headings.
  body: string;
};

export const posts: Post[] = [
  {
    slug: "designing-multi-tenant-saas",
    title: "Designing a Multi-Tenant SaaS: Lessons From 15+ Enterprise Clients",
    excerpt:
      "How we achieved 100% data isolation, predictable performance, and clean tenant provisioning in a real industrial SaaS platform.",
    date: "2026-06-15",
    readingTime: "6 min read",
    tags: ["SaaS", "Architecture", "Multi-Tenancy"],
    body: [
      "## Why multi-tenancy is hard",
      "Serving many enterprise clients from one platform means every architectural decision is also a security and isolation decision. A single leaky query can expose one tenant's data to another.",
      "## The isolation strategy",
      "We enforced tenant-level data isolation at every layer — from the gateway down to the database. Each request carried a verified tenant context, and data access was scoped by default rather than as an afterthought.",
      "## Onboarding as a first-class feature",
      "Manual onboarding doesn't scale. We built automated provisioning with feature flags and subscription tiers, cutting onboarding time by 80%.",
      "## Takeaways",
      "Design isolation in from day one, automate tenant lifecycle early, and pick a data strategy that matches your workloads — we used MongoDB for time-series and SQL Server for relational data.",
    ].join("\n\n"),
  },
  {
    slug: "scaling-apis-redis-rabbitmq",
    title: "Scaling APIs With Redis and RabbitMQ: A 40% Performance Story",
    excerpt:
      "A practical look at how caching, async messaging, and an API gateway improved request handling by 40%.",
    date: "2026-06-10",
    readingTime: "5 min read",
    tags: ["Performance", "Backend", "Microservices"],
    body: [
      "## The bottleneck",
      "As our microservices fleet grew, every service re-implemented auth, validation, and caching slightly differently. Latency crept up and consistency dropped.",
      "## Centralizing with an API gateway",
      "We built a NestJS API Gateway that centralized routing, authentication, license validation, and RBAC. Middleware handled rate limiting and circuit breaking in one place.",
      "## Redis + RabbitMQ",
      "Redis caching cut repeated work, while RabbitMQ decoupled slow operations into async pipelines. Together they improved request-handling performance by 40%.",
      "## Lessons",
      "Centralize cross-cutting concerns, cache aggressively but intentionally, and move anything that can be async out of the request path.",
    ].join("\n\n"),
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
