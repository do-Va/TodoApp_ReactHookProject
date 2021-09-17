import React from 'react';
import Todo from './Todo';

/* Material-ui */
import { Divider, Paper, List } from '@material-ui/core';

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <React.Fragment key={todo.id}>
            <Todo {...todo} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
