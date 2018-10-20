import React from 'react';
import PropTypes from 'prop-types';

import ToDo from './ToDo';

const ToDoList = ({ todoList }) => (

  <div>{
        todoList.map(todo => (
          <ToDo
            key={todo.id}
            todo={todo.todo}
          />
        ))
      }
  </div>

);

ToDoList.propTypes = {
  todoList: PropTypes.arrayOf(Object),
};

ToDoList.defaultProps = {
  todoList: [{}],
};

export default ToDoList;
