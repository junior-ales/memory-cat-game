/* eslint-disable */
import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../../app/components/Header';

const props = {
  title: 'React & Redux TodoList',
  dispatch: fn => x => fn(x)
};

test('should render header', () => {
  const renderedComponent = renderer.create(
    <Header {...props} />
  );

  expect(renderedComponent.toJSON()).toMatchSnapshot();
});
