import fetchHelper, { fetchMiddleware } from 'state/helpers/fetch';
import { dispatchWithStoreOf, createFakeFetch } from 'utils/testUtils';


describe('fetchMiddleware', () => {
  describe('fetch configuration', () => {
    beforeEach(() => {
      global.fetch = createFakeFetch();
    });

    it('will call fetch with the appropriate url', () => {
      const action = fetchHelper({ url : 'foo' });

      dispatchWithStoreOf({}, fetchMiddleware, action);
      expect(fetch.mock.calls[0]).toContain('foo');
    });

    it('will use the passed in request method', () => {
      const action = fetchHelper({ method : 'POST' });
      dispatchWithStoreOf({}, fetchMiddleware, action);
      const fetchOptions = fetch.mock.calls[0][1];
      expect(fetchOptions.method).toBe('POST');
    });

    it('will default to the GET method if none is provided', () => {
      const action = fetchHelper({});
      dispatchWithStoreOf({}, fetchMiddleware, action);
      const fetchOptions = fetch.mock.calls[0][1];
      expect(fetchOptions.method).toBe('GET');
    });

    it('will use the passed in request payload', () => {
      const action = fetchHelper({ payload : 'foo' });
      dispatchWithStoreOf({}, fetchMiddleware, action);
      const fetchOptions = fetch.mock.calls[0][1];
      expect(fetchOptions.body).toBe('foo');
    });
  });

  describe('action dispatching', () => {
    it('will dispatch the passed in onRequest action', () => {
      const onRequest    = jest.fn(() => ({ type: 'foo' })),
            action       = fetchHelper({ onRequest }),
            fakeDispatch = jest.fn();

      global.fetch = createFakeFetch();

      dispatchWithStoreOf({}, fetchMiddleware, action, fakeDispatch);
      expect(onRequest).toHaveBeenCalled();
      expect(fakeDispatch).toHaveBeenCalledWith(onRequest());
    });

    it('will dispatch the passed in onError action in case of an API error', async () => {
      const onError      = jest.fn(() => ({ type: 'foo' })),
            action       = fetchHelper({ onError }),
            fakeDispatch = jest.fn();

      global.fetch = createFakeFetch({ isOk : false });

      await dispatchWithStoreOf({}, fetchMiddleware, action, fakeDispatch);
      expect(onError).toHaveBeenCalled();
      expect(fakeDispatch).toHaveBeenCalledWith(onError());
    });

    it('will dispatch the passed in onSuccess function when a good result comes back', async () => {
      const onSuccess    = jest.fn(() => ({ type: 'foo' })),
            action       = fetchHelper({ onSuccess }),
            fakeDispatch = jest.fn();

      global.fetch = createFakeFetch({ isOk : true, fakeResponse : 'foo' });

      await await dispatchWithStoreOf({}, fetchMiddleware, action, fakeDispatch);
      expect(onSuccess).toHaveBeenCalledWith('foo');
      expect(fakeDispatch).toHaveBeenCalledWith(onSuccess());
    });
  });

  describe('response data handling', () => {
    it('will pass the data through the provided response handler function', async () => {
      global.fetch = createFakeFetch({ isOk : true, fakeResponse : 'foo' });
      const responseHandler = jest.fn(),
            action = fetchHelper({ responseHandler });
      await await dispatchWithStoreOf({}, fetchMiddleware, action);
      expect(responseHandler).toHaveBeenCalledWith('foo');
    });
  });
});
