import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const MemoriesSection = () => {
  const [photos, setPhotos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [showAllMemories, setShowAllMemories] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminCode, setAdminCode] = useState('');

  // ImgBB API Key
  const IMGBB_API_KEY = 'e2c42eca1482a47be16ebe520b1e0c3c';

  // Load photos from localStorage on component mount
  useEffect(() => {
    const savedPhotos = localStorage.getItem('udbhav-memories');
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos));
    }

    // Clear testing photos for fresh start
    localStorage.removeItem('udbhav-memories');
    setPhotos([]);

    // Admin keyboard shortcut: Ctrl + Shift + A
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowAdminPanel(true);
      }
      // Escape key to close modals
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
        setShowAdminPanel(false);
        setShowAllMemories(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Save photos to localStorage
  const savePhotosToStorage = (newPhotos) => {
    localStorage.setItem('udbhav-memories', JSON.stringify(newPhotos));
  };

  // Upload photo to ImgBB
  const uploadPhoto = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      setUploading(true);
      setUploadProgress(10);

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData
      });

      setUploadProgress(70);

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setUploadProgress(100);

      if (data.success) {
        const newPhoto = {
          id: Date.now(),
          url: data.data.url,
          title: data.data.title || `Memory ${photos.length + 1}`,
          uploadDate: new Date().toLocaleDateString(),
          size: data.data.size
        };

        const updatedPhotos = [...photos, newPhoto];
        setPhotos(updatedPhotos);
        savePhotosToStorage(updatedPhotos);
        
        return true;
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed! Please try again.');
      return false;
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // Handle file selection
  const handleFileSelect = async (files) => {
    const file = files[0];
    
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file!');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size should be less than 10MB!');
      return;
    }

    await uploadPhoto(file);
  };

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files);
    }
  };

  // Admin functions
  const handleAdminAccess = () => {
    if (adminCode === 'obito') {
      const confirmDelete = window.confirm('Are you sure you want to delete all memories? This action cannot be undone.');
      if (confirmDelete) {
        setPhotos([]);
        localStorage.removeItem('udbhav-memories');
        setShowAdminPanel(false);
        setAdminCode('');
        alert('All memories have been deleted successfully.');
      }
    } else {
      alert('Invalid admin code!');
      setAdminCode('');
    }
  };

  const memoriesStyles = {
    section: {
      padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    },
    title: {
      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #FF6B35, #F7931E, #FFD700)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      fontFamily: 'Orbitron, monospace',
    },
    subtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      color: '#CCCCCC',
      textAlign: 'center',
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
      lineHeight: '1.6',
    },
    uploadSection: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '2px dashed rgba(255, 107, 53, 0.3)',
      borderRadius: '20px',
      padding: 'clamp(2rem, 5vw, 3rem)',
      textAlign: 'center',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    uploadSectionActive: {
      borderColor: '#FF6B35',
      background: 'rgba(255, 107, 53, 0.1)',
      transform: 'scale(1.02)',
    },
    uploadIcon: {
      fontSize: '3rem',
      color: '#FF6B35',
      marginBottom: '1rem',
    },
    uploadText: {
      fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
      color: '#ffffff',
      marginBottom: '0.5rem',
      fontWeight: '600',
    },
    uploadSubtext: {
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      color: '#CCCCCC',
      marginBottom: '1.5rem',
    },
    uploadButton: {
      background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    progressBar: {
      width: '100%',
      height: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
      marginTop: '1rem',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(45deg, #FF6B35, #F7931E)',
      borderRadius: '4px',
      transition: 'width 0.3s ease',
    },
    gallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(1rem, 3vw, 2rem)',
      marginTop: 'clamp(2rem, 5vw, 3rem)',
    },
    photoCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    photoImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '15px',
      marginBottom: '1rem',
    },
    photoInfo: {
      color: '#CCCCCC',
      fontSize: '0.875rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyState: {
      textAlign: 'center',
      padding: '1.5rem',
      color: '#666',
    },
    hiddenInput: {
      display: 'none',
    },
    viewAllButton: {
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '15px',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      margin: '1rem auto',
      display: 'block',
      boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
      transition: 'all 0.3s ease',
    },
    adminModal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    adminPanel: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '20px',
      padding: '2rem',
      maxWidth: '400px',
      width: '90%',
    },
    adminInput: {
      width: '100%',
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      color: 'white',
      fontSize: '1rem',
      marginBottom: '1rem',
    },
    adminButton: {
      background: 'linear-gradient(45deg, #ef4444, #dc2626)',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '10px',
      cursor: 'pointer',
      marginRight: '1rem',
    },
    // Modal and Photo Viewer Styles
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem',
    },
    photoViewer: {
      maxWidth: '95%',
      maxHeight: '85%',
      borderRadius: '15px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
      objectFit: 'contain',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem',
      padding: '1rem 0',
      '@media (max-width: 768px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '0.75rem',
      }
    },
    galleryPhoto: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '15px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      color: 'white',
      fontSize: '2rem',
      padding: '0.75rem',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 1001,
      minWidth: '50px',
      minHeight: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)',
    }
  };

  return (
    <section style={memoriesStyles.section}>
      <ParticleBackground />
      
      <div style={memoriesStyles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            style={memoriesStyles.title}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            📸 UDBHAV Memories
          </motion.h2>
          <motion.p
            style={memoriesStyles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Share your amazing moments from UDBHAV 2.0! Upload photos and create lasting memories together.
          </motion.p>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          style={{
            ...memoriesStyles.uploadSection,
            ...(dragActive ? memoriesStyles.uploadSectionActive : {}),
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById('photo-upload').click()}
          whileHover={{ scale: 1.02 }}
        >
          <div style={memoriesStyles.uploadIcon}>
            {uploading ? '⏳' : dragActive ? '📤' : '📷'}
          </div>
          
          <div style={memoriesStyles.uploadText}>
            {uploading ? 'Uploading...' : dragActive ? 'Drop your photo here!' : 'Upload Your Memory'}
          </div>
          
          <div style={memoriesStyles.uploadSubtext}>
            Drag & drop or click to select • Max 10MB • JPG, PNG, GIF
          </div>
          
          {!uploading && (
            <button
              style={memoriesStyles.uploadButton}
              onClick={(e) => {
                e.stopPropagation();
                document.getElementById('photo-upload').click();
              }}
            >
              Choose Photo
            </button>
          )}

          {uploading && (
            <div style={memoriesStyles.progressBar}>
              <div 
                style={{
                  ...memoriesStyles.progressFill,
                  width: `${uploadProgress}%`
                }}
              />
            </div>
          )}

          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            style={memoriesStyles.hiddenInput}
            onChange={(e) => handleFileSelect(e.target.files)}
            disabled={uploading}
          />
        </motion.div>

        {/* Photo Gallery - Hidden on home page, only in modal */}
        
        {/* Empty State - Always show when no modal */}
        <motion.div
          style={memoriesStyles.emptyState}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📷</div>
          <div style={{ fontSize: '1.2rem', color: '#CCCCCC' }}>
            {photos.length > 0 
              ? `${photos.length} memories uploaded! Click below to view all.`
              : 'No memories uploaded yet! Be the first to share your UDBHAV moments.'
            }
          </div>
        </motion.div>

        {/* View All Memories Button - Always show */}
        <motion.button
          style={memoriesStyles.viewAllButton}
          onClick={() => setShowAllMemories(true)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          🎉 View All Memories Gallery
        </motion.button>
      </div>

      {/* All Memories Modal */}
      {showAllMemories && (
        <motion.div
          style={memoriesStyles.adminModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAllMemories(false)}
        >
          <motion.div
            style={{
              ...memoriesStyles.adminPanel,
              maxWidth: '90%',
              maxHeight: '90%',
              overflow: 'auto',
              padding: '2rem',
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
              🎊 All UDBHAV Memories
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {photos.map((photo) => (
                <motion.div
                  key={photo.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '0.75rem', color: '#CCCCCC', textAlign: 'center' }}>
                    📅 {photo.uploadDate}
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              style={{
                background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'block',
                margin: '0 auto'
              }}
              onClick={() => setShowAllMemories(false)}
            >
              Close Gallery
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Admin Panel */}
      {showAdminPanel && (
        <motion.div
          style={memoriesStyles.adminModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAdminPanel(false)}
        >
          <motion.div
            style={memoriesStyles.adminPanel}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '1.5rem' }}>
              🔐 Admin Panel
            </h3>
            <input
              type="password"
              placeholder="Enter admin code..."
              value={adminCode}
              onChange={(e) => setAdminCode(e.target.value)}
              style={memoriesStyles.adminInput}
              onKeyPress={(e) => e.key === 'Enter' && handleAdminAccess()}
            />
            <div style={{ textAlign: 'center' }}>
              <button
                style={memoriesStyles.adminButton}
                onClick={handleAdminAccess}
              >
                Delete All Memories
              </button>
              <button
                style={{
                  ...memoriesStyles.adminButton,
                  background: 'rgba(255, 255, 255, 0.2)'
                }}
                onClick={() => {
                  setShowAdminPanel(false);
                  setAdminCode('');
                }}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* View All Memories Modal */}
      {showAllMemories && (
        <motion.div
          style={memoriesStyles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAllMemories(false)}
        >
          <motion.div
            style={{
              background: 'rgba(0, 0, 0, 0.9)',
              padding: '2rem',
              borderRadius: '20px',
              maxWidth: '90%',
              maxHeight: '90%',
              overflow: 'auto',
              position: 'relative',
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={memoriesStyles.closeButton}
              onClick={() => setShowAllMemories(false)}
            >
              ×
            </button>
            <h2 style={{
              color: '#FFD700',
              fontSize: '2rem',
              textAlign: 'center',
              marginBottom: '2rem',
              fontFamily: 'Orbitron, monospace',
            }}>
              🎉 All UDBHAV Memories
            </h2>
            
            {photos.length > 0 ? (
              <div style={memoriesStyles.galleryGrid}>
                {photos.map((photo) => (
                  <motion.img
                    key={photo.id}
                    src={photo.url}
                    alt={photo.title}
                    style={memoriesStyles.galleryPhoto}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedPhoto(photo);
                      setShowAllMemories(false);
                    }}
                  />
                ))}
              </div>
            ) : (
              <p style={{
                color: '#CCCCCC',
                textAlign: 'center',
                fontSize: '1.2rem',
                padding: '3rem',
              }}>
                No memories uploaded yet. Be the first to share your UDBHAV moment! 📸
              </p>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Photo Viewer Modal */}
      {selectedPhoto && (
        <motion.div
          style={memoriesStyles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            style={memoriesStyles.closeButton}
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
          <motion.img
            src={selectedPhoto.url}
            alt={selectedPhoto.title}
            style={memoriesStyles.photoViewer}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '1rem 2rem',
            borderRadius: '10px',
            color: 'white',
            textAlign: 'center',
          }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{selectedPhoto.title}</p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
              Uploaded on {selectedPhoto.uploadDate}
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default MemoriesSection;