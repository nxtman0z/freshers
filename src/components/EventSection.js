import React from 'react';
import { motion } from 'framer-motion';

const EventSection = () => {
  const eventStyles = {
    section: {
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
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
      background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #00d9ff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
      fontFamily: 'Orbitron, monospace',
    },
    subtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      color: '#94a3b8',
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 4rem)',
      maxWidth: '600px',
      margin: '0 auto clamp(2rem, 6vw, 4rem) auto',
      lineHeight: '1.6',
    },
    mainCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '25px',
      padding: 'clamp(2rem, 6vw, 3rem)',
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 3rem)',
      position: 'relative',
      overflow: 'hidden',
    },
    posterCard: {
      background: 'rgba(255, 107, 107, 0.1)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 107, 107, 0.3)',
      borderRadius: '20px',
      padding: 'clamp(1.5rem, 5vw, 2.5rem)',
      textAlign: 'center',
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
      position: 'relative',
      overflow: 'hidden',
    },
    posterTitle: {
      fontSize: 'clamp(1.25rem, 4vw, 2rem)',
      fontWeight: 'bold',
      color: '#ff6b6b',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
      textShadow: '0 0 15px rgba(255, 107, 107, 0.5)',
    },
    posterDate: {
      fontSize: 'clamp(1rem, 3vw, 1.5rem)',
      color: '#ffd700',
      fontWeight: '600',
      marginBottom: '0.5rem',
    },
    posterTime: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
      color: '#94a3b8',
      marginBottom: '0.5rem',
    },
    posterVenue: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
      color: '#8b5cf6',
      fontWeight: '500',
    },
    eventDate: {
      fontSize: 'clamp(1.75rem, 7vw, 3.5rem)',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #00d9ff, #8b5cf6, #ec4899)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: 'clamp(0.75rem, 3vw, 1.5rem)',
      fontFamily: 'Orbitron, monospace',
      textShadow: '0 0 30px rgba(0, 217, 255, 0.8)',
      backgroundSize: '200% 200%',
    },
    eventTime: {
      fontSize: 'clamp(1.25rem, 4.5vw, 1.75rem)',
      color: '#ffd700',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      fontWeight: '700',
      textShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
      letterSpacing: '0.5px',
    },
    eventVenue: {
      fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)',
      color: '#e2e8f0',
      marginBottom: 'clamp(0.75rem, 2.5vw, 1.25rem)',
      fontWeight: '600',
      textShadow: '0 0 15px rgba(226, 232, 240, 0.4)',
    },
    },
    hostInfo: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '600',
      marginBottom: 'clamp(1.25rem, 4vw, 2.5rem)',
      textShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
      textAlign: 'center',
    },
    disclaimer: {
      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
      color: '#64748b',
      fontStyle: 'italic',
      padding: 'clamp(0.75rem, 3vw, 1rem)',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '10px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  };



  return (
    <section style={eventStyles.section}>
      {/* Animated background grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div style={eventStyles.container}>
        {/* Title */}
        <motion.h2
          style={{
            ...eventStyles.title,
            backgroundSize: '200% 200%',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
        >
          Event Info 📅
        </motion.h2>

        <motion.p
          style={eventStyles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Mark your calendars! Here's everything you need to know about UDBHAV 2.0
        </motion.p>

        {/* Poster Release Card */}
        <motion.div
          style={eventStyles.posterCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Animated border glow */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(255, 212, 0, 0.2), rgba(139, 92, 246, 0.2))',
              borderRadius: '20px',
            }}
            animate={{
              background: [
                'linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(255, 212, 0, 0.2), rgba(139, 92, 246, 0.2))',
                'linear-gradient(45deg, rgba(255, 212, 0, 0.2), rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))',
                'linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2), rgba(255, 212, 0, 0.2))',
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <motion.div
              style={eventStyles.posterTitle}
              animate={{
                textShadow: [
                  '0 0 15px rgba(255, 107, 107, 0.5)',
                  '0 0 25px rgba(255, 107, 107, 0.8)',
                  '0 0 15px rgba(255, 107, 107, 0.5)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              🎊 Poster Release Event
            </motion.div>

            <motion.div
              style={eventStyles.posterDate}
              animate={{
                color: ['#ffd700', '#ffed4e', '#ffd700'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              📅 Saturday, 25th October 2025
            </motion.div>

            <div style={eventStyles.posterTime}>
              ⏰ 4.00 PM
            </div>

            <div style={eventStyles.posterVenue}>
              📍 In front of Aryabhatta Building
            </div>
          </div>
        </motion.div>

        {/* Main Event Card */}
        <motion.div
          style={eventStyles.mainCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
        >
          {/* Enhanced Gradient background animation */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.15), rgba(0, 217, 255, 0.15), rgba(255, 212, 0, 0.15), rgba(236, 72, 153, 0.15))',
              borderRadius: '25px',
            }}
            animate={{
              background: [
                'linear-gradient(45deg, rgba(139, 92, 246, 0.15), rgba(0, 217, 255, 0.15), rgba(255, 212, 0, 0.15), rgba(236, 72, 153, 0.15))',
                'linear-gradient(45deg, rgba(0, 217, 255, 0.15), rgba(255, 212, 0, 0.15), rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15))',
                'linear-gradient(45deg, rgba(255, 212, 0, 0.15), rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15), rgba(0, 217, 255, 0.15))',
                'linear-gradient(45deg, rgba(236, 72, 153, 0.15), rgba(139, 92, 246, 0.15), rgba(0, 217, 255, 0.15), rgba(255, 212, 0, 0.15))',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Floating particles effect */}
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, rgba(0, 217, 255, 0.3) 1px, transparent 1px),
                               radial-gradient(circle at 50% 10%, rgba(255, 212, 0, 0.2) 1.5px, transparent 1.5px)`,
              backgroundSize: '60px 60px, 40px 40px, 80px 80px',
              borderRadius: '25px',
            }}
            animate={{
              backgroundPosition: [
                '0px 0px, 0px 0px, 0px 0px',
                '60px 60px, -40px 40px, 80px -80px',
                '120px 0px, 40px -40px, 0px 80px',
                '0px 0px, 0px 0px, 0px 0px',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <motion.div
              style={eventStyles.eventDate}
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 217, 255, 0.5)',
                  '0 0 40px rgba(0, 217, 255, 0.8)',
                  '0 0 20px rgba(0, 217, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              📅 29th October 2025
            </motion.div>

            <motion.div
              style={eventStyles.eventTime}
              animate={{
                color: ['#ffd700', '#ffed4e', '#ffc107', '#ffd700'],
                textShadow: [
                  '0 0 20px rgba(255, 215, 0, 0.6)',
                  '0 0 30px rgba(255, 237, 78, 0.8)',
                  '0 0 20px rgba(255, 193, 7, 0.7)',
                  '0 0 20px rgba(255, 215, 0, 0.6)',
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
            >
              ⏰ 11.00 AM Onwards
            </motion.div>

            <motion.div
              style={eventStyles.eventVenue}
              animate={{
                textShadow: [
                  '0 0 15px rgba(226, 232, 240, 0.4)',
                  '0 0 25px rgba(226, 232, 240, 0.6)',
                  '0 0 15px rgba(226, 232, 240, 0.4)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              📍 Gym Area, CUTM Campus
            </motion.div>

            <motion.div
              style={eventStyles.hostInfo}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
               Hosted by MCA Seniors ❤️
            </motion.div>

            <motion.div
              style={eventStyles.disclaimer}
              animate={{
                borderColor: ['rgba(255, 255, 255, 0.1)', 'rgba(139, 92, 246, 0.3)', 'rgba(255, 255, 255, 0.1)'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              *Place and date may change as per university schedule.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;