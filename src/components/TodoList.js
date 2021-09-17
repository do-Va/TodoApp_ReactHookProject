import React from 'react';
import Todo from './Todo';

/* Material-ui */
import { Divider, Paper, List } from '@material-ui/core';

function TodoList({ todos, editTodo, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <React.Fragment key={todo.id}>
            <Todo
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
