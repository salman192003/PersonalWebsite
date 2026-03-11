import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../../data/portfolioData';

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

const ResumeSection: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <motion.div
      className="resume-section"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* Summary */}
      <motion.div className="resume-summary-card" variants={fadeUp}>
        <h3 className="resume-card-title">Summary</h3>
        <p className="resume-summary-text">{resumeData.summary}</p>
      </motion.div>

      {/* Highlights */}
      <motion.div className="resume-highlights-card" variants={fadeUp}>
        <h3 className="resume-card-title">Quick Highlights</h3>
        <ul className="resume-highlights-list">
          {resumeData.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              className="resume-highlight"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
            >
              <span className="resume-highlight-bullet">▸</span>
              {highlight}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Actions */}
      <motion.div className="resume-actions" variants={fadeUp}>
        <motion.a
          href={resumeData.resumePdfUrl}
          download="Salman_Ajmal_CV.pdf"
          className="resume-btn resume-btn-primary"
          whileTap={{ scale: 0.97 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2v10m0 0l-4-4m4 4l4-4M2 14v1a1 1 0 001 1h12a1 1 0 001-1v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Resume
        </motion.a>

        <motion.button
          className="resume-btn resume-btn-secondary"
          onClick={() => setShowPreview(!showPreview)}
          whileTap={{ scale: 0.97 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 9s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
          </svg>
          {showPreview ? 'Hide Preview' : 'View Preview'}
        </motion.button>
      </motion.div>

      {/* Preview */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            className="resume-preview"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <iframe
              src={resumeData.resumePdfUrl}
              title="Resume Preview"
              className="resume-iframe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ResumeSection;
