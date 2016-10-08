import {createStore} from 'redux';
import {curry, compose} from 'ramda';

import reducers from './reducers';

const initialState = {
  year: '2016',
  title: 'Random stuff',
  todos: [
    {
      id: 1,
      text: 'foo'
    }, {
      id: 2,
      text: 'bar'
    }
  ]
};

const bindAction = curry((dispatch, actionCreator) => {
  return compose(dispatch, actionCreator);
});


export const store = createStore(reducers, initialState);
export const bindActionCreator = bindAction(store.dispatch);
