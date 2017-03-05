import { createStore } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from '../reducers';


export default function configureStore(initialState) {

  const store = createStore(
    reducer,
    initialState,
    devToolsEnhancer({ realtime: true, port: 8000 }))

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
