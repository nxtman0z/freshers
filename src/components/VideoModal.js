import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (isOpen && !showVideo) {
      setIsLoading(true);
      setCountdown(5);
      
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsLoading(false);
            setShowVideo(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen, showVideo]);

  const handleClose = () => {
    setIsLoading(false);
    setShowVideo(false);
    setCountdown(5);
    onClose();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/udbhav.mp4';
    link.download = 'UDBHAV_2.0_The_Vibe.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 'clamp(1rem, 4vw, 2rem)',
          backdropFilter: 'blur(10px)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <motion.div
          style={{
            background: 'linear-gradient(145deg, rgba(26, 26, 46, 0.95), rgba(22, 33, 62, 0.95))',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            maxWidth: '900px',
            width: '100%',
            position: 'relative',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          initial={{ scale: 0.3, y: 100, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.3, y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              background: 'linear-gradient(45deg, #f87171, #ef4444)',
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(248, 113, 113, 0.4)',
            }}
            whileHover={{ scale: 1.1, boxShadow: '0 6px 20px rgba(248, 113, 113, 0.6)' }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>

          {isLoading ? (
            // Loading Screen with Countdown
            <motion.div
              style={{
                textAlign: 'center',
                padding: 'clamp(2rem, 6vw, 4rem)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Animated Logo */}
              <motion.div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #00d9ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                🎬
              </motion.div>

              <div>
                <h2 style={{
                  color: '#fff',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontFamily: 'var(--font-heading)',
                  marginBottom: '1rem',
                  textShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                }}>
                  🎉 Get Ready for the Vibe!
                </h2>
                
                <motion.div
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    fontWeight: 'bold',
                    color: '#00d9ff',
                    fontFamily: 'var(--font-heading)',
                    textShadow: '0 0 30px rgba(0, 217, 255, 0.8)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    textShadow: [
                      '0 0 30px rgba(0, 217, 255, 0.8)',
                      '0 0 50px rgba(0, 217, 255, 1)',
                      '0 0 30px rgba(0, 217, 255, 0.8)'
                    ]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {countdown}
                </motion.div>
                
                <p style={{
                  color: '#c1c1c1',
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  fontFamily: 'var(--font-body)',
                  marginTop: '1rem',
                }}>
                  Something amazing is loading...
                </p>
              </div>
            </motion.div>
          ) : (
            // Video Content
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Title */}
              <motion.h2 
                style={{
                  color: 'transparent',
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #00d9ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  textAlign: 'center',
                  marginBottom: '2rem',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--weight-bold)',
                  letterSpacing: '0.02em',
                  textShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                📹 UDBHAV 2.0 - The Ultimate Vibe! 🎉
              </motion.h2>

              {/* Video Container */}
              <motion.div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  marginBottom: '2rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  controls
                  autoPlay
                  style={{
                    width: '100%',
                    height: 'clamp(200px, 40vw, 400px)',
                    borderRadius: '18px',
                    objectFit: 'cover',
                  }}
                  poster="/udbhav-logo.png"
                >
                  <source src="/udbhav.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                  pointerEvents: 'none',
                  borderRadius: '18px',
                }} />
              </motion.div>

              {/* Download Button */}
              <motion.button
                onClick={handleDownload}
                style={{
                  width: '100%',
                  padding: 'clamp(1rem, 3vw, 1.25rem)',
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  fontFamily: 'var(--font-button)',
                  fontWeight: 'var(--weight-semibold)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)',
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 12px 35px rgba(139, 92, 246, 0.6)',
                  background: 'linear-gradient(45deg, #a855f7, #f472b6)',
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 8px 25px rgba(139, 92, 246, 0.4)',
                    '0 12px 35px rgba(139, 92, 246, 0.6)',
                    '0 8px 25px rgba(139, 92, 246, 0.4)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📥
                </motion.span>
                Download The Vibe
              </motion.button>
              
              <p style={{
                textAlign: 'center',
                color: '#9ca3af',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                marginTop: '1rem',
                fontFamily: 'var(--font-body)',
              }}>
                Click to download and share the UDBHAV 2.0 experience! 🎊
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;