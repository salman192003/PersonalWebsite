import React from 'react';
import { motion } from 'framer-motion';
import { researchData } from '../../data/portfolioData';

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

const ResearchSection: React.FC = () => {
  return (
    <motion.div
      className="research-section"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {researchData.map((research, index) => (
        <motion.div
          key={index}
          className="research-card"
          variants={fadeUp}
        >
          {/* Header */}
          <div className="research-header">
            <div className="research-icon-container">
              <span className="research-icon">🔬</span>
            </div>
            <div>
              <h3 className="research-role">{research.role}</h3>
              <p className="research-lab">{research.lab}</p>
            </div>
          </div>

          {/* Research area */}
          <div className="research-area">
            <span className="research-area-label">Research Area</span>
            <span className="research-area-value">{research.area}</span>
          </div>

          {/* Duration */}
          <div className="research-duration">
            <span className="research-duration-dot" />
            <span className="research-duration-text">{research.duration}</span>
          </div>

          {/* Contributions */}
          <div className="research-contributions">
            <span className="research-contributions-label">Contributions</span>
            <ul className="research-contributions-list">
              {research.contributions.map((contribution, i) => (
                <motion.li
                  key={i}
                  className="research-contribution-item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {contribution}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          {research.outcomes.length > 0 && (
            <div className="research-outcomes">
              {research.outcomes.map((outcome, i) => (
                <span key={i} className="research-outcome-badge">
                  ✨ {outcome}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ResearchSection;
