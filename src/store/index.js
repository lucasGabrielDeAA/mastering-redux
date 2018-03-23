import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middleware = [];

const createApropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createApropriateStore(reducers, applyMiddleware(...middleware));

export default store;
