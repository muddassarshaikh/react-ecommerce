import React from 'react';
import { connect } from 'react-redux';

// Import Styles
import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selector';

// Import Components
import CollectionItem from '../../components/collection-item/collection-item.component';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapstateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapstateToProps)(Collection);
