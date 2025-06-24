import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <motion.div 
        className="hero-inner"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Redefining Sustainable Style</h1>
        <p className="hero-subtitle">Premium eco-conscious paper bags crafted for impact.</p>
        <a href="#products" className="hero-cta">Explore Collection</a>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="scroll-dot" />
      </motion.div>
    </section>
  );
}

export default HeroSection;
