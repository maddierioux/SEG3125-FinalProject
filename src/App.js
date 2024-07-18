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
import { CartProvider } from './context/CartContext';
import { useTranslation } from 'react-i18next';
import './i18n';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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
                      {t('home')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/menu"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      {t('menu')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/reviews"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      {t('reviews')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      {t('about')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cart"
                      className={({ isActive }) => (isActive ? 'underline' : undefined)}
                    >
                      {t('cart')}
                    </NavLink>
                  </li>
                </ul>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('fr')}>Français</button>
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
              <h3>{t('welcome')}</h3>
              <p>{t('footer_address')}</p>
              <p>{t('footer_city')}</p>
              <p>{t('footer_phone')}</p>
              <p>{t('footer_email')}</p>
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
