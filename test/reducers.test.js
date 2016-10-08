/* eslint-disable */
import reducers from '../app/reducers';
import { addTodo } from '../app/actions';

const INITIAL_STATE = {
   todos: [
      { id: 1, text: 'todo1', completed: false },
      { id: 2, text: 'todo2', completed: false }
   ],
   year: '',
   title: ''
};

test('should add one todo', () => {
  const expectedState = {
    todos: [
      { id: 3, text: 'todo3', completed: false },
      { id: 1, text: 'todo1', completed: false },
      { id: 2, text: 'todo2', completed: false }
    ],
    year: '',
    title: ''
  };

  const actualState = reducers(INITIAL_STATE, addTodo('todo3'));
  expect(actualState).toEqual(expectedState);
});
