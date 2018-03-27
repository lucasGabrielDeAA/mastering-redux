export const addFavoriteRequest = repositoryName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repositoryName,
  },
});

export const addFavoriteSuccess = repository => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: {
    repository,
  },
});

export const addFavoriteError = message => ({
  type: 'ADD_FAVORITE_ERROR',
  payload: {
    message,
  },
});
