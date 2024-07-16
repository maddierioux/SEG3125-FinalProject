import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCart } from '../context/CartContext';
import './Checkout.css';

function Checkout() {
  const { cartItems } = useCart();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [dateNeeded, setDateNeeded] = useState(null);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Cake City');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [customDetails, setCustomDetails] = useState('');
  const [inspirationImages, setInspirationImages] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission without a backend
    navigate('/order-confirmation', {
      state: {
        firstName,
        lastName,
        companyName,
        dateNeeded,
        address,
        city,
        zipCode,
        phone,
        email,
        customDetails,
        inspirationImages,
        cartItems
      }
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="checkout-page">
      <h1>Checkout Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>All fields with * are mandatory.</h3>
          <div className="form-group">
            <label>First Name *:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" required />
          </div>
          <div className="form-group">
            <label>Last Name *:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" required />
          </div>
          <div className="form-group">
            <label>Company Name:</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Date you need baked goods by *:</label>
            <DatePicker
              selected={dateNeeded}
              onChange={(date) => setDateNeeded(date)}
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>
          <div className="form-group">
            <label>Street Address *:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="123 street name" required />
          </div>
          <div className="form-group">
            <label>Town / City:</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required readOnly />
          </div>
          <div className="form-group">
            <label>ZIP Code *:</label>
            <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="A1B 2C3" required />
          </div>
          <div className="form-group">
            <label>Phone *:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="123-456-7890" required />
          </div>
          <div className="form-group">
            <label>Email Address *:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Abc@def.com" required />
          </div>
          <div className="form-group">
            <label>If custom Cakes, Give details here:</label>
            <textarea value={customDetails} onChange={(e) => setCustomDetails(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Upload Inspiration Pictures here:</label>
            <input type="file" onChange={(e) => setInspirationImages(e.target.files)} />
          </div>
        </div>
        <div className="order-summary">
          <h2>Product</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name} x {item.quantity}</span> <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p><strong>Subtotal:</strong> ${subtotal}</p>
          <p><strong>Total:</strong> ${subtotal}</p>
          <button type="submit">Place order</button>
          <p className="note">
            <strong>Note:</strong> You will not be charged until we reach out to you to confirm the design and date. You should hear back within 48 hours of order being placed.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Checkout;

