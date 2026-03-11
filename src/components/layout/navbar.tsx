"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navigation";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/qrdlogo2.png"
              alt="Qrd Tech"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children ? setActiveMenu(item.label) : setActiveMenu(null)
                }
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-text-primary transition-colors hover:text-teal"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="ml-1 h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.children && activeMenu === item.label && (
                  <MegaMenu items={item.children} />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "text-text-primary"
              )}
            >
              Contact
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-teal text-white hover:bg-teal-hover"
              )}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-text-primary lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
