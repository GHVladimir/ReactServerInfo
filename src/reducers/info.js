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

export const info = (state = [], action) => {
  switch (action.type) {
    case 'INFO_FETCH_DATA_SUCCESS':
      return action.info;

    default:
      return state;
  }
}
