import reduxSaga from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import {all, fork} from 'redux-saga/effects';
import _ from 'lodash';
import {movies, moviesSagas} from './modules';

// App Sagas
const saga = reduxSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(saga));
const rootSaga = function*() {
  const _sagas = [moviesSagas];
  yield all(_.map(_sagas, _.unary(fork)));
};
// App Reducers
const combinedReducer = combineReducers({
  movies,
});
const store = createStore(combinedReducer, enhancer);

saga.run(rootSaga);

export default store;
