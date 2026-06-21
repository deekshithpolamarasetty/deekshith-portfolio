import type { Metadata } from "next";
import { Services } from "@/components/services";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack product builds, APIs & microservices, multi-tenant SaaS, and DevOps.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
      <CtaBanner />
    </div>
  );
}
