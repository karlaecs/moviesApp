import {createActions} from 'redux-actions';
import {identity} from 'lodash/fp';

export default createActions({
  UPCOMING: {
    FETCH: {
      REQUEST: identity,
      RESOLVE: identity,
    },
  },
});
