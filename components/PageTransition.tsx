"use client";

import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <motion.div
      className="cinematic-intro"
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        duration: 1.2,
        delay: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="intro-content">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >
          PORTFOLIO / 2026
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          Md.Shakibul<span>.</span>
        </motion.h2>

        <motion.div
          className="intro-line"
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        />
      </div>
    </motion.div>
  );
}