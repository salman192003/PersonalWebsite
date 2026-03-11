import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../App';
import { profileData, highlightCard } from '../data/portfolioData';
import IOSToggle from './ios/IOSToggle';
import SettingsRow from './ios/SettingsRow';
import SettingsGroup from './ios/SettingsGroup';
import SectionView from './ios/SectionView';
import BioSection from './sections/BioSection';
import SkillsSection from './sections/SkillsSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import ResearchSection from './sections/ResearchSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import ResumeSection from './sections/ResumeSection';

type SectionKey = 'bio' | 'skills' | 'education' | 'projects' | 'research' | 'experience' | 'contact' | 'resume' | null;

const sectionConfig: Record<Exclude<SectionKey, null>, { title: string; accentColor: string }> = {
  bio: { title: 'Bio', accentColor: '#8E8E93' },
  skills: { title: 'Skills & Tech Stack', accentColor: '#007AFF' },
  education: { title: 'Education', accentColor: '#C7A44A' },
  projects: { title: 'Featured Projects', accentColor: '#AF52DE' },
  research: { title: 'Research Experiences', accentColor: '#5856D6' },
  experience: { title: 'Professional Experience', accentColor: '#636366' },
  contact: { title: 'Contact', accentColor: '#34C759' },
  resume: { title: 'Resume', accentColor: '#8E8E93' },
};

const SettingsHome: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState<SectionKey>(null);
  const isDark = theme === 'dark';

  const openSection = (section: SectionKey) => {
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'bio': return <BioSection />;
      case 'skills': return <SkillsSection />;
      case 'education': return <EducationSection />;
      case 'projects': return <ProjectsSection />;
      case 'research': return <ResearchSection />;
      case 'experience': return <ExperienceSection />;
      case 'contact': return <ContactSection />;
      case 'resume': return <ResumeSection />;
      default: return null;
    }
  };

  return (
    <div className="settings-app">
      {/* Settings Home Screen */}
      <motion.div
        className="settings-home"
        animate={{
          x: activeSection ? '-25%' : 0,
          opacity: activeSection ? 0.5 : 1,
          scale: activeSection ? 0.95 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300,
          mass: 0.8,
        }}
      >
        {/* iOS Status Bar */}
        <div className="ios-status-bar">
          <span className="ios-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <div className="ios-status-icons">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="var(--ios-label)">
              <rect x="0" y="6" width="3" height="6" rx="1" opacity="0.4"/>
              <rect x="4.5" y="4" width="3" height="8" rx="1" opacity="0.6"/>
              <rect x="9" y="2" width="3" height="10" rx="1" opacity="0.8"/>
              <rect x="13.5" y="0" width="3" height="12" rx="1"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="var(--ios-label)">
              <path d="M8 3.6C10.3 3.6 12.3 4.7 13.8 6.4L15.2 5C13.3 2.9 10.8 1.6 8 1.6C5.2 1.6 2.7 2.9 0.8 5L2.2 6.4C3.7 4.7 5.7 3.6 8 3.6Z" opacity="0.5"/>
              <path d="M8 6.8C9.5 6.8 10.8 7.5 11.8 8.6L13.2 7.2C11.8 5.7 10 4.8 8 4.8C6 4.8 4.2 5.7 2.8 7.2L4.2 8.6C5.2 7.5 6.5 6.8 8 6.8Z" opacity="0.75"/>
              <circle cx="8" cy="10.5" r="1.5"/>
            </svg>
            <div className="ios-battery">
              <div className="ios-battery-body">
                <div className="ios-battery-level" style={{ width: '75%' }} />
              </div>
              <div className="ios-battery-cap" />
            </div>
          </div>
        </div>

        {/* Large Title */}
        <motion.div
          className="settings-title-area"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="settings-large-title">Settings</h1>
        </motion.div>

        {/* Scrollable content */}
        <div className="settings-scroll">
          {/* Profile Card */}
          <SettingsGroup delay={0.15}>
            <motion.button
              className="profile-card"
              onClick={() => openSection('bio')}
              whileTap={{ backgroundColor: 'var(--ios-row-active)' }}
            >
              <div className="profile-avatar">
                <img src={profileData.avatarUrl} alt={profileData.name} className="profile-avatar-img" />
              </div>
              <div className="profile-info">
                <span className="profile-name">{profileData.name}</span>
                <span className="profile-subtitle">{profileData.subtitle}</span>
              </div>
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
            </motion.button>
          </SettingsGroup>

          {/* Highlight Card — like "Software Update Available" */}
          <SettingsGroup delay={0.2}>
            <motion.div
              className="highlight-card"
              whileTap={{ scale: 0.98 }}
            >
              <div className="highlight-content">
                <span className="highlight-title">{highlightCard.title}</span>
                <span className="highlight-subtitle">{highlightCard.subtitle}</span>
              </div>
              <span className="highlight-badge">{highlightCard.badge}</span>
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
            </motion.div>
          </SettingsGroup>

          {/* Dark Mode Toggle Group */}
          <SettingsGroup delay={0.25}>
            <SettingsRow
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <path d="M8 0a1 1 0 011 1v1a1 1 0 01-2 0V1a1 1 0 011-1zm0 12a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zm8-4a1 1 0 01-1 1h-1a1 1 0 010-2h1a1 1 0 011 1zM4 8a1 1 0 01-1 1H2a1 1 0 010-2h1a1 1 0 011 1zm9.657-4.657a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM4.464 11.536a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zm9.193 2.121a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM4.464 4.464a1 1 0 01-1.414 0l-.707-.707A1 1 0 013.757 2.343l.707.707a1 1 0 010 1.414zM8 4.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
                </svg>
              }
              iconBg={isDark ? '#5856D6' : '#FF9500'}
              label={isDark ? 'Dark Mode' : 'Light Mode'}
              chevron={false}
              toggle={<IOSToggle isOn={isDark} onToggle={toggleTheme} />}
              isFirst
              isLast
              delay={0.3}
            />
          </SettingsGroup>

          {/* Main Settings Sections */}
          <SettingsGroup label="PORTFOLIO" delay={0.3}>
            <SettingsRow
              icon={<span style={{ fontSize: 14 }}>💻</span>}
              iconBg="#007AFF"
              label="Skills & Tech Stack"
              onClick={() => openSection('skills')}
              isFirst
              delay={0.35}
            />
            <SettingsRow
              icon={<span style={{ fontSize: 14 }}>🎓</span>}
              iconBg="#C7A44A"
              label="Education"
              onClick={() => openSection('education')}
              delay={0.38}
            />
            <SettingsRow
              icon={<span style={{ fontSize: 14 }}>🚀</span>}
              iconBg="#AF52DE"
              label="Featured Projects"
              badge={4}
              onClick={() => openSection('projects')}
              delay={0.41}
            />
            <SettingsRow
              icon={<span style={{ fontSize: 14 }}>🔬</span>}
              iconBg="#5856D6"
              label="Research Experiences"
              onClick={() => openSection('research')}
              delay={0.44}
            />
            <SettingsRow
              icon={<span style={{ fontSize: 14 }}>💼</span>}
              iconBg="#636366"
              label="Professional Experience"
              onClick={() => openSection('experience')}
              isLast
              delay={0.47}
            />
          </SettingsGroup>

          <SettingsGroup label="CONNECT" delay={0.45}>
            <SettingsRow
              icon={<span style={{ fontSize: 14 }}>📬</span>}
              iconBg="#34C759"
              label="Contact"
              onClick={() => openSection('contact')}
              isFirst
              delay={0.5}
            />
            <SettingsRow
              icon={<span style={{ fontSize: 14 }}>📄</span>}
              iconBg="#8E8E93"
              label="Resume"
              onClick={() => openSection('resume')}
              isLast
              delay={0.53}
            />
          </SettingsGroup>

          {/* Bottom padding */}
          <div style={{ height: 120 }} />
        </div>
      </motion.div>

      {/* Section Detail Views */}
      <AnimatePresence>
        {activeSection && (
          <SectionView
            isOpen={true}
            onBack={closeSection}
            title={sectionConfig[activeSection].title}
            accentColor={sectionConfig[activeSection].accentColor}
          >
            {renderSectionContent()}
          </SectionView>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SettingsHome;
