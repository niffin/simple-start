/* globals describe, it, expect, jest */

import { defineDuck, buildReducers, mapBasedReducer } from './ducks';

describe('Utils/redux', function () {

  describe('defineDuck', function () {

    it('returns a function that returns an action', function () {
      const duck = defineDuck('FOO');
      expect(duck()).toEqual({ type : 'FOO' });
    });

    it('can return parameters', function () {
      const duck = defineDuck('FOO');
      expect(duck({ value : 'foo' })).toEqual({ type : 'FOO', value : 'foo' });
    });

    it('exposes the type of the action', function () {
      const duck = defineDuck('FOO', jest.fn());
      expect(duck.type).toEqual('FOO');
    });

    it('exposes the reducer fn', function () {
      const reducer       = jest.fn();
      const duck = defineDuck('FOO', reducer);
      expect(duck.reducer).toEqual(reducer);
    });
  });


  describe('buildReducer', function () {

    it('can add a single reducer', function () {
      const initialState  = 5;
      const expectedState = 7;
      const reducerFn       = () => expectedState;

      const fooAC = defineDuck('FOO', reducerFn);

      const reducers = buildReducers(initialState, fooAC);

      const result = reducers({}, fooAC());

      expect(result).toEqual(expectedState);
    });

    it('does not add duck without reducer', function () {
      const expected          = 7;
      const fooWithReducer    = defineDuck('FOO', () => expected);
      const fooWithoutReducer = defineDuck('FOO');
      const reducers          = buildReducers({}, fooWithReducer, fooWithoutReducer);
      const result            = reducers({}, { type : 'FOO' });
      expect(result).toEqual(expected);
    });

    it('can add several reducers', function () {
      const initialState  = 5;
      const expectedState = 7;
      const reducerFn       = () => expectedState;

      const foo = defineDuck('FOO', jest.fn());
      const bar = defineDuck('BAR', reducerFn);

      const reducers = buildReducers(initialState, foo, bar);

      const result = reducers({}, bar());

      expect(result).toEqual(expectedState);
    });

    it('complains if add two reducers of the same type', function () {
      const foo = defineDuck('FOO', jest.fn());
      const bar = defineDuck('FOO', jest.fn());
      expect(function () {
        buildReducers(5, foo, bar);
      }).toThrow('Duplicate Action Type "FOO" detected');
    });
  });


  describe('mapBasedReducer', function () {

    it('can be created from an empty map', function () {
      mapBasedReducer('initialState', {});
    });

    it('returns the initial state when called with an undefined state', function () {
      const reducer = mapBasedReducer('initialState', {});
      expect(reducer()).toEqual('initialState');
    });

    it('unknown action returns the input state', function () {
      const reducer  = mapBasedReducer(null, { doSomething : x => x });
      const newState = reducer('theState', { type : 'unknownAction' });
      expect(newState).toEqual('theState');
    });

    it('dispatches a single action', function () {
      const reducer  = mapBasedReducer(null, { doSomething : () => 'something' });
      const newState = reducer('other state', { type : 'doSomething' });
      expect(newState).toEqual('something');
    });

    it('dispatches multiple actions', function () {
      const reducer = mapBasedReducer(null, { doSomething : () => 'something', doSomethingElse : () => 'else' });
      expect(reducer('other', { type : 'doSomething' })).toEqual('something');
      expect(reducer('other', { type : 'doSomethingElse' })).toEqual('else');
    });
  });

});
