"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingOrbs from "./FloatingOrbs";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-vuka-dark via-[#160606] to-vuka-dark py-24 text-center md:py-32">
      <FloatingOrbs />
      <div className="container-px relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Vuka. Grind. <span className="text-gradient-red-green">Pass.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-base text-white/60 md:text-lg"
        >
          Join thousands of Grade 12 students across South Africa turning past
          papers into real results. Your matric. Your hustle. Start today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(223,56,50,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-vuka-red px-10 py-4 text-sm font-bold text-white shadow-[0_0_24px_rgba(223,56,50,0.4)]"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
