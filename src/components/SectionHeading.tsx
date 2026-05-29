"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-xs text-muted">{index}</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
        {title}
        <span className="accent-italic">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-lg max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
