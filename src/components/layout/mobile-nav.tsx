"use client";

import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/data/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label)
        ? prev.filter((s) => s !== label)
        : [...prev, label]
    );
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 p-0">
        <div className="flex h-16 items-center justify-between border-b border-border px-6">
          <span className="text-lg font-bold text-navy">Qrd Tech</span>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-text-muted" />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          {mainNav.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="flex w-full items-center justify-between px-3 py-3 text-sm font-medium text-text-primary"
                    onClick={() => toggleSection(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedSections.includes(item.label) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.includes(item.label) && (
                    <div className="ml-4 space-y-1 pb-2">
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm text-teal font-medium"
                        onClick={onClose}
                      >
                        View All
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-text-muted hover:text-text-primary"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-sm font-medium text-text-primary"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 space-y-2 border-t border-border pt-4">
            <Link
              href="/pricing"
              onClick={onClose}
              className={cn(
                buttonVariants(),
                "w-full bg-teal text-white hover:bg-teal-hover"
              )}
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full"
              )}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
