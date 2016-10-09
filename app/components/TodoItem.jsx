import React from 'react';

const TodoItem = ({todo, onDelete}) => (
  <li key={todo.id}>
    {todo.text}
    <button onClick={() => onDelete(todo.id)}>Remove</button>
  </li>
);

TodoItem.propTypes = { // eslint-disable-line
  todo: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired
  }).isRequired,
  onDelete: React.PropTypes.func.isRequired
};

export default TodoItem;
