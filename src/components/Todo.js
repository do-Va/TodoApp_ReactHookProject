import React from 'react';

/* Material-ui */
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

function Todo({ id, task, completed, removeTodo, toggleTodo }) {
  const handleDelete = () => {
    removeTodo(id);
  };

  const handleClick = () => {
    toggleTodo(id);
  };

  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} onClick={handleClick} />
      <ListItemText
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton arial-label="Delete" onClick={handleDelete}>
          <Delete />
        </IconButton>
        <IconButton arial-label="Edit">
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
