import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, dispatch } = useCart();
  const navigate = useNavigate();

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', itemId });
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_CART_QUANTITY', itemId, quantity });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <div className="hero-section">
        <div className="hero-image">
          <img src="/images/hero-cake.jpg" alt="Cart" />
        </div>
        <div className="hero-text">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="cart-content">
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <p><strong>Subtotal:</strong> ${subtotal}</p>
          <p><strong>Total:</strong> ${subtotal}</p>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;


