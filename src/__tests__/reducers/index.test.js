import reducer from '../../reducers';

describe('root reducer', () => {
  it('should combine all reducers', () => {
    expect(reducer({}, { type: '@@INIT' })).toEqual({
      getInfo: [],
      infoIsLoading: false,
      infoHasErrored: false,
    });
  });
});
