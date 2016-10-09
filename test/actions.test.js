/* eslint-disable */

import { addTodo, deleteTodo } from '../app/actions';

test('addTodo should have type and text', () => {
  expect(addTodo('content')).toEqual({
    type: 'ADD_TODO',
    text: 'content'
  });
});

test('deleteTodo should have type and id', () => {
  expect(deleteTodo(1)).toEqual({
    id: 1,
    type: 'DELETE_TODO'
  });
});
