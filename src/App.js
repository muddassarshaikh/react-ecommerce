import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';

//Import from Redux
import { selectCurrentUser } from './redux/user/user.selector';

// Import Pages
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/signin-signup/signin-signup.component';
import Checkout from './pages/checkout/checkout.component';

// Import Components
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
