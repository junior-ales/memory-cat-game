/* eslint-disable */
import { addTodo, deleteTodo } from '../app/actions';
import reducers from '../app/reducers';

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

test('should delete a todo', () => {
  const expectedState = {
    todos: [
      { id: 2, text: 'todo2', completed: false }
    ],
    year: '',
    title: ''
  };

  const actualState = reducers(INITIAL_STATE, deleteTodo(1));
  expect(actualState).toEqual(expectedState);
});
