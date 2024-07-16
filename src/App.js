import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Cart from './pages/Cart';
import FAQ from './pages/FAQ';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import {CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="navbar">
              <div className="logo">
                <img src="/images/logo.png" alt="Cake Walk Bakery" />
              </div>
              <nav>
                <ul>
                  <li>
                    <NavLink
                      exact="true"
                      to="/"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/menu"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/reviews"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cart"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      Cart
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
          </main>
          <footer>
            <div className="footer-content">
              <h3>Cake Walk Bakery</h3>
              <p>1234 Shortcake Lane</p>
              <p>Cake City, Canada</p>
              <p>705-999-0102</p>
              <p>cakewalkbakery@gmail.com</p>
              <div className="social-links">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

