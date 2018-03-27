const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload.repository],
        loading: false,
      };
    case 'ADD_FAVORITE_ERROR':
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
}
