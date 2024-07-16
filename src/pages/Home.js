import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="hero-section">
        <img src="/images/hero-cake.jpg" alt="Welcome to Cake Walk Bakery" />
        <div className="hero-text">
          <h1>Welcome to Cake Walk Bakery</h1>
          <p>Whether you're celebrating a special occasion or simply indulging a sweet tooth, we've got something delicious for you.</p>
          <Link to="/menu"><button>Buy Now</button></Link>
        </div>
      </div>
      <section className="new-arrival">
        <img src="/images/new-cake.jpg" alt="Discover Our New Cakes" />
        <div className="new-arrival-text">
          <h2>Discover Our New Cakes</h2>
          <p>From Vanilla Cake with Chocolate Icing to Chocolate Cake with <br></br>Vanilla Icing, our custom creations are tailored to your taste.</p>
          <Link to="/menu"><button>Buy Now</button></Link>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <h2>Share your Cake with #CakeWalk</h2>
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
      <section className="services">
        <div className="service-item">
          <i className="fas fa-certificate"></i>
          <h3>High Quality</h3>
          <p>Top Rated Cakes</p>
        </div>
        <div className="service-item">
          <i className="fas fa-smile"></i>
          <h3>Satisfaction Guaranteed</h3>
        </div>
        <div className="service-item">
          <i className="fas fa-truck"></i>
          <h3>Free Local Delivery</h3>
        </div>
        <div className="service-item">
          <i className="fas fa-headset"></i>
          <h3>Great Customer Service</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
