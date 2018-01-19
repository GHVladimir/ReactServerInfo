import { parseDuration } from '../helpers';

export const infoHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'INFO_HAS_ERRORED':
      return action.hasErrored
    default:
      return state;
  }
}

export const infoIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'INFO_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const getInfo = (state = [], action) => {
  switch (action.type) {
    case 'INFO_FETCH_DATA_SUCCESS':
      {
        const { info } = action;
        return info.map(item => {
          return Object.assign({}, item,
            {
              uptime: parseDuration(item['average-uptime'])
            }
          )
        });
      }
    default:
      return state;
  }
}
