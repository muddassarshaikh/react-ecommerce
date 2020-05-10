import React from 'react';

// Import styles
import './collection-preview.styles.scss';

// Import Components
// import MenuItem from '../menu-item/menu-item.component';

const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <div>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
