import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import 'config/ReactotronConfig';
import store from 'store';

//import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

export default App;
