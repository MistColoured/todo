import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({ todo: { todo, id }, clickToDo }) => (
  <div>
    <button className="todoButton" id={id} onClick={() => clickToDo(id)}>
      {todo}
    </button>
  </div>

);

ToDo.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string,
    id: PropTypes.string,
  }),
  clickToDo: PropTypes.func.isRequired,
};

ToDo.defaultProps = {
  todo: PropTypes.shape({
    todo: 'I am a dummy todo',
    id: 'I am a dummy id',
  }),
};

export default ToDo;
