import React from 'react';
import { compose, map } from 'ramda';
import { deleteTodo } from '../actions';

const Item = ({todo, onDelete}) => (
  <li key={todo.id}>
    {todo.text}
    <button onClick={() => onDelete(todo.id)}>Remove</button>
  </li>
);

Item.propTypes = { // eslint-disable-line
  todo: React.PropTypes.shape({
    id: React.PropTypes.number,
    text: React.PropTypes.string
  }),
  onDelete: React.PropTypes.func
};

const TodoList = ({todos, onDelete}) => {
  return (
    <ul>
      {map(todo => Item({todo, onDelete}), todos)}
    </ul>
  );
};

TodoList.propTypes = { // eslint-disable-line
  todos: React.PropTypes.array,
  onDelete: React.PropTypes.func
};

const extractProps = props => ({
  todos: props.todos,
  onDelete: props.dispatch(deleteTodo)
});

export default compose(TodoList, extractProps);
