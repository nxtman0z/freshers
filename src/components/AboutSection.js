import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const aboutStyles = {
    section: {
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    },
    title: {
      fontSize: 'clamp(2rem, 8vw, 4rem)',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #ffffff, #94a3b8)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: 'clamp(1rem, 3vw, 2rem)',
      fontFamily: 'Orbitron, monospace',
    },
    subtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      color: '#94a3b8',
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 3rem)',
      maxWidth: '600px',
      margin: '0 auto clamp(2rem, 6vw, 3rem) auto',
      lineHeight: '1.6',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1rem, 4vw, 2rem)',
      marginBottom: 'clamp(2rem, 6vw, 3rem)',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '20px',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      textAlign: 'left',
    },
    cardTitle: {
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flexWrap: 'wrap',
    },
    cardContent: {
      color: '#d1d5db',
      lineHeight: '1.6',
    },
    ruleItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      marginBottom: '0.75rem',
      padding: 'clamp(0.5rem, 2vw, 0.75rem)',
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.05)',
    },
    ruleIcon: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      marginTop: '0.125rem',
      flexShrink: 0,
    },
    ruleText: {
      color: '#e2e8f0',
      fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
      lineHeight: '1.5',
    },
    welcomeText: {
      fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
      color: '#f1f5f9',
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 3rem)',
      lineHeight: '1.8',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      background: 'rgba(139, 92, 246, 0.1)',
      borderRadius: '15px',
      border: '1px solid rgba(139, 92, 246, 0.3)',
    },
  };

  const dressCodeRules = [
    { icon: '👔', text: 'Boys: Casual or semi-formal (Jeans, Shirts, Trousers)' },
    { icon: '❌', text: 'Boys - Not allowed: Kurta, Pyjama, Dhoti' },
    { icon: '👗', text: 'Girls: Casual or semi-formal (Western wear, Dresses, Skirts, Tops)' },
    { icon: '❌', text: 'Girls - Not allowed: Saree, Sleeveless, Backless' },
  ];

  const generalRules = [
    { icon: '❌', text: 'Offensive behavior strictly prohibited' },
    { icon: '❌', text: 'Misconduct is taken seriously' },
    { icon: '❌', text: 'Any misconduct towards event organizers or university staff will lead to strict action' },
    { icon: '✅', text: 'Registration through university email address only is valid' },
    { icon: '✅', text: 'University ID card mandatory to attend the fresher\'s party' },
    { icon: '✅', text: 'Students without a university ID should contact the event organizers' },
    { icon: '✅', text: 'Follow instructions & enjoy responsibly' },
  ];

  return (
    <section style={aboutStyles.section}>
      {/* Background particles */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: 'clamp(2px, 1vw, 4px)',
              height: 'clamp(2px, 1vw, 4px)',
              background: '#3b82f6',
              borderRadius: '50%',
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div style={aboutStyles.container}>
        {/* Title */}
        <motion.h2
          style={aboutStyles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Welcome Freshers! 🎉
        </motion.h2>

        <motion.p
          style={aboutStyles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get ready for the most epic welcome party of your college life!
        </motion.p>

        {/* Welcome Message */}
        <motion.div
          style={aboutStyles.welcomeText}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          🌟 <strong>Hey Future Tech Stars!</strong> 🌟
          <br /><br />
          Ready to dive into the amazing world of MCA? UDBHAV 2.0 isn't just another orientation - 
          it's your official entry into the coolest department on campus! We've got games, fun activities, 
          networking sessions, and maybe some surprises that'll make you go "WOW!" 
          <br /><br />
          So put on your best outfit (following our dress code, of course 😉), bring your brightest smile, 
          and get ready to make memories that'll last a lifetime! 🎊
        </motion.div>

        {/* Cards Grid */}
        <div style={aboutStyles.gridContainer}>
          {/* Dress Code Card */}
          <motion.div
            style={aboutStyles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <h3 style={aboutStyles.cardTitle}>
              👔 Dress Code
            </h3>
            <div style={aboutStyles.cardContent}>
              {dressCodeRules.map((rule, index) => (
                <div key={index} style={aboutStyles.ruleItem}>
                  <span style={aboutStyles.ruleIcon}>{rule.icon}</span>
                  <span style={aboutStyles.ruleText}>{rule.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rules Card */}
          <motion.div
            style={aboutStyles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <h3 style={aboutStyles.cardTitle}>
              📋 Rules & Guidelines
            </h3>
            <div style={aboutStyles.cardContent}>
              {generalRules.map((rule, index) => (
                <div key={index} style={aboutStyles.ruleItem}>
                  <span style={aboutStyles.ruleIcon}>{rule.icon}</span>
                  <span style={aboutStyles.ruleText}>{rule.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fun Message */}
        <motion.div
          style={{
            ...aboutStyles.welcomeText,
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid rgba(0, 217, 255, 0.3)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          🎪 <strong>What to Expect?</strong> 🎪
          <br /><br />
          Ice-breaking games • Team building activities • Tech talks • Cultural performances • 
          Prize distributions • Networking sessions • Photo booths • Live entertainment • 
          And lots of FUN! 🎉
          <br /><br />
          <em>Remember: This is YOUR day to shine and make new friends! 🌟</em>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;