import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';



function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (preloader)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <div className="preloader">Paperify</div>
      ) : (
        <>
          {/* Sticky Header */}
          <Header />

          {/* Main Route View */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          {/* Footer */}
          <Footer />

          {/* WhatsApp Floating Widget */}
          <a
            href="https://wa.me/919999999999"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            💬
          </a>
        </>
      )}
    </div>
  );
}

export default App;
