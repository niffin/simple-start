/**
 * Defines a new action creator function with the given type,
 * the specified parameters, and reducer function.
 * @param type
 * @param argNames
 * @returns {Function}
 */
export function defineDuck (type, reducer) {
  const actionCreator   = function (data = {}) {
    const action = { type };
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        action[key] = data[key];
      }
    }
    return action;
  };

  actionCreator.type    = type;
  actionCreator.reducer = reducer;
  return actionCreator;
}


export function buildReducers (initialState, ...actionCreators) {
  const reducers = actionCreators.reduce((reducers, actionCreator) => {
    if (actionCreator.reducer) {
      if (reducers[actionCreator.type]) {
        throw(`Duplicate Action Type "${actionCreator.type}" detected`);
      }
      reducers[actionCreator.type] = actionCreator.reducer;
    }
    return reducers;
  }, {});
  return mapBasedReducer(initialState, reducers);

}

/**
 * Creates a reducer based on an object reducers, where action
 * types are the keys to the reducers, and the reducer function the
 * values.
 * @param reducers  Object mapping `action.type` => `reducer fn`
 * @returns {Function}
 */
export function mapBasedReducer (initialState, reducers) {
  return function (state = initialState, action = null) {
    const reducer = reducers[action && action.type];
    return reducer ? reducer(state, action) : state;
  };
}

