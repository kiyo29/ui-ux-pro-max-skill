"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpenCheck, LineChart, Wallet, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  iconBg: string;
  iconColor: string;
  glow: string;
  border: string;
}

const features: Feature[] = [
  {
    icon: BookOpenCheck,
    title: "Past Papers On Demand",
    desc: "500+ CAPS-aligned past papers and memos for every Grade 12 subject — searchable, sorted by topic, and ready whenever you need to grind.",
    iconBg: "bg-vuka-red/10",
    iconColor: "text-vuka-red",
    glow: "hover:shadow-[0_0_40px_rgba(223,56,50,0.18)]",
    border: "group-hover:border-vuka-red/40",
  },
  {
    icon: LineChart,
    title: "Track Your Progress",
    desc: "See exactly where you're improving — subject-by-subject analytics, streaks, and topic mastery so you know what to focus on before the exam.",
    iconBg: "bg-vuka-green/10",
    iconColor: "text-vuka-green",
    glow: "hover:shadow-[0_0_40px_rgba(26,107,60,0.22)]",
    border: "group-hover:border-vuka-green/40",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    desc: "Premium exam prep without the premium price tag. Plans start from just R49/month — built for South African students, not international budgets.",
    iconBg: "bg-vuka-blue/10",
    iconColor: "text-blue-400",
    glow: "hover:shadow-[0_0_40px_rgba(0,48,130,0.3)]",
    border: "group-hover:border-blue-400/40",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-vuka-dark py-24 md:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why VukaStudy"
          title="Everything you need to"
          highlight="actually pass"
          subtitle="Not just another study app. Built around real CAPS past papers, real progress tracking, and a price that doesn't break the bank."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-3xl border border-white/10 p-8 transition-all duration-300 glass-card ${feature.glow}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-300 ${feature.border}`}
      />
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.iconBg}`}>
        <Icon className={`h-7 w-7 ${feature.iconColor}`} />
      </div>
      <h3 className="mt-6 text-xl font-bold">{feature.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{feature.desc}</p>
    </motion.div>
  );
}
