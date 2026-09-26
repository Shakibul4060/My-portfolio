"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    [0, 14]
  );

  const headerOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.55, 0.88]
  );

  return (
    <motion.header
      className="site-header"
      style={{
        backdropFilter: `blur(${headerBlur}px)`,
        backgroundColor: `color-mix(in srgb, var(--bg) ${
          headerOpacity.get() * 100
        }%, transparent)`,
      }}
    >
      <div className="container navbar-wrapper">
        <motion.a
          href="#home"
          className="logo"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setOpen(false)}
        >
          <span className="logo-mark">M</span>

          <span className="logo-name">
            Md.Shakibul<span>.</span>
          </span>

          <span className="logo-badge">
            PORTFOLIO
          </span>
        </motion.a>

        <nav
          className={`desktop-nav ${
            open ? "mobile-nav-open" : ""
          }`}
        >
          <div className="nav-inner">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={() => setOpen(false)}
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.9 + index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -3,
                }}
              >
                <span className="nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />

          <motion.a
            href="#contact"
            className="navbar-contact"
            whileHover={{
              scale: 1.04,
              x: 3,
            }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight />
          </motion.a>

          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}