import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionViewProps {
  isOpen: boolean;
  onBack: () => void;
  title: string;
  accentColor?: string;
  children: React.ReactNode;
}

const SectionView: React.FC<SectionViewProps> = ({
  isOpen,
  onBack,
  title,
  accentColor = '#007AFF',
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="section-view"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 300,
            mass: 0.8,
          }}
        >
          {/* Navigation bar */}
          <div className="section-nav">
            <motion.button
              className="section-back-btn"
              onClick={onBack}
              whileTap={{ scale: 0.95 }}
              style={{ color: accentColor }}
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                <path
                  d="M9 1L1 9L9 17"
                  stroke={accentColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Settings</span>
            </motion.button>
            <h2 className="section-nav-title">{title}</h2>
            <div style={{ width: 80 }} />
          </div>

          {/* Content */}
          <div className="section-content">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionView;
