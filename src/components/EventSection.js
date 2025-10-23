import React from 'react';
import { motion } from 'framer-motion';

const EventSection = () => {
  const eventStyles = {
    section: {
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
    },
    
    // Background elements
    backgroundOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
      opacity: 0.6,
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
      marginBottom: 'clamp(3rem, 6vw, 4rem)',
    },
    
    title: {
      fontSize: 'clamp(3rem, 8vw, 4.5rem)',
      fontWeight: 'var(--weight-black)',
      fontFamily: 'var(--font-heading)',
      background: 'linear-gradient(45deg, #6366f1, #14b8a6, #3b82f6)',
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
      gap: 'clamp(1.5rem, 4vw, 2.5rem)',
      maxWidth: '900px',
      margin: '0 auto',
    },
    
    // Card base styles
    cardBase: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(12px)',
      borderRadius: '24px',
      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      willChange: 'transform',
    },
    
    // Card 1 - Poster Release (Teal-Emerald - Same as Main Event)
    posterCard: {
      background: 'rgba(20, 184, 166, 0.15)',
      border: '1px solid rgba(20, 184, 166, 0.3)',
      boxShadow: '0 8px 32px rgba(20, 184, 166, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    },
    
    // Card 2 - Main Event (Teal-Emerald) 
    mainCard: {
      background: 'rgba(20, 184, 166, 0.15)',
      border: '1px solid rgba(20, 184, 166, 0.3)',
      boxShadow: '0 8px 32px rgba(20, 184, 166, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
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

  // Floating particles component
  const FloatingParticles = () => (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -50, 50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );

  // Animated border component for cards
  const AnimatedBorder = ({ gradient }) => (
    <motion.div
      style={{
        position: 'absolute',
        inset: '-1px',
        borderRadius: '24px',
        background: gradient,
        padding: '1px',
        zIndex: -1,
      }}
      animate={{
        background: [gradient, gradient.replace('45deg', '135deg'), gradient.replace('45deg', '225deg'), gradient],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );

  return (
    <section style={eventStyles.section}>
      {/* Background overlay */}
      <div style={eventStyles.backgroundOverlay} />
      
      {/* Floating particles */}
      <FloatingParticles />

      {/* Animated background waves */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(120deg, rgba(99, 102, 241, 0.1), rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.1))',
          opacity: 0.4,
        }}
        animate={{
          background: [
            'linear-gradient(120deg, rgba(99, 102, 241, 0.1), rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.1))',
            'linear-gradient(240deg, rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))',
            'linear-gradient(360deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1), rgba(20, 184, 166, 0.1))',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

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
            Mark your calendars for these exciting events!
          </motion.p>
        </motion.div>

        {/* Cards Container */}
        <div style={eventStyles.cardsContainer}>
          
          {/* Poster Release Card */}
          <motion.div
            style={{
              ...eventStyles.cardBase,
              ...eventStyles.posterCard,
            }}
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
              boxShadow: '0 12px 48px rgba(20, 184, 166, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              scale: 1.02,
            }}
            animate={{
              y: [0, -3, 0],
            }}
          >
            <AnimatedBorder gradient="linear-gradient(45deg, #14b8a6, #10b981, #14b8a6)" />
            
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
            
            <h3 style={eventStyles.cardTitle}>Poster Release Event</h3>
            
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
              📅 Saturday, 25th October 2025
            </motion.div>
            
            <div style={eventStyles.eventTime}>⏰ 4:00 PM</div>
            <div style={eventStyles.eventVenue}>📍 In front of Aryabhatta Building</div>
          </motion.div>

          {/* Main Event Card */}
          <motion.div
            style={{
              ...eventStyles.cardBase,
              ...eventStyles.mainCard,
            }}
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
              boxShadow: '0 12px 48px rgba(20, 184, 166, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              scale: 1.02,
            }}
            animate={{
              y: [0, -3, 0],
            }}
          >
            <AnimatedBorder gradient="linear-gradient(45deg, #14b8a6, #10b981, #14b8a6)" />
            
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
              📅 29th October 2025
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