/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../../app/components/TodoItem';

const TODO_ID = 99;
const mockOnDelete = jest.fn();

const props = {
  todo: { id: TODO_ID, text: 'todo1', completed: false },
  onDelete: mockOnDelete
};

test('should call onDelete with correct id', () => {
  const todoItem = shallow(<TodoItem {...props} />);

  todoItem.find('button').simulate('click');

  expect(mockOnDelete).toBeCalledWith(TODO_ID);
});
