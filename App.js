/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import {NativeRouter, Route} from 'react-router-native';
import Colors from './src/themes/colors';
import store from './src/store';
import {Movies} from './src/modules';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
          <SafeAreaView>
            <Route exact path="/movies" component={Movies} />
            <Route component={Movies} />
          </SafeAreaView>
        </View>
      </NativeRouter>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: '100%',
  },
});

export default App;
