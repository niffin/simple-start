import { createFakeStore, createFakeFetch, dispatchWithStoreOf } from 'utils/testUtils';

describe('test utils', function () {
  describe('createFakeStore', function () {
    it('will return an object with a dispatch method and a getState method', function () {
      const fakeStore = createFakeStore();
      expect(typeof fakeStore.dispatch).toBe('function');
      expect(typeof fakeStore.getState).toBe('function');
    });

    describe('getState', function () {
      it('will return the state that was passed in to createFakeStore()', function () {
        const fakeState = { foo : 'bar '},
              fakeStore = createFakeStore(fakeState);

        expect(fakeStore.getState()).toBe(fakeState);
      });
    });

    describe('dispatch', function () {
      it('will return the second argument that was passed in to createFakeStore()', function () {
        const fakeDispatch = jest.fn(),
              fakeStore = createFakeStore({}, fakeDispatch);

        fakeStore.dispatch();
        expect(fakeDispatch).toHaveBeenCalled();
      });
    });
  });

  describe('createFakeFetch', function () {
    it('will return a mock function', function () {
      expect(jest.isMockFunction(createFakeFetch())).toBe(true);
    });

    describe('the returned mock function', function () {
      describe('ok param', function () {
        it('will return the value passed in to "createFakeFetch"', function () {
          expect(createFakeFetch({ isOk : true })().ok).toBe(true);
          expect(createFakeFetch({ isOk : false })().ok).toBe(false);
        });
      });

      describe('"json" method', function () {
        it('will return a promise that resolves with the data passed in to "createFakeFetch"', async function () {
          const fakeResponse = { foo : 'bar' },
                fakeFetch = createFakeFetch({ isOk : true, fakeResponse })();

          expect(await fakeFetch.json()).toBe(fakeResponse);
        });
      });
    });
  });
});

// TODO :
//    test dispatchWithStoreOf
