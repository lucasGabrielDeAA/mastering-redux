import { ADD_TODO } from '../actions/todos';

const initialState = [
  'Make coffee',
  'Learn goNative',
];


export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    default:
      return state;
  }
}
