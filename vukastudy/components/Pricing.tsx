"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  featured: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "R0",
    period: "forever",
    desc: "Try before you commit.",
    features: ["3 past papers / week", "1 subject", "Basic progress tracking"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Grind",
    price: "R49",
    period: "/month",
    desc: "Everything you need to pass.",
    features: [
      "Unlimited past papers",
      "All 12 CAPS subjects",
      "Progress tracking & analytics",
      "Topic-by-topic memos",
      "Study streaks & reminders",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Pro",
    price: "R99",
    period: "/month",
    desc: "For the serious sigma grinder.",
    features: [
      "Everything in Grind",
      "AI-marked practice tests",
      "Personalised study plan",
      "Priority support",
    ],
    cta: "Go Pro",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-vuka-dark py-24 md:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Pricing"
          title="Choose your"
          highlight="grind level"
          subtitle="No contracts. No hidden fees. Cancel anytime — start with a free trial, no card required."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:items-center">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative rounded-3xl border p-8 transition-shadow",
        plan.featured
          ? "border-vuka-red/60 bg-white/[0.04] shadow-[0_0_50px_rgba(223,56,50,0.25)] md:scale-105"
          : "border-white/10 bg-white/[0.02]"
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-vuka-red px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(223,56,50,0.5)]">
          Most Popular
        </span>
      )}
      <p className="text-sm font-bold uppercase tracking-widest text-vuka-green">
        {plan.name}
      </p>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold">{plan.price}</span>
        <span className="text-sm text-white/40">{plan.period}</span>
      </div>
      <p className="mt-2 text-sm text-white/50">{plan.desc}</p>
      <ul className="mt-6 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/70">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-vuka-green" />
            {f}
          </li>
        ))}
      </ul>
      <motion.a
        href="#"
        whileHover={{
          scale: 1.03,
          boxShadow: plan.featured
            ? "0 0 32px rgba(223,56,50,0.5)"
            : "0 0 20px rgba(255,255,255,0.15)",
        }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "mt-8 block rounded-full px-6 py-3.5 text-center text-sm font-bold transition-colors",
          plan.featured
            ? "bg-vuka-red text-white"
            : "border border-white/15 text-white hover:border-white/30"
        )}
      >
        {plan.cta}
      </motion.a>
    </motion.div>
  );
}
