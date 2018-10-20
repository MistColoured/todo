import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="container text-center">

    <div className="card-deck mb-3 text-center">
      message{message}
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.string,
  event: PropTypes.shape({
    event: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
  }),
};

Message.defaultProps = {
  message: "I'm a dummy message",
  event: PropTypes.shape({
    event: '',
    date: '',
    id: '',
  }),
};
export default Message;
