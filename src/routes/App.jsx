import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Checkout" component={Checkout} />
            <Route exact path="/Checkout/Information" component={Information} />
            <Route exact path="/Checkout/Payment" component={Payment} />
            <Route exact path="/Checkout/Success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
export default App;
