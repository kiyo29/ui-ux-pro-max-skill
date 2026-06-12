"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/60 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      )}
    >
      <div className="container-px flex items-center justify-between">
        <Link href="#hero" className="flex items-center">
          <Image
            src="/VukaStudy_Logo_Final.png"
            alt="VukaStudy"
            width={150}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(223,56,50,0.5)" }}
          whileTap={{ scale: 0.97 }}
          className="hidden rounded-full bg-vuka-red px-6 py-2.5 text-sm font-bold text-white md:inline-flex"
        >
          Start Free Trial
        </motion.a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="container-px flex flex-col gap-4 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-white/70"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="rounded-full bg-vuka-red px-6 py-3 text-center text-sm font-bold text-white"
              >
                Start Free Trial
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
