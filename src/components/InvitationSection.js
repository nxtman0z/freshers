import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InvitationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/invitation.pdf';
    link.download = 'UDBHAV_2.0_Invitation.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInvitation = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="invitation"
        style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Elements */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
          }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                borderRadius: '50%',
                background: '#00d9ff',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <motion.h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontFamily: "'Orbitron', monospace",
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #00d9ff, #3b82f6, #8b5cf6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '20px',
                textShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
              }}
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Official Invitation
            </motion.h2>
            
            <motion.p
              style={{
                fontSize: '1.2rem',
                color: '#94a3b8',
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: '0.05em',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              You're cordially invited to join us at UDBHAV 2.0 - where innovation meets inspiration!
            </motion.p>
          </motion.div>

          {/* Invitation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Glowing Border Effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent, rgba(0, 217, 255, 0.1), transparent)',
                borderRadius: '20px',
                pointerEvents: 'none',
              }}
            />

            {/* Invitation Preview */}
            <motion.div
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '300px',
                margin: '0 auto 30px',
                background: 'linear-gradient(135deg, #1e1b4b, #312e81, #1e1b4b)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(0, 217, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* PDF Icon */}
              <div style={{ textAlign: 'center', color: 'white' }}>
                <motion.div
                  style={{
                    fontSize: '4rem',
                    marginBottom: '10px',
                    color: '#00d9ff',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  📋
                </motion.div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontFamily: "'Orbitron', monospace",
                    marginBottom: '5px',
                    background: 'linear-gradient(45deg, #00d9ff, #3b82f6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  UDBHAV 2.0
                </h3>
                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: '1rem',
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  Official Invitation
                </p>
              </div>

              {/* Hover Overlay */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(0, 217, 255, 0.1), rgba(59, 130, 246, 0.1))',
                  opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {/* View Button */}
              <motion.button
                onClick={handleViewInvitation}
                style={{
                  padding: '15px 30px',
                  background: 'linear-gradient(45deg, #00d9ff, #3b82f6)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '1rem',
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 25px rgba(0, 217, 255, 0.3)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(0, 217, 255, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>👁️</span>
                View Invitation
              </motion.button>

              {/* Download Button */}
              <motion.button
                onClick={handleDownload}
                style={{
                  padding: '15px 30px',
                  background: 'linear-gradient(45deg, #8b5cf6, #d946ef)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '1rem',
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(139, 92, 246, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💾</span>
                Download PDF
              </motion.button>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                marginTop: '30px',
                padding: '20px',
                background: 'rgba(0, 217, 255, 0.05)',
                border: '1px solid rgba(0, 217, 255, 0.1)',
                borderRadius: '15px',
              }}
            >
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.95rem',
                  fontFamily: "'Rajdhani', sans-serif",
                  margin: 0,
                  lineHeight: '1.5',
                }}
              >
                📅 <strong style={{ color: '#00d9ff' }}>Save the Date!</strong> Don't miss this incredible opportunity to be part of something extraordinary.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal for PDF Viewer */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '20px',
              maxWidth: '90%',
              maxHeight: '90%',
              overflow: 'auto',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#ef4444',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001,
              }}
            >
              ✕
            </button>

            {/* PDF Embed */}
            <iframe
              src="/invitation.pdf"
              style={{
                width: '100%',
                height: '80vh',
                border: 'none',
                borderRadius: '10px',
              }}
              title="UDBHAV 2.0 Invitation"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default InvitationSection;