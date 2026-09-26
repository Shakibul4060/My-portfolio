"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicEffects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 60,
    damping: 20,
  });

  const smoothY = useSpring(y, {
    stiffness: 60,
    damping: 20,
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      const mx =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const my =
        (event.clientY / window.innerHeight - 0.5) * 2;

      x.set(mx);
      y.set(my);
    };

    const scroll = () => {
      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress(
        height > 0
          ? (window.scrollY / height) * 100
          : 0
      );
    };

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    window.addEventListener("scroll", scroll);

    scroll();

    return () => {
      window.removeEventListener(
        "mousemove",
        mouseMove
      );

      window.removeEventListener(
        "scroll",
        scroll
      );
    };
  }, [x, y]);

  return (
    <>
      <div className="scroll-progress">
        <motion.div
          className="scroll-progress-bar"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="cinematic-background">
        <motion.div
          className="ambient-orb ambient-orb-one"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        />

        <motion.div
          className="ambient-orb ambient-orb-two"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        />

        <motion.div
          className="ambient-grid"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        />
      </div>

      <div className="film-grain" />
    </>
  );
}