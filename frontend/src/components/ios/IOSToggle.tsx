import React from 'react';
import { motion } from 'framer-motion';

interface IOSToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

const IOSToggle: React.FC<IOSToggleProps> = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="ios-toggle-container"
      style={{
        width: 51,
        height: 31,
        borderRadius: 15.5,
        padding: 2,
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none',
        transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: isOn ? '#34C759' : 'var(--ios-toggle-off)',
      }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        style={{
          width: 27,
          height: 27,
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.12)',
          marginLeft: isOn ? 20 : 0,
        }}
      />
    </button>
  );
};

export default IOSToggle;
