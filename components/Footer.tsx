"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <motion.footer
      className="site-footer"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="container footer-inner">
        <div>
         <span className="footer-mark">
  Shakibul<span>.</span>
</span>

          <p>
            Md.Shakibul — Frontend Developer & Learner
          </p>
        </div>

        <motion.a
          href="#home"
          className="back-top"
          whileHover={{
            y: -5,
          }}
        >
          Back to top
          <FiArrowUpRight />
        </motion.a>

        <span className="footer-copy">
          © 2026 Md.Shakibul
        </span>
      </div>
    </motion.footer>
  );
}