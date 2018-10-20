import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({ todo }) => (
  <div className="container text-center">

    <div className="card-deck mb-3 text-center">
      todo{todo}
    </div>
  </div>
);

ToDo.propTypes = {
  todo: PropTypes.string,
  event: PropTypes.shape({
    event: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
  }),
};

ToDo.defaultProps = {
  todo: "I'm a dummy todo",
  event: PropTypes.shape({
    event: '',
    date: '',
    id: '',
  }),
};
export default ToDo;
