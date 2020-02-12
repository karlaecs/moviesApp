/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import _ from 'lodash';
import {moviesActions} from '../ducks';
import {getUpcomingMovies} from '../selectors';

export class Movies extends React.Component {
  componentDidMount = () => {
    const {fetchUpcomingMovies} = this.props;
    fetchUpcomingMovies({page: 1});
  };

  shouldComponentUpdate = (prevProps, prevState) => {
    const {upcomingMovies} = this.props;

    return !_.isEqual(upcomingMovies, prevProps.upcomingMovies);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{color: 'white'}}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});

const mapStateToProps = state => ({
  upcomingMovies: getUpcomingMovies(state),
});

const mapDispatchToProps = {
  fetchUpcomingMovies: moviesActions.upcoming.fetch.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
