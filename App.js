/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Movies} from './src/modules';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Movies />
      </SafeAreaView>
    </>
  );
};
export default App;
