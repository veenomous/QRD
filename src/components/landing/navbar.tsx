"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#mail", label: "What we mail" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why Qrd Tech" },
];

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6"
      >
        <a href="#top" className="focus-accent rounded-sm">
          <Image
            src="/logo2.png"
            alt="Qrd Tech"
            width={140}
            height={43}
            className="h-11 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-accent rounded-sm text-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#quote"
          className="focus-accent inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-semibold text-warm-white transition-colors hover:bg-qrd-accent"
        >
          Get a quote
        </a>
      </nav>
    </header>
  );
}
