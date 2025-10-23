import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerStyles = {
    footer: {
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      padding: '2rem 1rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    },
    text: {
      color: '#94a3b8',
      fontSize: '1rem',
      fontWeight: '500',
      letterSpacing: '0.05em',
    },
    highlight: {
      background: 'linear-gradient(45deg, #8b5cf6, #00d9ff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
    },
  };

  return (
    <footer style={footerStyles.footer}>
      {/* Background animation */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: '#3b82f6',
              borderRadius: '50%',
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div style={footerStyles.content}>
        <motion.p
          style={footerStyles.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © 2025 <span style={footerStyles.highlight}>mcafreshers2025</span> - All Rights Reserved
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;