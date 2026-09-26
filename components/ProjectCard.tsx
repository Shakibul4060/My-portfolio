"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";

interface ProjectCardProps {
  number: string;
  totalProjects: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  index?: number;
}

export default function ProjectCard({
  number,
  totalProjects,
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [5, -5]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-5, 5]),
    {
      stiffness: 120,
      damping: 18,
    }
  );

  function move(
    event: React.MouseEvent<HTMLElement>
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      ((event.clientX - rect.left) / rect.width - 0.5) *
        2
    );

    mouseY.set(
      ((event.clientY - rect.top) / rect.height - 0.5) *
        2
    );
  }

  function leave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.article
      className="project-card cinematic-project-card"
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.18,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -14,
      }}
      style={{
        rotateX,
        rotateY,
      }}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      <div className="project-glow" />

      <div className="project-card-top">
        <span className="project-index">
          {number} /{" "}
          {String(totalProjects).padStart(2, "0")}
        </span>

        <span className="project-status">
          LIVE PROJECT
        </span>
      </div>

      <div className="project-card-content">
        <motion.p
          className="project-big-number"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 0.08,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          {number}
        </motion.p>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-tech">
          {technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay:
                  0.25 + index * 0.15 + i * 0.06,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="project-card-bottom">
        <div className="project-actions">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action primary"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            Live Demo
            <FiExternalLink />
          </motion.a>

          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action secondary"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            GitHub
            <FiGithub />
          </motion.a>
        </div>

        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-arrow"
          aria-label={`Open ${title}`}
          whileHover={{
            rotate: 12,
            scale: 1.12,
          }}
          whileTap={{
            scale: 0.92,
          }}
        >
          <FiArrowUpRight />
        </motion.a>
      </div>
    </motion.article>
  );
}