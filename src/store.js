import reduxSaga from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import {MoviesReducer, MoviesSagas} from './modules';

// App Sagas
const saga = reduxSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(saga));
const sagas = [...MoviesSagas];
saga.run(sagas);

// App Reducers
const combinedReducer = combineReducers({
  ...MoviesReducer,
});
const store = createStore(combinedReducer, enhancer);

export default store;
