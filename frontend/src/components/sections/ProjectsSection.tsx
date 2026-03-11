import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const ProjectsSection: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <motion.div
      className="projects-section"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          variants={fadeUp}
          layout
        >
          {/* Gradient accent bar */}
          <div
            className="project-accent-bar"
            style={{ background: project.gradient }}
          />

          <motion.button
            className="project-card-content"
            onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                animate={{ rotate: expandedProject === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <path
                  d="M2 5L7 10L12 5"
                  stroke="var(--ios-chevron)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
            <p className="project-summary">{project.summary}</p>
          </motion.button>

          <AnimatePresence>
            {expandedProject === index && (
              <motion.div
                className="project-details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Impact */}
                <div className="project-impact">
                  <span className="project-impact-icon">📊</span>
                  <span className="project-impact-text">{project.impact}</span>
                </div>

                {/* Tech stack */}
                <div className="project-tech">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="project-tech-pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      style={{
                        borderColor: project.accentColor + '40',
                        color: project.accentColor,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsSection;
