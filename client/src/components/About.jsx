import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

function About() {
  return (
    <section className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Our Story</h2>
        <p>
          At Paperify, we believe in a greener planet. What started as a small initiative to replace plastic bags has grown into a full-scale mission to make sustainability stylish and accessible.
        </p>
        <p>
          Our eco-friendly paper bags are crafted with recyclable materials, biodegradable inks, and love for nature. We're proud to serve individuals and businesses who share our vision.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
