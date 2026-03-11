import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/portfolioData';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

const ExperienceSection: React.FC = () => {
  return (
    <motion.div
      className="experience-section"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {experienceData.map((exp, index) => (
        <motion.div
          key={index}
          className="exp-card"
          variants={fadeUp}
        >
          {/* Header */}
          <div className="exp-header">
            <div className="exp-company-badge">
              {exp.company.charAt(0)}
            </div>
            <div className="exp-header-text">
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-duration">{exp.duration}</p>
            </div>
          </div>

          {/* Achievements */}
          <ul className="exp-achievements">
            {exp.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                className="exp-achievement"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.06 }}
              >
                <span className="exp-bullet">▸</span>
                {achievement}
              </motion.li>
            ))}
          </ul>

          {/* Impact */}
          <div className="exp-impact">
            <span className="exp-impact-label">Impact</span>
            <span className="exp-impact-value">{exp.impact}</span>
          </div>

          {/* Tools */}
          <div className="exp-tools">
            {exp.tools.map((tool, i) => (
              <span key={i} className="exp-tool-pill">{tool}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExperienceSection;
