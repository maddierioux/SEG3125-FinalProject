import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';

function OrderConfirmation() {
  const location = useLocation();
  const {
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
    cartItems,
  } = location.state;

  const fullName = `${firstName} ${lastName}`;
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="order-confirmation-page">
      <h1>Order Confirmation</h1>
      <p>Thank you for your order, {fullName}!</p>
      {companyName && <p>Company: {companyName}</p>}
      <p>Your order will be delivered to:</p>
      <p>{address}, {city}, {zipCode}</p>
      <p>We will contact you at {email} or {phone} if we have any questions.</p>
      {dateNeeded && <p>Delivery Date: {dateNeeded.toLocaleDateString()}</p>}
      {customDetails && <p>Custom Details: {customDetails}</p>}
      <h2>Order Details:</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ${totalAmount}</p>
    </div>
  );
}

export default OrderConfirmation;


