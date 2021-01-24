import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

// This defaults to localStorage for web.
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';

// This provides a Redux middleware which connects to our `react-router` instance.
import { routerMiddleware } from 'connected-react-router';

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';

// Import the state interface and our combined reducers/sagas.
import { ApplicationState, createRootReducer, rootSaga } from './redux';

export const history = createBrowserHistory();

export default function configureStore(initialState?: ApplicationState) {
    const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
  };
  
  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer<ApplicationState>(persistConfig, rootReducer);

  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({})
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  )

  const persistor = persistStore(store)

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}