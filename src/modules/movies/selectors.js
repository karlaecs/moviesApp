import _ from 'lodash/fp';
import {createSelector} from 'reselect';

export const getUpcomingMovies = createSelector(
  _.getOr([], 'movies.upcoming.data.results'),
  _.identity,
);

export const getUpcomingMoviesPage = createSelector(
  _.getOr(0, 'movies.upcoming.data.page'),
  _.identity,
);
export const getUpcomingMoviesTotalResults = createSelector(
  _.getOr(0, 'movies.upcoming.data.total_results'),
  _.identity,
);
export const getUpcomingMoviesTotalPages = createSelector(
  _.getOr(0, 'movies.upcoming.data.total_pages'),
  _.identity,
);

export const getLoadingUpcomingMovies = createSelector(
  _.get('movies.upcoming.loading'),
  _.identity,
);

export const getUpcomingMoviesSearched = createSelector(
  _.getOr([], 'movies.upcoming.searched.results'),
  _.identity,
);
