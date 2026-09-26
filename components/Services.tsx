"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import {
  FiCode,
  FiLayout,
  FiMonitor,
  FiSmartphone,
  FiZap,
  FiRefreshCw,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "Responsive Websites",
    description:
      "Modern websites that work smoothly across desktop, tablet and mobile devices.",
    icon: FiMonitor,
  },
  {
    number: "02",
    title: "Modern UI Development",
    description:
      "Clean and engaging interfaces with thoughtful layouts, typography and visual hierarchy.",
    icon: FiLayout,
  },
  {
    number: "03",
    title: "React & Next.js",
    description:
      "Component-based frontend development using React and Next.js.",
    icon: FiCode,
  },
  {
    number: "04",
    title: "Mobile-Friendly Design",
    description:
      "Interfaces designed to remain intuitive and usable on smaller screens.",
    icon: FiSmartphone,
  },
  {
    number: "05",
    title: "Interactive Experiences",
    description:
      "Smooth micro-interactions and motion that make websites feel more alive.",
    icon: FiZap,
  },
  {
    number: "06",
    title: "Website Improvements",
    description:
      "UI refinements, responsive fixes and frontend improvements for existing websites.",
    icon: FiRefreshCw,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [90, 0, -60]
  );

  return (
    <section
      ref={ref}
      id="services"
      className="services-section cinematic-section"
    >
      <div className="container">
        <motion.div
          className="services-header"
          style={{ y: headingY }}
        >
          <div>
            <p className="section-label">
              04 / SERVICES
            </p>

            <h2 className="section-title">
              What I can
              <br />
              <span>build.</span>
            </h2>
          </div>

          <p className="services-intro">
            I focus on creating modern frontend
            experiences that balance visual design,
            responsiveness and usability.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                className="service-card"
                initial={{
                  opacity: 0,
                  y: 100,
                  rotateX: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -12,
                  scale: 1.015,
                }}
              >
                <div className="service-top">
                  <span>{service.number}</span>

                  <motion.div
                    className="service-icon"
                    whileHover={{
                      rotate: 15,
                      scale: 1.12,
                    }}
                  >
                    <Icon />
                  </motion.div>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-line" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}