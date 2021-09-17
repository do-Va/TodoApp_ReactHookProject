import React from 'react';
import useInputState from '../hooks/useInputState';

import { Paper, TextField } from '@material-ui/core';

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default TodoForm;
