import {put, takeLatest, call, all} from 'redux-saga/effects';
import _ from 'lodash';
import {endpoints, API} from '../../api';
import {moviesActions} from './ducks';

const {movies} = endpoints;

export function* watchFetchUpcomingMovies({payload}) {
  try {
    const {page} = payload;
    const {data} = yield call(API.get, movies.upcoming.list({page}));
    yield put(moviesActions.upcoming.fetch.resolve(data));
  } catch (err) {
    console.log('watchFetchUpcomingMovies', JSON.stringify(err));
    // TODO Notify user
  }
}

export function* watchSearchUpcomingMovies({payload}) {
  try {
    const {query} = payload;
    const {data} = yield call(API.get, movies.upcoming.search({query}));
    yield put(moviesActions.upcoming.search.resolve(data));
  } catch (err) {
    console.log('watchSearchUpcomingMovies', JSON.stringify(err));
    // TODO Notify user
  }
}

export function* watchFetchGenres({payload}) {
  try {
    const {data} = yield call(API.get, movies.genres);
    yield put(moviesActions.genres.resolve(_.keyBy(data.genres, 'id')));
  } catch (err) {
    console.log('watchFetchGenres', JSON.stringify(err));
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
    takeLatest(moviesActions.genres.request, watchFetchGenres),
  ]);
}
