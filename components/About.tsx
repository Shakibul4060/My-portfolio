"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "02", label: "Projects Built" },
  { value: "06+", label: "Technologies" },
  { value: "∞", label: "Things To Learn" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, -70]
  );

  const rightY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [50, 0, -100]
  );

  return (
    <section
      ref={ref}
      id="about"
      className="about-section cinematic-section"
    >
      <div className="container">
        <motion.div
          className="about-header"
          style={{ y: leftY }}
        >
          <div>
            <p className="section-label">
              03 / ABOUT ME
            </p>

            <h2 className="section-title">
              Learning.
              <br />
              Building.
              <br />
              <span>Growing.</span>
            </h2>
          </div>

          <div className="about-header-line" />
        </motion.div>

        <motion.div
          className="about-content"
          style={{ y: rightY }}
        >
          <div className="about-copy">
            <p className="about-lead">
              I&apos;m Md.Shakibul, a frontend developer
              and learner focused on building modern web
              experiences.
            </p>

            <p>
              I&apos;m currently developing my skills in
              HTML, CSS, JavaScript, TypeScript, React,
              Next.js and modern UI technologies.
            </p>

            <p>
              My goal is to turn ideas into responsive,
              accessible and interactive websites while
              continuously improving my development skills.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}