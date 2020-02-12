import {combineReducers} from 'redux';
import {T, F} from 'lodash/fp';
import {handleActions} from 'redux-actions';
import actions from './actions';

export default combineReducers({
  upcoming: combineReducers({
    data: handleActions(
      {
        [actions.upcoming.fetch.resolve]: {
          next: (state, {payload}) => payload,
          throw: state => state,
        },
      },
      [],
    ),
    loading: handleActions(
      {
        [actions.upcoming.fetch.request]: T,
        [actions.upcoming.fetch.resolve]: F,
      },
      true,
    ),
  }),
});
