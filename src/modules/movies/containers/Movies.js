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
} from '../selectors';
import {MovieList, Search, Menu, Footer} from '../../../components';

export class Movies extends React.Component {
  state = {
    text: null,
    page: 1,
    items: [],
    results: [],
    searched: [{title: 'searched '}],
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
    return null;
  }

  componentDidMount = () => {
    const {fetchUpcomingMovies} = this.props;
    fetchUpcomingMovies({page: 1});
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
  onChangeText = text => this.setState({text});
  onSubmitEditing = () => {
    let {text, isSearched} = this.state;

    if (_.isEmpty(text)) {
      isSearched = false;
    } else {
      isSearched = true;
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
        <Search
          value={text}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
        />
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
  upcomingMovies: getUpcomingMovies(state),
  loadingUpcomingMovies: getLoadingUpcomingMovies(state),
  totalPages: getUpcomingMoviesTotalPages(state),
});

const mapDispatchToProps = {
  fetchUpcomingMovies: moviesActions.upcoming.fetch.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
