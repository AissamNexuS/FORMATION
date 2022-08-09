/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ToastProvider} from 'react-native-fast-toast';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

let persistor = persistStore(store);
const ReduxConf = () => (
  <ToastProvider>
    <Provider loading={null} store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ToastProvider>
);

AppRegistry.registerComponent(appName, () => ReduxConf);
