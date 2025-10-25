import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Video = ({ isOpen, onClose }) => {
  const [countdown, setCountdown] = useState(5);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPosterOptions, setShowPosterOptions] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = {
    udbhav: '/udbhav.mp4',
    poster1: '/videos/poster1.mp4',
    poster2: '/videos/poster2.mp4'
  };

  useEffect(() => {
    if (isOpen && !showOptions) {
      setCountdown(5);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowOptions(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen, showOptions]);

  const handleClose = () => {
    setShowOptions(false);
    setSelectedOption(null);
    setShowPosterOptions(false);
    setCurrentVideo(null);
    setCountdown(5);
    onClose();
  };

  const handleOptionSelect = (option) => {
    if (option === 'udbhav') {
      setSelectedOption('udbhav');
      setCurrentVideo(videos.udbhav);
    } else if (option === 'poster') {
      setShowPosterOptions(true);
    }
  };

  const handlePosterSelect = (posterNum) => {
    setSelectedOption('poster' + posterNum);
    setCurrentVideo(videos['poster' + posterNum]);
    setShowPosterOptions(false);
  };

  const downloadVideo = async (videoKey) => {
    try {
      const videoPath = videos[videoKey];
      const response = await fetch(videoPath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      let fileName = '';
      if (videoKey === 'udbhav') {
        fileName = 'UDBHAV_2.0_Official_Video.mp4';
      } else if (videoKey === 'poster1') {
        fileName = 'UDBHAV_Poster_Release_Video_1.mp4';
      } else if (videoKey === 'poster2') {
        fileName = 'UDBHAV_Poster_Release_Video_2.mp4';
      }
      
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const goBack = () => {
    if (showPosterOptions) {
      setShowPosterOptions(false);
    } else if (selectedOption) {
      setSelectedOption(null);
      setCurrentVideo(null);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="video-modal-overlay"
        onClick={handleClose}
        style={styles.overlay}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="video-modal-content"
          onClick={(e) => e.stopPropagation()}
          style={styles.content}
        >
          <button onClick={handleClose} style={styles.closeButton}>✕</button>

          {!showOptions && !selectedOption && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={styles.countdownContainer}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#00d9ff', '#ff6b6b', '#00d9ff']
                }}
                transition={{ 
                  duration: 1,
                  repeat: countdown > 0 ? Infinity : 0
                }}
                style={styles.countdownText}
              >
                {countdown}
              </motion.div>
              <p style={styles.countdownLabel}>Get ready for the experience...</p>
            </motion.div>
          )}

          {showOptions && !selectedOption && !showPosterOptions && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={styles.optionsContainer}
            >
              <h2 style={styles.optionsTitle}>Choose Your Experience</h2>
              <div style={styles.optionButtons}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOptionSelect('udbhav')}
                  style={{...styles.optionButton, ...styles.udbhavButton}}
                >
                  <span style={styles.buttonIcon}>🎬</span>
                  <span style={styles.buttonText}>UDBHAV 2.0</span>
                  <span style={styles.buttonSubtext}>Official Video</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOptionSelect('poster')}
                  style={{...styles.optionButton, ...styles.posterButton}}
                >
                  <span style={styles.buttonIcon}>📺</span>
                  <span style={styles.buttonText}>Poster Release</span>
                  <span style={styles.buttonSubtext}>Behind the Scenes</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {showPosterOptions && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              style={styles.optionsContainer}
            >
              <button onClick={goBack} style={styles.backButton}>← Back</button>
              <h2 style={styles.optionsTitle}>Poster Release Videos</h2>
              <div style={styles.posterButtonContainer}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(236, 72, 153, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePosterSelect(1)}
                  style={{...styles.posterVideoButton, ...styles.poster1Button}}
                >
                  <span style={styles.buttonIcon}>🎥</span>
                  <span style={styles.buttonText}>Video 1</span>
                  <span style={styles.buttonSubtext}>First Look</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34, 197, 94, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePosterSelect(2)}
                  style={{...styles.posterVideoButton, ...styles.poster2Button}}
                >
                  <span style={styles.buttonIcon}>🎬</span>
                  <span style={styles.buttonText}>Video 2</span>
                  <span style={styles.buttonSubtext}>Final Reveal</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {currentVideo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={styles.videoContainer}
            >
              <video
                controls
                autoPlay
                style={styles.video}
                onError={(e) => {
                  console.error('Video loading error:', e);
                  alert('Video could not be loaded. Please try again.');
                }}
              >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div style={styles.buttonContainer}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goBack}
                  style={styles.backButtonNew}
                >
                  <span>←</span> Back
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => downloadVideo(selectedOption)}
                  style={styles.downloadButton}
                >
                  <span>⬇️</span> Download
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
  },
  content: {
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
    borderRadius: '15px',
    padding: '1.5rem',
    maxWidth: '80vw',
    maxHeight: '85vh',
    width: 'clamp(300px, 60vw, 600px)',
    position: 'relative',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'rgba(239, 68, 68, 0.2)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#ef4444',
    padding: '8px 12px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    zIndex: 10,
    transition: 'all 0.3s ease',
  },
  countdownContainer: {
    textAlign: 'center',
    padding: '2rem 1rem',
  },
  countdownText: {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    fontWeight: 'bold',
    fontFamily: "'Orbitron', monospace",
    marginBottom: '0.5rem',
    textShadow: '0 0 20px currentColor',
  },
  countdownLabel: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    color: '#94a3b8',
    fontFamily: "'Rajdhani', sans-serif",
    margin: 0,
  },
  optionsContainer: {
    textAlign: 'center',
    padding: '1rem 0',
  },
  optionsTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontFamily: "'Orbitron', monospace",
    color: '#00d9ff',
    marginBottom: '2rem',
    textShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
  },
  optionButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
  },
  optionButton: {
    padding: '1.5rem 2rem',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    width: '100%',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },
  udbhavButton: {
    background: 'linear-gradient(45deg, #3b82f6, #1e40af)',
    border: '2px solid rgba(59, 130, 246, 0.3)',
    color: 'white',
  },
  posterButton: {
    background: 'linear-gradient(45deg, #8b5cf6, #7c3aed)',
    border: '2px solid rgba(139, 92, 246, 0.3)',
    color: 'white',
  },
  buttonIcon: {
    fontSize: '2rem',
  },
  buttonText: {
    fontSize: '1.2rem',
    fontWeight: '700',
    fontFamily: "'Rajdhani', sans-serif",
  },
  buttonSubtext: {
    fontSize: '0.9rem',
    opacity: 0.8,
    fontFamily: "'Inter', sans-serif",
  },
  posterButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  posterVideoButton: {
    padding: '1.2rem 1.8rem',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    width: '100%',
    maxWidth: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.3rem',
  },
  poster1Button: {
    background: 'linear-gradient(45deg, #ec4899, #be185d)',
    border: '2px solid rgba(236, 72, 153, 0.3)',
    color: 'white',
  },
  poster2Button: {
    background: 'linear-gradient(45deg, #22c55e, #16a34a)',
    border: '2px solid rgba(34, 197, 94, 0.3)',
    color: 'white',
  },
  backButton: {
    background: 'rgba(75, 85, 99, 0.3)',
    border: '1px solid rgba(75, 85, 99, 0.5)',
    color: '#d1d5db',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    transition: 'all 0.3s ease',
  },
  videoContainer: {
    textAlign: 'center',
    padding: '0.5rem 0',
  },
  video: {
    width: '100%',
    maxWidth: '400px',
    height: '200px',
    borderRadius: '8px',
    marginBottom: '1rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
    objectFit: 'cover',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  backButtonNew: {
    background: 'linear-gradient(45deg, #3b82f6, #1e40af)',
    border: '2px solid rgba(59, 130, 246, 0.3)',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
  },
  downloadButton: {
    background: 'linear-gradient(45deg, #10b981, #059669)',
    border: '2px solid rgba(16, 185, 129, 0.3)',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
  },
};

export default Video;