import React from 'react';

// Import styles
import './menu-item.styles.scss';

const MenuItem = (props) => (
  <div className={`menu-item ${props.size}`}>
    <div
      style={{ background: `url(${props.imageURL})` }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
