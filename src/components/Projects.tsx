"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="container-tight">
        <SectionHeading
          index="04"
          title="Projects"
          subtitle="Real work — including what I'm currently building. Honest status on each."
        />

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative p-6 md:p-8 rounded-xl border border-border bg-card hover:border-accent/40 transition-all"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted">
                    {project.year}
                  </span>
                  <StatusBadge status={project.status} />
                </div>
                <div className="flex items-center gap-2">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-bg border border-transparent hover:border-border transition-all"
                      aria-label="Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-bg border border-transparent hover:border-border transition-all"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-accent transition-colors">
                {project.title}
                <ArrowUpRight className="inline-block w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* Summary */}
              <p className="text-muted leading-relaxed mb-5">
                {project.summary}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((s) => (
                  <span key={s} className="pill text-[11px] py-1">
                    {s}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 text-sm">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-fg/80">
                    <span className="text-accent mt-2 w-1 h-1 rounded-full bg-current shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Honest footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center text-sm text-muted font-mono"
        >
          More projects shipping soon — built in public on{" "}
          <a
            href="https://github.com/satyamsipah"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: "shipped" | "building" }) {
  if (status === "shipped") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-[10px] uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Shipped
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber/10 text-amber font-mono text-[10px] uppercase tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
      Currently Building
    </span>
  );
}
