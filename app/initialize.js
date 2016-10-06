import React from 'react';
import { render } from 'react-dom';
import { compose, map, prop, curry, reduce } from 'ramda';

const combineComponents = (...args) => {
  const combine = curry((c, o) => x => (<div>{c(x)} {o(x)}</div>));

  const [first, ...rest] = args;
  return reduce((acc, c) => combine(acc, c), first, rest);
};

const state = {
  year: '2016',
  title: 'Random stuff',
  todos: [{id:1, text: 'foo'}, { id:2, text: 'bar'}]
};

const getTodos = prop('todos');

const Header = title => <h1>A Todo List: {title}</h1>;
const List = items => <ul>{items}</ul>;
const Item = todo => <li key={todo.id}>{todo.text}</li>;
const Footer = text => <div>{text}</div>;

const TodoHeader = compose(Header, s => s.title);
const TodoList = compose(compose(List, map(Item)), getTodos);
const TodoFooter = compose(Footer, s => s.year);

const App = combineComponents(TodoHeader, TodoList, TodoFooter);

/* eslint-disable fp/no-unused-expression */
render(<App {...state} />, document.getElementById('app'));
