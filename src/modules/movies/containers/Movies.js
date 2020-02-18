/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import _ from 'lodash';
import {moviesActions} from '../ducks';
import {
  getUpcomingMovies,
  getLoadingUpcomingMovies,
  getUpcomingMoviesTotalPages,
  getUpcomingMoviesSearched,
} from '../selectors';
import {MovieList, Search, Menu, Footer} from '../../../components';

export class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeText = _.debounce(this.onChangeText, 300);
  }

  state = {
    text: null,
    page: 1,
    items: [],
    results: [],
    searched: [],
    loadingActivityIndicator: true,
    isSearched: false,
    isSubmitted: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (!_.isEqual(props.upcomingMovies, state.results)) {
      const items = [...state.items, ...props.upcomingMovies];
      const results = props.upcomingMovies;
      return {results, items};
    }

    if (!_.isEmpty(props.searchedMovies) && state.isSubmitted) {
      return {searched: props.searchedMovies};
    }

    return null;
  }

  componentDidMount = () => {
    const {fetchUpcomingMovies, fetchGenres} = this.props;
    fetchUpcomingMovies({page: 1});
    fetchGenres();
  };

  shouldComponentUpdate = (prevProps, prevState) => {
    const {upcomingMovies} = this.props;
    const isChangedMovieList = !_.isEqual(
      upcomingMovies,
      prevProps.upcomingMovies,
    );

    return (
      isChangedMovieList ||
      !prevState.loadingActivityIndicator ||
      prevState.isSubmitted
    );
  };

  onFetchUpcomingMovies = () => {
    const {fetchUpcomingMovies, totalPages} = this.props;
    let {page} = this.state;

    if (totalPages > page) {
      page += 1;

      fetchUpcomingMovies({page});

      this.setState({page});
    } else {
      this.setState({loadingActivityIndicator: false});
    }
  };

  // Search
  onChangeText = query => {
    let {isSearched} = this.state;
    const {searchUpcomingMovies} = this.props;

    if (_.isEmpty(query)) {
      isSearched = false;
    } else {
      isSearched = true;
      searchUpcomingMovies({query});
    }

    this.setState({
      isSearched,
      isSubmitted: true,
      loadingActivityIndicator: false,
    });
  };

  render() {
    const {match, loadingUpcomingMovies} = this.props;
    const {
      text,
      items,
      loadingActivityIndicator,
      searched,
      isSearched,
    } = this.state;

    return (
      <View style={styles.container}>
        <Search value={text} onChangeText={this.onChangeText} />
        <Menu match={match} />
        <MovieList
          items={isSearched ? searched : items}
          match={match}
          loading={loadingUpcomingMovies}
          onEndReached={this.onFetchUpcomingMovies}
          loadingActivityIndicator={loadingActivityIndicator}
        />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: '100%',
    width: '100%',
  },
});

const mapStateToProps = state => ({
  searchedMovies: getUpcomingMoviesSearched(state),
  upcomingMovies: getUpcomingMovies(state),
  loadingUpcomingMovies: getLoadingUpcomingMovies(state),
  totalPages: getUpcomingMoviesTotalPages(state),
});

const mapDispatchToProps = {
  fetchUpcomingMovies: moviesActions.upcoming.fetch.request,
  searchUpcomingMovies: moviesActions.upcoming.search.request,
  fetchGenres: moviesActions.genres.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
