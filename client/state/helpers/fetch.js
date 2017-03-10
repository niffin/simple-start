export default function fetchHelper ({
  method,
  url,
  headers,
  payload,
  onRequest,
  responseHandler,
  onSuccess,
  onError
}) {
  return {
    type : 'FETCH_HELPER',
    method,
    url,
    headers,
    payload,
    responseHandler,
    onRequest,
    onSuccess,
    onError
  };
}
fetchHelper.type = 'FETCH_HELPER';

export function fetchMiddleware ({ dispatch }) {
  return next => async action => {
    if (action.type === fetchHelper.type) {
      const {
        method = 'GET',
        url,
        headers,
        payload,
        responseHandler = f => f,
        onRequest       = () => ({ type: null }),
        onSuccess       = () => ({ type: null }),
        onError         = () => ({ type: null })
      } = action;

      dispatch(onRequest());

      const response = await fetch(url, {
        method,
        headers : {
          ...headers
        },
        body : payload
      });

      if (!response.ok) {
        dispatch(onError());
      } else {
        const json            = await response.json(),
              handledResponse = responseHandler(json);

        dispatch(onSuccess(handledResponse));
      }

    } else {
      return next(action);
    }
  };
}
