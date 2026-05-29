"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navigation, profile } from "@/lib/data";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-tight flex items-center justify-between py-4">
        <a
          href="#"
          className="font-serif text-xl tracking-tight hover:text-accent transition-colors"
        >
          {profile.name.split(" ")[0]}
          <span className="accent-italic">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted hover:text-fg transition-colors link-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-card border border-transparent hover:border-border transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full hover:bg-card transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <ul className="container-tight py-4 space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted hover:text-fg transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
