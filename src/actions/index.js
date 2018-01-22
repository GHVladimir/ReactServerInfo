import axios from 'axios';

export const infoHasErrored = hasErrored => ({
  type: 'INFO_HAS_ERRORED',
  hasErrored,
});

export const infoIsLoading = isLoading => ({
  type: 'INFO_IS_LOADING',
  isLoading,
});


export const infoFetchDataSuccess = info => ({
  type: 'INFO_FETCH_DATA_SUCCESS',
  info,
});

export const infoFetchData = url => (dispatch) => {
  dispatch(infoIsLoading(true));
  axios.get(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      dispatch(infoIsLoading(false));
      return response;
    })
    .then(info => dispatch(infoFetchDataSuccess(info.data)))
    .catch(() => dispatch(infoHasErrored(true)));
};
