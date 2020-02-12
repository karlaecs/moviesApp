/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text} from 'react-native';
import {moviesActions} from '../ducks';

export class MoviesDetails extends React.Component {
  componentDidMount = () => {};

  shouldComponentUpdate = (prevProps, prevState) => {};

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{color: 'white'}}>Details</Text>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetails);
