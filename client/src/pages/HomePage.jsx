// --- HomePage.jsx ---
import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Eco-Friendly Paper Bags for a Greener Tomorrow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        100% biodegradable, stylish, and sustainable paper bags crafted with care.
      </motion.p>
<Link to="/products">
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="cta-button"
      >
        View Products
      </motion.button>
</Link>
      {/* 💬 Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          “Paperify’s eco bags changed how we package our products. Strong, clean, and sustainable!” – EcoMart
        </div>
        <div className="testimonial">
          “Beautiful bags and beautiful mission. Customers always compliment our packaging.” – The Leaf Café
        </div>
      </section>

      {/* 📈 Eco Impact */}
      <section className="impact-section">
        <div className="impact-box">
          <span>12,400+</span>
          Plastic Bags Replaced
        </div>
        <div className="impact-box">
          <span>340+</span>
          Trees Saved
        </div>
        <div className="impact-box">
          <span>98%</span>
          Customer Satisfaction
        </div>
      </section>
    </section>
  );
}

export default HomePage;
