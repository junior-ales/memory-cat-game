/* eslint-disable */
import renderer from 'react-test-renderer';
import React from 'react';
import Footer from '../../app/components/Footer';

const props = {
  year: '2016'
};

test('should render footer', () => {
  const renderedComponent = renderer.create(
    <Footer {...props} />
  );

  expect(renderedComponent.toJSON()).toMatchSnapshot();
});
