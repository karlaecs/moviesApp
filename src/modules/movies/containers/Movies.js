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
import {getUpcomingMovies, getLoadingUpcomingMovies} from '../selectors';
import {MovieList, Search, Menu, Footer} from '../../../components';

export class Movies extends React.Component {
  state = {
    text: null,
  };

  componentDidMount = () => {
    const {fetchUpcomingMovies} = this.props;
    fetchUpcomingMovies({page: 1});
  };

  shouldComponentUpdate = (prevProps, prevState) => {
    const {upcomingMovies} = this.props;

    return !_.isEqual(upcomingMovies, prevProps.upcomingMovies);
  };

  // Search
  onChangeText = text => this.setState({text});
  onSubmitEditing = () => {
    const {text} = this.state;

    alert(`Search ${text}`);
  };

  render() {
    const {upcomingMovies, match, loadingUpcomingMovies} = this.props;
    const {text} = this.state;

    return (
      <View style={styles.container}>
        <Search
          value={text}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
        />
        <Menu match={match} />
        <MovieList
          items={upcomingMovies}
          loading={loadingUpcomingMovies}
          match={match}
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
  },
});

const mapStateToProps = state => ({
  upcomingMovies: getUpcomingMovies(state),
  loadingUpcomingMovies: getLoadingUpcomingMovies(state),
});

const mapDispatchToProps = {
  fetchUpcomingMovies: moviesActions.upcoming.fetch.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
