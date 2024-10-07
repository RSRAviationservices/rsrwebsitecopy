import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem'
import './Cart.css';

const Cart = ({ initialItems = [] }) => {
  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Your Shopping Cart</h2>
      </div>
      <ul className="cart-items">
        {items.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            updateQuantity={updateQuantity} 
            removeItem={removeItem}
          />
        ))}
      </ul>
      <div className="cart-footer">
        
        <button 
          className="checkout-btn"
          onClick={() => alert('Proceeding to checkout!')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;