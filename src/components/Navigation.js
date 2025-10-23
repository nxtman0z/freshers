import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Event Info', href: '#event' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href, external) => {
    if (external) {
      window.open(href, '_blank');
      return;
    }
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navStyles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: `${isScrolled ? '0.5rem' : '1rem'} clamp(1rem, 4vw, 2rem)`,
      background: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s ease',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(0.5rem, 2vw, 0.75rem)',
    },
    logoIcon: {
      width: 'clamp(36px, 8vw, 48px)',
      height: 'clamp(36px, 8vw, 48px)',
      borderRadius: '50%',
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px',
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
      border: '2px solid rgba(59, 130, 246, 0.2)',
    },
    logoImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    logoText: {
      fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-bold)',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0,
      letterSpacing: '0.02em',
    },
    desktopNav: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(1rem, 3vw, 2rem)',
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      zIndex: 60,
    },
    navButton: {
      padding: 'clamp(0.375rem, 2vw, 0.5rem) clamp(0.75rem, 3vw, 1rem)',
      fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
      fontWeight: '500',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      color: '#d1d5db',
      whiteSpace: 'nowrap',
    },
    ctaButton: {
      padding: 'clamp(0.375rem, 2vw, 0.5rem) clamp(0.75rem, 3vw, 1.5rem)',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      color: 'white',
      borderRadius: '9999px',
      fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      zIndex: 55,
      padding: '2rem',
    },
    closeButton: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      color: '#fff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      zIndex: 60,
    },
    mobileNavButton: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: '#d1d5db',
      textAlign: 'center',
      minWidth: '200px',
    },
    mobileCtaButton: {
      padding: '1rem 2rem',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      color: 'white',
      borderRadius: '12px',
      fontSize: '1.125rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minWidth: '200px',
    },
  };

  // Media query hook
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Update styles for mobile
  if (isMobile) {
    navStyles.desktopNav.display = 'none';
    navStyles.mobileMenuButton.display = 'block';
  }

  return (
    <>
      <motion.nav
        style={navStyles.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div style={navStyles.container}>
          {/* Logo */}
          <motion.div
            style={navStyles.logo}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              style={navStyles.logoIcon}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <img 
                src="/udbhav-logo.png" 
                alt="UDBHAV 2.0 Logo" 
                style={navStyles.logoImage}
              />
            </motion.div>
            <h1 style={navStyles.logoText}>UDBHAV 2.0</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div style={navStyles.desktopNav}>
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.external)}
                style={navStyles.navButton}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2, color: '#00d9ff' }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            style={navStyles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            style={navStyles.mobileMenu}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <motion.button
              style={navStyles.closeButton}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              whileHover={{ 
                scale: 1.1,
                background: 'rgba(255, 107, 107, 0.3)',
                borderColor: '#ff6b6b',
                rotate: 90,
              }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.external)}
                style={navStyles.mobileNavButton}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  color: '#00d9ff',
                  scale: 1.05,
                  background: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;