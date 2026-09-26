"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, {
    stiffness: 500,
    damping: 35,
  });

  const smoothY = useSpring(y, {
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      <motion.div
        className="custom-cursor-dot"
        style={{
          x,
          y,
        }}
      />
    </>
  );
}