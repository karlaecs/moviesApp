import {combineReducers} from 'redux';
import {createActions, handleActions} from 'redux-actions';
import _ from 'lodash/fp';

// Actions
export const moviesActions = createActions({
  UPCOMING: {
    FETCH: {
      REQUEST: _.identity,
      RESOLVE: _.identity,
    },
    SEARCH: {
      REQUEST: _.identity,
      RESOLVE: _.identity,
    },
  },
  GENRES: {
    REQUEST: _.identity,
    RESOLVE: _.identity,
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
      {},
    ),
    loading: handleActions(
      {
        [moviesActions.upcoming.fetch.request]: _.T,
        [moviesActions.upcoming.fetch.resolve]: _.F,
        [moviesActions.upcoming.search.request]: _.T,
        [moviesActions.upcoming.search.resolve]: _.F,
      },
      true,
    ),
    searched: handleActions(
      {
        [moviesActions.upcoming.search.resolve]: {
          next: (state, {payload}) => payload,
          throw: state => state,
        },
      },
      {},
    ),
  }),
  genres: handleActions(
    {
      [moviesActions.genres.resolve]: {
        next: (state, {payload}) => payload,
        throw: state => state,
      },
    },
    {},
  ),
});
