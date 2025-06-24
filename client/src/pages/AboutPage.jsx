// --- AboutPage.jsx ---
import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

function AboutPage() {
  return (
    <section className="about-section">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Mission
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        At Paperify, we believe in sustainable living. Our paper bags are crafted from eco-friendly materials, supporting a cleaner planet while maintaining elegant design.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        We strive to replace plastic with biodegradable alternatives and empower businesses to make greener choices.
      </motion.p>
    </section>
  );
}

export default AboutPage;
