import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const aboutStyles = {
    section: {
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    },
    title: {
      fontSize: 'clamp(2.5rem, 10vw, 5rem)',
      fontWeight: '900',
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)',
      backgroundSize: '400% 400%',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: 'clamp(1rem, 3vw, 2rem)',
      fontFamily: 'Orbitron, monospace',
      textShadow: '0 0 50px rgba(255, 107, 107, 0.5)',
      transform: 'perspective(1000px) rotateX(15deg)',
      transformStyle: 'preserve-3d',
      filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
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
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '25px',
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      textAlign: 'left',
      position: 'relative',
      overflow: 'hidden',
      transform: 'perspective(1000px) rotateY(5deg)',
      transformStyle: 'preserve-3d',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
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
      background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.15))',
      borderRadius: '20px',
      border: '1px solid rgba(139, 92, 246, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      transform: 'perspective(1000px) rotateX(-5deg)',
      boxShadow: '0 15px 35px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    },
  };

  const dressCodeRules = [
    { icon: '👔', text: 'Boys: Casual or semi-formal (Jeans, Shirts, Trousers)' },
    { icon: '❌', text: 'Boys - Not allowed: Kurta, Pyjama, Dhoti' },
    { icon: '👗', text: 'Girls: Casual or semi-formal (Formal Dresses, Suits)' },
    { icon: '❌', text: 'Girls - Not allowed: Saree, Sleeveless, (No revealing dresses)' },
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
      {/* Animated Background Gradient */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)',
          backgroundSize: '400% 400%',
          opacity: 0.1,
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Geometric Shapes */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            style={{
              position: 'absolute',
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              border: '2px solid rgba(255, 107, 107, 0.3)',
              borderRadius: i % 2 === 0 ? '50%' : '10px',
              left: `${10 + i * 12}%`,
              top: `${20 + (i * 15) % 60}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Particles */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            style={{
              position: 'absolute',
              width: 'clamp(3px, 1.5vw, 6px)',
              height: 'clamp(3px, 1.5vw, 6px)',
              background: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][i % 5],
              borderRadius: '50%',
              opacity: 0.6,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][i % 5]}`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div style={aboutStyles.container}>
        {/* Title */}
        <motion.h2
          style={aboutStyles.title}
          initial={{ opacity: 0, y: 50, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 15 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          whileHover={{
            scale: 1.05,
            rotateX: 0,
            filter: 'drop-shadow(0 15px 30px rgba(255, 107, 107, 0.8))',
          }}
        >
          Welcome Freshers! 🎉✨
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
          initial={{ opacity: 0, scale: 0.8, rotateX: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: -5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            rotateX: 0,
            boxShadow: '0 25px 50px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          }}
        >
          {/* Animated Background Shine */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              borderRadius: '20px',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
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
            initial={{ opacity: 0, y: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -15, 
              scale: 1.05,
              rotateY: 0,
              boxShadow: '0 30px 60px rgba(255, 107, 107, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              filter: 'brightness(1.1)',
            }}
          >
            {/* Card Glow Effect */}
            <motion.div
              style={{
                position: 'absolute',
                inset: '-2px',
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
                borderRadius: '25px',
                opacity: 0,
                zIndex: -1,
              }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
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
            initial={{ opacity: 0, y: 50, rotateY: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: -5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -15, 
              scale: 1.05,
              rotateY: 0,
              boxShadow: '0 30px 60px rgba(78, 205, 196, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              filter: 'brightness(1.1)',
            }}
          >
            {/* Card Glow Effect */}
            <motion.div
              style={{
                position: 'absolute',
                inset: '-2px',
                background: 'linear-gradient(45deg, #4ecdc4, #45b7d1, #96ceb4)',
                borderRadius: '25px',
                opacity: 0,
                zIndex: -1,
              }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
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
            background: 'linear-gradient(145deg, rgba(0, 217, 255, 0.2), rgba(254, 202, 87, 0.15))',
            border: '1px solid rgba(0, 217, 255, 0.4)',
            transform: 'perspective(1000px) rotateX(5deg)',
          }}
          initial={{ opacity: 0, y: 50, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 5 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            rotateX: 0,
            boxShadow: '0 25px 50px rgba(0, 217, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          }}
        >
          {/* Animated Border Glow */}
          <motion.div
            style={{
              position: 'absolute',
              inset: '-2px',
              background: 'linear-gradient(45deg, #00d9ff, #feca57, #00d9ff)',
              borderRadius: '20px',
              opacity: 0,
              zIndex: -1,
            }}
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
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