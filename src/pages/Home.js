import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <header className="hero-section" role="banner">
        <img src="/images/hero-cake.jpg" alt={t('Floral Cake from Bakery')} />
        <div className="hero-text">
          <h1>{t('hero_welcome')}</h1>
          <p>{t('hero_description')}</p>
          <Link to="/menu"><button>{t('buy_now')}</button></Link>
        </div>
      </header>
      <main>
        <section className="new-arrival" aria-labelledby="new-arrival-title">
          <img src="/images/new-cake.jpg" alt={t('Multiple c')} />
          <div className="new-arrival-text">
            <h2 id="new-arrival-title">{t('new_arrival_title')}</h2>
            <p>{t('new_arrival_description')}</p>
            <Link to="/menu"><button>{t('buy_now')}</button></Link>
          </div>
        </section>
        <section className="gallery" id="gallery" aria-labelledby="gallery-title">
          <h2 id="gallery-title">{t('gallery_title')}</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="images/gallery/image2.jpeg" alt="Gallery Item 2" />
            </div>
            <div className="gallery-item">
              <img src="images/gallery/image3.jpeg" alt="Gallery Item 3" />
            </div>
            <div className="gallery-item">
              <img src="images/gallery/image4.jpeg" alt="Gallery Item 4" />
            </div>
            <div className="gallery-item">
              <img src="images/gallery/image5.jpeg" alt="Gallery Item 5" />
            </div>
            <div className="gallery-item">
              <img src="images/gallery/image6.jpeg" alt="Gallery Item 6" />
            </div>
            <div className="gallery-item">
              <img src="images/gallery/image7.jpeg" alt="Gallery Item 7" />
            </div>
            <div className="gallery-item">
              <img src="images/gallery/image8.jpeg" alt="Gallery Item 8" />
            </div>
            <div className="gallery-item">
              <img src="images/gallery/image9.jpeg" alt="Gallery Item 9" />
            </div>
          </div>
        </section>
        <section className="services" aria-labelledby="services-title">
          <div className="service-item">
            <i className="fas fa-certificate" aria-hidden="true"></i>
            <h3>{t('high_quality')}</h3>
            <p>{t('top_rated_cakes')}</p>
          </div>
          <div className="service-item">
            <i className="fas fa-smile" aria-hidden="true"></i>
            <h3>{t('satisfaction_guaranteed')}</h3>
          </div>
          <div className="service-item">
            <i className="fas fa-truck" aria-hidden="true"></i>
            <h3>{t('free_local_delivery')}</h3>
          </div>
          <div className="service-item">
            <i className="fas fa-headset" aria-hidden="true"></i>
            <h3>{t('great_customer_service')}</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
