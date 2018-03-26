export const addFavoriteRequest = repositoryName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    repositoryName,
  },
});
