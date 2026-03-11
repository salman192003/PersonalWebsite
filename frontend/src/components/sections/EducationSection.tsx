import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/portfolioData';

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

const EducationSection: React.FC = () => {
  return (
    <motion.div
      className="education-section"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* Timeline */}
      <div className="edu-timeline">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="edu-card"
            variants={fadeUp}
          >
            {/* Timeline dot and line */}
            <div className="edu-timeline-marker">
              <motion.div
                className="edu-dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 400 }}
              />
              {index < educationData.length - 1 && <div className="edu-line" />}
            </div>

            {/* Content */}
            <div className="edu-content">
              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-dates">{edu.dates}</p>
              <p className="edu-location">{edu.location}</p>

              {edu.achievements.length > 0 && (
                <div className="edu-achievements">
                  {edu.achievements.map((achievement, i) => (
                    <span key={i} className="edu-achievement-badge">🏆 {achievement}</span>
                  ))}
                </div>
              )}

              {edu.coursework.length > 0 && (
                <div className="edu-coursework">
                  <span className="edu-coursework-label">Relevant Coursework</span>
                  <div className="edu-coursework-pills">
                    {edu.coursework.map((course, i) => (
                      <motion.span
                        key={i}
                        className="edu-course-pill"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.04 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {edu.activities.length > 0 && (
                <div className="edu-activities">
                  {edu.activities.map((activity, i) => (
                    <p key={i} className="edu-activity">📌 {activity}</p>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationSection;
