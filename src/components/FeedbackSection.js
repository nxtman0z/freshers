import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating: rating
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqagyooz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', rating: 5, feedback: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const feedbackStyles = {
    section: {
      padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
    },
    title: {
      fontSize: 'clamp(2rem, 8vw, 3.5rem)',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #FFD700, #FF6B35, #00FF94)',
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
    form: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      padding: 'clamp(2rem, 5vw, 3rem)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    inputGroup: {
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
    },
    label: {
      display: 'block',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      color: '#e2e8f0',
      marginBottom: '0.75rem',
      fontWeight: '600',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      letterSpacing: '0.5px',
    },
    input: {
      width: '100%',
      padding: 'clamp(1rem, 3vw, 1.25rem)',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      background: 'rgba(255, 255, 255, 0.08)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '15px',
      color: '#ffffff',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    textarea: {
      width: '100%',
      padding: 'clamp(1rem, 3vw, 1.25rem)',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      background: 'rgba(255, 255, 255, 0.08)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '15px',
      color: '#ffffff',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      minHeight: '140px',
      resize: 'vertical',
      boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    starRating: {
      display: 'flex',
      gap: '12px',
      marginBottom: '1.5rem',
      justifyContent: 'center',
      padding: '1rem',
      background: 'rgba(255, 215, 0, 0.05)',
      borderRadius: '15px',
      border: '1px solid rgba(255, 215, 0, 0.2)',
    },
    star: {
      fontSize: '2.5rem',
      cursor: 'pointer',
      color: 'rgba(255, 255, 255, 0.3)',
      transition: 'all 0.3s ease',
      userSelect: 'none',
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
    },
    starActive: {
      color: '#FFD700',
      textShadow: '0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.3)',
      transform: 'scale(1.1)',
    },
    submitButton: {
      width: '100%',
      padding: 'clamp(1.25rem, 3.5vw, 1.5rem)',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
      color: 'white',
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      fontWeight: '700',
      border: 'none',
      borderRadius: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      position: 'relative',
      overflow: 'hidden',
    },
    statusMessage: {
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '1rem',
      textAlign: 'center',
      fontWeight: '500',
    },
    successMessage: {
      background: 'rgba(34, 197, 94, 0.2)',
      border: '1px solid rgba(34, 197, 94, 0.3)',
      color: '#22c55e',
    },
    errorMessage: {
      background: 'rgba(239, 68, 68, 0.2)',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      color: '#ef4444',
    },
  };

  return (
    <section style={feedbackStyles.section}>
      {/* Particle Background */}
      <ParticleBackground particleCount={50} particleColor="auto" />

      <div style={feedbackStyles.container}>
        {/* Title */}
        <motion.h2
          style={feedbackStyles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Feedback Corner 💬
        </motion.h2>

        <motion.p
          style={feedbackStyles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Share your experience about UDBHAV 2.0! Your feedback helps us improve future events.
        </motion.p>

        {/* Feedback Form */}
        <motion.form
          style={feedbackStyles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Name Field */}
          <motion.div 
            style={feedbackStyles.inputGroup}
            whileHover={{ scale: 1.01 }}
          >
            <label htmlFor="name" style={feedbackStyles.label}>
              📝 Full Name *
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              style={feedbackStyles.input}
              whileFocus={{
                borderColor: '#3b82f6',
                boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2), inset 0 2px 10px rgba(0, 0, 0, 0.1)',
                scale: 1.02,
              }}
            />
          </motion.div>

          {/* Star Rating */}
          <motion.div 
            style={feedbackStyles.inputGroup}
            whileHover={{ scale: 1.01 }}
          >
            <label style={feedbackStyles.label}>
              ⭐ Rate Your Experience *
            </label>
            <div style={feedbackStyles.starRating}>
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.span
                  key={star}
                  style={{
                    ...feedbackStyles.star,
                    ...(star <= formData.rating ? feedbackStyles.starActive : {}),
                  }}
                  onClick={() => handleRatingChange(star)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Feedback Field */}
          <motion.div 
            style={feedbackStyles.inputGroup}
            whileHover={{ scale: 1.01 }}
          >
            <label htmlFor="feedback" style={feedbackStyles.label}>
              💬 Your Feedback *
            </label>
            <motion.textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              placeholder="Share your experience about UDBHAV 2.0 freshers event..."
              style={feedbackStyles.textarea}
              whileFocus={{
                borderColor: '#8b5cf6',
                boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.2), inset 0 2px 10px rgba(0, 0, 0, 0.1)',
                scale: 1.02,
              }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            style={{
              ...feedbackStyles.submitButton,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
            whileHover={!isSubmitting ? { 
              scale: 1.02,
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' 
            } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? 'Sending Feedback... ⏳' : 'Send Feedback 🚀'}
          </motion.button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              style={{...feedbackStyles.statusMessage, ...feedbackStyles.successMessage}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              🎉 Thank you for your feedback! We appreciate your input.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              style={{...feedbackStyles.statusMessage, ...feedbackStyles.errorMessage}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              ❌ Something went wrong. Please try again later.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default FeedbackSection;