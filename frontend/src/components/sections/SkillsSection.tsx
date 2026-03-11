import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

const SkillsSection: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <motion.div
      className="skills-section"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {skillsData.categories.map((category, catIndex) => (
        <motion.div
          key={catIndex}
          className="skills-category"
          variants={fadeUp}
        >
          <motion.button
            className="skills-category-header"
            onClick={() => setExpandedCategory(expandedCategory === catIndex ? null : catIndex)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="skills-category-left">
              <span className="skills-category-icon">{category.icon}</span>
              <span className="skills-category-name">{category.name}</span>
            </div>
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              animate={{ rotate: expandedCategory === catIndex ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M5 2L10 7L5 12"
                stroke="var(--ios-chevron)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {expandedCategory === catIndex && (
              <motion.div
                className="skills-list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.04 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-text">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.05, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                          background: `linear-gradient(90deg, #00d4ff, #007AFF)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Tech stack floating pills */}
      <motion.div className="skills-all-pills" variants={fadeUp}>
        <div className="skills-pills-label">Full Stack Overview</div>
        <div className="skills-pills-container">
          {skillsData.categories.flatMap(cat => cat.skills).map((skill, i) => (
            <motion.span
              key={i}
              className="skills-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.02 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
