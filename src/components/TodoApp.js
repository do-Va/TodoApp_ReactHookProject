import React, { useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from '../hooks/useTodoState';

/* Material-ui */
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || [];

  const { todos, addTodo, editTodo, removeTodo, toggleTodo } =
    useTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
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
