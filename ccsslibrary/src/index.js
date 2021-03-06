import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import history from './history'
import {Router, Switch, Route} from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Filter from './components/Filter'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import BaseLayout from './components/BaseLayout'
//import Header from './components/Header'
import {persistor, store} from './store/configureStore'


ReactDOM.render(<Provider store = {store}>
  <PersistGate loading={null} persistor={persistor}>
  <Router history={history}>

  <BaseLayout >

    <Switch>
      <Route exact path="/" component={HomePage} />

    </Switch>

  </BaseLayout>

  </Router>
</PersistGate>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
