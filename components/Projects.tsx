"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fit Log",
    description:
      "A fitness tracking web application designed to help users manage and monitor their fitness activities through a clean and responsive interface.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl:
      "https://lively-treacle-7e1db6.netlify.app/",
    githubUrl:
      "https://github.com/Shakibul4060/Assignment6",
  },
  {
    title: "Div Stack",
    description:
      "A modern technology discovery platform featuring technology cards, interactive stack controls, responsive design, and a clean user interface.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
    ],
    liveUrl:
      "https://splendorous-pixie-327496.netlify.app/",
    githubUrl:
      "https://github.com/Shakibul4060/Assignment5",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, -80]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0.35]
  );

  const totalProjects = projects.length;

  return (
    <section
      ref={ref}
      id="work"
      className="projects-section cinematic-projects"
    >
      <div className="container">
        <motion.div
          className="projects-header"
          style={{
            y,
            opacity,
          }}
        >
          <div>
            <p className="section-label">
              02 / SELECTED WORK
            </p>

            <h2 className="section-title">
              Things I&apos;ve
              <br />
              built<span>.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of projects I&apos;ve built while
            learning modern frontend development and
            exploring better ways to create digital
            experiences.
          </p>
        </motion.div>

        <div className="project-section-line" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              number={String(index + 1).padStart(2, "0")}
              totalProjects={totalProjects}
              {...project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="projects-scroll-message"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
        >
          <span>02</span>

          <div />

          <p>
            {totalProjects}{" "}
            {totalProjects === 1 ? "Project" : "Projects"}{" "}
            / Built while learning
          </p>
        </motion.div>
      </div>
    </section>
  );
}