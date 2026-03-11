import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../App';

/**
 * Material tiers for the spatial glass system:
 *   1 = Hero       — center content panel (closest to viewer)
 *   2 = Primary    — navigation panel
 *   3 = Secondary  — companion widgets
 *   4 = Micro      — chips, toggles, inline controls
 */

interface Props {
  children: React.ReactNode;
  elevation?: 1 | 2 | 3 | 4;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  layoutId?: string;
  hoverable?: boolean;
  /** Enable subtle idle breathing animation */
  breathing?: boolean;
}

// ── Multi-layer shadow definitions for true depth ──
const shadows = {
  1: {
    dark: [
      '0 2px 4px rgba(0,0,0,0.2)',
      '0 8px 20px rgba(0,0,0,0.25)',
      '0 20px 50px rgba(0,0,0,0.3)',
      '0 40px 80px rgba(0,0,0,0.2)',
      'inset 0 0.5px 0 rgba(255,255,255,0.08)',
      'inset 0 -0.5px 0 rgba(255,255,255,0.02)',
    ],
    light: [
      '0 2px 4px rgba(0,0,0,0.03)',
      '0 8px 20px rgba(0,0,0,0.04)',
      '0 20px 50px rgba(0,0,0,0.06)',
      '0 40px 80px rgba(0,0,0,0.04)',
      'inset 0 0.5px 0 rgba(255,255,255,0.9)',
      'inset 0 -0.5px 0 rgba(255,255,255,0.4)',
    ],
  },
  2: {
    dark: [
      '0 2px 4px rgba(0,0,0,0.15)',
      '0 6px 16px rgba(0,0,0,0.2)',
      '0 16px 40px rgba(0,0,0,0.25)',
      'inset 0 0.5px 0 rgba(255,255,255,0.06)',
    ],
    light: [
      '0 2px 4px rgba(0,0,0,0.02)',
      '0 6px 16px rgba(0,0,0,0.04)',
      '0 16px 40px rgba(0,0,0,0.05)',
      'inset 0 0.5px 0 rgba(255,255,255,0.85)',
    ],
  },
  3: {
    dark: [
      '0 1px 3px rgba(0,0,0,0.12)',
      '0 4px 12px rgba(0,0,0,0.18)',
      '0 10px 30px rgba(0,0,0,0.15)',
      'inset 0 0.5px 0 rgba(255,255,255,0.05)',
    ],
    light: [
      '0 1px 3px rgba(0,0,0,0.02)',
      '0 4px 12px rgba(0,0,0,0.03)',
      '0 10px 30px rgba(0,0,0,0.04)',
      'inset 0 0.5px 0 rgba(255,255,255,0.8)',
    ],
  },
  4: {
    dark: [
      '0 1px 2px rgba(0,0,0,0.1)',
      '0 2px 6px rgba(0,0,0,0.12)',
      'inset 0 0.5px 0 rgba(255,255,255,0.04)',
    ],
    light: [
      '0 1px 2px rgba(0,0,0,0.02)',
      '0 2px 6px rgba(0,0,0,0.03)',
      'inset 0 0.5px 0 rgba(255,255,255,0.7)',
    ],
  },
};

// ── Material properties per tier ──
const materials = {
  1: {
    dark: {
      bg: 'rgba(22, 22, 28, 0.78)',
      border: 'rgba(255, 255, 255, 0.08)',
      blur: 60,
      saturate: 200,
    },
    light: {
      bg: 'rgba(255, 255, 255, 0.72)',
      border: 'rgba(255, 255, 255, 0.65)',
      blur: 60,
      saturate: 200,
    },
  },
  2: {
    dark: {
      bg: 'rgba(28, 28, 34, 0.68)',
      border: 'rgba(255, 255, 255, 0.06)',
      blur: 44,
      saturate: 180,
    },
    light: {
      bg: 'rgba(255, 255, 255, 0.62)',
      border: 'rgba(255, 255, 255, 0.55)',
      blur: 44,
      saturate: 180,
    },
  },
  3: {
    dark: {
      bg: 'rgba(34, 34, 40, 0.55)',
      border: 'rgba(255, 255, 255, 0.04)',
      blur: 30,
      saturate: 160,
    },
    light: {
      bg: 'rgba(255, 255, 255, 0.48)',
      border: 'rgba(255, 255, 255, 0.45)',
      blur: 30,
      saturate: 160,
    },
  },
  4: {
    dark: {
      bg: 'rgba(40, 40, 48, 0.42)',
      border: 'rgba(255, 255, 255, 0.03)',
      blur: 18,
      saturate: 140,
    },
    light: {
      bg: 'rgba(255, 255, 255, 0.36)',
      border: 'rgba(255, 255, 255, 0.35)',
      blur: 18,
      saturate: 140,
    },
  },
};

const GlassPanel: React.FC<Props> = ({
  children,
  elevation = 1,
  className = '',
  style = {},
  onClick,
  layoutId,
  hoverable = false,
  breathing = false,
}) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const mat = materials[elevation][isDark ? 'dark' : 'light'];
  const shadow = shadows[elevation][isDark ? 'dark' : 'light'];

  const hoverShadow = isDark
    ? [...shadow, '0 50px 100px rgba(0,0,0,0.25)'].join(', ')
    : [...shadow, '0 50px 100px rgba(0,0,0,0.06)'].join(', ');

  return (
    <motion.div
      className={`glass-panel glass-elevation-${elevation} ${className}`}
      layoutId={layoutId}
      onClick={onClick}
      style={{
        background: mat.bg,
        border: `1px solid ${mat.border}`,
        backdropFilter: `blur(${mat.blur}px) saturate(${mat.saturate}%)`,
        WebkitBackdropFilter: `blur(${mat.blur}px) saturate(${mat.saturate}%)`,
        boxShadow: shadow.join(', '),
        borderRadius: elevation <= 2 ? 24 : elevation === 3 ? 20 : 14,
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      whileHover={hoverable ? {
        scale: 1.008,
        y: -2,
        boxShadow: hoverShadow,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      } : undefined}
      animate={breathing ? {
        y: [0, -1.5, 0],
        transition: {
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        },
      } : undefined}
    >
      {/* Luminous edge highlight — top edge glow */}
      <div
        className="glass-edge-glow"
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: 1,
          background: isDark
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlassPanel;
