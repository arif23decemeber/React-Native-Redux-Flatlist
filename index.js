/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {compose, applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(
                reducers,
                compose(
                  middleware
                )
              );

const AppContainer = () =>
  <Provider store={store}>
    <App/>
  </Provider>


AppRegistry.registerComponent(appName, () => AppContainer);
