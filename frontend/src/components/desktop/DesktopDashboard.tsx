import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AmbientBackground from './AmbientBackground';
import DesktopNav from './DesktopNav';
import DesktopContentView from './DesktopContentView';
import DesktopWidgets from './DesktopWidgets';

type SectionKey = 'bio' | 'skills' | 'education' | 'projects' | 'research' | 'experience' | 'contact' | 'resume';

const DesktopDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('bio');

  return (
    <div className="desktop-dashboard">
      {/* Atmospheric environment */}
      <AmbientBackground activeSection={activeSection} />

      {/* Perspective stage container — creates spatial depth */}
      <motion.div
        className="desktop-stage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="desktop-layout">
          {/* LEFT — Navigation rail (slightly recessed in z-space) */}
          <motion.div
            className="desktop-col-nav"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <DesktopNav
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
          </motion.div>

          {/* CENTER — Hero content panel (closest to viewer) */}
          <motion.div
            className="desktop-col-content"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <DesktopContentView activeSection={activeSection} />
          </motion.div>

          {/* RIGHT — Companion widgets (slightly further in z-space) */}
          <motion.div
            className="desktop-col-widgets"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <DesktopWidgets activeSection={activeSection} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DesktopDashboard;
