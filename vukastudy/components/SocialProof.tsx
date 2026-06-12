"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MarqueeTicker from "./MarqueeTicker";

const stats = [
  { value: "500+", label: "Past Papers" },
  { value: "12", label: "Subjects" },
  { value: "100%", label: "CAPS Aligned" },
  { value: "R49", label: "Starting from / mo" },
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative border-b border-white/5 bg-black">
      <div className="container-px grid grid-cols-2 gap-8 py-12 text-center md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-3xl font-extrabold text-gradient-red-green md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-white/50 md:text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
      <MarqueeTicker />
    </section>
  );
}
