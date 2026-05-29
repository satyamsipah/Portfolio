"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-card/30">
      <div className="container-tight">
        <SectionHeading index="02" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative pl-8 md:pl-12 border-l border-border"
        >
          {/* Timeline dot */}
          <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />

          <div className="flex items-start gap-3 mb-3">
            <GraduationCap className="w-5 h-5 mt-1 text-accent" />
            <div>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                {education.institution}
              </h3>
              <p className="text-muted mt-1">{education.degree}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 mb-8 text-sm font-mono text-muted">
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              {education.duration}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              {education.location}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="pill">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
                Activities & Societies
              </p>
              <ul className="space-y-2 text-sm">
                {education.activities.map((a) => (
                  <li key={a} className="flex items-start gap-2">
                    <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
