import {put, takeEvery, call} from 'redux-saga/effects';
import {endpoints, API} from '../../api';
import actions from './actions';

const {movie} = endpoints;

function* watchFetchUpcomingMovies({payload}) {
  try {
    const {page} = payload;
    const response = yield call(API.get, movie.upcoming.list(page));
    console.log(response);
    yield put(actions.upcoming.fetch.resolve(response.data));
  } catch (err) {
    console.log(err);
    // TODO Notify user
  } finally {
    // Do something
  }
}

export default function*() {
  yield [takeEvery(actions.upcoming.fetch.request, watchFetchUpcomingMovies)];
}
