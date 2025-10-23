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
    const targetDate = new Date('2025-10-29T09:00:00').getTime();

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

  const countdownStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 1rem)',
      margin: 'clamp(1rem, 4vw, 2rem) 0',
      flexWrap: 'wrap',
      padding: '0 clamp(0.5rem, 2vw, 1rem)',
    },
    timeBox: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '15px',
      padding: 'clamp(0.75rem, 3vw, 1rem)',
      textAlign: 'center',
      minWidth: 'clamp(60px, 15vw, 80px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      flex: '1 1 auto',
      maxWidth: '120px',
    },
    timeNumber: {
      fontSize: 'clamp(1.25rem, 6vw, 2rem)',
      fontWeight: 'bold',
      color: '#00d9ff',
      display: 'block',
      fontFamily: 'Orbitron, monospace',
      textShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
    },
    timeLabel: {
      fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
      color: '#94a3b8',
      marginTop: '0.25rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    title: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      color: '#ffffff',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
      textAlign: 'center',
      fontWeight: '600',
    },
    separator: {
      fontSize: 'clamp(1.25rem, 5vw, 2rem)',
      color: '#8b5cf6',
      fontWeight: 'bold',
      animation: 'pulse 1s infinite',
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div style={countdownStyles.title}>
        🎉 Event Countdown
      </div>
      <div style={countdownStyles.container}>
        <motion.div
          style={countdownStyles.timeBox}
          whileHover={{ scale: 1.05, y: -5 }}
          animate={{
            boxShadow: [
              '0 8px 32px rgba(0, 0, 0, 0.3)',
              '0 8px 32px rgba(59, 130, 246, 0.2)',
              '0 8px 32px rgba(0, 0, 0, 0.3)',
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
            }
          }}
        >
          <span style={countdownStyles.timeNumber}>{formatTime(timeLeft.days)}</span>
          <span style={countdownStyles.timeLabel}>Days</span>
        </motion.div>

        <span style={countdownStyles.separator}>:</span>

        <motion.div
          style={countdownStyles.timeBox}
          whileHover={{ scale: 1.05, y: -5 }}
          animate={{
            boxShadow: [
              '0 8px 32px rgba(0, 0, 0, 0.3)',
              '0 8px 32px rgba(139, 92, 246, 0.2)',
              '0 8px 32px rgba(0, 0, 0, 0.3)',
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }
          }}
        >
          <span style={countdownStyles.timeNumber}>{formatTime(timeLeft.hours)}</span>
          <span style={countdownStyles.timeLabel}>Hours</span>
        </motion.div>

        <span style={countdownStyles.separator}>:</span>

        <motion.div
          style={countdownStyles.timeBox}
          whileHover={{ scale: 1.05, y: -5 }}
          animate={{
            boxShadow: [
              '0 8px 32px rgba(0, 0, 0, 0.3)',
              '0 8px 32px rgba(0, 217, 255, 0.2)',
              '0 8px 32px rgba(0, 0, 0, 0.3)',
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }
          }}
        >
          <span style={countdownStyles.timeNumber}>{formatTime(timeLeft.minutes)}</span>
          <span style={countdownStyles.timeLabel}>Minutes</span>
        </motion.div>

        <span style={countdownStyles.separator}>:</span>

        <motion.div
          style={countdownStyles.timeBox}
          whileHover={{ scale: 1.05, y: -5 }}
          animate={{
            boxShadow: [
              '0 8px 32px rgba(0, 0, 0, 0.3)',
              '0 8px 32px rgba(255, 212, 0, 0.2)',
              '0 8px 32px rgba(0, 0, 0, 0.3)',
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              delay: 1.5,
            }
          }}
        >
          <span style={countdownStyles.timeNumber}>{formatTime(timeLeft.seconds)}</span>
          <span style={countdownStyles.timeLabel}>Seconds</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;