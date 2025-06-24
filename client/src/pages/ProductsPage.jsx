import React from 'react';
import { motion } from 'framer-motion';
import aImg from '../assets/a.jpg';
import bImg from '../assets/b.jpg';
import cImg from '../assets/c.jpg';
import '../index.css';

const products = [
  { id: 1, title: 'Eco Kraft Bag', image: aImg },
  { id: 2, title: 'Premium White Bag', image: bImg },
  { id: 3, title: 'Recycled Shopper', image: cImg }
];

function ProductsPage() {
  return (
    <section className="products-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Products
      </motion.h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
              loading="lazy"
            />
            <h3>{product.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProductsPage;