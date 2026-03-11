import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../App';
import { profileData, highlightCard } from '../../data/portfolioData';
import GlassPanel from './GlassPanel';
import IOSToggle from '../ios/IOSToggle';

type SectionKey = 'bio' | 'skills' | 'education' | 'projects' | 'research' | 'experience' | 'contact' | 'resume';

interface Props {
  activeSection: SectionKey;
  onSectionChange: (section: SectionKey) => void;
}

const sections: { key: SectionKey; label: string; icon: string; accentColor: string }[] = [
  { key: 'bio',        label: 'Bio',                     icon: '👤', accentColor: '#8E8E93' },
  { key: 'skills',     label: 'Skills & Tech Stack',     icon: '💻', accentColor: '#007AFF' },
  { key: 'education',  label: 'Education',               icon: '🎓', accentColor: '#C7A44A' },
  { key: 'projects',   label: 'Featured Projects',       icon: '🚀', accentColor: '#AF52DE' },
  { key: 'research',   label: 'Research',                icon: '🔬', accentColor: '#5856D6' },
  { key: 'experience', label: 'Experience',              icon: '💼', accentColor: '#636366' },
  { key: 'contact',    label: 'Contact',                 icon: '📬', accentColor: '#34C759' },
  { key: 'resume',     label: 'Resume',                  icon: '📄', accentColor: '#8E8E93' },
];

const DesktopNav: React.FC<Props> = ({ activeSection, onSectionChange }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <GlassPanel elevation={2} className="desktop-nav-panel" breathing>
      {/* Profile header */}
      <motion.button
        className="dnav-profile"
        onClick={() => onSectionChange('bio')}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="dnav-avatar">
          <img src={profileData.avatarUrl} alt={profileData.name} />
          {/* Online status ring */}
          <div className="dnav-avatar-ring" />
        </div>
        <div className="dnav-profile-info">
          <span className="dnav-name">{profileData.name}</span>
          <span className="dnav-subtitle">{profileData.subtitle}</span>
        </div>
      </motion.button>

      {/* Highlight banner */}
      <div className="dnav-highlight">
        <div className="dnav-highlight-dot" />
        <div className="dnav-highlight-text">
          <span className="dnav-highlight-title">{highlightCard.title}</span>
          <span className="dnav-highlight-sub">{highlightCard.subtitle}</span>
        </div>
      </div>

      {/* Luminous separator */}
      <div className="dnav-separator" />

      {/* Section list */}
      <nav className="dnav-sections">
        {sections.map((section) => {
          const isActive = activeSection === section.key;
          return (
            <motion.button
              key={section.key}
              className={`dnav-item ${isActive ? 'dnav-item-active' : ''}`}
              onClick={() => onSectionChange(section.key)}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              layout
            >
              {/* Active glow background */}
              {isActive && (
                <motion.div
                  className="dnav-item-glow"
                  layoutId="nav-glow"
                  style={{
                    background: `${section.accentColor}12`,
                    border: `1px solid ${section.accentColor}20`,
                  }}
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                />
              )}
              <span
                className="dnav-item-icon"
                style={{
                  background: isActive ? section.accentColor : 'transparent',
                  color: isActive ? '#fff' : undefined,
                  boxShadow: isActive ? `0 2px 12px ${section.accentColor}50` : 'none',
                }}
              >
                {section.icon}
              </span>
              <span className="dnav-item-label">{section.label}</span>
              {isActive && (
                <motion.div
                  className="dnav-active-indicator"
                  layoutId="nav-indicator"
                  style={{ background: section.accentColor, boxShadow: `0 0 8px ${section.accentColor}60` }}
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Separator */}
      <div className="dnav-separator" />

      {/* Theme toggle */}
      <div className="dnav-theme-row">
        <span className="dnav-theme-icon">{isDark ? '🌙' : '☀️'}</span>
        <span className="dnav-theme-label">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
        <IOSToggle isOn={isDark} onToggle={toggleTheme} />
      </div>
    </GlassPanel>
  );
};

export default DesktopNav;
