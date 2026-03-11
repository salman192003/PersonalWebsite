import React from 'react';
import { motion } from 'framer-motion';

interface SettingsGroupProps {
  children: React.ReactNode;
  label?: string;
  delay?: number;
}

const SettingsGroup: React.FC<SettingsGroupProps> = ({ children, label, delay = 0 }) => {
  return (
    <motion.div
      className="settings-group-wrapper"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {label && (
        <div className="settings-group-label">{label}</div>
      )}
      <div className="settings-group">
        {children}
      </div>
    </motion.div>
  );
};

export default SettingsGroup;
