import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Import Pages
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/signin-signup/signin-signup.component';

// Import Components
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInAndSignUp} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
