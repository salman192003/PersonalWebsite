import React from 'react';
import { motion } from 'framer-motion';

interface SettingsRowProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value?: string;
  chevron?: boolean;
  onClick?: () => void;
  toggle?: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  badge?: string | number;
  delay?: number;
}

const SettingsRow: React.FC<SettingsRowProps> = ({
  icon,
  iconBg,
  label,
  value,
  chevron = true,
  onClick,
  toggle,
  isFirst = false,
  isLast = false,
  badge,
  delay = 0,
}) => {
  return (
    <motion.button
      className="settings-row"
      onClick={onClick}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.4, 0, 0.2, 1] }}
      whileTap={{ backgroundColor: 'var(--ios-row-active)' }}
      style={{
        borderTopLeftRadius: isFirst ? 12 : 0,
        borderTopRightRadius: isFirst ? 12 : 0,
        borderBottomLeftRadius: isLast ? 12 : 0,
        borderBottomRightRadius: isLast ? 12 : 0,
      }}
    >
      {/* Icon */}
      <div
        className="settings-row-icon"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      {/* Content area */}
      <div className={`settings-row-content ${!isLast ? 'settings-row-separator' : ''}`}>
        <span className="settings-row-label">{label}</span>
        <div className="settings-row-right">
          {badge && (
            <span className="settings-row-badge">{badge}</span>
          )}
          {value && (
            <span className="settings-row-value">{value}</span>
          )}
          {toggle}
          {chevron && !toggle && (
            <svg
              className="settings-row-chevron"
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
            >
              <path
                d="M1 1L6 6L1 11"
                stroke="var(--ios-chevron)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </motion.button>
  );
};

export default SettingsRow;
