export function infoFetchData(url) {
  return (dispatch) => {
    dispatch(infoIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(infoIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((info) => dispatch(infoFetchDataSuccess(info)))
      .catch((err) => dispatch(infoHasErrored(true)));
  };
}

export function infoHasErrored(hasErrored) {
  return {
    type: 'INFO_HAS_ERRORED',
    hasErrored
  };
}

export function infoIsLoading(isLoading) {
  return {
    type: 'INFO_IS_LOADING',
    isLoading
  };
}

export function infoFetchDataSuccess(info) {
  return {
    type: 'INFO_FETCH_DATA_SUCCESS',
    info
  };
}