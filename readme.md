React Native Counter App by Exponent with remote-redux-dev-tools
===
Simple React Native app to show how to use [remote-redux-dev-tools](https://github.com/zalmoxisus/remote-redux-devtools)

# Run
1. Clone this repository
2. Install required packages by run `yarn` or `npm install`
3. Run it with [exp](https://github.com/exponent/exp) by run `exp start` or using [XDE](https://github.com/exponent/xde/releases)
4. Start `RemoteDev Server` by run `./run-remote-dev-tools-server.sh` that I provide or just run 
```
./node_modules/remotedev-server/bin/remotedev.js  --hostname=localhost --port=8000
```
5. Go to [localhost:8000](http://localhost:8000) 😎

# How to do this in my project?
- Just change your store a bit
```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';    // Import this

const composeEnhancers = composeWithDevTools({
  realtime: true,
  port: 8000    // Port that your remotedev-server running
});

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(    // Use this instead of compose from redux
    applyMiddleware(...middleware),
    // other store enhancers if any
  )
);

```