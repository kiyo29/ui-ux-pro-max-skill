"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, FileText } from "lucide-react";

const papers = [
  { name: "Physical Sciences P1 2023", done: true },
  { name: "Accounting Nov 2022", done: true },
  { name: "Life Sciences P2 2023", done: false },
];

export default function DeviceMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]"
    >
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-vuka-red/40 via-vuka-green/20 to-vuka-blue/30 blur-3xl" />

        {/* phone frame */}
        <div className="relative rounded-[2.5rem] border border-white/10 bg-[#111]/80 p-3 shadow-2xl backdrop-blur-xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#0d0d0d]">
            {/* status bar */}
            <div className="flex items-center justify-between px-6 pb-2 pt-4 font-mono text-[10px] text-white/40">
              <span>09:41</span>
              <span>VukaStudy</span>
            </div>

            {/* app header */}
            <div className="border-b border-white/5 px-5 pb-4">
              <p className="text-xs text-white/40">Welcome back,</p>
              <p className="text-lg font-extrabold">Lebo 👋</p>
            </div>

            {/* progress card */}
            <div className="px-5 py-4">
              <div className="rounded-2xl border border-vuka-green/20 bg-gradient-to-br from-vuka-green/20 to-vuka-green/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-vuka-green">
                    Mathematics
                  </span>
                  <TrendingUp className="h-4 w-4 text-vuka-green" />
                </div>
                <div className="mt-2 text-2xl font-extrabold">78% Mastery</div>
                <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                    className="h-2 rounded-full bg-gradient-to-r from-vuka-green to-vuka-green/60"
                  />
                </div>
              </div>

              {/* past paper list */}
              <div className="mt-4 space-y-2">
                {papers.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5"
                  >
                    <FileText className="h-4 w-4 shrink-0 text-vuka-blue" />
                    <span className="flex-1 text-xs font-medium text-white/80">
                      {item.name}
                    </span>
                    {item.done && (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-vuka-green" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: [0, -10, 0], x: 0 }}
        transition={{
          opacity: { duration: 0.6, delay: 1 },
          x: { duration: 0.6, delay: 1 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute -left-6 top-12 hidden items-center gap-2 rounded-2xl px-4 py-3 shadow-xl glass-card sm:flex"
      >
        <span className="text-lg">🔥</span>
        <div>
          <p className="text-xs font-bold">7-day streak</p>
          <p className="text-[10px] text-white/50">Keep grinding</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: [0, 12, 0], x: 0 }}
        transition={{
          opacity: { duration: 0.6, delay: 1.3 },
          x: { duration: 0.6, delay: 1.3 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 },
        }}
        className="absolute -right-4 bottom-8 hidden items-center gap-2 rounded-2xl px-4 py-3 shadow-xl glass-card sm:flex"
      >
        <span className="text-lg">📈</span>
        <div>
          <p className="text-xs font-bold">+22% this term</p>
          <p className="text-[10px] text-white/50">Avg. mark improvement</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
