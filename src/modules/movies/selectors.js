import _ from 'lodash/fp';
import moment from 'moment';
import {createSelector} from 'reselect';

const getFormattedMovie = (movie, genres) => ({
  ...movie,
  year: moment(_.getOr(0, 'release_date', movie)).year(),
  genres: _.map(id => genres[id])(movie.genre_ids),
  genre: _.getOr('', [movie.genre_ids[0], 'name'], genres),
});

export const getUpcomingMovies = createSelector(
  _.getOr([], 'movies.upcoming.data.results'),
  _.getOr({}, 'movies.genres'),
  (movies, genres) => _.map(movie => getFormattedMovie(movie, genres))(movies),
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
  _.map(movie => getFormattedMovie(movie)),
);
