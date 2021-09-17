import React from 'react';
import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

/* Material-ui */
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

function Todo({ id, task, completed, editTodo, removeTodo, toggleTodo }) {
  const [isEditing, toggle] = useToggleState(false);

  const handleDelete = () => {
    removeTodo(id);
  };

  const handleClick = () => {
    toggleTodo(id);
  };

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <React.Fragment>
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
            <IconButton arial-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </React.Fragment>
      )}
    </ListItem>
  );
}

export default Todo;
