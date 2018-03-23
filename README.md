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
