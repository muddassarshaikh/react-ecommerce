import React from 'react';
import { Route } from 'react-router-dom';
// Import Styles
import './shop.styles.scss';

// Import Components
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
