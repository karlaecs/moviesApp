import {moviesActions} from '../ducks';

describe('test module movies/actions', () => {
  it('should create an action to fetch upcoming movie list ', () => {
    const expectedAction = {
      type: 'UPCOMING/FETCH/REQUEST',
      payload: {page: 1},
    };
    expect(moviesActions.upcoming.fetch.request({page: 1})).toEqual(
      expectedAction,
    );
  });

  it('should create an action to resolved upcoming movie list', () => {
    const expectedAction = {
      type: 'UPCOMING/FETCH/RESOLVE',
      payload: {results: []},
    };
    expect(moviesActions.upcoming.fetch.resolve({results: []})).toEqual(
      expectedAction,
    );
  });
});
