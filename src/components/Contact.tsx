"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeading
          index="07"
          title="Get in Touch"
          subtitle="Have an opportunity, question, or just want to say hi? Drop a message."
        />

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-3 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs text-muted uppercase tracking-wider mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="Your name"
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs text-muted uppercase tracking-wider mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                maxLength={150}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="you@example.com"
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs text-muted uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                maxLength={2000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="What's on your mind?"
                disabled={status === "sending"}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fg text-bg text-sm font-medium hover:bg-accent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 className="w-4 h-4" />
                Message sent. I'll reply within a day.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-amber">
                <AlertCircle className="w-4 h-4" />
                {errorMsg || "Couldn't send. Try emailing me directly."}
              </p>
            )}
          </motion.form>

          {/* Direct contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-muted leading-relaxed">
              Prefer direct? Reach me on any of these:
            </p>

            <div className="space-y-3">
              <a
                href={profile.socials.email}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-all"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-mono">{profile.email}</span>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-mono">LinkedIn</span>
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-all"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm font-mono">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
