import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates INFO_FETCH_DATA_SUCCESS when fetching has been done', () => {
    fetchMock
      .getOnce('/info', { body: [], headers: { 'content-type': 'application/json' } });

    const expectedAction = [{
      type: 'INFO_FETCH_DATA_SUCCESS', info: '/info',
    }];

    const store = mockStore({ body: [] });

    store.dispatch(actions.infoFetchDataSuccess('/info'));
    return expect(store.getActions()).toEqual(expectedAction);
  });
});
