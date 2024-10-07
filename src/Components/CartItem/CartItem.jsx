import React from 'react';
import './CartItem.css';

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <li className="cart-item">
    <div className="item-details">
      <img src={`/api/placeholder/${item.imageId}/80/80`} alt={item.name} className="item-image" />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="item-price">${item.price.toFixed(2)}</p>
      </div>
    </div>
    <div className="item-quantity">
      <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
      <span className="quantity-number">{item.quantity}</span>
      <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  </li>
);

export default CartItem;