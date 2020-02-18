/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NativeRouter, Route, Redirect} from 'react-router-native';
import Colors from './src/themes/colors';
import store from './src/store';
import {Movies, MoviesDetails} from './src/modules';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        {/* <SafeAreaView> */}
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
          <Route exact path="/">
            <Redirect to="/movies/theatres" />
          </Route>
          <Route exact path="/movies/theatres" component={Movies} />
          <Route exact path="/movies/theatres/:id" component={MoviesDetails} />
        </SafeAreaView>
        {/* </SafeAreaView> */}
      </NativeRouter>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
  },
});

export default App;
