import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const canvasRef = useRef(null);

  // Particle animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100; // Reduce particles on mobile

    class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${Math.random() * 60 + 200}, 100%, 70%)`;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroStyles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: 'clamp(2rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
    },
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
    },
    shapesContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 10,
    },
    shape: {
      position: 'absolute',
      opacity: 0.2,
      border: '2px solid',
      borderColor: '#3b82f6',
    },
    content: {
      position: 'relative',
      zIndex: 20,
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    title: {
      fontSize: 'clamp(2.5rem, 12vw, 8rem)',
      fontFamily: 'Orbitron, monospace',
      fontWeight: 900,
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #00d9ff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1.1',
      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
      filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))',
      wordBreak: 'break-word',
    },
    subtitle: {
      fontSize: 'clamp(1.5rem, 6vw, 4rem)',
      fontFamily: 'Orbitron, monospace',
      fontWeight: 300,
      color: '#ffd700',
      marginTop: 'clamp(0.5rem, 2vw, 1rem)',
      marginBottom: 'clamp(1rem, 3vw, 2rem)',
      textShadow: '0 0 20px rgba(255, 212, 0, 0.5)',
      wordBreak: 'break-word',
    },
    description: {
      fontSize: 'clamp(1rem, 3vw, 1.5rem)',
      color: '#d1d5db',
      marginBottom: 'clamp(1rem, 3vw, 2rem)',
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto clamp(1rem, 3vw, 2rem) auto',
    },
    highlight: {
      color: '#00d9ff',
      fontWeight: 600,
    },
    universityInfo: {
      marginBottom: 'clamp(2rem, 6vw, 3rem)',
    },
    universityName: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      color: '#c084fc',
      fontWeight: 500,
    },
    departmentName: {
      fontSize: '1rem',
      color: '#9ca3af',
      marginTop: '0.5rem',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '2.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    scrollBox: {
      width: '24px',
      height: '40px',
      border: '2px solid #9ca3af',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'center',
    },
    scrollDot: {
      width: '4px',
      height: '12px',
      background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6)',
      borderRadius: '2px',
      marginTop: '8px',
    },
  };

  return (
    <section style={heroStyles.section}>
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        style={heroStyles.canvas}
      />

      {/* Floating geometric shapes */}
      <div style={heroStyles.shapesContainer}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              ...heroStyles.shape,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${64 + i * 16}px`,
              height: `${64 + i * 16}px`,
              borderColor: i % 2 === 0 ? '#3b82f6' : '#8b5cf6',
              borderRadius: i % 2 === 0 ? '0' : '50%',
              transform: i % 2 === 0 ? 'rotate(45deg)' : 'none',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={heroStyles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Main title */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            style={heroStyles.title}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            UDBHAV
          </motion.h1>
          <motion.div
            style={heroStyles.subtitle}
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 212, 0, 0.5)',
                '0 0 40px rgba(255, 212, 0, 0.8)',
                '0 0 20px rgba(255, 212, 0, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            2.0
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          style={{
            ...heroStyles.description,
            color: '#eb176cff',
            fontWeight: 'bold',
            textShadow: 'none',
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Reboot. Refresh. Rejoice — MCA Freshers 2.0 is Live
        </motion.p>

        {/* University name */}
        <motion.div
          style={heroStyles.universityInfo}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p style={heroStyles.universityName}>
            Centurion University of Technology and Management
          </p>
          <p style={heroStyles.departmentName}>
            Master of Computer Applications Department
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* CTA Buttons */}
        <motion.div
          style={{
            display: 'flex',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            gap: 'clamp(1rem, 4vw, 2rem)',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'clamp(2rem, 6vw, 3rem) 0',
            flexWrap: 'wrap',
            background: 'transparent',
            position: 'relative',
            zIndex: 10,
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {/* Registration Button with Glow */}
          <motion.button
            style={{
              padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2rem)',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              color: 'white',
              borderRadius: '50px',
              fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
              fontWeight: '600',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(255, 107, 107, 0.5), 0 4px 15px rgba(0, 0, 0, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              minWidth: 'clamp(140px, 30vw, 180px)',
              backdropFilter: 'blur(10px)',
            }}
            onClick={() => window.open('https://forms.gle/1QvABHag9tzZd2si8', '_blank')}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 107, 107, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(255, 107, 107, 0.5)', 
                '0 0 30px rgba(255, 107, 107, 0.8)', 
                '0 0 20px rgba(255, 107, 107, 0.5)'
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Pulsing Glow Effect */}
            <motion.div
              style={{
                position: 'absolute',
                inset: '-2px',
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                borderRadius: '50px',
                opacity: 0.3,
                zIndex: -1,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            ✨ Registration
          </motion.button>

          {/* Activity Participation Button */}
          <motion.button
            style={{
              padding: 'clamp(0.875rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2rem)',
              background: 'linear-gradient(45deg, #45b7d1, #96ceb4)',
              color: 'white',
              borderRadius: '50px',
              fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
              fontWeight: '600',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(69, 183, 209, 0.5), 0 4px 15px rgba(0, 0, 0, 0.2)',
              minWidth: 'clamp(140px, 30vw, 180px)',
              backdropFilter: 'blur(10px)',
            }}
            onClick={() => window.open('https://forms.gle/WuUNCzzMJJBuo3qk9', '_blank')}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(69, 183, 209, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            🎯 Activity Participation
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={heroStyles.scrollIndicator}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div style={heroStyles.scrollBox}>
            <motion.div
              style={heroStyles.scrollDot}
              animate={{
                scaleY: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;