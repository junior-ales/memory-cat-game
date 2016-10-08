import {combineReducers} from 'redux';
import {
  add,
  pluck,
  reduce,
  compose,
  max,
  propOr,
  identity,
  prop,
  reject,
  propEq
} from 'ramda';

import {ADD_TODO, DELETE_TODO} from './actions';

const createReducer = function(init, handlers) {
  return function(state = init, action) {
    return propOr(identity, prop('type', action), handlers)(state, action);
  };
};

const inc = add(1); // eslint-disable-line
const getAllIds = pluck('id');
const INITIAL_VALUE = 0;
const getMax = reduce(max, INITIAL_VALUE);
const getNextId = compose(inc, getMax, getAllIds);

const todos = createReducer([], {
  [ADD_TODO]: (state, action) => [
    {
      id: getNextId(state),
      completed: false,
      text: action.text
    },
    ...state
  ],
  [DELETE_TODO]: (state, action) => {
    return reject(propEq('id', action.id), state);
  }
});

const title = createReducer('', {});
const year = createReducer('', {});

export default combineReducers({todos, title, year});
