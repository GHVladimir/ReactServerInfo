import axios from 'axios';

axios.interceptors.request.use(function (config) {
 // do something in the interceptor
  return config;
});

export const infoFetchData = (url) => (dispatch) => {
  dispatch(infoIsLoading(true));
  axios.get(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      dispatch(infoIsLoading(false));
      return response;
    })
    .then((info) => dispatch(infoFetchDataSuccess(info.data)))
    .catch((err) => dispatch(infoHasErrored(true)));
};

export const infoHasErrored = (hasErrored) => ({
  type: 'INFO_HAS_ERRORED',
  hasErrored
});

export const infoIsLoading = (isLoading) => ({
  type: 'INFO_IS_LOADING',
  isLoading
});


export const infoFetchDataSuccess = (info) => ({
  type: 'INFO_FETCH_DATA_SUCCESS',
  info
});