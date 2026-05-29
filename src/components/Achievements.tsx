"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container-tight">
        <SectionHeading
          index="05"
          title="Achievements"
          subtitle="Certifications, recognition, and signals of effort beyond coursework."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: "easeOut" }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent/40 transition-all"
            >
              <Award className="w-5 h-5 text-accent mb-3" />
              <h3 className="font-serif text-xl leading-tight mb-1">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
                {item.org}
              </p>
              <p className="text-sm text-fg/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
