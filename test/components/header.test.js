/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../app/components/Header';

const mockOnSave = jest.fn();

const props = {
  title: 'React & Redux TodoList',
  dispatch: action => mockOnSave
};

test('should call onSave with text', () => {
  const header = shallow(<Header {...props} />);

  header.find('button').simulate('click');

  expect(mockOnSave).toBeCalledWith('foobar');
});
