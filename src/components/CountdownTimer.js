import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-31T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  // Check if countdown is finished
  const isEventLive = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  const countdownStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'clamp(0.375rem, 1.5vw, 1rem)',
      margin: 'clamp(0.75rem, 3vw, 2rem) 0',
      flexWrap: 'wrap',
      padding: '0 clamp(0.5rem, 2vw, 1rem)',
    },
    timeBox: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '15px',
      padding: 'clamp(0.5rem, 2vw, 1rem)',
      textAlign: 'center',
      minWidth: 'clamp(50px, 12vw, 80px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      flex: '1 1 auto',
      maxWidth: '100px',
    },
    timeNumber: {
      fontSize: 'clamp(1rem, 4vw, 2rem)',
      fontWeight: 'var(--weight-black)',
      fontFamily: 'var(--font-heading)',
      color: '#00d9ff',
      display: 'block',
      textShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
      letterSpacing: '0.02em',
    },
    timeLabel: {
      fontSize: 'clamp(0.625rem, 2vw, 0.875rem)',
      fontFamily: 'var(--font-button)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)',
      marginTop: '0.25rem',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    },
    title: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
      fontFamily: "'Rajdhani', sans-serif",
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: 'clamp(0.375rem, 1.5vw, 1rem)',
      textAlign: 'center',
      textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
    },
    separator: {
      fontSize: 'clamp(1rem, 3.5vw, 2rem)',
      color: '#8b5cf6',
      fontWeight: 'bold',
      animation: 'pulse 1s infinite',
    },
    liveMessage: {
      textAlign: 'center',
      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      border: '1px solid rgba(0, 217, 255, 0.3)',
      boxShadow: '0 8px 32px rgba(0, 217, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    },
    liveTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      fontFamily: "'Orbitron', monospace",
      fontWeight: '700',
      background: 'linear-gradient(45deg, #00d9ff, #3b82f6, #8b5cf6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      letterSpacing: '0.02em',
    },
    liveSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
      color: '#e2e8f0',
      fontFamily: "'Rajdhani', sans-serif",
      fontWeight: '500',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      margin: 0,
      lineHeight: '1.5',
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {isEventLive ? (
        // Event is Live Message
        <motion.div
          style={countdownStyles.liveMessage}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            style={countdownStyles.liveTitle}
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
              ease: 'easeInOut',
            }}
          >
            � UDBHAV 2.0 - SUCCESSFULLY COMPLETED! �
          </motion.h2>
          <motion.p
            style={countdownStyles.liveSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Thank you for making this event memorable! Hope you had an amazing experience! �
          </motion.p>
        </motion.div>
      ) : (
        // Countdown Timer
        <>
          <div style={countdownStyles.title}>
            🎉 Event Countdown
          </div>
      <div style={countdownStyles.container}>
        <motion.div
          style={countdownStyles.timeBox}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <span style={countdownStyles.timeNumber}>{formatTime(timeLeft.days)}</span>
          <span style={countdownStyles.timeLabel}>Days</span>
        </motion.div>

        <span style={countdownStyles.separator}>:</span>

        <motion.div
          style={countdownStyles.timeBox}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <span style={countdownStyles.timeNumber}>{formatTime(timeLeft.hours)}</span>
          <span style={countdownStyles.timeLabel}>Hours</span>
        </motion.div>

        <span style={countdownStyles.separator}>:</span>

        <motion.div
          style={countdownStyles.timeBox}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <span style={countdownStyles.timeNumber}>{formatTime(timeLeft.minutes)}</span>
          <span style={countdownStyles.timeLabel}>Minutes</span>
        </motion.div>

        <span style={countdownStyles.separator}>:</span>

        <motion.div
          style={countdownStyles.timeBox}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <span style={countdownStyles.timeNumber}>{formatTime(timeLeft.seconds)}</span>
          <span style={countdownStyles.timeLabel}>Seconds</span>
        </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CountdownTimer;