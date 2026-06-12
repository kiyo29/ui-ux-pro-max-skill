"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, damping: 14, stiffness: 120 },
  },
};

export default function AnimatedHeadline({
  text,
  className,
  highlightWords = [],
}: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, wi) => {
        const isHighlight = highlightWords.includes(word);
        return (
          <span
            key={wi}
            className="mr-[0.25em] inline-block whitespace-nowrap"
            style={{ perspective: 800 }}
          >
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                variants={child}
                aria-hidden="true"
                className={cn(
                  "inline-block",
                  isHighlight && "text-gradient-red-green"
                )}
                style={{ transformOrigin: "50% 100%" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.h1>
  );
}
