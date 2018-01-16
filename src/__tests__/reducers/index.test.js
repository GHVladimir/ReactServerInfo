import reducer from '../../reducers';

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      info: [],
      infoIsLoading: false,
      infoHasErrored: false
    });
  });
});
