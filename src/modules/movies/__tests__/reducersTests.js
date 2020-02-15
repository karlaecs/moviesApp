import {movies} from '../ducks';

describe('test module movies/reducers', () => {
  it('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual({
      upcoming: {
        data: {},
        loading: true,
      },
    });
  });

  it('should handle action UPCOMING/FETCH/RESOLVE', () => {
    const action = {
      type: 'UPCOMING/FETCH/RESOLVE',
      payload: {results: ['123']},
    };

    const initialState = [
      {
        data: {results: ['karla', 'elisabeth']},
        loading: true,
      },
    ];

    expect(movies([], action)).toEqual({
      upcoming: {
        data: {results: ['123']},
        loading: false,
      },
    });

    expect(movies([], action)).not.toEqual({
      upcoming: {
        data: {},
        loading: false,
      },
    });

    expect(movies(initialState, action)).not.toEqual({
      upcoming: {
        data: {results: []},
        loading: false,
      },
    });
  });
});
