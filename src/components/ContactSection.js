import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    phone: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mkgqllgw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ phone: '', subject: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const contactStyles = {
    section: {
      padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
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
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #00d9ff)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
      fontFamily: 'Orbitron, monospace',
    },
    subtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      color: '#94a3b8',
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 3rem)',
      lineHeight: '1.6',
    },
    form: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '20px',
      padding: 'clamp(2rem, 6vw, 3rem)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
    inputGroup: {
      marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
    },
    label: {
      display: 'block',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      color: '#e2e8f0',
      marginBottom: '0.5rem',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: 'clamp(0.875rem, 3vw, 1rem)',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      color: '#ffffff',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
    },
    textarea: {
      width: '100%',
      padding: 'clamp(0.875rem, 3vw, 1rem)',
      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      color: '#ffffff',
      outline: 'none',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      minHeight: '120px',
      resize: 'vertical',
    },
    submitButton: {
      width: '100%',
      padding: 'clamp(1rem, 3vw, 1.25rem)',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      color: 'white',
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      fontWeight: '600',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
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
    <section style={contactStyles.section}>
      {/* Background particles */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: 'clamp(2px, 1vw, 4px)',
              height: 'clamp(2px, 1vw, 4px)',
              background: '#3b82f6',
              borderRadius: '50%',
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div style={contactStyles.container}>
        {/* Title */}
        <motion.h2
          style={contactStyles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch 📞
        </motion.h2>

        <motion.p
          style={contactStyles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have any questions or inquiries? Contact us! We're here to provide solutions for all your problems.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          style={contactStyles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div style={contactStyles.inputGroup}>
            <label htmlFor="phone" style={contactStyles.label}>
              📱 Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              style={{
                ...contactStyles.input,
                ':focus': {
                  borderColor: '#3b82f6',
                  boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                }
              }}
            />
          </div>

          <div style={contactStyles.inputGroup}>
            <label htmlFor="subject" style={contactStyles.label}>
              💬 Subject/Message *
            </label>
            <textarea
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What would you like to ask? (Event details, registration help, general inquiries, etc.)"
              style={{
                ...contactStyles.textarea,
                ':focus': {
                  borderColor: '#3b82f6',
                  boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                }
              }}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            style={{
              ...contactStyles.submitButton,
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
            whileHover={!isSubmitting ? { 
              scale: 1.02,
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' 
            } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? 'Sending... ⏳' : 'Send Message 🚀'}
          </motion.button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              style={{...contactStyles.statusMessage, ...contactStyles.successMessage}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              🎉 Message sent successfully! We will contact you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              style={{...contactStyles.statusMessage, ...contactStyles.errorMessage}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              ❌ Something went wrong. Please try again later.
            </motion.div>
          )}
        </motion.form>

        {/* Additional Info */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: 'clamp(2rem, 6vw, 3rem)',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '15px',
            border: '1px solid rgba(139, 92, 246, 0.3)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p style={{
            fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
            color: '#e2e8f0',
            margin: 0,
            lineHeight: '1.6',
          }}>
            💡 <strong>Quick Response Guaranteed!</strong><br />
            Event registration, dress code queries, venue details, or any doubts - 
            we will reply within 24 hours! 🌟
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;