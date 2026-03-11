import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassPanel from './GlassPanel';

// Import all section components (reused from mobile — NO changes)
import BioSection from '../sections/BioSection';
import SkillsSection from '../sections/SkillsSection';
import EducationSection from '../sections/EducationSection';
import ProjectsSection from '../sections/ProjectsSection';
import ResearchSection from '../sections/ResearchSection';
import ExperienceSection from '../sections/ExperienceSection';
import ContactSection from '../sections/ContactSection';
import ResumeSection from '../sections/ResumeSection';

type SectionKey = 'bio' | 'skills' | 'education' | 'projects' | 'research' | 'experience' | 'contact' | 'resume';

const sectionTitles: Record<SectionKey, string> = {
  bio: 'Bio',
  skills: 'Skills & Tech Stack',
  education: 'Education',
  projects: 'Featured Projects',
  research: 'Research Experiences',
  experience: 'Professional Experience',
  contact: 'Contact',
  resume: 'Resume',
};

const sectionAccents: Record<SectionKey, string> = {
  bio: '#8E8E93',
  skills: '#007AFF',
  education: '#C7A44A',
  projects: '#AF52DE',
  research: '#5856D6',
  experience: '#636366',
  contact: '#34C759',
  resume: '#8E8E93',
};

interface Props {
  activeSection: SectionKey;
}

// Depth-aware transition — new sections emerge from a subtle depth shift
const contentVariants = {
  initial: {
    opacity: 0,
    y: 16,
    scale: 0.985,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 1.005,
    filter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const renderSection = (key: SectionKey) => {
  switch (key) {
    case 'bio': return <BioSection />;
    case 'skills': return <SkillsSection />;
    case 'education': return <EducationSection />;
    case 'projects': return <ProjectsSection />;
    case 'research': return <ResearchSection />;
    case 'experience': return <ExperienceSection />;
    case 'contact': return <ContactSection />;
    case 'resume': return <ResumeSection />;
  }
};

const DesktopContentView: React.FC<Props> = ({ activeSection }) => {
  const accent = sectionAccents[activeSection];

  return (
    <GlassPanel elevation={1} className="desktop-content-panel">
      {/* Accent spotlight glow — section-specific */}
      <motion.div
        className="dcontent-spotlight"
        animate={{
          background: `radial-gradient(ellipse 80% 30% at 50% 0%, ${accent}18 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* Section header */}
      <div className="dcontent-header">
        <motion.div
          className="dcontent-accent-bar"
          animate={{
            background: `linear-gradient(90deg, ${accent}, ${accent}80)`,
            boxShadow: `0 0 12px ${accent}40`,
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.h2
          className="dcontent-title"
          key={activeSection}
          initial={{ opacity: 0, x: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {sectionTitles[activeSection]}
        </motion.h2>
      </div>

      {/* Scrollable content */}
      <div className="dcontent-scroll">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="dcontent-body"
          >
            {renderSection(activeSection)}
          </motion.div>
        </AnimatePresence>
      </div>
    </GlassPanel>
  );
};

export default DesktopContentView;
