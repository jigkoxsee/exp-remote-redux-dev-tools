import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducer from '../reducers';


export default function configureStore(initialState) {

  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
  const store = createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
