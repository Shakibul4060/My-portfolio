"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [120, 0, -80]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [70, 0, -50]
  );

  return (
    <section
      ref={ref}
      id="contact"
      className="contact-section cinematic-section"
    >
      <div className="container">
        <motion.div
          className="contact-top"
          style={{ y: titleY }}
        >
          <p className="section-label">
            05 / CONTACT
          </p>

          <span className="contact-mini">
            HAVE A PROJECT IN MIND?
          </span>
        </motion.div>

        <motion.div
          className="contact-main"
          style={{ y: contentY }}
        >
          <h2 className="contact-title">
            Let&apos;s make
            <br />
            something
            <br />
            <span>great.</span>
          </h2>

          <div className="contact-side">
            <p>
              I&apos;m always interested in learning,
              building new projects and exploring
              creative web experiences.
            </p>

            <motion.a
              href="mailto:md.shakibul4060@gmail.com"
              className="contact-email"
              whileHover={{
                x: 8,
              }}
            >
              <span>
                md.shakibul4060@gmail.com
              </span>

              <FiArrowUpRight />
            </motion.a>
          </div>
        </motion.div>

        <div className="contact-links">
          <motion.a
            href="mailto:md.shakibul4060@gmail.com"
            whileHover={{ y: -6 }}
          >
            <FiMail />
            <span>Email</span>
            <FiArrowUpRight />
          </motion.a>

          <motion.a
            href="tel:01929813078"
            whileHover={{ y: -6 }}
          >
            <FiPhone />
            <span>Phone</span>
            <FiArrowUpRight />
          </motion.a>

          <motion.a
            href="https://wa.me/8801929813078"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
          >
            <FiMessageCircle />
            <span>WhatsApp</span>
            <FiArrowUpRight />
          </motion.a>

          <motion.a
            href="https://github.com/Shakibul4060"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
          >
            <FiGithub />
            <span>GitHub</span>
            <FiArrowUpRight />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/md-shakibul-96777443a"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
          >
            <FiLinkedin />
            <span>LinkedIn</span>
            <FiArrowUpRight />
          </motion.a>
        </div>
      </div>
    </section>
  );
}