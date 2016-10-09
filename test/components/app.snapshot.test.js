/* eslint-disable */
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../../app/components/App';

const props = {
  year: '2016',
  title: 'Reat & Redux Todo List',
  todos: [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: false }
  ],
  dispatch: fn => x => fn(x)
};

test('should render the application', () => {
  const app = renderer.create(<App {...props} />);
  expect(app.toJSON()).toMatchSnapshot();
});
