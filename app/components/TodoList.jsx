import React from 'react';
import { compose, map } from 'ramda';
import { deleteTodo } from '../actions';
import TodoItem from './TodoItem';

const TodoList = ({todos, onDelete}) => {
  return (
    <ul>
      {map(todo => TodoItem({todo, onDelete}), todos)}
    </ul>
  );
};

TodoList.propTypes = { // eslint-disable-line
  todos: React.PropTypes.array.isRequired,
  onDelete: React.PropTypes.func.isRequired
};

const extractProps = props => ({
  todos: props.todos,
  onDelete: props.dispatch(deleteTodo)
});

export default compose(TodoList, extractProps);
