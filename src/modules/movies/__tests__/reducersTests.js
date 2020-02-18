import {movies} from '../ducks';

const initialState = {
  genres: {},
  upcoming: {
    data: {},
    loading: true,
    searched: {},
  },
};

describe('test module movies/reducers', () => {
  it('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });

  it('should handle action UPCOMING/FETCH/RESOLVE', () => {
    const action = {
      type: 'UPCOMING/FETCH/RESOLVE',
      payload: {results: ['123']},
    };

    const state = [
      {
        data: {results: ['karla', 'elisabeth']},
        ...initialState,
      },
    ];

    expect(movies([], action)).toEqual({
      upcoming: {
        data: {results: ['123']},
        loading: false,
        searched: {},
      },
      genres: {},
    });

    expect(movies([], action)).not.toEqual({
      upcoming: {
        data: {},
        loading: false,
      },
    });

    expect(movies(state, action)).not.toEqual({
      upcoming: {
        data: {results: []},
        loading: false,
      },
    });
  });
});
