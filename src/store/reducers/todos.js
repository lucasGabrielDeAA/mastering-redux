const initialState = [
  'Make coffee',
  'Learn goNative',
];


export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [];
    default:
      return state;
  }
}
