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
      return [...state, { id: Math.random, text: action.payload.text }];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
