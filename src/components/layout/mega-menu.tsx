"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getIcon } from "@/components/shared/icon-map";
import type { NavItem } from "@/types";

interface MegaMenuProps {
  items: NavItem[];
}

export function MegaMenu({ items }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute left-1/2 top-full z-50 w-[520px] -translate-x-1/2 pt-2"
    >
      <div className="rounded-xl border border-border bg-white p-4 shadow-lg">
        <div className="grid grid-cols-2 gap-1">
          {items.map((item) => {
            const Icon = item.icon ? getIcon(item.icon) : null;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-surface"
              >
                {Icon && (
                  <div className="shrink-0 rounded-md bg-teal-light p-1.5 mt-0.5">
                    <Icon className="h-4 w-4 text-teal" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-navy">{item.label}</p>
                  {item.description && (
                    <p className="mt-0.5 text-xs text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
