/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {runSaga} from 'redux-saga';
import store from '../../../store';
import {watchFetchUpcomingMovies} from '../sagas';

describe('test module movies/sagas', () => {
  test('test API integration: fetch upcoming movies is success', async () => {
    let {data} = store.getState().movies.upcoming;
    expect(data).toEqual([]);

    await runSaga(store, watchFetchUpcomingMovies, {payload: {page: 1}});
    await store.subscribe(async () => {
      const state = store.getState();
      const {results} = state.movies.upcoming.data;
      await expect(results).not.toEqual([]);
    });
  });
});
