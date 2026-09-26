"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const mouseX = useSpring(rawX, {
    stiffness: 80,
    damping: 20,
  });

  const mouseY = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -180]
  );

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -260]
  );

  const visualRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 18]
  );

  const visualScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.72]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 0.8, 0]
  );

  const visualX = useTransform(
    mouseX,
    [-1, 1],
    [-18, 18]
  );

  const circleOneX = useTransform(
    mouseX,
    [-1, 1],
    [-28, 28]
  );

  const circleOneY = useTransform(
    mouseY,
    [-1, 1],
    [-20, 20]
  );

  const circleTwoX = useTransform(
    mouseX,
    [-1, 1],
    [28, -28]
  );

  const circleTwoY = useTransform(
    mouseY,
    [-1, 1],
    [20, -20]
  );

  const orbitRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 90]
  );

  const decorationRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180]
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  );

  function handleMouseMove(
    event: React.MouseEvent<HTMLElement>
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    rawX.set(
      ((event.clientX - rect.left) / rect.width - 0.5) *
        2
    );

    rawY.set(
      ((event.clientY - rect.top) / rect.height - 0.5) *
        2
    );
  }

  return (
    <section
      ref={ref}
      id="home"
      className="hero-section cinematic-hero"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="hero-scroll-layer"
        style={{ opacity }}
      >
        <div className="container hero-grid">
          <motion.div
            className="hero-content"
            style={{
              y: contentY,
            }}
          >
            <RevealText delay={1}>
              <div className="availability">
                <span className="status-dot" />
                Learning & Building
              </div>
            </RevealText>

            <RevealText delay={1.1}>
              <p className="hero-eyebrow">
                HELLO, I&apos;M
              </p>
            </RevealText>

            <RevealText delay={1.2}>
              <h1 className="hero-title cinematic-title">
                <span className="hero-title-line">
                  Md.
                </span>

                <span className="hero-title-line">
                  Shakibul<span>.</span>
                </span>
              </h1>
            </RevealText>

            <RevealText delay={1.35}>
              <h2 className="hero-subtitle">
                Frontend Developer & Learner
              </h2>
            </RevealText>

            <RevealText delay={1.45}>
              <p className="hero-description">
                I explore modern web development and build
                clean, responsive, and interactive digital
                experiences.
              </p>
            </RevealText>

            <RevealText delay={1.55}>
              <div className="hero-actions">
                <motion.a
                  href="#work"
                  className="primary-button magnetic-button"
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>View My Work</span>
                  <span>↗</span>
                </motion.a>

                <motion.a
                  href="#about"
                  className="secondary-button"
                  whileHover={{
                    y: -4,
                  }}
                >
                  About Me
                </motion.a>
              </div>
            </RevealText>

            <RevealText delay={1.65}>
              <div className="hero-socials">
                <a
                  href="https://github.com/Shakibul4060"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/md-shakibul-96777443a"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </RevealText>
          </motion.div>

          <motion.div
            className="hero-visual cinematic-visual"
            style={{
              y: visualY,
              x: visualX,
              rotate: visualRotate,
              scale: visualScale,
            }}
          >
            <motion.div
              className="visual-circle visual-circle-one"
              style={{
                x: circleOneX,
                y: circleOneY,
              }}
            />

            <motion.div
              className="visual-circle visual-circle-two"
              style={{
                x: circleTwoX,
                y: circleTwoY,
              }}
            />

            <motion.div
              className="visual-orbit"
              style={{
                rotate: orbitRotate,
              }}
            />

            <div className="visual-card">
              <span className="visual-card-number">
                01
              </span>

              <span className="visual-card-label">
                CREATIVE
              </span>

              <span className="visual-card-label">
                DEVELOPER
              </span>
            </div>

            <motion.div
              className="visual-decoration"
              style={{
                rotate: decorationRotate,
              }}
            >
              ✳
            </motion.div>
          </motion.div>
        </div>

        <div className="container hero-bottom">
          <span>SCROLL TO EXPLORE</span>

          <motion.span
            className="scroll-line"
            style={{
              scaleX: lineScale,
            }}
          />

          <span>01 / 05</span>
        </div>
      </motion.div>
    </section>
  );
}