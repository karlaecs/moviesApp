import {combineReducers} from 'redux';
import {createActions, handleActions} from 'redux-actions';
import {T, F, identity} from 'lodash/fp';

// Actions
export const moviesActions = createActions({
  UPCOMING: {
    FETCH: {
      REQUEST: identity,
      RESOLVE: identity,
    },
  },
});

// Reducers
export const movies = combineReducers({
  upcoming: combineReducers({
    data: handleActions(
      {
        [moviesActions.upcoming.fetch.resolve]: {
          next: (state, {payload}) => payload,
          throw: state => state,
        },
      },
      [],
    ),
    loading: handleActions(
      {
        [moviesActions.upcoming.fetch.request]: T,
        [moviesActions.upcoming.fetch.resolve]: F,
      },
      false,
    ),
  }),
});
