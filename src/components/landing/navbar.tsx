"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Image
        src="/logo2.png"
        alt="Qrd Tech"
        width={140}
        height={40}
        className="h-10 w-auto"
        priority
      />
      <a
        href="#quote"
        className="inline-flex items-center px-5 py-2.5 bg-qrd-accent text-white text-sm font-semibold rounded-sm hover:bg-accent-hover transition-colors focus-accent"
      >
        Get a Quote
      </a>
    </nav>
  );
}
