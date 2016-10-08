import React from 'react';
import { compose } from 'ramda';
import { addTodo } from '../actions';

const Add = ({ onSave }) => (
  <div>
    <button onClick={() => onSave('foobar')}>Add</button>
  </div>
);

Add.propTypes = { // eslint-disable-line
  onSave: React.PropTypes.func.isRequired
};

const Header = ({ title, onSave }) => (
  <header>
    <h1>A Todo List: { title }</h1>
    <Add onSave={ onSave } />
  </header>
);

Header.propTypes = { // eslint-disable-line
  title: React.PropTypes.string.isRequired,
  onSave: React.PropTypes.func.isRequired
};

const extractProps = props => ({
  title: props.title,
  onSave: props.dispatch(addTodo)
});

export default compose(Header, extractProps);
