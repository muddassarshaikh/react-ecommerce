import React from 'react';

// Import Styles
import './shop.styles.scss';

// Import Data
import DATA from './shop.data';

// Import Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
