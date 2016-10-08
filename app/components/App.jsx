import React from 'react';
import { curry, reduce } from 'ramda';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const combineComponents = (...args) => {
  const combine = curry((c, o) => x => (
    <section>{c(x)} {o(x)}</section>
  ));

  const [first, ...rest] = args;
  return reduce((acc, c) => combine(acc, c), first, rest);
};

export default combineComponents(Header, TodoList, Footer);
