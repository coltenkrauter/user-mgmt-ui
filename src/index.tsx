import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'; // https://github.com/supasate/connected-react-router

import './styles/index.css';
import App from './components/app';
import configureStore, { history } from './configureStore';

// Prepare global state management
export const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <PersistGate loading={ null } persistor={ persistor }>
          <App />
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
