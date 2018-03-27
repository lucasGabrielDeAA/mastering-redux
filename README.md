# mastering-redux

## Installing [Redux](https://redux.js.org/)

Run the following command:

```
yarn add redux react-redux
```

After the installation, create a folder named store under src folder, and add a file named index.js with the following content:

```
import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers);

export default store;
```

Under the same folder, create another folder, called reducers. In this folder we going to put our redux configuration. Now create a file called index.js with the following content:

```
import { combineReducers } from 'redux';

import todos from './todos'; // Here you put the imports os your reducers, in this case, our reducer, calls todos

export default combineReducers({
  todos,
});
```
Now create your reducer file, todos.js, under reducers folder. And put the following content:

```
import {
  ADD_TODO,
  REMOVE_TODO,
} from '../actions/todos';

const initialState = [
  { id: 0, text: 'Make coffee' },
  { id: 1, text: 'Learn goNative' },
];


export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Math.random(), text: action.payload.text }];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
```

To link the redux to our App, we going to make some adjustments in our index.js of the src folder.

```
import React from 'react';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';

import TodoList from './TodoList'; //Here we import our components, to connect to redux

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
```

After all, we need to create our actions, to dispatch our redux's funcionalities. Under the store folder, create another folder, called actions. And in this folder, we going to create files to each redux we're going to use in the application. Each action will perform ours redux-functions using the type, do describe the functionality. Create the todos.js, with this content:

```
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});
```
## Installing the Reactotron-redux

Run the following command:

```
yarn add reactotron-redux
```

After installation, we need to make some adjustments in our reactotron's config file, and redux's index store file too. In the ReactotronConfig.js, add the following content:

```
...
import { reactotronRedux } from 'reactotron-redux';

{
    ...
    .use(reactotronRedux())
}
```

In index.js of the store folder, replace the content, for this content:

```
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middleware = [];

const createApropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createApropriateStore(reducers, applyMiddleware(...middleware));

export default store;
```

Now, we can use the reactotron to watch our redux's workflow and perfoms some redux actions too.

## Installing [Redux-Saga](https://redux-saga.js.org/)

We going to use saga as our middleware to perform redux actions. First of all, install the redux-saga using the following command:

```
yarn add redux-saga
```

After installation, we need to create our file's structure to configure our saga.

Under the store's folder, create a folder called sagas, with a index.js, this file will mix it up all of ours sagas files configuration of the project, place the the following content in the file:

```
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  return yield all([

  ]);
}
```

Now, we need to add our saga's middleware to our redux's file configuration.

In the index.js of the store's folder, perform the following changes:

```
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const createApropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createApropriateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);

export default store;
```

Now, we already have the saga configured to our project.

## Installing the Reactotron-redux-saga

Run the following command:

```
yarn add reactotron-redux-saga
```

Now, in the Reactotron.js under the src/config folder, add the following lines:

```
import sagaPlugin from 'reactotron-redux-saga';

...
.use(sagaPlugin())
...
```

Now, in the index.js under the store folder, do the following changes:

```
...
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
...
```

After all, we already have the saga plugged to our reactotron.
