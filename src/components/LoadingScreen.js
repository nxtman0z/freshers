import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  const loadingStyles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #4a0e4e 50%, #0a0a0a 100%)',
    },
    particleContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
    },
    particle: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      borderRadius: '50%',
    },
    content: {
      textAlign: 'center',
      zIndex: 10,
    },
    title: {
      fontSize: '6rem',
      fontFamily: 'Orbitron, monospace',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #00d9ff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '2rem',
      fontFamily: 'Orbitron, monospace',
      fontWeight: '300',
      color: '#ffd700',
      marginTop: '0.5rem',
      marginBottom: '2rem',
    },
    progressContainer: {
      width: '320px',
      height: '8px',
      backgroundColor: '#374151',
      borderRadius: '9999px',
      margin: '0 auto',
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      borderRadius: '9999px',
      transition: 'width 0.3s ease',
    },
    percentage: {
      color: '#00d9ff',
      marginTop: '1rem',
      fontSize: '1.125rem',
      fontWeight: '500',
    },
    loadingText: {
      color: '#9ca3af',
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    corner: {
      position: 'absolute',
      width: '80px',
      height: '80px',
    },
    cornerTL: {
      top: '2.5rem',
      left: '2.5rem',
      borderLeft: '2px solid #00d9ff',
      borderTop: '2px solid #00d9ff',
    },
    cornerBR: {
      bottom: '2.5rem',
      right: '2.5rem',
      borderRight: '2px solid #8b5cf6',
      borderBottom: '2px solid #8b5cf6',
    },
  };

  return (
    <motion.div
      style={loadingStyles.container}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background particles */}
      <div style={loadingStyles.particleContainer}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              ...loadingStyles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div style={loadingStyles.content}>
        {/* 3D Logo Animation */}
        <motion.div
          initial={{ rotateY: -180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h1
            style={loadingStyles.title}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            UDBHAV
          </motion.h1>
          <motion.p
            style={loadingStyles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            2.0
          </motion.p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          style={loadingStyles.progressContainer}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            style={{
              ...loadingStyles.progressBar,
              width: `${progress}%`,
            }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.8)",
                "0 0 10px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
              },
            }}
          />
        </motion.div>

        {/* Progress percentage */}
        <motion.p
          style={loadingStyles.percentage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {progress}%
        </motion.p>

        {/* Loading text */}
        <motion.p
          style={loadingStyles.loadingText}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Preparing the Experience
        </motion.p>
      </div>

      {/* Corner decorations */}
      <motion.div
        style={{...loadingStyles.corner, ...loadingStyles.cornerTL}}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <motion.div
        style={{...loadingStyles.corner, ...loadingStyles.cornerBR}}
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;