import React from 'react';
import { motion } from 'framer-motion';
import { bioData } from '../../data/portfolioData';

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

const BioSection: React.FC = () => {
  return (
    <motion.div
      className="bio-section"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* Avatar & Name */}
      <motion.div className="bio-header" variants={fadeUp}>
        <div className="bio-avatar-large">
          <img src="/cu.png" alt="Salman Ajmal" className="bio-avatar-img" />
        </div>
        <h1 className="bio-name">{bioData.fullName}</h1>
        <p className="bio-intro">{bioData.introduction}</p>
      </motion.div>

      {/* Mission */}
      <motion.div className="bio-card" variants={fadeUp}>
        <div className="bio-card-header">
          <span className="bio-card-icon">🎯</span>
          <span className="bio-card-title">Mission</span>
        </div>
        <p className="bio-card-text">{bioData.mission}</p>
      </motion.div>

      {/* About */}
      <motion.div className="bio-card" variants={fadeUp}>
        <div className="bio-card-header">
          <span className="bio-card-icon">💡</span>
          <span className="bio-card-title">About</span>
        </div>
        <p className="bio-card-text">{bioData.about}</p>
      </motion.div>

      {/* Interests */}
      <motion.div className="bio-card" variants={fadeUp}>
        <div className="bio-card-header">
          <span className="bio-card-icon">✨</span>
          <span className="bio-card-title">Interests & Specialties</span>
        </div>
        <div className="bio-pills">
          {bioData.interests.map((interest, i) => (
            <motion.span
              key={i}
              className="bio-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              {interest}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Status */}
      <motion.div className="bio-card bio-status-card" variants={fadeUp}>
        <div className="bio-status-dot" />
        <div>
          <span className="bio-card-title">Availability</span>
          <p className="bio-card-text" style={{ marginTop: 4 }}>{bioData.availability}</p>
        </div>
      </motion.div>

      {/* Location & Contact */}
      <motion.div className="bio-card" variants={fadeUp}>
        <div className="bio-info-row">
          <span className="bio-info-icon">📍</span>
          <span className="bio-info-text">{bioData.location}</span>
        </div>
        <div className="bio-separator" />
        <div className="bio-info-row">
          <span className="bio-info-icon">✉️</span>
          <span className="bio-info-text">{bioData.email}</span>
        </div>
        <div className="bio-separator" />
        <a href={bioData.links.github} target="_blank" rel="noopener noreferrer" className="bio-info-row bio-info-link">
          <span className="bio-info-icon">🐙</span>
          <span className="bio-info-text">GitHub</span>
          <svg className="bio-external" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4 1h7v7M11 1L1 11" stroke="var(--ios-secondary-label)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <div className="bio-separator" />
        <a href={bioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="bio-info-row bio-info-link">
          <span className="bio-info-icon">🔗</span>
          <span className="bio-info-text">LinkedIn</span>
          <svg className="bio-external" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4 1h7v7M11 1L1 11" stroke="var(--ios-secondary-label)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default BioSection;
