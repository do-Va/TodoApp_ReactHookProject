import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from '../hooks/useTodoState';

/* Material-ui */
import {
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Grid,
  Button,
} from '@material-ui/core';

function TodoApp() {
  const initialTodos = [{ id: 1, task: 'Example Todo', completed: true }];

  const { todos, addTodo, editTodo, removeTodo, toggleTodo } =
    useTodoState(initialTodos);

  const toolbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const buttonStyle = {
    background: '#fff',
    textTransform: 'none',
    fontSize: '.7rem',
  };

  const clearLocalStorage = location => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        background: '#fafafa',
      }}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar style={toolbarStyle}>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
          <Button style={buttonStyle} onClick={clearLocalStorage}>
            Clear LocalStorage
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          {todos.length > 0 && (
            <TodoList
              todos={todos}
              editTodo={editTodo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;

/***************
 * TodoApp
 *  - TodoForm
 *  - TodoList
 *    - TodoItem (id, task, completed)
 **************/
