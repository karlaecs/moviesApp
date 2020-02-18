import {put, takeLatest, call, all} from 'redux-saga/effects';
import {endpoints, API} from '../../api';
import {moviesActions} from './ducks';

const {movies} = endpoints;

export function* watchFetchUpcomingMovies({payload}) {
  try {
    const {page} = payload;
    const response = yield call(API.get, movies.upcoming.list({page}));
    yield put(moviesActions.upcoming.fetch.resolve(response.data));
  } catch (err) {
    console.log('watchFetchUpcomingMovies', JSON.stringify(err));
    // TODO Notify user
  }
}

export function* watchSearchUpcomingMovies({payload}) {
  try {
    const {query} = payload;
    const response = yield call(API.get, movies.upcoming.search({query}));
    yield put(moviesActions.upcoming.search.resolve(response.data));
  } catch (err) {
    console.log('watchSearchUpcomingMovies', JSON.stringify(err));
    // TODO Notify user
  }
}

export default function*() {
  yield all([
    takeLatest(moviesActions.upcoming.fetch.request, watchFetchUpcomingMovies),
    takeLatest(
      moviesActions.upcoming.search.request,
      watchSearchUpcomingMovies,
    ),
  ]);
}
