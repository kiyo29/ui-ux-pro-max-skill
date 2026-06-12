"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingOrbs() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 220]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -180]);

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-vuka-red/25 blur-[120px] animate-pulse-glow"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-32 top-1/3 h-[440px] w-[440px] rounded-full bg-vuka-green/25 blur-[120px] animate-pulse-glow"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-vuka-blue/20 blur-[120px] animate-pulse-glow"
      />
    </div>
  );
}
