import store from 'state/store';

export const createFakeStore = (fakeData, mockDispatch) => ({
  dispatch : mockDispatch || store.dispatch,
  getState () {
    return fakeData;
  }
});

export const dispatchWithStoreOf = (storeData, middleware, action, mockDispatch) => {
  let dispatched = null;
  const dispatch = middleware(createFakeStore(storeData, mockDispatch))(actionAttempt => dispatched = actionAttempt);
  dispatch(action);
  return dispatched;
};

export function createFakeFetch ({ isOk = true, fakeResponse } = {}) {
  return jest.fn(() => ({
    ok   : isOk,
    json : () => new Promise(resolve => resolve(fakeResponse || []))
  }));
}
