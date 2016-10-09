/* eslint-disable */
import renderer from 'react-test-renderer';
import React from 'react';
import TodoList from '../../app/components/TodoList';

const props = {
  todos: [
    { id: 1, text: 'todo1', completed: false },
    { id: 2, text: 'todo2', completed: false },
    { id: 3, text: 'todo3', completed: false }
  ],
  dispatch: action => id => action(id)
};

test('should render todo list', () => {
  const todoList = renderer.create(<TodoList {...props} />);
  expect(todoList.toJSON()).toMatchSnapshot();
});
