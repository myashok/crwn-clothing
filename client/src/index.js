
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, persistor } from './redux/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router >
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();