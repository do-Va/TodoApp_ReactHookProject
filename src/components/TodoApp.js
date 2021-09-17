import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

/* Material-ui */
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
const { v4: uuidv4 } = require('uuid');

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Car', completed: true },
    { id: 3, task: 'Grow Beard', completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

  const removeTodo = todoId => {
    // filter out removed todo
    const newTodos = todos.filter(todo => todo.id !== todoId);

    // call setTodos with new todos array
    setTodos(newTodos);
  };

  const toggleTodo = todoId => {
    const newTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
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
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
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
