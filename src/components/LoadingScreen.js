import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

const LoadingScreen = ({ onComplete }) => {
  const mountRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState('gathering'); // gathering, forming, exploding
  
  // Progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete && onComplete(), 500);
          }, 300);
          return 100;
        }
        
        // Update phases based on progress
        if (prev < 30) setPhase('gathering');
        else if (prev < 70) setPhase('forming');
        else setPhase('exploding');
        
        return prev + (100 / 30); // 3 seconds total
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Simple Three.js background
  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create animated particles
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;

      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.6 + 0.4, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const points = new THREE.Points(particles, material);
    scene.add(points);

    camera.position.z = 500;

    let animationId;
    const animate = () => {
      points.rotation.x += 0.001;
      points.rotation.y += 0.002;
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Three.js Background */}
          <div 
            ref={mountRef} 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          />

          {/* Animated Particles Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
            }}
          >
            {[...Array(150)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  borderRadius: '50%',
                  background: `hsl(${180 + Math.random() * 60}, 80%, 70%)`,
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  filter: 'blur(0.5px)',
                  boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              textAlign: 'center',
              color: 'white',
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ marginBottom: '2rem' }}
            >
              <motion.h1
                style={{
                  fontSize: 'clamp(4rem, 15vw, 10rem)',
                  fontFamily: "'Orbitron', monospace",
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #00d9ff, #3b82f6, #8b5cf6, #00d9ff)',
                  backgroundSize: '300% 300%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: 0,
                  textShadow: '0 0 50px rgba(0, 217, 255, 0.3)',
                  filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                UDBHAV
              </motion.h1>
              
              <motion.div
                style={{
                  fontSize: 'clamp(2rem, 8vw, 5rem)',
                  fontFamily: "'Orbitron', monospace",
                  fontWeight: '300',
                  background: 'linear-gradient(45deg, #ffd700, #ffed4e, #fbbf24)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginTop: '0.5rem',
                  filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                2.0
              </motion.div>
            </motion.div>

            {/* Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
              }}
            >
              {/* Circular Progress */}
              <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                <svg
                  width="150"
                  height="150"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <circle
                    cx="75"
                    cy="75"
                    r="65"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <motion.circle
                    cx="75"
                    cy="75"
                    r="65"
                    stroke="url(#progressGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 65}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 65 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 65 * (1 - progress / 100) }}
                    transition={{ duration: 0.3 }}
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.8))',
                    }}
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00d9ff" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Progress Text */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#00d9ff',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    fontFamily: "'Orbitron', monospace",
                  }}
                >
                  {Math.round(progress)}%
                </div>
              </div>

              {/* Phase Text */}
              <motion.div
                style={{
                  color: '#94a3b8',
                  fontSize: '1.2rem',
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {phase === 'gathering' && 'Gathering Cosmic Energy...'}
                {phase === 'forming' && 'Materializing Reality...'}
                {phase === 'exploding' && 'Unleashing Potential...'}
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              style={{
                position: 'absolute',
                top: '-100px',
                left: '-100px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1), transparent)',
                filter: 'blur(20px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-150px',
                right: '-150px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)',
                filter: 'blur(30px)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

