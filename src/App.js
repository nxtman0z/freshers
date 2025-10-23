import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventSection from './components/EventSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Preload critical resources
    const preloadImages = () => {
      // Add any image preloading here if needed
    };

    preloadImages();
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <div key="main">
            <Navigation />
            
            {/* Main content */}
            <main className="relative">
              {/* Hero Section */}
              <section id="home">
                <HeroSection />
              </section>

              {/* About Section */}
              <section id="about">
                <AboutSection />
              </section>

              {/* Event Section */}
              <section id="event">
                <EventSection />
              </section>

              {/* Footer */}
              <Footer />
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
