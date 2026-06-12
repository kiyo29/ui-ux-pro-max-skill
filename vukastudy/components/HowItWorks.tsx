"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    num: "01",
    title: "Pick Your Subject",
    desc: "Choose from 12 CAPS-aligned Grade 12 subjects — from Maths and Physics to Accounting and History.",
  },
  {
    num: "02",
    title: "Grind Past Papers",
    desc: "Work through real DBE past papers and memos, sorted by topic and year, at your own pace.",
  },
  {
    num: "03",
    title: "Track & Improve",
    desc: "Watch your progress update in real time and know exactly which topics to revise before exam day.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative bg-[#070707] py-24 md:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="The Process"
          title="How It"
          highlight="Works"
          subtitle="From confused to confident in three steps."
        />

        <div ref={ref} className="relative mt-20 grid gap-16 md:grid-cols-3">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              style={{ originX: 0 }}
              className="h-px w-full bg-gradient-to-r from-vuka-red via-vuka-green to-vuka-blue"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.25 }}
              className="relative text-center md:text-left"
            >
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-vuka-dark text-xl font-extrabold text-gradient-red-green md:mx-0">
                {step.num}
              </div>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
