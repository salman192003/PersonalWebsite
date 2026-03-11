import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactData } from '../../data/portfolioData';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const contactItems = [
    {
      icon: '✉️',
      label: 'Email',
      value: contactData.email,
      action: () => copyToClipboard(contactData.email, 'email'),
      href: `mailto:${contactData.email}`,
      copyable: true,
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: contactData.githubHandle,
      href: contactData.github,
      external: true,
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: contactData.linkedinName,
      href: contactData.linkedin,
      external: true,
    },
    {
      icon: '📍',
      label: 'Location',
      value: contactData.location,
    },
  ];

  return (
    <motion.div
      className="contact-section"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* Header message */}
      <motion.div className="contact-hero" variants={fadeUp}>
        <span className="contact-wave">👋</span>
        <h3 className="contact-hero-title">Let's Connect</h3>
        <p className="contact-hero-text">
          I'm always interested in new opportunities, exciting projects, and meaningful collaborations.
        </p>
      </motion.div>

      {/* Contact items */}
      <motion.div className="contact-list" variants={fadeUp}>
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="contact-item"
            variants={fadeUp}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="contact-item-inner"
              >
                <span className="contact-item-icon">{item.icon}</span>
                <div className="contact-item-text">
                  <span className="contact-item-label">{item.label}</span>
                  <span className="contact-item-value">{item.value}</span>
                </div>
                {item.external && (
                  <svg className="contact-external" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 1.5h7.5v7.5M12.5 1.5L1.5 12.5" stroke="var(--ios-secondary-label)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>
            ) : (
              <div className="contact-item-inner">
                <span className="contact-item-icon">{item.icon}</span>
                <div className="contact-item-text">
                  <span className="contact-item-label">{item.label}</span>
                  <span className="contact-item-value">{item.value}</span>
                </div>
              </div>
            )}

            {item.copyable && (
              <motion.button
                className="contact-copy-btn"
                onClick={(e) => {
                  e.preventDefault();
                  item.action?.();
                }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {copiedField === 'email' ? (
                    <motion.span
                      key="copied"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="contact-copied"
                    >
                      ✓
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      📋
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {index < contactItems.length - 1 && <div className="contact-separator" />}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
