"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import AnimatedHeadline from "./AnimatedHeadline";
import FloatingOrbs from "./FloatingOrbs";
import DeviceMockup from "./DeviceMockup";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-vuka-dark pb-20 pt-28"
    >
      {/* parallax background grid */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />
      <FloatingOrbs />

      <div className="container-px relative z-10 grid items-center gap-16 lg:grid-cols-2">
        <motion.div style={{ opacity: fade }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/70"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-vuka-green" />
            Vuka and Grind · Grade 12 CAPS 2026
          </motion.span>

          <AnimatedHeadline
            text="Stop Guessing. Start Passing."
            highlightWords={["Passing."]}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-lg text-base text-white/60 md:text-lg"
          >
            500+ CAPS-aligned past papers, real-time progress tracking, and a
            study plan built for how SA students actually grind. Everything
            you need for matric — from R49/month.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(223,56,50,0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-vuka-red px-8 py-4 text-sm font-bold text-white shadow-[0_0_24px_rgba(223,56,50,0.35)] transition-shadow"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white/30"
            >
              <PlayCircle className="h-4 w-4" />
              See How It Works
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-xs font-medium uppercase tracking-widest text-white/40"
          >
            No credit card required · Cancel anytime · 🇿🇦 Built for SA students
          </motion.p>
        </motion.div>

        <DeviceMockup />
      </div>
    </section>
  );
}
