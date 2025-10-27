import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

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
          padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 2rem)',
          background: 'transparent',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 'auto',
        }}
      >
        {/* Particle Background */}
        <ParticleBackground particleCount={60} particleColor="auto" />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '15px' }}
          >
            <motion.h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontFamily: "'Orbitron', monospace",
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FFD700, #FF6B35, #00FF94)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '5px',
                textShadow: '0 0 30px rgba(255, 215, 0, 0.4)',
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
                fontSize: '1rem',
                color: '#94a3b8',
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: '0.05em',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.4',
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
              background: 'transparent',
              backdropFilter: 'none',
              border: 'none',
              borderRadius: '20px',
              padding: '10px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'none',
            }}
          >
            {/* Invitation Preview */}
            <motion.div
              style={{
                width: '100%',
                maxWidth: '350px',
                height: '200px',
                margin: '0 auto 10px',
                background: 'transparent',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* PDF Icon */}
              <div style={{ textAlign: 'center', color: 'white' }}>
                <motion.div
                  style={{
                    fontSize: '2.5rem',
                    marginBottom: '5px',
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
                    fontSize: '1.1rem',
                    fontFamily: "'Orbitron', monospace",
                    marginBottom: '2px',
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
                gap: '10px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {/* View Button */}
              <motion.button
                onClick={handleViewInvitation}
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(45deg, #FFD700, #FF6B35)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#0A0A0A',
                  fontSize: '0.9rem',
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 25px rgba(255, 215, 0, 0.3)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(255, 215, 0, 0.4)',
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
                  padding: '10px 20px',
                  background: 'linear-gradient(45deg, #00FF94, #9D4EDD)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#0A0A0A',
                  fontSize: '0.9rem',
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 25px rgba(0, 255, 148, 0.3)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 15px 35px rgba(0, 255, 148, 0.4)',
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
                marginTop: '10px',
                padding: '10px',
                background: 'transparent',
                border: 'none',
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