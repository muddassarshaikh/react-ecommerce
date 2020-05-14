import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// Import from redux
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.action';

// Import styles
import './checkout-item.styles.scss';

// Import Components

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;{' '}
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
