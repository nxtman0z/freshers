import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const aboutStyles = {
    section: {
      padding: '0 clamp(1rem, 4vw, 2rem) clamp(2rem, 6vw, 4rem)',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #1e3a8a 75%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      margin: '0',
      border: 'none',
      outline: 'none',
      marginTop: '-1px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    },
    // Main Welcome Title
    welcomeTitle: {
      fontSize: 'clamp(3rem, 8vw, 5rem)',
      fontWeight: 'var(--weight-black)',
      fontFamily: 'var(--font-heading)',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #ffd93d, #6c5ce7)',
      backgroundSize: '300% 300%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
      textShadow: '0 0 40px rgba(255, 107, 107, 0.3)',
      letterSpacing: '0.02em',
      lineHeight: '1.1',
      textTransform: 'uppercase',
    },
    // Hero Message Box
    heroMessageBox: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '24px',
      padding: 'clamp(2rem, 5vw, 3rem)',
      marginBottom: 'clamp(2rem, 5vw, 3rem)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    },
    heroHeading: {
      fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
      fontWeight: 'var(--weight-bold)',
      fontFamily: 'var(--font-subheading)',
      color: '#ffd93d',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      textShadow: '0 0 20px rgba(255, 217, 61, 0.5)',
      letterSpacing: '0.01em',
      lineHeight: '1.2',
    },
    heroMessage: {
      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-normal)',
      color: 'var(--text-primary)',
      lineHeight: '1.6',
      marginBottom: '1rem',
      letterSpacing: '0.005em',
    },
    // Cards Grid Container
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(1.5rem, 4vw, 2.5rem)',
      marginTop: 'clamp(2rem, 5vw, 3rem)',
    },
    // Glassmorphism Card Base
    card: {
      background: 'rgba(255, 255, 255, 0.06)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '20px',
      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
    },
    cardIcon: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      marginBottom: '1rem',
      display: 'block',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
      fontWeight: 'var(--weight-semibold)',
      fontFamily: 'var(--font-subheading)',
      color: 'var(--text-contrast)',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      textAlign: 'center',
      letterSpacing: '0.01em',
      lineHeight: '1.3',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    rulesList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    ruleItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.875rem 0',
      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-normal)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      lineHeight: '1.4',
      letterSpacing: '0.005em',
    },
    ruleIcon: {
      marginRight: '0.875rem',
      fontSize: '1.25rem',
      minWidth: '28px',
      fontWeight: 'var(--weight-medium)',
    },
    allowedRule: {
      color: '#4ade80',
      textShadow: '0 1px 2px rgba(74, 222, 128, 0.2)',
    },
    notAllowedRule: {
      color: '#f87171',
      textShadow: '0 1px 2px rgba(248, 113, 113, 0.2)',
    },
  };

  // Dress Code Data
  const dressCodeRules = [
    { type: 'allowed', category: 'Boys', text: 'Casual or semi-formal (Jeans, Shirts, Trousers)', icon: '✅' },
    { type: 'notAllowed', category: 'Boys', text: 'Not allowed: Kurta, Pyjama, Dhoti', icon: '❌' },
    { type: 'allowed', category: 'Girls', text: 'Casual or semi-formal (Formal Dresses, suits)', icon: '✅' },
    { type: 'notAllowed', category: 'Girls', text: 'Not allowed: Saree, Sleeveless, (No revealing dresses)', icon: '❌' },
  ];

  // Rules & Guidelines Data
  const rulesGuidelines = [
    { type: 'notAllowed', text: 'Offensive behavior strictly prohibited', icon: '❌' },
    { type: 'notAllowed', text: 'Misconduct is taken seriously', icon: '❌' },
    { type: 'notAllowed', text: 'Any misconduct towards event organizers or university staff will lead to strict action', icon: '❌' },
    { type: 'allowed', text: 'Registration through university email address only is valid', icon: '✅' },
    { type: 'allowed', text: 'University ID card mandatory to attend the fresher\'s party', icon: '✅' },
    { type: 'allowed', text: 'Students without a university ID should contact the event organizers', icon: '✅' },
    { type: 'allowed', text: 'Follow instructions & enjoy responsibly', icon: '✅' },
  ];

  return (
    <section style={aboutStyles.section}>
      {/* Floating Particles Background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              background: `hsl(${Math.random() * 60 + 200}, 70%, 80%)`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div style={aboutStyles.container}>
        {/* Main Welcome Title */}
        <motion.h1
          style={aboutStyles.welcomeTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
        >
          Welcome Freshers! 🎉 
        </motion.h1>

        {/* Hero Message Box */}
        <motion.div
          style={aboutStyles.heroMessageBox}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Gradient overlay animation */}
          <motion.div
  style={{
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(76, 205, 196, 0.1), rgba(255, 217, 61, 0.1))',
    borderRadius: '24px',
  }}
  animate={{
    background: [
      'linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(76, 205, 196, 0.1), rgba(255, 217, 61, 0.1))',
      'linear-gradient(45deg, rgba(76, 205, 196, 0.1), rgba(255, 217, 61, 0.1), rgba(255, 107, 107, 0.1))',
      'linear-gradient(45deg, rgba(255, 217, 61, 0.1), rgba(255, 107, 107, 0.1), rgba(76, 205, 196, 0.1))',
    ],
  }}
  transition={{ duration: 8, repeat: Infinity }}
/>

<div style={{ position: 'relative', zIndex: 2 }}>
  <motion.h2
    style={aboutStyles.heroHeading}
    animate={{
      textShadow: [
        '0 0 20px rgba(255, 217, 61, 0.5)',
        '0 0 30px rgba(255, 217, 61, 0.8)',
        '0 0 20px rgba(255, 217, 61, 0.5)',
      ],
    }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    ⚡ Freshers, It’s Time to Power Up! ⚡
  </motion.h2>

  <div style={aboutStyles.heroMessage}>
    <p>🌟 Welcome to <strong>UDBHAV 2.0</strong> — the start of your MCA adventure filled with fun, laughter, and good vibes all around!</p>
    <p>🎉 Forget the code for a day — tonight’s all about music, dance, and making new friends!</p>
    <p>💫 Let’s celebrate the spark that makes every fresher shine bright!</p>
  </div>
</div>

        </motion.div>

        {/* Cards Container */}
        <div style={aboutStyles.cardsContainer}>
          {/* Dress Code Card */}
          <motion.div
            style={{
              ...aboutStyles.card,
              background: 'rgba(255, 107, 107, 0.08)',
              border: '1px solid rgba(255, 107, 107, 0.2)',
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div style={aboutStyles.cardIcon}>👔</div>
            <h3 style={aboutStyles.cardTitle}>Dress Code</h3>
            <ul style={aboutStyles.rulesList}>
              {dressCodeRules.map((rule, index) => (
                <motion.li
                  key={index}
                  style={{
                    ...aboutStyles.ruleItem,
                    ...(rule.type === 'allowed' ? aboutStyles.allowedRule : aboutStyles.notAllowedRule),
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span style={aboutStyles.ruleIcon}>{rule.icon}</span>
                  <strong>{rule.category}:</strong> {rule.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Rules & Guidelines Card */}
          <motion.div
            style={{
              ...aboutStyles.card,
              background: 'rgba(108, 92, 231, 0.08)',
              border: '1px solid rgba(108, 92, 231, 0.2)',
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div style={aboutStyles.cardIcon}>📋</div>
            <h3 style={aboutStyles.cardTitle}>Rules & Guidelines</h3>
            <ul style={aboutStyles.rulesList}>
              {rulesGuidelines.map((rule, index) => (
                <motion.li
                  key={index}
                  style={{
                    ...aboutStyles.ruleItem,
                    ...(rule.type === 'allowed' ? aboutStyles.allowedRule : aboutStyles.notAllowedRule),
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span style={aboutStyles.ruleIcon}>{rule.icon}</span>
                  {rule.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;