import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Paperify</Link>
      </div>
      <nav className="nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;