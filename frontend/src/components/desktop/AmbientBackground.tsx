import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../App';

// ── Section-specific ambient palettes ──
// Each section has 5 colors: [base1, base2, bloom1, bloom2, accent]
const sectionAmbience: Record<string, { dark: string[]; light: string[] }> = {
  bio: {
    dark:  ['#0a0c1a', '#0f1228', '#162040', '#0d1530', '#1a2545'],
    light: ['#e8eaf0', '#dde2f0', '#d0d8e8', '#c8d2e4', '#bcc8e0'],
  },
  skills: {
    dark:  ['#060e1e', '#081830', '#0a2548', '#061d3a', '#0c2d55'],
    light: ['#dce8f5', '#d0e0f8', '#c4d8fa', '#b8d2f8', '#aecaf5'],
  },
  education: {
    dark:  ['#141008', '#1c1810', '#28201a', '#201a12', '#2a2218'],
    light: ['#f2ece0', '#f0e8d6', '#ede4cc', '#eae0c4', '#e6dcba'],
  },
  projects: {
    dark:  ['#100820', '#180e30', '#221444', '#1a1038', '#261850'],
    light: ['#eae0f5', '#e4d8f2', '#ded0ef', '#d8c8ec', '#d2c0e8'],
  },
  research: {
    dark:  ['#0c0a22', '#12103a', '#1a1650', '#141240', '#1e185a'],
    light: ['#e2dff5', '#dcd8f2', '#d6d0ef', '#d0c8ec', '#cac0e8'],
  },
  experience: {
    dark:  ['#101012', '#141418', '#1a1a20', '#161618', '#1e1e24'],
    light: ['#eaeaee', '#e6e6ec', '#e2e2ea', '#dedee8', '#dadae6'],
  },
  contact: {
    dark:  ['#061410', '#0a1e18', '#0e2820', '#0a2018', '#122e24'],
    light: ['#ddf0ea', '#d4ece4', '#cce8de', '#c4e4d8', '#bce0d2'],
  },
  resume: {
    dark:  ['#0e0e14', '#12121a', '#161620', '#141418', '#1a1a22'],
    light: ['#ebebf0', '#e8e8ee', '#e4e4ec', '#e0e0ea', '#dcdce8'],
  },
};

interface Props {
  activeSection: string;
}

const AmbientBackground: React.FC<Props> = ({ activeSection }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const p = sectionAmbience[activeSection] || sectionAmbience.bio;
  const c = isDark ? p.dark : p.light;

  return (
    <div className="ambient-bg">
      {/* Layer 1: Deep base gradient */}
      <motion.div
        className="ambient-layer ambient-base"
        animate={{
          background: `
            radial-gradient(ellipse 140% 100% at 30% 20%, ${c[0]} 0%, transparent 70%),
            radial-gradient(ellipse 120% 100% at 80% 80%, ${c[1]} 0%, transparent 60%),
            linear-gradient(160deg, ${c[0]} 0%, ${c[1]} 100%)
          `,
        }}
        transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Layer 2: Major aurora bloom — top-left */}
      <motion.div
        className="ambient-layer ambient-bloom ambient-bloom-1"
        animate={{
          background: isDark
            ? `radial-gradient(ellipse at 25% 25%, ${c[2]}50 0%, transparent 65%)`
            : `radial-gradient(ellipse at 25% 25%, ${c[2]}30 0%, transparent 65%)`,
          x: [0, 20, -15, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{
          background: { duration: 1.6, ease: 'easeInOut' },
          x: { duration: 30, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 35, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Layer 3: Secondary bloom — bottom-right */}
      <motion.div
        className="ambient-layer ambient-bloom ambient-bloom-2"
        animate={{
          background: isDark
            ? `radial-gradient(ellipse at 75% 70%, ${c[3]}40 0%, transparent 60%)`
            : `radial-gradient(ellipse at 75% 70%, ${c[3]}25 0%, transparent 60%)`,
          x: [0, -18, 12, 0],
          y: [0, 12, -8, 0],
        }}
        transition={{
          background: { duration: 1.6, ease: 'easeInOut' },
          x: { duration: 28, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 32, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Layer 4: Accent glow — center, shifts with section */}
      <motion.div
        className="ambient-layer ambient-bloom ambient-bloom-accent"
        animate={{
          background: isDark
            ? `radial-gradient(ellipse 60% 50% at 50% 45%, ${c[4]}22 0%, transparent 70%)`
            : `radial-gradient(ellipse 60% 50% at 50% 45%, ${c[4]}14 0%, transparent 70%)`,
        }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />

      {/* Layer 5: Directional light — top-center spotlight */}
      <div className={`ambient-layer ambient-spotlight ${isDark ? 'ambient-spotlight-dark' : 'ambient-spotlight-light'}`} />

      {/* Layer 6: Depth vignette — soft edges */}
      <div className="ambient-layer ambient-vignette" />

      {/* Layer 7: Subtle noise texture */}
      <div className="ambient-layer ambient-noise" />
    </div>
  );
};

export default AmbientBackground;
