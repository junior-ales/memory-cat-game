/* eslint-disable */
import { store } from '../app/store';

test('should have initial value defined', () => {
  const { year, title, todos } = store.getState();

  expect(year).toBeDefined();
  expect(title).toBeDefined();
  expect(todos).toBeDefined();
});
