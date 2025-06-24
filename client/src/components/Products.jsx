import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import aImg from '../assets/a.jpg';
import bImg from '../assets/b.jpg';
import cImg from '../assets/c.jpg';

function Products() {
  const productList = [
    { id: 1, name: 'Classic Kraft Bag', img: aImg, desc: 'Perfect for groceries, takeaways, and everyday utility.' },
    { id: 2, name: 'Minimal White Bag', img: bImg, desc: 'Clean, elegant packaging for retail & boutiques.' },
    { id: 3, name: 'Branded Eco Bag', img: cImg, desc: 'Custom-printed bags for events, gifting, or brand awareness.' },
  ];

  return (
    <section className="products-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our Products
      </motion.h2>

      <div className="product-grid">
        {productList.map((product, index) => (
          <motion.div
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={product.img} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Products;
