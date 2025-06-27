// --- HomePage.jsx ---
import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import { Link } from 'react-router-dom';
import ModelViewer from '../components/ModelViewer';

function HomePage() {
  return (
    <>
      {/* 🔄 3D Model Preview Section */}
      <section
  className="home-3d-section"
  style={{
    padding: 0,
  margin: 0,
  overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '4rem 2rem',
    gap: '2rem',
  }}
>
  <div
    style={{
      flex: '1 1 400px',
      maxWidth: '600px',
      textAlign: 'left',
    }}
  >
    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
      Explore Our 3D Paper Bag
    </h1>
    <p style={{ fontSize: '1.1rem' }}>
      Interact with our eco-friendly bag in 3D! Rotate, zoom, and experience the detail of our design.
    </p>
  </div>

  <div
    style={{
      flex: '1 1 400px',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <ModelViewer />
  </div>
</section>

      {/* 🏠 Hero Section */}
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
      </section>

      {/* 💬 Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          “Paperify’s eco bags changed how we package our products. Strong, clean, and sustainable!” – EcoMart
        </div>
        <div className="testimonial">
          “Beautiful bags and beautiful mission. Customers always compliment our packaging.” – The Leaf Café
        </div>
      </section>

      {/* 📈 Eco Impact Section */}
      <section className="impact-section">
        <div className="impact-box">
          <span>12,400+</span>
          <p>Plastic Bags Replaced</p>
        </div>
        <div className="impact-box">
          <span>340+</span>
          <p>Trees Saved</p>
        </div>
        <div className="impact-box">
          <span>98%</span>
          <p>Customer Satisfaction</p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
