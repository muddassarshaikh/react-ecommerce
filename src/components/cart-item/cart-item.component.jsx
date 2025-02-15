import React from 'react';

// Import styles
import './cart-item.styles.scss';

// Import Components

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />

    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
