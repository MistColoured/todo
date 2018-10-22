import React from 'react';
import PropTypes from 'prop-types';

import ToDo from './ToDo';

const ToDoList = ({ todoList, clickToDo }) => (

  <div>{
        todoList.map((todo) => {
          console.log(todo.id);
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              clickToDo={clickToDo}
            />
          );
        })
      }
  </div>

);

ToDoList.propTypes = {
  todoList: PropTypes.arrayOf(Object),
  clickToDo: PropTypes.func.isRequired,
};

ToDoList.defaultProps = {
  todoList: [{}],
};

export default ToDoList;
