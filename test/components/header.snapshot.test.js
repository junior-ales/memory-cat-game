/* eslint-disable */
import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../../app/components/Header';

const props = {
  title: 'React & Redux TodoList',
  dispatch: action => text => action(text)
};

test('should render header', () => {
  const header = renderer.create(<Header {...props} />);
  expect(header.toJSON()).toMatchSnapshot();
});
