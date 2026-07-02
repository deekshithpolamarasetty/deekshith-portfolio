"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  company: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 min-h-[44px]";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-accent-500/30 bg-accent-500/10 p-8 text-center sm:p-10">
        <CheckCircle2 className="text-accent-500" size={36} />
        <h3 className="text-base font-semibold sm:text-lg">Message sent!</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Name + Email: stacked on mobile, side-by-side on sm+ */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            className={inputClass}
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className={inputClass}
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          placeholder="Tell me about your project or opportunity..."
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company")}
      />

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {serverError}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send size={18} />
      </Button>
    </form>
  );
}
