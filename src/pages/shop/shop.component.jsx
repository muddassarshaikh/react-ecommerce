import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// Import Styles
import './shop.styles.scss';

import { updateCollection } from '../../redux/shop/shop.action';

// Import Components
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import Collection from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollection(collectionMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    console.log('Shop -> render -> this.props', this.props);
    const { loading } = this.state;
    console.log('Shop -> render -> loading', loading);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );

    // return (
    //   <div className="shop-page">
    //     <Route exact path={`${match.path}`} component={CollectionOverview} />
    //     <Route path={`${match.path}/:collectionId`} component={Collection} />
    //   </div>
    // );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) => dispatch(updateCollection(collectionMap))
});

export default connect(null, mapDispatchToProps)(Shop);
