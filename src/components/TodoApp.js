import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

/* Material-ui */
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
const { v4: uuidv4 } = require('uuid');

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

  const editTodo = (todoId, newTask) => {
    const newTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
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
