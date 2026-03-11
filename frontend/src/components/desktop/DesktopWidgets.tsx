import React from 'react';
import { motion } from 'framer-motion';
import { bioData, contactData, highlightCard, resumeData } from '../../data/portfolioData';
import GlassPanel from './GlassPanel';

type SectionKey = 'bio' | 'skills' | 'education' | 'projects' | 'research' | 'experience' | 'contact' | 'resume';

interface Props {
  activeSection: SectionKey;
}

const DesktopWidgets: React.FC<Props> = ({ activeSection }) => {
  return (
    <div className="desktop-widgets">
      {/* Status widget — stagger depth 1 */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassPanel elevation={3} className="dwidget-status" breathing hoverable>
          <div className="dwidget-status-indicator">
            <div className="dwidget-pulse-dot" />
            <span className="dwidget-status-text">Available</span>
          </div>
          <p className="dwidget-status-detail">{highlightCard.subtitle}</p>
        </GlassPanel>
      </motion.div>

      {/* Quick links widget — stagger depth 2 */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassPanel elevation={3} className="dwidget-links" hoverable>
          <span className="dwidget-label">Quick Links</span>
          <div className="dwidget-link-row">
            <motion.a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="dwidget-link-btn"
              whileHover={{ x: 3, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>🐙</span>
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="dwidget-link-btn"
              whileHover={{ x: 3, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>🔗</span>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href={`mailto:${contactData.email}`}
              className="dwidget-link-btn"
              whileHover={{ x: 3, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>✉️</span>
              <span>Email</span>
            </motion.a>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Resume CTA — stagger depth 3 */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassPanel elevation={3} className="dwidget-resume" hoverable>
          <span className="dwidget-label">Resume</span>
          <motion.a
            href={resumeData.resumePdfUrl}
            download="Salman_Ajmal_CV.pdf"
            className="dwidget-dl-btn"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8m0 0l-3-3m3 3l3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </motion.a>
        </GlassPanel>
      </motion.div>

      {/* Location — stagger depth 4 */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassPanel elevation={3} className="dwidget-location" hoverable>
          <div className="dwidget-loc-row">
            <span className="dwidget-loc-icon">📍</span>
            <span className="dwidget-loc-text">{bioData.location}</span>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  );
};

export default DesktopWidgets;
