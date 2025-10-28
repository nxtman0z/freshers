import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const EventSection = () => {
  const eventStyles = {
    section: {
      padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem)',
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden',
    },
    
    // Background elements - removed for uniform look
    backgroundOverlay: {
      display: 'none',
    },
    
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    },
    
    // Header styles
    header: {
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 4vw, 3rem)',
    },
    
    title: {
      fontSize: 'clamp(3rem, 8vw, 4.5rem)',
      fontWeight: 'var(--weight-black)',
      fontFamily: 'var(--font-heading)',
      background: 'linear-gradient(45deg, #FFD700, #FF6B35, #00FF94)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: '200% 200%',
      letterSpacing: '0.02em',
      lineHeight: '1.1',
      textTransform: 'uppercase',
    },
    
    subtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.35rem)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-normal)',
      color: 'var(--text-secondary)',
      marginTop: '1rem',
      letterSpacing: '0.01em',
    },
    
    // Cards container
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(1rem, 3vw, 2rem)',
      maxWidth: '900px',
      margin: '0 auto',
    },
    
    // Card base styles - Made invisible
    cardBase: {
      background: 'transparent',
      backdropFilter: 'none',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      willChange: 'transform',
      border: 'none',
      boxShadow: 'none',
    },
    
    // Card content
    cardIcon: {
      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
      marginBottom: '1rem',
      display: 'block',
      textAlign: 'center',
    },
    
    cardTitle: {
      fontSize: 'clamp(1.35rem, 4vw, 1.65rem)',
      fontWeight: 'var(--weight-semibold)',
      fontFamily: 'var(--font-subheading)',
      color: 'var(--text-contrast)',
      marginBottom: '1rem',
      textAlign: 'center',
      letterSpacing: '0.01em',
      lineHeight: '1.3',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    
    eventDate: {
      fontSize: 'clamp(1.65rem, 5vw, 2.15rem)',
      fontWeight: 'var(--weight-bold)',
      fontFamily: 'var(--font-heading)',
      color: '#00d9ff',
      textAlign: 'center',
      marginBottom: '0.75rem',
      textShadow: '0 0 15px rgba(0, 217, 255, 0.5)',
      letterSpacing: '0.01em',
    },
    
    eventTime: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      color: '#8b5cf6',
      textAlign: 'center',
      marginBottom: '0.75rem',
      fontWeight: '500',
    },
    
    eventVenue: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      marginBottom: '0.5rem',
    },
    
    eventHost: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      color: '#f43f5e',
      textAlign: 'center',
      fontWeight: '500',
      marginBottom: '1rem',
    },
    
    disclaimer: {
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      color: 'rgba(255, 255, 255, 0.6)',
      textAlign: 'center',
      fontStyle: 'italic',
      lineHeight: '1.4',
    },
  };

  return (
    <section style={eventStyles.section}>
      {/* Particle Background */}
      <ParticleBackground particleCount={70} particleColor="auto" />

      <div style={eventStyles.container}>
        {/* Header */}
        <motion.div
          style={eventStyles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            style={eventStyles.title}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Event Info 
          </motion.h2>
          <motion.p
            style={eventStyles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Mark your calendars and get excited for UDBHAV 2.0!
          </motion.p>
        </motion.div>

        {/* Cards Container */}
        <div style={eventStyles.cardsContainer}>
          
          {/* Poster Release Card */}
          <motion.div
            style={eventStyles.cardBase}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              boxShadow: '0 12px 48px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              scale: 1.02,
            }}
            animate={{
              y: [0, -3, 0],
            }}
          >
            <motion.span
              style={eventStyles.cardIcon}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              🌈
            </motion.span>
            
            <h3 style={eventStyles.cardTitle}>🎉 Poster Released Successfully!</h3>
            
            <motion.div
              style={eventStyles.eventDate}
              animate={{
                textShadow: [
                  '0 0 15px rgba(0, 217, 255, 0.5)',
                  '0 0 25px rgba(0, 217, 255, 0.8)',
                  '0 0 15px rgba(0, 217, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ✅ Released on Saturday, 25th October 2025
            </motion.div>
            
            <div style={eventStyles.eventTime}>🎊 Thank you for your amazing response!</div>
            <div style={eventStyles.eventVenue}>� Get ready for the main event now!</div>
          </motion.div>

          {/* Main Event Card */}
          <motion.div
            style={eventStyles.cardBase}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              boxShadow: '0 12px 48px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              scale: 1.02,
            }}
            animate={{
              y: [0, -3, 0],
            }}
          >
            <motion.span
              style={eventStyles.cardIcon}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              📅
            </motion.span>
            
            <h3 style={eventStyles.cardTitle}>UDBHAV 2.0 - Freshers Welcome</h3>
            
            <motion.div
              style={eventStyles.eventDate}
              animate={{
                textShadow: [
                  '0 0 15px rgba(0, 217, 255, 0.5)',
                  '0 0 25px rgba(0, 217, 255, 0.8)',
                  '0 0 15px rgba(0, 217, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              📅 31st October 2025
            </motion.div>
            
            <div style={eventStyles.eventTime}>⏰ 11.00 AM Onwards</div>
            <div style={eventStyles.eventVenue}>📍 Gym Area, CUTM Campus</div>
            
            <motion.div
              style={eventStyles.eventHost}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              👥 Hosted by MCA Seniors <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ['#f43f5e', '#ff6b9d', '#f43f5e'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                ❤️
              </motion.span>
            </motion.div>
            
            <div style={eventStyles.disclaimer}>
              *Place and date may change as per university schedule.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;