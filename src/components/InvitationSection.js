import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const InvitationSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/invitation.png';
    link.download = 'UDBHAV_2.0_Invitation.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <>
      <section
        id="invitation"
        style={{
          padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 4vw, 2rem)',
          background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
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
                border: '2px solid rgba(0, 245, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Invitation Thumbnail */}
              <img
                src="/invitation.png"
                alt="UDBHAV 2.0 Invitation Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '13px',
                }}
              />
              
              {/* View Overlay */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                👁️ Click to View
              </motion.div>
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
                animate={{
                  boxShadow: [
                    '0 10px 25px rgba(0, 255, 148, 0.3)',
                    '0 15px 35px rgba(0, 255, 148, 0.5)',
                    '0 10px 25px rgba(0, 255, 148, 0.3)',
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <span>💾</span>
                Download Image
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
    </>
  );
};

export default InvitationSection;