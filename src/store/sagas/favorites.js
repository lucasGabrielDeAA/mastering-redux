import { call, put, select } from 'redux-saga/effects';

import api from 'services/api';

import {
  addFavoriteSuccess,
  addFavoriteError,
} from 'store/actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repositoryName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(addFavoriteError('Repositório já adicionado'));
    } else {
      yield put(addFavoriteSuccess(response.data));
    }
  } catch (error) {
    yield put(addFavoriteError('Repositório não encontrado'));
  }
}
